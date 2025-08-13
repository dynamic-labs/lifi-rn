import { exists } from '../runtime.js';
import { PasskeyTransportFromJSON, PasskeyTransportToJSON } from './PasskeyTransport.js';

/* tslint:disable */
function PasskeyRegistrationCredentialV2FromJSON(json) {
    return PasskeyRegistrationCredentialV2FromJSONTyped(json);
}
function PasskeyRegistrationCredentialV2FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attestationObject': json['attestationObject'],
        'clientDataJson': json['clientDataJson'],
        'transports': !exists(json, 'transports') ? undefined : (json['transports'].map(PasskeyTransportFromJSON)),
        'publicKey': !exists(json, 'publicKey') ? undefined : json['publicKey'],
    };
}
function PasskeyRegistrationCredentialV2ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attestationObject': value.attestationObject,
        'clientDataJson': value.clientDataJson,
        'transports': value.transports === undefined ? undefined : (value.transports.map(PasskeyTransportToJSON)),
        'publicKey': value.publicKey,
    };
}

export { PasskeyRegistrationCredentialV2FromJSON, PasskeyRegistrationCredentialV2FromJSONTyped, PasskeyRegistrationCredentialV2ToJSON };
