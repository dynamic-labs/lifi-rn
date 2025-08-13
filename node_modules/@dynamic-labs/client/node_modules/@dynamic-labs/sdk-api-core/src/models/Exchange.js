import { exists } from '../runtime.js';
import { ExchangeKeyEnumFromJSON, ExchangeKeyEnumToJSON } from './ExchangeKeyEnum.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function ExchangeFromJSON(json) {
    return ExchangeFromJSONTyped(json);
}
function ExchangeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'exchange': ExchangeKeyEnumFromJSON(json['exchange']),
        'enabledAt': !exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
        'socialProvider': !exists(json, 'socialProvider') ? undefined : ProviderEnumFromJSON(json['socialProvider']),
        'onRampProvider': !exists(json, 'onRampProvider') ? undefined : ProviderEnumFromJSON(json['onRampProvider']),
    };
}
function ExchangeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'exchange': ExchangeKeyEnumToJSON(value.exchange),
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt === null ? null : value.enabledAt.toISOString()),
        'socialProvider': ProviderEnumToJSON(value.socialProvider),
        'onRampProvider': ProviderEnumToJSON(value.onRampProvider),
    };
}

export { ExchangeFromJSON, ExchangeFromJSONTyped, ExchangeToJSON };
