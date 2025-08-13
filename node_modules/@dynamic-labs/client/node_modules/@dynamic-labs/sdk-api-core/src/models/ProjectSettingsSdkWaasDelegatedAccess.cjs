'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ProjectSettingsSdkWaasDelegatedAccessFromJSON(json) {
    return ProjectSettingsSdkWaasDelegatedAccessFromJSONTyped(json);
}
function ProjectSettingsSdkWaasDelegatedAccessFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabled': !runtime.exists(json, 'enabled') ? undefined : json['enabled'],
    };
}
function ProjectSettingsSdkWaasDelegatedAccessToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enabled': value.enabled,
    };
}

exports.ProjectSettingsSdkWaasDelegatedAccessFromJSON = ProjectSettingsSdkWaasDelegatedAccessFromJSON;
exports.ProjectSettingsSdkWaasDelegatedAccessFromJSONTyped = ProjectSettingsSdkWaasDelegatedAccessFromJSONTyped;
exports.ProjectSettingsSdkWaasDelegatedAccessToJSON = ProjectSettingsSdkWaasDelegatedAccessToJSON;
