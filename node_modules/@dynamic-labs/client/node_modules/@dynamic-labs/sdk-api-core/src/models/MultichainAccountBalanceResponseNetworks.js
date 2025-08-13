import { exists } from '../runtime.js';
import { TokenBalanceFromJSON, TokenBalanceToJSON } from './TokenBalance.js';

/* tslint:disable */
function MultichainAccountBalanceResponseNetworksFromJSON(json) {
    return MultichainAccountBalanceResponseNetworksFromJSONTyped(json);
}
function MultichainAccountBalanceResponseNetworksFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'networkId': !exists(json, 'networkId') ? undefined : json['networkId'],
        'balances': !exists(json, 'balances') ? undefined : (json['balances'].map(TokenBalanceFromJSON)),
    };
}
function MultichainAccountBalanceResponseNetworksToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'networkId': value.networkId,
        'balances': value.balances === undefined ? undefined : (value.balances.map(TokenBalanceToJSON)),
    };
}

export { MultichainAccountBalanceResponseNetworksFromJSON, MultichainAccountBalanceResponseNetworksFromJSONTyped, MultichainAccountBalanceResponseNetworksToJSON };
