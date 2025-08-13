import { exists } from '../runtime.js';
import { CreateMfaTokenFromJSON, CreateMfaTokenToJSON } from './CreateMfaToken.js';

/* tslint:disable */
function EmailVerificationMfaRequestFromJSON(json) {
    return EmailVerificationMfaRequestFromJSONTyped(json);
}
function EmailVerificationMfaRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'verificationUUID': json['verificationUUID'],
        'verificationToken': json['verificationToken'],
        'createMfaToken': !exists(json, 'createMfaToken') ? undefined : CreateMfaTokenFromJSON(json['createMfaToken']),
    };
}
function EmailVerificationMfaRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'verificationUUID': value.verificationUUID,
        'verificationToken': value.verificationToken,
        'createMfaToken': CreateMfaTokenToJSON(value.createMfaToken),
    };
}

export { EmailVerificationMfaRequestFromJSON, EmailVerificationMfaRequestFromJSONTyped, EmailVerificationMfaRequestToJSON };
