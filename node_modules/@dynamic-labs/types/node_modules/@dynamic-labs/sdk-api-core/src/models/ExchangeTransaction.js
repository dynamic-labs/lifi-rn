import { exists } from '../runtime.js';

/* tslint:disable */
function ExchangeTransactionFromJSON(json) {
    return ExchangeTransactionFromJSONTyped(json);
}
function ExchangeTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'transactionHash': !exists(json, 'transactionHash') ? undefined : json['transactionHash'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}
function ExchangeTransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactionId': value.transactionId,
        'transactionHash': value.transactionHash,
        'status': value.status,
        'amount': value.amount,
        'currency': value.currency,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}

export { ExchangeTransactionFromJSON, ExchangeTransactionFromJSONTyped, ExchangeTransactionToJSON };
