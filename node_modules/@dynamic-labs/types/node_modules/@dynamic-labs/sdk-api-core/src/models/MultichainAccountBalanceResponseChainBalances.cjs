'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ChainEnum = require('./ChainEnum.cjs');
var MultichainAccountBalanceResponseNetworks = require('./MultichainAccountBalanceResponseNetworks.cjs');

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
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
        'networks': (json['networks'].map(MultichainAccountBalanceResponseNetworks.MultichainAccountBalanceResponseNetworksFromJSON)),
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
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'networks': (value.networks.map(MultichainAccountBalanceResponseNetworks.MultichainAccountBalanceResponseNetworksToJSON)),
    };
}

exports.MultichainAccountBalanceResponseChainBalancesFromJSON = MultichainAccountBalanceResponseChainBalancesFromJSON;
exports.MultichainAccountBalanceResponseChainBalancesFromJSONTyped = MultichainAccountBalanceResponseChainBalancesFromJSONTyped;
exports.MultichainAccountBalanceResponseChainBalancesToJSON = MultichainAccountBalanceResponseChainBalancesToJSON;
