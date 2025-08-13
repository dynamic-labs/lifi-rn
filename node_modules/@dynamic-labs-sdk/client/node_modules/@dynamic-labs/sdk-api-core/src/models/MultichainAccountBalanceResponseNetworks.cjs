'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var TokenBalance = require('./TokenBalance.cjs');

/* tslint:disable */
function MultichainAccountBalanceResponseNetworksFromJSON(json) {
    return MultichainAccountBalanceResponseNetworksFromJSONTyped(json);
}
function MultichainAccountBalanceResponseNetworksFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'networkId': !runtime.exists(json, 'networkId') ? undefined : json['networkId'],
        'balances': !runtime.exists(json, 'balances') ? undefined : (json['balances'].map(TokenBalance.TokenBalanceFromJSON)),
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
        'balances': value.balances === undefined ? undefined : (value.balances.map(TokenBalance.TokenBalanceToJSON)),
    };
}

exports.MultichainAccountBalanceResponseNetworksFromJSON = MultichainAccountBalanceResponseNetworksFromJSON;
exports.MultichainAccountBalanceResponseNetworksFromJSONTyped = MultichainAccountBalanceResponseNetworksFromJSONTyped;
exports.MultichainAccountBalanceResponseNetworksToJSON = MultichainAccountBalanceResponseNetworksToJSON;
