'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TransferDestination = require('./TransferDestination.cjs');

/* tslint:disable */
function TransferDestinationResponseFromJSON(json) {
    return TransferDestinationResponseFromJSONTyped(json);
}
function TransferDestinationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'destinations': (json['destinations'].map(TransferDestination.TransferDestinationFromJSON)),
        'enforcesAddressWhitelist': json['enforcesAddressWhitelist'],
    };
}
function TransferDestinationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'destinations': (value.destinations.map(TransferDestination.TransferDestinationToJSON)),
        'enforcesAddressWhitelist': value.enforcesAddressWhitelist,
    };
}

exports.TransferDestinationResponseFromJSON = TransferDestinationResponseFromJSON;
exports.TransferDestinationResponseFromJSONTyped = TransferDestinationResponseFromJSONTyped;
exports.TransferDestinationResponseToJSON = TransferDestinationResponseToJSON;
