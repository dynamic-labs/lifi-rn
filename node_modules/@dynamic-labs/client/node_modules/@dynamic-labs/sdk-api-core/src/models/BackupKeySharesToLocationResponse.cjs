'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var WaasBackupOptionsEnum = require('./WaasBackupOptionsEnum.cjs');

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
        'location': WaasBackupOptionsEnum.WaasBackupOptionsEnumFromJSON(json['location']),
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
        'location': WaasBackupOptionsEnum.WaasBackupOptionsEnumToJSON(value.location),
    };
}

exports.BackupKeySharesToLocationResponseFromJSON = BackupKeySharesToLocationResponseFromJSON;
exports.BackupKeySharesToLocationResponseFromJSONTyped = BackupKeySharesToLocationResponseFromJSONTyped;
exports.BackupKeySharesToLocationResponseToJSON = BackupKeySharesToLocationResponseToJSON;
