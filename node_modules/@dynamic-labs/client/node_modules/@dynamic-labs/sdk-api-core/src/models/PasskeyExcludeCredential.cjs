'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var PasskeyCredentialType = require('./PasskeyCredentialType.cjs');
var PasskeyTransport = require('./PasskeyTransport.cjs');

/* tslint:disable */
function PasskeyExcludeCredentialFromJSON(json) {
    return PasskeyExcludeCredentialFromJSONTyped(json);
}
function PasskeyExcludeCredentialFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'transports': !runtime.exists(json, 'transports') ? undefined : (json['transports'].map(PasskeyTransport.PasskeyTransportFromJSON)),
        'type': PasskeyCredentialType.PasskeyCredentialTypeFromJSON(json['type']),
    };
}
function PasskeyExcludeCredentialToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'transports': value.transports === undefined ? undefined : (value.transports.map(PasskeyTransport.PasskeyTransportToJSON)),
        'type': PasskeyCredentialType.PasskeyCredentialTypeToJSON(value.type),
    };
}

exports.PasskeyExcludeCredentialFromJSON = PasskeyExcludeCredentialFromJSON;
exports.PasskeyExcludeCredentialFromJSONTyped = PasskeyExcludeCredentialFromJSONTyped;
exports.PasskeyExcludeCredentialToJSON = PasskeyExcludeCredentialToJSON;
