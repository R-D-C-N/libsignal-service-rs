use crate::{
    content::{Content, Metadata},
    envelope::Envelope,
    push_service::ServiceError,
    sealed_session_cipher::UnidentifiedAccess,
    sealed_session_cipher::{
        CertificateValidator, DecryptionResult, SealedSessionCipher,
    },
    sender::OutgoingPushMessage,
    ServiceAddress,
};

use block_modes::block_padding::{Iso7816, Padding};
use libsignal_protocol::{
    message_decrypt_prekey, message_decrypt_signal, message_encrypt,
    CiphertextMessageType, Context, IdentityKeyStore, PreKeySignalMessage,
    PreKeyStore, ProtocolAddress, SessionStore, SignalMessage,
    SignalProtocolError, SignedPreKeyStore,
};
use prost::Message;

use std::convert::TryFrom;

/// Decrypts incoming messages and encrypts outgoing messages.
///
/// Equivalent of SignalServiceCipher in Java.
pub struct ServiceCipher {
    session_store: Box<dyn SessionStore>,
    identity_key_store: Box<dyn IdentityKeyStore>,
    signed_pre_key_store: Box<dyn SignedPreKeyStore>,
    pre_key_store: Box<dyn PreKeyStore>,
    sealed_session_cipher: SealedSessionCipher,
}

impl ServiceCipher {
    pub fn new(
        session_store: impl SessionStore + Clone + 'static,
        identity_key_store: impl IdentityKeyStore + Clone + 'static,
        signed_pre_key_store: impl SignedPreKeyStore + Clone + 'static,
        pre_key_store: impl PreKeyStore + Clone + 'static,
        certificate_validator: CertificateValidator,
    ) -> Self {
        Self {
            session_store: Box::new(session_store.clone()),
            identity_key_store: Box::new(identity_key_store.clone()),
            signed_pre_key_store: Box::new(signed_pre_key_store.clone()),
            pre_key_store: Box::new(pre_key_store.clone()),
            sealed_session_cipher: SealedSessionCipher::new(
                session_store,
                identity_key_store,
                signed_pre_key_store,
                pre_key_store,
                certificate_validator,
            ),
        }
    }

    /// Opens ("decrypts") an envelope.
    ///
    /// Envelopes may be empty, in which case this method returns `Ok(None)`
    pub async fn open_envelope(
        &mut self,
        envelope: Envelope,
    ) -> Result<Option<Content>, ServiceError> {
        if envelope.legacy_message.is_some() {
            let plaintext = self.decrypt(&envelope).await?;
            let message =
                crate::proto::DataMessage::decode(plaintext.data.as_slice())?;
            Ok(Some(Content::from_body(message, plaintext.metadata)))
        } else if envelope.content.is_some() {
            let plaintext = self.decrypt(&envelope).await?;
            let message =
                crate::proto::Content::decode(plaintext.data.as_slice())?;
            Ok(Content::from_proto(message, plaintext.metadata))
        } else {
            Ok(None)
        }
    }

