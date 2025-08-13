'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CreateMfaToken = require('./CreateMfaToken.cjs');

/* tslint:disable */
function EmailVerificationMfaRequestFromJSON(json) {
    return EmailVerificationMfaRequestFromJSONTyped(json);
}
function EmailVerificationMfaRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'verificationUUID': json['verificationUUID'],
        'verificationToken': json['verificationToken'],
        'createMfaToken': !runtime.exists(json, 'createMfaToken') ? undefined : CreateMfaToken.CreateMfaTokenFromJSON(json['createMfaToken']),
    };
}
function EmailVerificationMfaRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'verificationUUID': value.verificationUUID,
        'verificationToken': value.verificationToken,
        'createMfaToken': CreateMfaToken.CreateMfaTokenToJSON(value.createMfaToken),
    };
}

exports.EmailVerificationMfaRequestFromJSON = EmailVerificationMfaRequestFromJSON;
exports.EmailVerificationMfaRequestFromJSONTyped = EmailVerificationMfaRequestFromJSONTyped;
exports.EmailVerificationMfaRequestToJSON = EmailVerificationMfaRequestToJSON;
