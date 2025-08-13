'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var WaasBackupOptionsEnum = require('./WaasBackupOptionsEnum.cjs');

/* tslint:disable */
function BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSON(json) {
    return BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSONTyped(json);
}
function BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'location': WaasBackupOptionsEnum.WaasBackupOptionsEnumFromJSON(json['location']),
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
        'location': WaasBackupOptionsEnum.WaasBackupOptionsEnumToJSON(value.location),
        'keyShareId': value.keyShareId,
        'externalKeyShareId': value.externalKeyShareId,
    };
}

exports.BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSON = BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSON;
exports.BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSONTyped = BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSONTyped;
exports.BackupKeySharesToLocationsResponseLocationsWithKeySharesToJSON = BackupKeySharesToLocationsResponseLocationsWithKeySharesToJSON;
