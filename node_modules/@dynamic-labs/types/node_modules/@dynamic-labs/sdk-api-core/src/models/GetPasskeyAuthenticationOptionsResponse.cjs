'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var PasskeyAllowCredential = require('./PasskeyAllowCredential.cjs');
var PasskeyCredentialHint = require('./PasskeyCredentialHint.cjs');
var PasskeyExtension = require('./PasskeyExtension.cjs');
var UserVerificationRequirement = require('./UserVerificationRequirement.cjs');

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
        'timeout': !runtime.exists(json, 'timeout') ? undefined : json['timeout'],
        'rpId': !runtime.exists(json, 'rpId') ? undefined : json['rpId'],
        'userVerification': !runtime.exists(json, 'userVerification') ? undefined : UserVerificationRequirement.UserVerificationRequirementFromJSON(json['userVerification']),
        'allowCredentials': !runtime.exists(json, 'allowCredentials') ? undefined : (json['allowCredentials'].map(PasskeyAllowCredential.PasskeyAllowCredentialFromJSON)),
        'extensions': !runtime.exists(json, 'extensions') ? undefined : PasskeyExtension.PasskeyExtensionFromJSON(json['extensions']),
        'hints': !runtime.exists(json, 'hints') ? undefined : PasskeyCredentialHint.PasskeyCredentialHintFromJSON(json['hints']),
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
        'userVerification': UserVerificationRequirement.UserVerificationRequirementToJSON(value.userVerification),
        'allowCredentials': value.allowCredentials === undefined ? undefined : (value.allowCredentials.map(PasskeyAllowCredential.PasskeyAllowCredentialToJSON)),
        'extensions': PasskeyExtension.PasskeyExtensionToJSON(value.extensions),
        'hints': PasskeyCredentialHint.PasskeyCredentialHintToJSON(value.hints),
    };
}

exports.GetPasskeyAuthenticationOptionsResponseFromJSON = GetPasskeyAuthenticationOptionsResponseFromJSON;
exports.GetPasskeyAuthenticationOptionsResponseFromJSONTyped = GetPasskeyAuthenticationOptionsResponseFromJSONTyped;
exports.GetPasskeyAuthenticationOptionsResponseToJSON = GetPasskeyAuthenticationOptionsResponseToJSON;
