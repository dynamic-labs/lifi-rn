import { exists } from '../runtime.js';
import { ProjectSettingsSdkWaasDelegatedAccessFromJSON, ProjectSettingsSdkWaasDelegatedAccessToJSON } from './ProjectSettingsSdkWaasDelegatedAccess.js';
import { ProjectSettingsSdkWaasOnSignUpFromJSON, ProjectSettingsSdkWaasOnSignUpToJSON } from './ProjectSettingsSdkWaasOnSignUp.js';
import { WaasBackupOptionsEnumFromJSON, WaasBackupOptionsEnumToJSON } from './WaasBackupOptionsEnum.js';

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
        'onSignUp': ProjectSettingsSdkWaasOnSignUpFromJSON(json['onSignUp']),
        'backupOptions': (json['backupOptions'].map(WaasBackupOptionsEnumFromJSON)),
        'relayUrl': !exists(json, 'relayUrl') ? undefined : json['relayUrl'],
        'delegatedAccessEndpoint': !exists(json, 'delegatedAccessEndpoint') ? undefined : json['delegatedAccessEndpoint'],
        'delegatedAccess': !exists(json, 'delegatedAccess') ? undefined : ProjectSettingsSdkWaasDelegatedAccessFromJSON(json['delegatedAccess']),
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
        'onSignUp': ProjectSettingsSdkWaasOnSignUpToJSON(value.onSignUp),
        'backupOptions': (value.backupOptions.map(WaasBackupOptionsEnumToJSON)),
        'relayUrl': value.relayUrl,
        'delegatedAccessEndpoint': value.delegatedAccessEndpoint,
        'delegatedAccess': ProjectSettingsSdkWaasDelegatedAccessToJSON(value.delegatedAccess),
    };
}

export { ProjectSettingsSdkWaasFromJSON, ProjectSettingsSdkWaasFromJSONTyped, ProjectSettingsSdkWaasToJSON };
