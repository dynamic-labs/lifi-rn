'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var BackupKeySharesToLocationsResponseLocationsWithKeyShares = require('./BackupKeySharesToLocationsResponseLocationsWithKeyShares.cjs');

/* tslint:disable */
function BackupKeySharesToLocationsResponseFromJSON(json) {
    return BackupKeySharesToLocationsResponseFromJSONTyped(json);
}
function BackupKeySharesToLocationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': json['message'],
        'walletId': json['walletId'],
        'locationsWithKeyShares': (json['locationsWithKeyShares'].map(BackupKeySharesToLocationsResponseLocationsWithKeyShares.BackupKeySharesToLocationsResponseLocationsWithKeySharesFromJSON)),
    };
}
function BackupKeySharesToLocationsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
        'walletId': value.walletId,
        'locationsWithKeyShares': (value.locationsWithKeyShares.map(BackupKeySharesToLocationsResponseLocationsWithKeyShares.BackupKeySharesToLocationsResponseLocationsWithKeySharesToJSON)),
    };
}

exports.BackupKeySharesToLocationsResponseFromJSON = BackupKeySharesToLocationsResponseFromJSON;
exports.BackupKeySharesToLocationsResponseFromJSONTyped = BackupKeySharesToLocationsResponseFromJSONTyped;
exports.BackupKeySharesToLocationsResponseToJSON = BackupKeySharesToLocationsResponseToJSON;
