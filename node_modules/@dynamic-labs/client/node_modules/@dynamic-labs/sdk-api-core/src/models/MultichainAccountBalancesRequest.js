import { exists } from '../runtime.js';
import { MultichainAccountBalancesRequestBalanceRequestsFromJSON, MultichainAccountBalancesRequestBalanceRequestsToJSON } from './MultichainAccountBalancesRequestBalanceRequests.js';

/* tslint:disable */
function MultichainAccountBalancesRequestFromJSON(json) {
    return MultichainAccountBalancesRequestFromJSONTyped(json);
}
function MultichainAccountBalancesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'filterSpamTokens': !exists(json, 'filterSpamTokens') ? undefined : json['filterSpamTokens'],
        'balanceRequests': !exists(json, 'balanceRequests') ? undefined : (json['balanceRequests'].map(MultichainAccountBalancesRequestBalanceRequestsFromJSON)),
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
        'balanceRequests': value.balanceRequests === undefined ? undefined : (value.balanceRequests.map(MultichainAccountBalancesRequestBalanceRequestsToJSON)),
    };
}

export { MultichainAccountBalancesRequestFromJSON, MultichainAccountBalancesRequestFromJSONTyped, MultichainAccountBalancesRequestToJSON };
