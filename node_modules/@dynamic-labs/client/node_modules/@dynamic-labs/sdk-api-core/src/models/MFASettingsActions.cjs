'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MFAAction = require('./MFAAction.cjs');

/* tslint:disable */
function MFASettingsActionsFromJSON(json) {
    return MFASettingsActionsFromJSONTyped(json);
}
function MFASettingsActionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'action': MFAAction.MFAActionFromJSON(json['action']),
        'required': json['required'],
    };
}
function MFASettingsActionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'action': MFAAction.MFAActionToJSON(value.action),
        'required': value.required,
    };
}

exports.MFASettingsActionsFromJSON = MFASettingsActionsFromJSON;
exports.MFASettingsActionsFromJSONTyped = MFASettingsActionsFromJSONTyped;
exports.MFASettingsActionsToJSON = MFASettingsActionsToJSON;
