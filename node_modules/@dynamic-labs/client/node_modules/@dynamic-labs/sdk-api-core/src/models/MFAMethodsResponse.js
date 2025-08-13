import { MFADeviceFromJSON, MFADeviceToJSON } from './MFADevice.js';
import { UserPasskeyFromJSON, UserPasskeyToJSON } from './UserPasskey.js';

/* tslint:disable */
function MFAMethodsResponseFromJSON(json) {
    return MFAMethodsResponseFromJSONTyped(json);
}
function MFAMethodsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'devices': (json['devices'].map(MFADeviceFromJSON)),
        'passkeys': (json['passkeys'].map(UserPasskeyFromJSON)),
        'userHasVerifiedMfaMethods': json['userHasVerifiedMfaMethods'],
    };
}
function MFAMethodsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'devices': (value.devices.map(MFADeviceToJSON)),
        'passkeys': (value.passkeys.map(UserPasskeyToJSON)),
        'userHasVerifiedMfaMethods': value.userHasVerifiedMfaMethods,
    };
}

export { MFAMethodsResponseFromJSON, MFAMethodsResponseFromJSONTyped, MFAMethodsResponseToJSON };
