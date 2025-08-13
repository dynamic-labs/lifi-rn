'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var BackupKeySharesToLocationsRequestLocations = require('./BackupKeySharesToLocationsRequestLocations.cjs');

/* tslint:disable */
function BackupKeySharesToLocationsRequestFromJSON(json) {
    return BackupKeySharesToLocationsRequestFromJSONTyped(json);
}
function BackupKeySharesToLocationsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'locations': (json['locations'].map(BackupKeySharesToLocationsRequestLocations.BackupKeySharesToLocationsRequestLocationsFromJSON)),
    };
}
function BackupKeySharesToLocationsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'locations': (value.locations.map(BackupKeySharesToLocationsRequestLocations.BackupKeySharesToLocationsRequestLocationsToJSON)),
    };
}

exports.BackupKeySharesToLocationsRequestFromJSON = BackupKeySharesToLocationsRequestFromJSON;
exports.BackupKeySharesToLocationsRequestFromJSONTyped = BackupKeySharesToLocationsRequestFromJSONTyped;
exports.BackupKeySharesToLocationsRequestToJSON = BackupKeySharesToLocationsRequestToJSON;
