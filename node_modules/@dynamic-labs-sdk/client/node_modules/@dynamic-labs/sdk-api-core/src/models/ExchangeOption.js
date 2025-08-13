import { exists } from '../runtime.js';
import { ExchangeKeyEnumFromJSON, ExchangeKeyEnumToJSON } from './ExchangeKeyEnum.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function ExchangeOptionFromJSON(json) {
    return ExchangeOptionFromJSONTyped(json);
}
function ExchangeOptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'exchange': ExchangeKeyEnumFromJSON(json['exchange']),
        'socialProvider': !exists(json, 'socialProvider') ? undefined : ProviderEnumFromJSON(json['socialProvider']),
        'onRampProvider': !exists(json, 'onRampProvider') ? undefined : ProviderEnumFromJSON(json['onRampProvider']),
    };
}
function ExchangeOptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'exchange': ExchangeKeyEnumToJSON(value.exchange),
        'socialProvider': ProviderEnumToJSON(value.socialProvider),
        'onRampProvider': ProviderEnumToJSON(value.onRampProvider),
    };
}

export { ExchangeOptionFromJSON, ExchangeOptionFromJSONTyped, ExchangeOptionToJSON };
