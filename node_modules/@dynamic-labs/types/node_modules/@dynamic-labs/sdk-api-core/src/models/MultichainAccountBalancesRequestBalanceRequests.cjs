'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');

/* tslint:disable */
function MultichainAccountBalancesRequestBalanceRequestsFromJSON(json) {
    return MultichainAccountBalancesRequestBalanceRequestsFromJSONTyped(json);
}
function MultichainAccountBalancesRequestBalanceRequestsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
        'networkIds': json['networkIds'],
        'whitelistedContracts': !runtime.exists(json, 'whitelistedContracts') ? undefined : json['whitelistedContracts'],
    };
}
function MultichainAccountBalancesRequestBalanceRequestsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'networkIds': value.networkIds,
        'whitelistedContracts': value.whitelistedContracts,
    };
}

exports.MultichainAccountBalancesRequestBalanceRequestsFromJSON = MultichainAccountBalancesRequestBalanceRequestsFromJSON;
exports.MultichainAccountBalancesRequestBalanceRequestsFromJSONTyped = MultichainAccountBalancesRequestBalanceRequestsFromJSONTyped;
exports.MultichainAccountBalancesRequestBalanceRequestsToJSON = MultichainAccountBalancesRequestBalanceRequestsToJSON;
