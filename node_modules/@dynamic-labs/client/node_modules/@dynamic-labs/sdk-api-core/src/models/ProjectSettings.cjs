'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EnvironmentEnum = require('./EnvironmentEnum.cjs');
var Exchange = require('./Exchange.cjs');
var NetworkConfigurationResponse = require('./NetworkConfigurationResponse.cjs');
var ProjectSettingsChains = require('./ProjectSettingsChains.cjs');
var ProjectSettingsDesign = require('./ProjectSettingsDesign.cjs');
var ProjectSettingsGeneral = require('./ProjectSettingsGeneral.cjs');
var ProjectSettingsKyc = require('./ProjectSettingsKyc.cjs');
var ProjectSettingsPrivacy = require('./ProjectSettingsPrivacy.cjs');
var ProjectSettingsSdk = require('./ProjectSettingsSdk.cjs');
var ProjectSettingsSecurity = require('./ProjectSettingsSecurity.cjs');
var Provider = require('./Provider.cjs');

/* tslint:disable */
function ProjectSettingsFromJSON(json) {
    return ProjectSettingsFromJSONTyped(json);
}
function ProjectSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'environmentName': !runtime.exists(json, 'environmentName') ? undefined : EnvironmentEnum.EnvironmentEnumFromJSON(json['environmentName']),
        'chains': (json['chains'].map(ProjectSettingsChains.ProjectSettingsChainsFromJSON)),
        'customFields': !runtime.exists(json, 'customFields') ? undefined : (json['customFields'].map(ProjectSettingsKyc.ProjectSettingsKycFromJSON)),
        'kyc': (json['kyc'].map(ProjectSettingsKyc.ProjectSettingsKycFromJSON)),
        'design': ProjectSettingsDesign.ProjectSettingsDesignFromJSON(json['design']),
        'general': ProjectSettingsGeneral.ProjectSettingsGeneralFromJSON(json['general']),
        'privacy': ProjectSettingsPrivacy.ProjectSettingsPrivacyFromJSON(json['privacy']),
        'providers': !runtime.exists(json, 'providers') ? undefined : (json['providers'].map(Provider.ProviderFromJSON)),
        'exchanges': !runtime.exists(json, 'exchanges') ? undefined : (json['exchanges'].map(Exchange.ExchangeFromJSON)),
        'sdk': ProjectSettingsSdk.ProjectSettingsSdkFromJSON(json['sdk']),
        'security': ProjectSettingsSecurity.ProjectSettingsSecurityFromJSON(json['security']),
        'networks': !runtime.exists(json, 'networks') ? undefined : (json['networks'].map(NetworkConfigurationResponse.NetworkConfigurationResponseFromJSON)),
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
        'environmentName': EnvironmentEnum.EnvironmentEnumToJSON(value.environmentName),
        'chains': (value.chains.map(ProjectSettingsChains.ProjectSettingsChainsToJSON)),
        'customFields': value.customFields === undefined ? undefined : (value.customFields.map(ProjectSettingsKyc.ProjectSettingsKycToJSON)),
        'kyc': (value.kyc.map(ProjectSettingsKyc.ProjectSettingsKycToJSON)),
        'design': ProjectSettingsDesign.ProjectSettingsDesignToJSON(value.design),
        'general': ProjectSettingsGeneral.ProjectSettingsGeneralToJSON(value.general),
        'privacy': ProjectSettingsPrivacy.ProjectSettingsPrivacyToJSON(value.privacy),
        'providers': value.providers === undefined ? undefined : (value.providers.map(Provider.ProviderToJSON)),
        'exchanges': value.exchanges === undefined ? undefined : (value.exchanges.map(Exchange.ExchangeToJSON)),
        'sdk': ProjectSettingsSdk.ProjectSettingsSdkToJSON(value.sdk),
        'security': ProjectSettingsSecurity.ProjectSettingsSecurityToJSON(value.security),
        'networks': value.networks === undefined ? undefined : (value.networks.map(NetworkConfigurationResponse.NetworkConfigurationResponseToJSON)),
    };
}

exports.ProjectSettingsFromJSON = ProjectSettingsFromJSON;
exports.ProjectSettingsFromJSONTyped = ProjectSettingsFromJSONTyped;
exports.ProjectSettingsToJSON = ProjectSettingsToJSON;
