'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AuthenticationExtensionsClientOutputs = require('./AuthenticationExtensionsClientOutputs.cjs');
var AuthenticatorAttachment = require('./AuthenticatorAttachment.cjs');
var PasskeyCredentialType = require('./PasskeyCredentialType.cjs');
var PasskeyRegistrationCredentialV2 = require('./PasskeyRegistrationCredentialV2.cjs');

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
        'response': PasskeyRegistrationCredentialV2.PasskeyRegistrationCredentialV2FromJSON(json['response']),
        'clientExtensionResults': AuthenticationExtensionsClientOutputs.AuthenticationExtensionsClientOutputsFromJSON(json['clientExtensionResults']),
        'authenticatorAttachment': !runtime.exists(json, 'authenticatorAttachment') ? undefined : AuthenticatorAttachment.AuthenticatorAttachmentFromJSON(json['authenticatorAttachment']),
        'type': PasskeyCredentialType.PasskeyCredentialTypeFromJSON(json['type']),
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
        'response': PasskeyRegistrationCredentialV2.PasskeyRegistrationCredentialV2ToJSON(value.response),
        'clientExtensionResults': AuthenticationExtensionsClientOutputs.AuthenticationExtensionsClientOutputsToJSON(value.clientExtensionResults),
        'authenticatorAttachment': AuthenticatorAttachment.AuthenticatorAttachmentToJSON(value.authenticatorAttachment),
        'type': PasskeyCredentialType.PasskeyCredentialTypeToJSON(value.type),
    };
}

exports.PasskeyRegisterRequestFromJSON = PasskeyRegisterRequestFromJSON;
exports.PasskeyRegisterRequestFromJSONTyped = PasskeyRegisterRequestFromJSONTyped;
exports.PasskeyRegisterRequestToJSON = PasskeyRegisterRequestToJSON;
