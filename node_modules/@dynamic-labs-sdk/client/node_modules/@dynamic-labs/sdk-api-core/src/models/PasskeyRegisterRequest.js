import { exists } from '../runtime.js';
import { AuthenticationExtensionsClientOutputsFromJSON, AuthenticationExtensionsClientOutputsToJSON } from './AuthenticationExtensionsClientOutputs.js';
import { AuthenticatorAttachmentFromJSON, AuthenticatorAttachmentToJSON } from './AuthenticatorAttachment.js';
import { PasskeyCredentialTypeFromJSON, PasskeyCredentialTypeToJSON } from './PasskeyCredentialType.js';
import { PasskeyRegistrationCredentialV2FromJSON, PasskeyRegistrationCredentialV2ToJSON } from './PasskeyRegistrationCredentialV2.js';

/* tslint:disable */
function PasskeyRegisterRequestFromJSON(json) {
    return PasskeyRegisterRequestFromJSONTyped(json);
}
function PasskeyRegisterRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'rawId': json['rawId'],
        'response': PasskeyRegistrationCredentialV2FromJSON(json['response']),
        'clientExtensionResults': AuthenticationExtensionsClientOutputsFromJSON(json['clientExtensionResults']),
        'authenticatorAttachment': !exists(json, 'authenticatorAttachment') ? undefined : AuthenticatorAttachmentFromJSON(json['authenticatorAttachment']),
        'type': PasskeyCredentialTypeFromJSON(json['type']),
    };
}
function PasskeyRegisterRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'rawId': value.rawId,
        'response': PasskeyRegistrationCredentialV2ToJSON(value.response),
        'clientExtensionResults': AuthenticationExtensionsClientOutputsToJSON(value.clientExtensionResults),
        'authenticatorAttachment': AuthenticatorAttachmentToJSON(value.authenticatorAttachment),
        'type': PasskeyCredentialTypeToJSON(value.type),
    };
}

export { PasskeyRegisterRequestFromJSON, PasskeyRegisterRequestFromJSONTyped, PasskeyRegisterRequestToJSON };
