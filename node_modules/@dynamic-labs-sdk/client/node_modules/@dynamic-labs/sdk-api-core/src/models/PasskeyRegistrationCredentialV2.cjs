'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var PasskeyTransport = require('./PasskeyTransport.cjs');

/* tslint:disable */
function PasskeyRegistrationCredentialV2FromJSON(json) {
    return PasskeyRegistrationCredentialV2FromJSONTyped(json);
}
function PasskeyRegistrationCredentialV2FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attestationObject': json['attestationObject'],
        'clientDataJson': json['clientDataJson'],
        'transports': !runtime.exists(json, 'transports') ? undefined : (json['transports'].map(PasskeyTransport.PasskeyTransportFromJSON)),
        'publicKey': !runtime.exists(json, 'publicKey') ? undefined : json['publicKey'],
    };
}
function PasskeyRegistrationCredentialV2ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attestationObject': value.attestationObject,
        'clientDataJson': value.clientDataJson,
        'transports': value.transports === undefined ? undefined : (value.transports.map(PasskeyTransport.PasskeyTransportToJSON)),
        'publicKey': value.publicKey,
    };
}

exports.PasskeyRegistrationCredentialV2FromJSON = PasskeyRegistrationCredentialV2FromJSON;
exports.PasskeyRegistrationCredentialV2FromJSONTyped = PasskeyRegistrationCredentialV2FromJSONTyped;
exports.PasskeyRegistrationCredentialV2ToJSON = PasskeyRegistrationCredentialV2ToJSON;
