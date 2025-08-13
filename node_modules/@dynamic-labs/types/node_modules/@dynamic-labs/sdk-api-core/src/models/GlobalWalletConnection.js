import { exists } from '../runtime.js';
import { GlobalWalletConnectionStatusEnumFromJSON, GlobalWalletConnectionStatusEnumToJSON } from './GlobalWalletConnectionStatusEnum.js';

/* tslint:disable */
function GlobalWalletConnectionFromJSON(json) {
    return GlobalWalletConnectionFromJSONTyped(json);
}
function GlobalWalletConnectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'userId': json['userId'],
        'appUrl': json['appUrl'],
        'status': GlobalWalletConnectionStatusEnumFromJSON(json['status']),
        'expiresAt': !exists(json, 'expiresAt') ? undefined : (json['expiresAt'] === null ? null : new Date(json['expiresAt'])),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}
function GlobalWalletConnectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'userId': value.userId,
        'appUrl': value.appUrl,
        'status': GlobalWalletConnectionStatusEnumToJSON(value.status),
        'expiresAt': value.expiresAt === undefined ? undefined : (value.expiresAt === null ? null : value.expiresAt.toISOString()),
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

export { GlobalWalletConnectionFromJSON, GlobalWalletConnectionFromJSONTyped, GlobalWalletConnectionToJSON };
