'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProjectSettingsSdkWaasDelegatedAccess = require('./ProjectSettingsSdkWaasDelegatedAccess.cjs');
var ProjectSettingsSdkWaasOnSignUp = require('./ProjectSettingsSdkWaasOnSignUp.cjs');
var WaasBackupOptionsEnum = require('./WaasBackupOptionsEnum.cjs');

/* tslint:disable */
function ProjectSettingsSdkWaasFromJSON(json) {
    return ProjectSettingsSdkWaasFromJSONTyped(json);
}
function ProjectSettingsSdkWaasFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'passcodeRequired': json['passcodeRequired'],
        'onSignUp': ProjectSettingsSdkWaasOnSignUp.ProjectSettingsSdkWaasOnSignUpFromJSON(json['onSignUp']),
        'backupOptions': (json['backupOptions'].map(WaasBackupOptionsEnum.WaasBackupOptionsEnumFromJSON)),
        'relayUrl': !runtime.exists(json, 'relayUrl') ? undefined : json['relayUrl'],
        'delegatedAccessEndpoint': !runtime.exists(json, 'delegatedAccessEndpoint') ? undefined : json['delegatedAccessEndpoint'],
        'delegatedAccess': !runtime.exists(json, 'delegatedAccess') ? undefined : ProjectSettingsSdkWaasDelegatedAccess.ProjectSettingsSdkWaasDelegatedAccessFromJSON(json['delegatedAccess']),
    };
}
function ProjectSettingsSdkWaasToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'passcodeRequired': value.passcodeRequired,
        'onSignUp': ProjectSettingsSdkWaasOnSignUp.ProjectSettingsSdkWaasOnSignUpToJSON(value.onSignUp),
        'backupOptions': (value.backupOptions.map(WaasBackupOptionsEnum.WaasBackupOptionsEnumToJSON)),
        'relayUrl': value.relayUrl,
        'delegatedAccessEndpoint': value.delegatedAccessEndpoint,
        'delegatedAccess': ProjectSettingsSdkWaasDelegatedAccess.ProjectSettingsSdkWaasDelegatedAccessToJSON(value.delegatedAccess),
    };
}

exports.ProjectSettingsSdkWaasFromJSON = ProjectSettingsSdkWaasFromJSON;
exports.ProjectSettingsSdkWaasFromJSONTyped = ProjectSettingsSdkWaasFromJSONTyped;
exports.ProjectSettingsSdkWaasToJSON = ProjectSettingsSdkWaasToJSON;
