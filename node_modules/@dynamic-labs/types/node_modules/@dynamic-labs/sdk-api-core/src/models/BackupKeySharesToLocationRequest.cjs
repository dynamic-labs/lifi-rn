'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var WaasBackupOptionsEnum = require('./WaasBackupOptionsEnum.cjs');

/* tslint:disable */
function BackupKeySharesToLocationRequestFromJSON(json) {
    return BackupKeySharesToLocationRequestFromJSONTyped(json);
}
function BackupKeySharesToLocationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'location': WaasBackupOptionsEnum.WaasBackupOptionsEnumFromJSON(json['location']),
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
        'location': WaasBackupOptionsEnum.WaasBackupOptionsEnumToJSON(value.location),
    };
}

exports.BackupKeySharesToLocationRequestFromJSON = BackupKeySharesToLocationRequestFromJSON;
exports.BackupKeySharesToLocationRequestFromJSONTyped = BackupKeySharesToLocationRequestFromJSONTyped;
exports.BackupKeySharesToLocationRequestToJSON = BackupKeySharesToLocationRequestToJSON;
