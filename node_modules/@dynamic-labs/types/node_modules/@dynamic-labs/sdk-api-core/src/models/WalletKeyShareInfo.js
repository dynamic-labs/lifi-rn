import { exists } from '../runtime.js';

/* tslint:disable */
function WalletKeyShareInfoFromJSON(json) {
    return WalletKeyShareInfoFromJSONTyped(json);
}
function WalletKeyShareInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'backupLocation': json['backupLocation'],
        'passwordEncrypted': json['passwordEncrypted'],
        'externalKeyShareId': !exists(json, 'externalKeyShareId') ? undefined : json['externalKeyShareId'],
    };
}
function WalletKeyShareInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'backupLocation': value.backupLocation,
        'passwordEncrypted': value.passwordEncrypted,
        'externalKeyShareId': value.externalKeyShareId,
    };
}

export { WalletKeyShareInfoFromJSON, WalletKeyShareInfoFromJSONTyped, WalletKeyShareInfoToJSON };
