import { WaasBackupOptionsEnumFromJSON, WaasBackupOptionsEnumToJSON } from './WaasBackupOptionsEnum.js';

/* tslint:disable */
function BackupKeySharesToLocationResponseFromJSON(json) {
    return BackupKeySharesToLocationResponseFromJSONTyped(json);
}
function BackupKeySharesToLocationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': json['message'],
        'walletId': json['walletId'],
        'location': WaasBackupOptionsEnumFromJSON(json['location']),
    };
}
function BackupKeySharesToLocationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
        'walletId': value.walletId,
        'location': WaasBackupOptionsEnumToJSON(value.location),
    };
}

export { BackupKeySharesToLocationResponseFromJSON, BackupKeySharesToLocationResponseFromJSONTyped, BackupKeySharesToLocationResponseToJSON };
