'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var MFADeviceType = require('./MFADeviceType.cjs');

/* tslint:disable */
function MFASettingsMethodsFromJSON(json) {
    return MFASettingsMethodsFromJSONTyped(json);
}
function MFASettingsMethodsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': MFADeviceType.MFADeviceTypeFromJSON(json['type']),
        'enabled': json['enabled'],
        'allowBackupCodes': !runtime.exists(json, 'allowBackupCodes') ? undefined : json['allowBackupCodes'],
    };
}
function MFASettingsMethodsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': MFADeviceType.MFADeviceTypeToJSON(value.type),
        'enabled': value.enabled,
        'allowBackupCodes': value.allowBackupCodes,
    };
}

exports.MFASettingsMethodsFromJSON = MFASettingsMethodsFromJSON;
exports.MFASettingsMethodsFromJSONTyped = MFASettingsMethodsFromJSONTyped;
exports.MFASettingsMethodsToJSON = MFASettingsMethodsToJSON;
