import { exists } from '../runtime.js';

/* tslint:disable */
function ExchangeTransferResponseFromJSON(json) {
    return ExchangeTransferResponseFromJSONTyped(json);
}
function ExchangeTransferResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'exchangeAccountId': !exists(json, 'exchangeAccountId') ? undefined : json['exchangeAccountId'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'amount': json['amount'],
        'currency': json['currency'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}
function ExchangeTransferResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'exchangeAccountId': value.exchangeAccountId,
        'status': value.status,
        'amount': value.amount,
        'currency': value.currency,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}

export { ExchangeTransferResponseFromJSON, ExchangeTransferResponseFromJSONTyped, ExchangeTransferResponseToJSON };
