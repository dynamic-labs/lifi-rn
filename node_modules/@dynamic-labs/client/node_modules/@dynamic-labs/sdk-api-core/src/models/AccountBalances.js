import { exists } from '../runtime.js';

/* tslint:disable */
function AccountBalancesFromJSON(json) {
    return AccountBalancesFromJSONTyped(json);
}
function AccountBalancesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currency': json['currency'],
        'balance': json['balance'],
        'availableBalance': !exists(json, 'availableBalance') ? undefined : json['availableBalance'],
        'logoURI': !exists(json, 'logoURI') ? undefined : json['logoURI'],
    };
}
function AccountBalancesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currency': value.currency,
        'balance': value.balance,
        'availableBalance': value.availableBalance,
        'logoURI': value.logoURI,
    };
}

export { AccountBalancesFromJSON, AccountBalancesFromJSONTyped, AccountBalancesToJSON };
