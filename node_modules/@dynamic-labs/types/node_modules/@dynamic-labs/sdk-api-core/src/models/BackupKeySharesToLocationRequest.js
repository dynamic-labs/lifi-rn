import { WaasBackupOptionsEnumFromJSON, WaasBackupOptionsEnumToJSON } from './WaasBackupOptionsEnum.js';

/* tslint:disable */
function BackupKeySharesToLocationRequestFromJSON(json) {
    return BackupKeySharesToLocationRequestFromJSONTyped(json);
}
function BackupKeySharesToLocationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'location': WaasBackupOptionsEnumFromJSON(json['location']),
    };
}
function BackupKeySharesToLocationRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'location': WaasBackupOptionsEnumToJSON(value.location),
    };
}

export { BackupKeySharesToLocationRequestFromJSON, BackupKeySharesToLocationRequestFromJSONTyped, BackupKeySharesToLocationRequestToJSON };
