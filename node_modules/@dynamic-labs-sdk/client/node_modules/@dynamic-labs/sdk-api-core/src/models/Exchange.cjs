'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ExchangeKeyEnum = require('./ExchangeKeyEnum.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function ExchangeFromJSON(json) {
    return ExchangeFromJSONTyped(json);
}
function ExchangeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'exchange': ExchangeKeyEnum.ExchangeKeyEnumFromJSON(json['exchange']),
        'enabledAt': !runtime.exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
        'socialProvider': !runtime.exists(json, 'socialProvider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['socialProvider']),
        'onRampProvider': !runtime.exists(json, 'onRampProvider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['onRampProvider']),
    };
}
function ExchangeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'exchange': ExchangeKeyEnum.ExchangeKeyEnumToJSON(value.exchange),
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt === null ? null : value.enabledAt.toISOString()),
        'socialProvider': ProviderEnum.ProviderEnumToJSON(value.socialProvider),
        'onRampProvider': ProviderEnum.ProviderEnumToJSON(value.onRampProvider),
    };
}

exports.ExchangeFromJSON = ExchangeFromJSON;
exports.ExchangeFromJSONTyped = ExchangeFromJSONTyped;
exports.ExchangeToJSON = ExchangeToJSON;
