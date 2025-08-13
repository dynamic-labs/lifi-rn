import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { MultichainAccountBalanceResponseNetworksFromJSON, MultichainAccountBalanceResponseNetworksToJSON } from './MultichainAccountBalanceResponseNetworks.js';

/* tslint:disable */
function MultichainAccountBalanceResponseChainBalancesFromJSON(json) {
    return MultichainAccountBalanceResponseChainBalancesFromJSONTyped(json);
}
function MultichainAccountBalanceResponseChainBalancesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletAddress': json['walletAddress'],
        'chain': ChainEnumFromJSON(json['chain']),
        'networks': (json['networks'].map(MultichainAccountBalanceResponseNetworksFromJSON)),
    };
}
function MultichainAccountBalanceResponseChainBalancesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletAddress': value.walletAddress,
        'chain': ChainEnumToJSON(value.chain),
        'networks': (value.networks.map(MultichainAccountBalanceResponseNetworksToJSON)),
    };
}

export { MultichainAccountBalanceResponseChainBalancesFromJSON, MultichainAccountBalanceResponseChainBalancesFromJSONTyped, MultichainAccountBalanceResponseChainBalancesToJSON };
