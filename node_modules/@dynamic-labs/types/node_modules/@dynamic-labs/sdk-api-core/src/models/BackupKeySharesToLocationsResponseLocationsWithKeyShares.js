import { WaasBackupOptionsEnumFromJSON, WaasBackupOptionsEnumToJSON } from './WaasBackupOptionsEnum.js';

/* tslint:disable */
function BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSON(json) {
    return BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSONTyped(json);
}
function BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'location': WaasBackupOptionsEnumFromJSON(json['location']),
        'keyShareId': json['keyShareId'],
        'externalKeyShareId': json['externalKeyShareId'],
    };
}
function BackupKeySharesToLocationsResponseLocationsWithKeySharesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'location': WaasBackupOptionsEnumToJSON(value.location),
        'keyShareId': value.keyShareId,
        'externalKeyShareId': value.externalKeyShareId,
    };
}

export { BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSON, BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSONTyped, BackupKeySharesToLocationsResponseLocationsWithKeySharesToJSON };
