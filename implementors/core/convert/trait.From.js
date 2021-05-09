(function() {var implementors = {};
implementors["libsignal_protocol"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.7.0/prost/error/struct.DecodeError.html\" title=\"struct prost::error::DecodeError\">DecodeError</a>&gt; for <a class=\"enum\" href=\"libsignal_protocol/error/enum.SignalProtocolError.html\" title=\"enum libsignal_protocol::error::SignalProtocolError\">SignalProtocolError</a>","synthetic":false,"types":["libsignal_protocol::error::SignalProtocolError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.7.0/prost/error/struct.EncodeError.html\" title=\"struct prost::error::EncodeError\">EncodeError</a>&gt; for <a class=\"enum\" href=\"libsignal_protocol/error/enum.SignalProtocolError.html\" title=\"enum libsignal_protocol::error::SignalProtocolError\">SignalProtocolError</a>","synthetic":false,"types":["libsignal_protocol::error::SignalProtocolError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libsignal_protocol/struct.PublicKey.html\" title=\"struct libsignal_protocol::PublicKey\">PublicKey</a>&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.IdentityKey.html\" title=\"struct libsignal_protocol::IdentityKey\">IdentityKey</a>","synthetic":false,"types":["libsignal_protocol::identity_key::IdentityKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libsignal_protocol/struct.KeyPair.html\" title=\"struct libsignal_protocol::KeyPair\">KeyPair</a>&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.IdentityKeyPair.html\" title=\"struct libsignal_protocol::IdentityKeyPair\">IdentityKeyPair</a>","synthetic":false,"types":["libsignal_protocol::identity_key::IdentityKeyPair"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"enum\" href=\"libsignal_protocol/enum.ContentHint.html\" title=\"enum libsignal_protocol::ContentHint\">ContentHint</a>","synthetic":false,"types":["libsignal_protocol::sealed_sender::ContentHint"]}];
implementors["libsignal_service"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/enum.ProfileManagerError.html\" title=\"enum libsignal_service::ProfileManagerError\">ProfileManagerError</a>","synthetic":false,"types":["libsignal_service::account_manager::ProfileManagerError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/profile_cipher/enum.ProfileCipherError.html\" title=\"enum libsignal_service::profile_cipher::ProfileCipherError\">ProfileCipherError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/enum.ProfileManagerError.html\" title=\"enum libsignal_service::ProfileManagerError\">ProfileManagerError</a>","synthetic":false,"types":["libsignal_service::account_manager::ProfileManagerError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zkgroup/api/profiles/profile_key/struct.ProfileKey.html\" title=\"struct zkgroup::api::profiles::profile_key::ProfileKey\">ProfileKey</a>&gt; for <a class=\"struct\" href=\"libsignal_service/profile_cipher/struct.ProfileCipher.html\" title=\"struct libsignal_service::profile_cipher::ProfileCipher\">ProfileCipher</a>","synthetic":false,"types":["libsignal_service::profile_cipher::ProfileCipher"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/str/error/struct.Utf8Error.html\" title=\"struct core::str::error::Utf8Error\">Utf8Error</a>&gt; for <a class=\"enum\" href=\"libsignal_service/profile_cipher/enum.ProfileCipherError.html\" title=\"enum libsignal_service::profile_cipher::ProfileCipherError\">ProfileCipherError</a>","synthetic":false,"types":["libsignal_service::profile_cipher::ProfileCipherError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/sealed_session_cipher/enum.MacError.html\" title=\"enum libsignal_service::sealed_session_cipher::MacError\">MacError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/sealed_session_cipher/enum.SealedSessionError.html\" title=\"enum libsignal_service::sealed_session_cipher::SealedSessionError\">SealedSessionError</a>","synthetic":false,"types":["libsignal_service::sealed_session_cipher::SealedSessionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.7.0/prost/error/struct.DecodeError.html\" title=\"struct prost::error::DecodeError\">DecodeError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/sealed_session_cipher/enum.SealedSessionError.html\" title=\"enum libsignal_service::sealed_session_cipher::SealedSessionError\">SealedSessionError</a>","synthetic":false,"types":["libsignal_service::sealed_session_cipher::SealedSessionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.7.0/prost/error/struct.EncodeError.html\" title=\"struct prost::error::EncodeError\">EncodeError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/sealed_session_cipher/enum.SealedSessionError.html\" title=\"enum libsignal_service::sealed_session_cipher::SealedSessionError\">SealedSessionError</a>","synthetic":false,"types":["libsignal_service::sealed_session_cipher::SealedSessionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/prelude/protocol/enum.SignalProtocolError.html\" title=\"enum libsignal_service::prelude::protocol::SignalProtocolError\">SignalProtocolError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/sealed_session_cipher/enum.SealedSessionError.html\" title=\"enum libsignal_service::sealed_session_cipher::SealedSessionError\">SealedSessionError</a>","synthetic":false,"types":["libsignal_service::sealed_session_cipher::SealedSessionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Parse&gt; for <a class=\"enum\" href=\"libsignal_service/sealed_session_cipher/enum.SealedSessionError.html\" title=\"enum libsignal_service::sealed_session_cipher::SealedSessionError\">SealedSessionError</a>","synthetic":false,"types":["libsignal_service::sealed_session_cipher::SealedSessionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libsignal_service/prelude/struct.UuidError.html\" title=\"struct libsignal_service::prelude::UuidError\">Error</a>&gt; for <a class=\"enum\" href=\"libsignal_service/sealed_session_cipher/enum.SealedSessionError.html\" title=\"enum libsignal_service::sealed_session_cipher::SealedSessionError\">SealedSessionError</a>","synthetic":false,"types":["libsignal_service::sealed_session_cipher::SealedSessionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/configuration/enum.SignalServers.html\" title=\"enum libsignal_service::configuration::SignalServers\">SignalServers</a>&gt; for <a class=\"struct\" href=\"libsignal_service/configuration/struct.ServiceConfiguration.html\" title=\"struct libsignal_service::configuration::ServiceConfiguration\">ServiceConfiguration</a>","synthetic":false,"types":["libsignal_service::configuration::ServiceConfiguration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libsignal_service/proto/struct.DataMessage.html\" title=\"struct libsignal_service::proto::DataMessage\">DataMessage</a>&gt; for <a class=\"enum\" href=\"libsignal_service/content/enum.ContentBody.html\" title=\"enum libsignal_service::content::ContentBody\">ContentBody</a>","synthetic":false,"types":["libsignal_service::content::ContentBody"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libsignal_service/proto/struct.SyncMessage.html\" title=\"struct libsignal_service::proto::SyncMessage\">SyncMessage</a>&gt; for <a class=\"enum\" href=\"libsignal_service/content/enum.ContentBody.html\" title=\"enum libsignal_service::content::ContentBody\">ContentBody</a>","synthetic":false,"types":["libsignal_service::content::ContentBody"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libsignal_service/proto/struct.CallMessage.html\" title=\"struct libsignal_service::proto::CallMessage\">CallMessage</a>&gt; for <a class=\"enum\" href=\"libsignal_service/content/enum.ContentBody.html\" title=\"enum libsignal_service::content::ContentBody\">ContentBody</a>","synthetic":false,"types":["libsignal_service::content::ContentBody"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libsignal_service/proto/struct.ReceiptMessage.html\" title=\"struct libsignal_service::proto::ReceiptMessage\">ReceiptMessage</a>&gt; for <a class=\"enum\" href=\"libsignal_service/content/enum.ContentBody.html\" title=\"enum libsignal_service::content::ContentBody\">ContentBody</a>","synthetic":false,"types":["libsignal_service::content::ContentBody"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libsignal_service/proto/struct.TypingMessage.html\" title=\"struct libsignal_service::proto::TypingMessage\">TypingMessage</a>&gt; for <a class=\"enum\" href=\"libsignal_service/content/enum.ContentBody.html\" title=\"enum libsignal_service::content::ContentBody\">ContentBody</a>","synthetic":false,"types":["libsignal_service::content::ContentBody"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Parse&gt; for <a class=\"enum\" href=\"libsignal_service/envelope/enum.EnvelopeParseError.html\" title=\"enum libsignal_service::envelope::EnvelopeParseError\">EnvelopeParseError</a>","synthetic":false,"types":["libsignal_service::envelope::EnvelopeParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libsignal_service/prelude/struct.UuidError.html\" title=\"struct libsignal_service::prelude::UuidError\">Error</a>&gt; for <a class=\"enum\" href=\"libsignal_service/envelope/enum.EnvelopeParseError.html\" title=\"enum libsignal_service::envelope::EnvelopeParseError\">EnvelopeParseError</a>","synthetic":false,"types":["libsignal_service::envelope::EnvelopeParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"enum\" href=\"https://docs.rs/bincode/1.3.3/bincode/error/enum.ErrorKind.html\" title=\"enum bincode::error::ErrorKind\">ErrorKind</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"libsignal_service/groups_v2/enum.GroupDecryptionError.html\" title=\"enum libsignal_service::groups_v2::GroupDecryptionError\">GroupDecryptionError</a>","synthetic":false,"types":["libsignal_service::groups_v2::operations::GroupDecryptionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.7.0/prost/error/struct.DecodeError.html\" title=\"struct prost::error::DecodeError\">DecodeError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/groups_v2/enum.GroupDecryptionError.html\" title=\"enum libsignal_service::groups_v2::GroupDecryptionError\">GroupDecryptionError</a>","synthetic":false,"types":["libsignal_service::groups_v2::operations::GroupDecryptionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"zkgroup/common/errors/enum.ZkGroupError.html\" title=\"enum zkgroup::common::errors::ZkGroupError\">ZkGroupError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/groups_v2/enum.GroupDecryptionError.html\" title=\"enum libsignal_service::groups_v2::GroupDecryptionError\">GroupDecryptionError</a>","synthetic":false,"types":["libsignal_service::groups_v2::operations::GroupDecryptionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.7.0/prost/error/struct.DecodeError.html\" title=\"struct prost::error::DecodeError\">DecodeError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/models/enum.ParseContactError.html\" title=\"enum libsignal_service::models::ParseContactError\">ParseContactError</a>","synthetic":false,"types":["libsignal_service::models::ParseContactError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/service_address/enum.ParseServiceAddressError.html\" title=\"enum libsignal_service::service_address::ParseServiceAddressError\">ParseServiceAddressError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/models/enum.ParseContactError.html\" title=\"enum libsignal_service::models::ParseContactError\">ParseContactError</a>","synthetic":false,"types":["libsignal_service::models::ParseContactError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.7.0/prost/error/struct.DecodeError.html\" title=\"struct prost::error::DecodeError\">DecodeError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/provisioning/enum.ProvisioningError.html\" title=\"enum libsignal_service::provisioning::ProvisioningError\">ProvisioningError</a>","synthetic":false,"types":["libsignal_service::provisioning::ProvisioningError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/provisioning/enum.ProvisioningError.html\" title=\"enum libsignal_service::provisioning::ProvisioningError\">ProvisioningError</a>","synthetic":false,"types":["libsignal_service::provisioning::ProvisioningError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/prelude/protocol/enum.SignalProtocolError.html\" title=\"enum libsignal_service::prelude::protocol::SignalProtocolError\">SignalProtocolError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/provisioning/enum.ProvisioningError.html\" title=\"enum libsignal_service::provisioning::ProvisioningError\">ProvisioningError</a>","synthetic":false,"types":["libsignal_service::provisioning::ProvisioningError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/url/2.2.2/url/parser/enum.ParseError.html\" title=\"enum url::parser::ParseError\">ParseError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>","synthetic":false,"types":["libsignal_service::push_service::ServiceError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.7.0/prost/error/struct.DecodeError.html\" title=\"struct prost::error::DecodeError\">DecodeError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>","synthetic":false,"types":["libsignal_service::push_service::ServiceError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"enum\" href=\"https://docs.rs/bincode/1.3.3/bincode/error/enum.ErrorKind.html\" title=\"enum bincode::error::ErrorKind\">ErrorKind</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>","synthetic":false,"types":["libsignal_service::push_service::ServiceError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;DecodeError&gt; for <a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>","synthetic":false,"types":["libsignal_service::push_service::ServiceError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/prelude/protocol/enum.SignalProtocolError.html\" title=\"enum libsignal_service::prelude::protocol::SignalProtocolError\">SignalProtocolError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>","synthetic":false,"types":["libsignal_service::push_service::ServiceError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/sealed_session_cipher/enum.SealedSessionError.html\" title=\"enum libsignal_service::sealed_session_cipher::SealedSessionError\">SealedSessionError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>","synthetic":false,"types":["libsignal_service::push_service::ServiceError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/groups_v2/enum.CredentialsCacheError.html\" title=\"enum libsignal_service::groups_v2::CredentialsCacheError\">CredentialsCacheError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>","synthetic":false,"types":["libsignal_service::push_service::ServiceError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/groups_v2/enum.GroupDecryptionError.html\" title=\"enum libsignal_service::groups_v2::GroupDecryptionError\">GroupDecryptionError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>","synthetic":false,"types":["libsignal_service::push_service::ServiceError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/receiver/enum.MessageReceiverError.html\" title=\"enum libsignal_service::receiver::MessageReceiverError\">MessageReceiverError</a>","synthetic":false,"types":["libsignal_service::receiver::MessageReceiverError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/envelope/enum.EnvelopeParseError.html\" title=\"enum libsignal_service::envelope::EnvelopeParseError\">EnvelopeParseError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/receiver/enum.MessageReceiverError.html\" title=\"enum libsignal_service::receiver::MessageReceiverError\">MessageReceiverError</a>","synthetic":false,"types":["libsignal_service::receiver::MessageReceiverError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/sender/enum.AttachmentUploadError.html\" title=\"enum libsignal_service::sender::AttachmentUploadError\">AttachmentUploadError</a>","synthetic":false,"types":["libsignal_service::sender::AttachmentUploadError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"libsignal_service/sender/enum.AttachmentUploadError.html\" title=\"enum libsignal_service::sender::AttachmentUploadError\">AttachmentUploadError</a>","synthetic":false,"types":["libsignal_service::sender::AttachmentUploadError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/sender/enum.MessageSenderError.html\" title=\"enum libsignal_service::sender::MessageSenderError\">MessageSenderError</a>","synthetic":false,"types":["libsignal_service::sender::MessageSenderError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/prelude/protocol/enum.SignalProtocolError.html\" title=\"enum libsignal_service::prelude::protocol::SignalProtocolError\">SignalProtocolError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/sender/enum.MessageSenderError.html\" title=\"enum libsignal_service::sender::MessageSenderError\">MessageSenderError</a>","synthetic":false,"types":["libsignal_service::sender::MessageSenderError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libsignal_service/sender/enum.AttachmentUploadError.html\" title=\"enum libsignal_service::sender::AttachmentUploadError\">AttachmentUploadError</a>&gt; for <a class=\"enum\" href=\"libsignal_service/sender/enum.MessageSenderError.html\" title=\"enum libsignal_service::sender::MessageSenderError\">MessageSenderError</a>","synthetic":false,"types":["libsignal_service::sender::MessageSenderError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Parse&gt; for <a class=\"enum\" href=\"libsignal_service/service_address/enum.ParseServiceAddressError.html\" title=\"enum libsignal_service::service_address::ParseServiceAddressError\">ParseServiceAddressError</a>","synthetic":false,"types":["libsignal_service::service_address::ParseServiceAddressError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libsignal_service/prelude/struct.UuidError.html\" title=\"struct libsignal_service::prelude::UuidError\">Error</a>&gt; for <a class=\"enum\" href=\"libsignal_service/service_address/enum.ParseServiceAddressError.html\" title=\"enum libsignal_service::service_address::ParseServiceAddressError\">ParseServiceAddressError</a>","synthetic":false,"types":["libsignal_service::service_address::ParseServiceAddressError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libsignal_service/prelude/struct.Uuid.html\" title=\"struct libsignal_service::prelude::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"libsignal_service/service_address/struct.ServiceAddress.html\" title=\"struct libsignal_service::service_address::ServiceAddress\">ServiceAddress</a>","synthetic":false,"types":["libsignal_service::service_address::ServiceAddress"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;PhoneNumber&gt; for <a class=\"struct\" href=\"libsignal_service/service_address/struct.ServiceAddress.html\" title=\"struct libsignal_service::service_address::ServiceAddress\">ServiceAddress</a>","synthetic":false,"types":["libsignal_service::service_address::ServiceAddress"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()