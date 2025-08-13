'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MFADevice = require('./MFADevice.cjs');
var UserPasskey = require('./UserPasskey.cjs');

/* tslint:disable */
function MFAMethodsResponseFromJSON(json) {
    return MFAMethodsResponseFromJSONTyped(json);
}
function MFAMethodsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'devices': (json['devices'].map(MFADevice.MFADeviceFromJSON)),
        'passkeys': (json['passkeys'].map(UserPasskey.UserPasskeyFromJSON)),
        'userHasVerifiedMfaMethods': json['userHasVerifiedMfaMethods'],
    };
}
function MFAMethodsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'devices': (value.devices.map(MFADevice.MFADeviceToJSON)),
        'passkeys': (value.passkeys.map(UserPasskey.UserPasskeyToJSON)),
        'userHasVerifiedMfaMethods': value.userHasVerifiedMfaMethods,
    };
}

exports.MFAMethodsResponseFromJSON = MFAMethodsResponseFromJSON;
exports.MFAMethodsResponseFromJSONTyped = MFAMethodsResponseFromJSONTyped;
exports.MFAMethodsResponseToJSON = MFAMethodsResponseToJSON;
