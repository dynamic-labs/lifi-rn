import { exists } from '../runtime.js';
import { EnvironmentEnumFromJSON, EnvironmentEnumToJSON } from './EnvironmentEnum.js';
import { ExchangeFromJSON, ExchangeToJSON } from './Exchange.js';
import { NetworkConfigurationResponseFromJSON, NetworkConfigurationResponseToJSON } from './NetworkConfigurationResponse.js';
import { ProjectSettingsChainsFromJSON, ProjectSettingsChainsToJSON } from './ProjectSettingsChains.js';
import { ProjectSettingsDesignFromJSON, ProjectSettingsDesignToJSON } from './ProjectSettingsDesign.js';
import { ProjectSettingsGeneralFromJSON, ProjectSettingsGeneralToJSON } from './ProjectSettingsGeneral.js';
import { ProjectSettingsKycFromJSON, ProjectSettingsKycToJSON } from './ProjectSettingsKyc.js';
import { ProjectSettingsPrivacyFromJSON, ProjectSettingsPrivacyToJSON } from './ProjectSettingsPrivacy.js';
import { ProjectSettingsSdkFromJSON, ProjectSettingsSdkToJSON } from './ProjectSettingsSdk.js';
import { ProjectSettingsSecurityFromJSON, ProjectSettingsSecurityToJSON } from './ProjectSettingsSecurity.js';
import { ProviderFromJSON, ProviderToJSON } from './Provider.js';

/* tslint:disable */
function ProjectSettingsFromJSON(json) {
    return ProjectSettingsFromJSONTyped(json);
}
function ProjectSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'environmentName': !exists(json, 'environmentName') ? undefined : EnvironmentEnumFromJSON(json['environmentName']),
        'chains': (json['chains'].map(ProjectSettingsChainsFromJSON)),
        'customFields': !exists(json, 'customFields') ? undefined : (json['customFields'].map(ProjectSettingsKycFromJSON)),
        'kyc': (json['kyc'].map(ProjectSettingsKycFromJSON)),
        'design': ProjectSettingsDesignFromJSON(json['design']),
        'general': ProjectSettingsGeneralFromJSON(json['general']),
        'privacy': ProjectSettingsPrivacyFromJSON(json['privacy']),
        'providers': !exists(json, 'providers') ? undefined : (json['providers'].map(ProviderFromJSON)),
        'exchanges': !exists(json, 'exchanges') ? undefined : (json['exchanges'].map(ExchangeFromJSON)),
        'sdk': ProjectSettingsSdkFromJSON(json['sdk']),
        'security': ProjectSettingsSecurityFromJSON(json['security']),
        'networks': !exists(json, 'networks') ? undefined : (json['networks'].map(NetworkConfigurationResponseFromJSON)),
    };
}
function ProjectSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'environmentName': EnvironmentEnumToJSON(value.environmentName),
        'chains': (value.chains.map(ProjectSettingsChainsToJSON)),
        'customFields': value.customFields === undefined ? undefined : (value.customFields.map(ProjectSettingsKycToJSON)),
        'kyc': (value.kyc.map(ProjectSettingsKycToJSON)),
        'design': ProjectSettingsDesignToJSON(value.design),
        'general': ProjectSettingsGeneralToJSON(value.general),
        'privacy': ProjectSettingsPrivacyToJSON(value.privacy),
        'providers': value.providers === undefined ? undefined : (value.providers.map(ProviderToJSON)),
        'exchanges': value.exchanges === undefined ? undefined : (value.exchanges.map(ExchangeToJSON)),
        'sdk': ProjectSettingsSdkToJSON(value.sdk),
        'security': ProjectSettingsSecurityToJSON(value.security),
        'networks': value.networks === undefined ? undefined : (value.networks.map(NetworkConfigurationResponseToJSON)),
    };
}

export { ProjectSettingsFromJSON, ProjectSettingsFromJSONTyped, ProjectSettingsToJSON };
