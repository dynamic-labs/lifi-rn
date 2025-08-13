import { exists } from '../runtime.js';
import { PasskeyAllowCredentialFromJSON, PasskeyAllowCredentialToJSON } from './PasskeyAllowCredential.js';
import { PasskeyCredentialHintFromJSON, PasskeyCredentialHintToJSON } from './PasskeyCredentialHint.js';
import { PasskeyExtensionFromJSON, PasskeyExtensionToJSON } from './PasskeyExtension.js';
import { UserVerificationRequirementFromJSON, UserVerificationRequirementToJSON } from './UserVerificationRequirement.js';

/* tslint:disable */
function GetPasskeyAuthenticationOptionsResponseFromJSON(json) {
    return GetPasskeyAuthenticationOptionsResponseFromJSONTyped(json);
}
function GetPasskeyAuthenticationOptionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'challenge': json['challenge'],
        'timeout': !exists(json, 'timeout') ? undefined : json['timeout'],
        'rpId': !exists(json, 'rpId') ? undefined : json['rpId'],
        'userVerification': !exists(json, 'userVerification') ? undefined : UserVerificationRequirementFromJSON(json['userVerification']),
        'allowCredentials': !exists(json, 'allowCredentials') ? undefined : (json['allowCredentials'].map(PasskeyAllowCredentialFromJSON)),
        'extensions': !exists(json, 'extensions') ? undefined : PasskeyExtensionFromJSON(json['extensions']),
        'hints': !exists(json, 'hints') ? undefined : PasskeyCredentialHintFromJSON(json['hints']),
    };
}
function GetPasskeyAuthenticationOptionsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'challenge': value.challenge,
        'timeout': value.timeout,
        'rpId': value.rpId,
        'userVerification': UserVerificationRequirementToJSON(value.userVerification),
        'allowCredentials': value.allowCredentials === undefined ? undefined : (value.allowCredentials.map(PasskeyAllowCredentialToJSON)),
        'extensions': PasskeyExtensionToJSON(value.extensions),
        'hints': PasskeyCredentialHintToJSON(value.hints),
    };
}

export { GetPasskeyAuthenticationOptionsResponseFromJSON, GetPasskeyAuthenticationOptionsResponseFromJSONTyped, GetPasskeyAuthenticationOptionsResponseToJSON };
