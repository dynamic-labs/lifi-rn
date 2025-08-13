import { TransferDestinationFromJSON, TransferDestinationToJSON } from './TransferDestination.js';

/* tslint:disable */
function TransferDestinationResponseFromJSON(json) {
    return TransferDestinationResponseFromJSONTyped(json);
}
function TransferDestinationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'destinations': (json['destinations'].map(TransferDestinationFromJSON)),
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
        'destinations': (value.destinations.map(TransferDestinationToJSON)),
        'enforcesAddressWhitelist': value.enforcesAddressWhitelist,
    };
}

export { TransferDestinationResponseFromJSON, TransferDestinationResponseFromJSONTyped, TransferDestinationResponseToJSON };
