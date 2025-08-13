import { MFAActionFromJSON, MFAActionToJSON } from './MFAAction.js';

/* tslint:disable */
function MFASettingsActionsFromJSON(json) {
    return MFASettingsActionsFromJSONTyped(json);
}
function MFASettingsActionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'action': MFAActionFromJSON(json['action']),
        'required': json['required'],
    };
}
function MFASettingsActionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'action': MFAActionToJSON(value.action),
        'required': value.required,
    };
}

export { MFASettingsActionsFromJSON, MFASettingsActionsFromJSONTyped, MFASettingsActionsToJSON };
