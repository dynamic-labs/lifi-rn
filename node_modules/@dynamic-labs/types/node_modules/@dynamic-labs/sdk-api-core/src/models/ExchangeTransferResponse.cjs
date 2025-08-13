'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

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
        'exchangeAccountId': !runtime.exists(json, 'exchangeAccountId') ? undefined : json['exchangeAccountId'],
        'status': !runtime.exists(json, 'status') ? undefined : json['status'],
        'amount': json['amount'],
        'currency': json['currency'],
        'createdAt': !runtime.exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
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

exports.ExchangeTransferResponseFromJSON = ExchangeTransferResponseFromJSON;
exports.ExchangeTransferResponseFromJSONTyped = ExchangeTransferResponseFromJSONTyped;
exports.ExchangeTransferResponseToJSON = ExchangeTransferResponseToJSON;
