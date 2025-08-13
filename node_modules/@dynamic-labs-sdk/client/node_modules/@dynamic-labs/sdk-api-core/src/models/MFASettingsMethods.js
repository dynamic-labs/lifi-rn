import { exists } from '../runtime.js';
import { MFADeviceTypeFromJSON, MFADeviceTypeToJSON } from './MFADeviceType.js';

/* tslint:disable */
function MFASettingsMethodsFromJSON(json) {
    return MFASettingsMethodsFromJSONTyped(json);
}
function MFASettingsMethodsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': MFADeviceTypeFromJSON(json['type']),
        'enabled': json['enabled'],
        'allowBackupCodes': !exists(json, 'allowBackupCodes') ? undefined : json['allowBackupCodes'],
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
        'type': MFADeviceTypeToJSON(value.type),
        'enabled': value.enabled,
        'allowBackupCodes': value.allowBackupCodes,
    };
}

export { MFASettingsMethodsFromJSON, MFASettingsMethodsFromJSONTyped, MFASettingsMethodsToJSON };
