'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var MFADeviceType = require('./MFADeviceType.cjs');
var MFASettingsActions = require('./MFASettingsActions.cjs');
var MFASettingsMethods = require('./MFASettingsMethods.cjs');

/* tslint:disable */
function MFASettingsFromJSON(json) {
    return MFASettingsFromJSONTyped(json);
}
function MFASettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabled': !runtime.exists(json, 'enabled') ? undefined : json['enabled'],
        'required': !runtime.exists(json, 'required') ? undefined : json['required'],
        'availableMethods': !runtime.exists(json, 'availableMethods') ? undefined : (json['availableMethods'].map(MFADeviceType.MFADeviceTypeFromJSON)),
        'methods': !runtime.exists(json, 'methods') ? undefined : (json['methods'].map(MFASettingsMethods.MFASettingsMethodsFromJSON)),
        'actions': !runtime.exists(json, 'actions') ? undefined : (json['actions'].map(MFASettingsActions.MFASettingsActionsFromJSON)),
    };
}
function MFASettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enabled': value.enabled,
        'required': value.required,
        'availableMethods': value.availableMethods === undefined ? undefined : (value.availableMethods.map(MFADeviceType.MFADeviceTypeToJSON)),
        'methods': value.methods === undefined ? undefined : (value.methods.map(MFASettingsMethods.MFASettingsMethodsToJSON)),
        'actions': value.actions === undefined ? undefined : (value.actions.map(MFASettingsActions.MFASettingsActionsToJSON)),
    };
}

exports.MFASettingsFromJSON = MFASettingsFromJSON;
exports.MFASettingsFromJSONTyped = MFASettingsFromJSONTyped;
exports.MFASettingsToJSON = MFASettingsToJSON;
