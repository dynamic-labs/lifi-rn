import { BackupKeySharesToLocationsRequestLocationsFromJSON, BackupKeySharesToLocationsRequestLocationsToJSON } from './BackupKeySharesToLocationsRequestLocations.js';

/* tslint:disable */
function BackupKeySharesToLocationsRequestFromJSON(json) {
    return BackupKeySharesToLocationsRequestFromJSONTyped(json);
}
function BackupKeySharesToLocationsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'locations': (json['locations'].map(BackupKeySharesToLocationsRequestLocationsFromJSON)),
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
        'locations': (value.locations.map(BackupKeySharesToLocationsRequestLocationsToJSON)),
    };
}

export { BackupKeySharesToLocationsRequestFromJSON, BackupKeySharesToLocationsRequestFromJSONTyped, BackupKeySharesToLocationsRequestToJSON };
