import { exists } from '../runtime.js';
import { PasskeyTransportFromJSON, PasskeyTransportToJSON } from './PasskeyTransport.js';

/* tslint:disable */
function PasskeyAllowCredentialFromJSON(json) {
    return PasskeyAllowCredentialFromJSONTyped(json);
}
function PasskeyAllowCredentialFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'transports': !exists(json, 'transports') ? undefined : (json['transports'].map(PasskeyTransportFromJSON)),
    };
}
function PasskeyAllowCredentialToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'transports': value.transports === undefined ? undefined : (value.transports.map(PasskeyTransportToJSON)),
    };
}

export { PasskeyAllowCredentialFromJSON, PasskeyAllowCredentialFromJSONTyped, PasskeyAllowCredentialToJSON };
