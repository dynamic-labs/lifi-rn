import { exists } from '../runtime.js';

/* tslint:disable */
function ProjectSettingsSdkWaasDelegatedAccessFromJSON(json) {
    return ProjectSettingsSdkWaasDelegatedAccessFromJSONTyped(json);
}
function ProjectSettingsSdkWaasDelegatedAccessFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
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

export { ProjectSettingsSdkWaasDelegatedAccessFromJSON, ProjectSettingsSdkWaasDelegatedAccessFromJSONTyped, ProjectSettingsSdkWaasDelegatedAccessToJSON };
