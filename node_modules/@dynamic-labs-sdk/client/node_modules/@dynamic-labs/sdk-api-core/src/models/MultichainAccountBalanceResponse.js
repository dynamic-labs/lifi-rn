import { MultichainAccountBalanceResponseChainBalancesFromJSON, MultichainAccountBalanceResponseChainBalancesToJSON } from './MultichainAccountBalanceResponseChainBalances.js';

/* tslint:disable */
function MultichainAccountBalanceResponseFromJSON(json) {
    return MultichainAccountBalanceResponseFromJSONTyped(json);
}
function MultichainAccountBalanceResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainBalances': (json['chainBalances'].map(MultichainAccountBalanceResponseChainBalancesFromJSON)),
    };
}
function MultichainAccountBalanceResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainBalances': (value.chainBalances.map(MultichainAccountBalanceResponseChainBalancesToJSON)),
    };
}

export { MultichainAccountBalanceResponseFromJSON, MultichainAccountBalanceResponseFromJSONTyped, MultichainAccountBalanceResponseToJSON };
