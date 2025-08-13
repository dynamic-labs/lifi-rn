import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';

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
        'chain': ChainEnumFromJSON(json['chain']),
        'networkIds': json['networkIds'],
        'whitelistedContracts': !exists(json, 'whitelistedContracts') ? undefined : json['whitelistedContracts'],
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
        'chain': ChainEnumToJSON(value.chain),
        'networkIds': value.networkIds,
        'whitelistedContracts': value.whitelistedContracts,
    };
}

export { MultichainAccountBalancesRequestBalanceRequestsFromJSON, MultichainAccountBalancesRequestBalanceRequestsFromJSONTyped, MultichainAccountBalancesRequestBalanceRequestsToJSON };
