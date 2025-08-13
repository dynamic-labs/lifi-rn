import { exists } from '../runtime.js';

/* tslint:disable */
function PasskeyExtensionFromJSON(json) {
    return PasskeyExtensionFromJSONTyped(json);
}
function PasskeyExtensionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appid': !exists(json, 'appid') ? undefined : json['appid'],
        'appidExclude': !exists(json, 'appidExclude') ? undefined : json['appidExclude'],
        'credProps': !exists(json, 'credProps') ? undefined : json['credProps'],
        'uvm': !exists(json, 'uvm') ? undefined : json['uvm'],
    };
}
function PasskeyExtensionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appid': value.appid,
        'appidExclude': value.appidExclude,
        'credProps': value.credProps,
        'uvm': value.uvm,
    };
}

export { PasskeyExtensionFromJSON, PasskeyExtensionFromJSONTyped, PasskeyExtensionToJSON };
