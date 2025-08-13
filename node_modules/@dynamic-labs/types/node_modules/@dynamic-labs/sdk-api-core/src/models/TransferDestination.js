import { exists } from '../runtime.js';

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
        'tokens': !exists(json, 'tokens') ? undefined : json['tokens'],
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

export { TransferDestinationFromJSON, TransferDestinationFromJSONTyped, TransferDestinationToJSON };
