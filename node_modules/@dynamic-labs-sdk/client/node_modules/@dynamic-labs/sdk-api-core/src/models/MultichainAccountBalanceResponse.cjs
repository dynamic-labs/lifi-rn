'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MultichainAccountBalanceResponseChainBalances = require('./MultichainAccountBalanceResponseChainBalances.cjs');

/* tslint:disable */
function MultichainAccountBalanceResponseFromJSON(json) {
    return MultichainAccountBalanceResponseFromJSONTyped(json);
}
function MultichainAccountBalanceResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainBalances': (json['chainBalances'].map(MultichainAccountBalanceResponseChainBalances.MultichainAccountBalanceResponseChainBalancesFromJSON)),
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
        'chainBalances': (value.chainBalances.map(MultichainAccountBalanceResponseChainBalances.MultichainAccountBalanceResponseChainBalancesToJSON)),
    };
}

exports.MultichainAccountBalanceResponseFromJSON = MultichainAccountBalanceResponseFromJSON;
exports.MultichainAccountBalanceResponseFromJSONTyped = MultichainAccountBalanceResponseFromJSONTyped;
exports.MultichainAccountBalanceResponseToJSON = MultichainAccountBalanceResponseToJSON;
