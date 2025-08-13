'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var PasskeyTransport = require('./PasskeyTransport.cjs');

/* tslint:disable */
function PasskeyAllowCredentialFromJSON(json) {
    return PasskeyAllowCredentialFromJSONTyped(json);
}
function PasskeyAllowCredentialFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'transports': !runtime.exists(json, 'transports') ? undefined : (json['transports'].map(PasskeyTransport.PasskeyTransportFromJSON)),
    };
}
function PasskeyAllowCredentialToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'transports': value.transports === undefined ? undefined : (value.transports.map(PasskeyTransport.PasskeyTransportToJSON)),
    };
}

exports.PasskeyAllowCredentialFromJSON = PasskeyAllowCredentialFromJSON;
exports.PasskeyAllowCredentialFromJSONTyped = PasskeyAllowCredentialFromJSONTyped;
exports.PasskeyAllowCredentialToJSON = PasskeyAllowCredentialToJSON;
