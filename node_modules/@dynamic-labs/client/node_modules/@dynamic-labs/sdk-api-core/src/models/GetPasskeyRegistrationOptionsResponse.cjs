'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AttestationConveyancePreference = require('./AttestationConveyancePreference.cjs');
var AuthenticatorSelectionCriteria = require('./AuthenticatorSelectionCriteria.cjs');
var PasskeyExcludeCredential = require('./PasskeyExcludeCredential.cjs');
var PasskeyExtension = require('./PasskeyExtension.cjs');
var PasskeyRelyingParty = require('./PasskeyRelyingParty.cjs');
var PasskeyUser = require('./PasskeyUser.cjs');
var PublicKeyCredentialParameters = require('./PublicKeyCredentialParameters.cjs');

/* tslint:disable */
function GetPasskeyRegistrationOptionsResponseFromJSON(json) {
    return GetPasskeyRegistrationOptionsResponseFromJSONTyped(json);
}
function GetPasskeyRegistrationOptionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attestation': AttestationConveyancePreference.AttestationConveyancePreferenceFromJSON(json['attestation']),
        'authenticatorSelection': AuthenticatorSelectionCriteria.AuthenticatorSelectionCriteriaFromJSON(json['authenticatorSelection']),
        'challenge': json['challenge'],
        'excludeCredentials': (json['excludeCredentials'].map(PasskeyExcludeCredential.PasskeyExcludeCredentialFromJSON)),
        'extensions': !runtime.exists(json, 'extensions') ? undefined : PasskeyExtension.PasskeyExtensionFromJSON(json['extensions']),
        'hints': !runtime.exists(json, 'hints') ? undefined : json['hints'],
        'pubKeyCredParams': (json['pubKeyCredParams'].map(PublicKeyCredentialParameters.PublicKeyCredentialParametersFromJSON)),
        'rp': PasskeyRelyingParty.PasskeyRelyingPartyFromJSON(json['rp']),
        'timeout': json['timeout'],
        'user': PasskeyUser.PasskeyUserFromJSON(json['user']),
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
        'attestation': AttestationConveyancePreference.AttestationConveyancePreferenceToJSON(value.attestation),
        'authenticatorSelection': AuthenticatorSelectionCriteria.AuthenticatorSelectionCriteriaToJSON(value.authenticatorSelection),
        'challenge': value.challenge,
        'excludeCredentials': (value.excludeCredentials.map(PasskeyExcludeCredential.PasskeyExcludeCredentialToJSON)),
        'extensions': PasskeyExtension.PasskeyExtensionToJSON(value.extensions),
        'hints': value.hints,
        'pubKeyCredParams': (value.pubKeyCredParams.map(PublicKeyCredentialParameters.PublicKeyCredentialParametersToJSON)),
        'rp': PasskeyRelyingParty.PasskeyRelyingPartyToJSON(value.rp),
        'timeout': value.timeout,
        'user': PasskeyUser.PasskeyUserToJSON(value.user),
    };
}

exports.GetPasskeyRegistrationOptionsResponseFromJSON = GetPasskeyRegistrationOptionsResponseFromJSON;
exports.GetPasskeyRegistrationOptionsResponseFromJSONTyped = GetPasskeyRegistrationOptionsResponseFromJSONTyped;
exports.GetPasskeyRegistrationOptionsResponseToJSON = GetPasskeyRegistrationOptionsResponseToJSON;
