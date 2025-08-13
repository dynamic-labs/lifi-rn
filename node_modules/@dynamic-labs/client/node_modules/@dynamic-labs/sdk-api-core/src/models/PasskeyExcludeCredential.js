import { exists } from '../runtime.js';
import { PasskeyCredentialTypeFromJSON, PasskeyCredentialTypeToJSON } from './PasskeyCredentialType.js';
import { PasskeyTransportFromJSON, PasskeyTransportToJSON } from './PasskeyTransport.js';

/* tslint:disable */
function PasskeyExcludeCredentialFromJSON(json) {
    return PasskeyExcludeCredentialFromJSONTyped(json);
}
function PasskeyExcludeCredentialFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'transports': !exists(json, 'transports') ? undefined : (json['transports'].map(PasskeyTransportFromJSON)),
        'type': PasskeyCredentialTypeFromJSON(json['type']),
    };
}
function PasskeyExcludeCredentialToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'transports': value.transports === undefined ? undefined : (value.transports.map(PasskeyTransportToJSON)),
        'type': PasskeyCredentialTypeToJSON(value.type),
    };
}

export { PasskeyExcludeCredentialFromJSON, PasskeyExcludeCredentialFromJSONTyped, PasskeyExcludeCredentialToJSON };
