'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ExchangeKeyEnum = require('./ExchangeKeyEnum.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function ExchangeOptionFromJSON(json) {
    return ExchangeOptionFromJSONTyped(json);
}
function ExchangeOptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'exchange': ExchangeKeyEnum.ExchangeKeyEnumFromJSON(json['exchange']),
        'socialProvider': !runtime.exists(json, 'socialProvider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['socialProvider']),
        'onRampProvider': !runtime.exists(json, 'onRampProvider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['onRampProvider']),
    };
}
function ExchangeOptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'exchange': ExchangeKeyEnum.ExchangeKeyEnumToJSON(value.exchange),
        'socialProvider': ProviderEnum.ProviderEnumToJSON(value.socialProvider),
        'onRampProvider': ProviderEnum.ProviderEnumToJSON(value.onRampProvider),
    };
}

exports.ExchangeOptionFromJSON = ExchangeOptionFromJSON;
exports.ExchangeOptionFromJSONTyped = ExchangeOptionFromJSONTyped;
exports.ExchangeOptionToJSON = ExchangeOptionToJSON;
