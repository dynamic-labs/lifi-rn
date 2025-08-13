'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function PasskeyExtensionFromJSON(json) {
    return PasskeyExtensionFromJSONTyped(json);
}
function PasskeyExtensionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appid': !runtime.exists(json, 'appid') ? undefined : json['appid'],
        'appidExclude': !runtime.exists(json, 'appidExclude') ? undefined : json['appidExclude'],
        'credProps': !runtime.exists(json, 'credProps') ? undefined : json['credProps'],
        'uvm': !runtime.exists(json, 'uvm') ? undefined : json['uvm'],
    };
}
function PasskeyExtensionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appid': value.appid,
        'appidExclude': value.appidExclude,
        'credProps': value.credProps,
        'uvm': value.uvm,
    };
}

exports.PasskeyExtensionFromJSON = PasskeyExtensionFromJSON;
exports.PasskeyExtensionFromJSONTyped = PasskeyExtensionFromJSONTyped;
exports.PasskeyExtensionToJSON = PasskeyExtensionToJSON;
