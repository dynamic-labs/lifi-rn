'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ExchangeTransactionFromJSON(json) {
    return ExchangeTransactionFromJSONTyped(json);
}
function ExchangeTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactionId': !runtime.exists(json, 'transactionId') ? undefined : json['transactionId'],
        'transactionHash': !runtime.exists(json, 'transactionHash') ? undefined : json['transactionHash'],
        'status': !runtime.exists(json, 'status') ? undefined : json['status'],
        'amount': !runtime.exists(json, 'amount') ? undefined : json['amount'],
        'currency': !runtime.exists(json, 'currency') ? undefined : json['currency'],
        'createdAt': !runtime.exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
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

exports.ExchangeTransactionFromJSON = ExchangeTransactionFromJSON;
exports.ExchangeTransactionFromJSONTyped = ExchangeTransactionFromJSONTyped;
exports.ExchangeTransactionToJSON = ExchangeTransactionToJSON;
