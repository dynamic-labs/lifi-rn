'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function TransferDestinationFromJSON(json) {
    return TransferDestinationFromJSONTyped(json);
}
function TransferDestinationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'tokens': !runtime.exists(json, 'tokens') ? undefined : json['tokens'],
    };
}
function TransferDestinationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'tokens': value.tokens,
    };
}

exports.TransferDestinationFromJSON = TransferDestinationFromJSON;
exports.TransferDestinationFromJSONTyped = TransferDestinationFromJSONTyped;
exports.TransferDestinationToJSON = TransferDestinationToJSON;
