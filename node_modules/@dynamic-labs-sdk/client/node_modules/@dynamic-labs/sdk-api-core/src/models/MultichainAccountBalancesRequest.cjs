'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var MultichainAccountBalancesRequestBalanceRequests = require('./MultichainAccountBalancesRequestBalanceRequests.cjs');

/* tslint:disable */
function MultichainAccountBalancesRequestFromJSON(json) {
    return MultichainAccountBalancesRequestFromJSONTyped(json);
}
function MultichainAccountBalancesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'filterSpamTokens': !runtime.exists(json, 'filterSpamTokens') ? undefined : json['filterSpamTokens'],
        'balanceRequests': !runtime.exists(json, 'balanceRequests') ? undefined : (json['balanceRequests'].map(MultichainAccountBalancesRequestBalanceRequests.MultichainAccountBalancesRequestBalanceRequestsFromJSON)),
    };
}
function MultichainAccountBalancesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'filterSpamTokens': value.filterSpamTokens,
        'balanceRequests': value.balanceRequests === undefined ? undefined : (value.balanceRequests.map(MultichainAccountBalancesRequestBalanceRequests.MultichainAccountBalancesRequestBalanceRequestsToJSON)),
    };
}

exports.MultichainAccountBalancesRequestFromJSON = MultichainAccountBalancesRequestFromJSON;
exports.MultichainAccountBalancesRequestFromJSONTyped = MultichainAccountBalancesRequestFromJSONTyped;
exports.MultichainAccountBalancesRequestToJSON = MultichainAccountBalancesRequestToJSON;
