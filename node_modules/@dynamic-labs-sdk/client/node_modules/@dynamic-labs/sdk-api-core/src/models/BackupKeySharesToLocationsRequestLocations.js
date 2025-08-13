import { WaasBackupOptionsEnumFromJSON, WaasBackupOptionsEnumToJSON } from './WaasBackupOptionsEnum.js';

/* tslint:disable */
function BackupKeySharesToLocationsRequestLocationsFromJSON(json) {
    return BackupKeySharesToLocationsRequestLocationsFromJSONTyped(json);
}
function BackupKeySharesToLocationsRequestLocationsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'location': WaasBackupOptionsEnumFromJSON(json['location']),
        'externalKeyShareId': json['externalKeyShareId'],
    };
}
function BackupKeySharesToLocationsRequestLocationsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'location': WaasBackupOptionsEnumToJSON(value.location),
        'externalKeyShareId': value.externalKeyShareId,
    };
}

export { BackupKeySharesToLocationsRequestLocationsFromJSON, BackupKeySharesToLocationsRequestLocationsFromJSONTyped, BackupKeySharesToLocationsRequestLocationsToJSON };
