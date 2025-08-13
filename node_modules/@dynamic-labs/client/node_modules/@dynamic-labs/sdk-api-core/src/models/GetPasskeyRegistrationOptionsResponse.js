import { exists } from '../runtime.js';
import { AttestationConveyancePreferenceFromJSON, AttestationConveyancePreferenceToJSON } from './AttestationConveyancePreference.js';
import { AuthenticatorSelectionCriteriaFromJSON, AuthenticatorSelectionCriteriaToJSON } from './AuthenticatorSelectionCriteria.js';
import { PasskeyExcludeCredentialFromJSON, PasskeyExcludeCredentialToJSON } from './PasskeyExcludeCredential.js';
import { PasskeyExtensionFromJSON, PasskeyExtensionToJSON } from './PasskeyExtension.js';
import { PasskeyRelyingPartyFromJSON, PasskeyRelyingPartyToJSON } from './PasskeyRelyingParty.js';
import { PasskeyUserFromJSON, PasskeyUserToJSON } from './PasskeyUser.js';
import { PublicKeyCredentialParametersFromJSON, PublicKeyCredentialParametersToJSON } from './PublicKeyCredentialParameters.js';

/* tslint:disable */
function GetPasskeyRegistrationOptionsResponseFromJSON(json) {
    return GetPasskeyRegistrationOptionsResponseFromJSONTyped(json);
}
function GetPasskeyRegistrationOptionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attestation': AttestationConveyancePreferenceFromJSON(json['attestation']),
        'authenticatorSelection': AuthenticatorSelectionCriteriaFromJSON(json['authenticatorSelection']),
        'challenge': json['challenge'],
        'excludeCredentials': (json['excludeCredentials'].map(PasskeyExcludeCredentialFromJSON)),
        'extensions': !exists(json, 'extensions') ? undefined : PasskeyExtensionFromJSON(json['extensions']),
        'hints': !exists(json, 'hints') ? undefined : json['hints'],
        'pubKeyCredParams': (json['pubKeyCredParams'].map(PublicKeyCredentialParametersFromJSON)),
        'rp': PasskeyRelyingPartyFromJSON(json['rp']),
        'timeout': json['timeout'],
        'user': PasskeyUserFromJSON(json['user']),
    };
}
function GetPasskeyRegistrationOptionsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attestation': AttestationConveyancePreferenceToJSON(value.attestation),
        'authenticatorSelection': AuthenticatorSelectionCriteriaToJSON(value.authenticatorSelection),
        'challenge': value.challenge,
        'excludeCredentials': (value.excludeCredentials.map(PasskeyExcludeCredentialToJSON)),
        'extensions': PasskeyExtensionToJSON(value.extensions),
        'hints': value.hints,
        'pubKeyCredParams': (value.pubKeyCredParams.map(PublicKeyCredentialParametersToJSON)),
        'rp': PasskeyRelyingPartyToJSON(value.rp),
        'timeout': value.timeout,
        'user': PasskeyUserToJSON(value.user),
    };
}

export { GetPasskeyRegistrationOptionsResponseFromJSON, GetPasskeyRegistrationOptionsResponseFromJSONTyped, GetPasskeyRegistrationOptionsResponseToJSON };