    /// Equivalent of decrypt(Envelope, ciphertext)
    ///
    /// Triage of legacy messages happens inside this method, as opposed to the
    /// Java implementation, because it makes the borrow checker and the
    /// author happier.
    async fn decrypt(
        &mut self,
        envelope: &Envelope,
    ) -> Result<Plaintext, ServiceError> {
        let ciphertext = if let Some(msg) = envelope.legacy_message.as_ref() {
            msg
        } else if let Some(msg) = envelope.content.as_ref() {
            msg
        } else {
            return Err(ServiceError::InvalidFrameError {
                reason:
                    "Envelope should have either a legacy message or content."
                        .into(),
            });
        };

        use crate::proto::envelope::Type;
        let plaintext = match envelope.r#type() {
            Type::PrekeyBundle => {
                let sender = get_preferred_protocol_address(
                    self.session_store.as_ref(),
                    &envelope.source_address(),
                    envelope.source_device(),
                )
                .await?;
                let metadata = Metadata {
                    sender: envelope.source_address(),
                    sender_device: envelope.source_device(),
                    timestamp: envelope.timestamp(),
                    needs_receipt: false,
                };

                // FIXME: what
                let mut csprng = rand::rngs::OsRng;

                let mut data = message_decrypt_prekey(
                    &PreKeySignalMessage::try_from(&ciphertext[..]).unwrap(),
                    &sender,
                    self.session_store.as_mut(),
                    self.identity_key_store.as_mut(),
                    self.pre_key_store.as_mut(),
                    self.signed_pre_key_store.as_mut(),
                    &mut csprng,
                    None,
                )
                .await?
                .as_slice()
                .to_vec();

                let session_record = self
                    .session_store
                    .load_session(&sender, None)
                    .await?
                    .ok_or_else(|| {
                        SignalProtocolError::SessionNotFound(format!(
                            "{}",
                            sender
                        ))
                    })?;

                strip_padding(session_record.session_version()?, &mut data)?;
                Plaintext { metadata, data }
            }
            Type::Ciphertext => {
                let sender = get_preferred_protocol_address(
                    self.session_store.as_ref(),
                    &envelope.source_address(),
                    envelope.source_device(),
                )
                .await?;
                let metadata = Metadata {
                    sender: envelope.source_address(),
                    sender_device: envelope.source_device(),
                    timestamp: envelope.timestamp(),
                    needs_receipt: false,
                };

                // FIXME: what
                let mut csprng = rand::rngs::OsRng;

                let mut data = message_decrypt_signal(
                    &SignalMessage::try_from(&ciphertext[..])?,
                    &sender,
                    self.session_store.as_mut(),
                    self.identity_key_store.as_mut(),
                    &mut csprng,
                    None,
                )
                .await?
                .as_slice()
                .to_vec();

                let session_record = self
                    .session_store
                    .load_session(&sender, None)
                    .await?
                    .ok_or_else(|| {
                        SignalProtocolError::SessionNotFound(format!(
                            "{}",
                            sender
                        ))
                    })?;

                strip_padding(session_record.session_version()?, &mut data)?;
                Plaintext { metadata, data }
            }
            Type::UnidentifiedSender => {
                let DecryptionResult {
                    sender_uuid,
                    sender_e164,
                    device_id,
                    padded_message: mut data,
                    version,
                } = self
                    .sealed_session_cipher
                    .decrypt(ciphertext, envelope.timestamp())
                    .await?;
                let sender = ServiceAddress {
                    phonenumber: sender_e164,
                    uuid: sender_uuid,
                    relay: None,
                };
                let metadata = Metadata {
                    sender,
                    sender_device: device_id,
                    timestamp: envelope.timestamp(),
                    needs_receipt: false,
                };
                strip_padding(version, &mut data)?;
                Plaintext { metadata, data }
            }
            _ => {
                // else
                return Err(ServiceError::InvalidFrameError {
                    reason: format!(
                        "Envelope has unknown type {:?}.",
                        envelope.r#type()
                    ),
                });
            }
        };
        Ok(plaintext)
    }

    pub(crate) async fn encrypt(
        &mut self,
        address: &ProtocolAddress,
        unindentified_access: Option<&UnidentifiedAccess>,
        content: &[u8],
    ) -> Result<OutgoingPushMessage, ServiceError> {
        if unindentified_access.is_some() {
            unimplemented!("unidentified access is not implemented");
        } else {
            let session_record = self
                .session_store
                .load_session(&address, None)
                .await?
                .ok_or_else(|| {
                    SignalProtocolError::SessionNotFound(format!("{}", address))
                })?;

            let padded_content =
                add_padding(session_record.session_version()?, content)?;

            let message = message_encrypt(
                &padded_content,
                &address,
                self.session_store.as_mut(),
                self.identity_key_store.as_mut(),
                None,
            )
            .await?;

            let destination_registration_id =
                session_record.remote_registration_id()?;

            let body = base64::encode(message.serialize());

            use crate::proto::envelope::Type;
            let message_type = match message.message_type() {
                CiphertextMessageType::PreKey => Type::PrekeyBundle,
                CiphertextMessageType::Whisper => Type::Ciphertext,
                t => panic!("Bad type: {:?}", t),
            } as u32;
            Ok(OutgoingPushMessage {
                r#type: message_type,
                destination_device_id: address.device_id(),
                destination_registration_id,
                content: body,
            })
        }
    }
}

struct Plaintext {
    metadata: Metadata,
    data: Vec<u8>,
}

#[allow(clippy::clippy::comparison_chain)]
fn add_padding(version: u32, contents: &[u8]) -> Result<Vec<u8>, ServiceError> {
    if version < 2 {
        Err(ServiceError::InvalidFrameError {
            reason: format!("Unknown version {}", version),
        })
    } else if version == 2 {
        Ok(contents.to_vec())
    } else {
        let message_length = contents.len();
        let message_length_with_terminator = contents.len() + 1;
        let mut message_part_count = message_length_with_terminator / 160;
        if message_length_with_terminator % 160 != 0 {
            message_part_count += 1;
        }

        let message_length_with_padding = message_part_count * 160;

        let mut buffer = vec![0u8; message_length_with_padding];
        buffer[..message_length].copy_from_slice(contents);
        Iso7816::pad_block(&mut buffer, message_length).map_err(|e| {
            ServiceError::InvalidFrameError {
                reason: format!("Invalid message padding: {:?}", e),
            }
        })?;
        Ok(buffer)
    }
}

#[allow(clippy::clippy::comparison_chain)]
fn strip_padding(
    version: u32,
    contents: &mut Vec<u8>,
) -> Result<(), ServiceError> {
    if version < 2 {
        Err(ServiceError::InvalidFrameError {
            reason: format!("Unknown version {}", version),
        })
    } else if version == 2 {
        Ok(())
    } else {
        let new_length = Iso7816::unpad(contents)
            .map_err(|e| ServiceError::InvalidFrameError {
                reason: format!("Invalid message padding: {:?}", e),
            })?
            .len();
        contents.resize(new_length, 0);
        Ok(())
    }
}

/// Equivalent of `SignalServiceCipher::getPreferredProtocolAddress`
pub async fn get_preferred_protocol_address(
    session_store: &dyn SessionStore,
    address: &ServiceAddress,
    device_id: u32,
) -> Result<ProtocolAddress, libsignal_protocol::error::SignalProtocolError> {
    if let Some(ref uuid) = address.uuid {
        let address = ProtocolAddress::new(uuid.to_string(), device_id);
        if session_store.load_session(&address, None).await?.is_some() {
            return Ok(address);
        }
    }
    if let Some(e164) = address.e164() {
        let address = ProtocolAddress::new(e164, device_id);
        if session_store.load_session(&address, None).await?.is_some() {
            return Ok(address);
        }
        if cfg!(feature = "prefer-e164") {
            log::warn!("prefer-e164 triggered.  This is a legacy feature and shouldn't be used for new applications.");
            return Ok(address);
        }
    }
    if cfg!(feature = "prefer-e164") {
        panic!(
            "{:?}:{} does not have a e164 associated, falling back to UUID.",
            address, device_id
        );
    }

    Ok(ProtocolAddress::new(address.identifier(), device_id))
}
