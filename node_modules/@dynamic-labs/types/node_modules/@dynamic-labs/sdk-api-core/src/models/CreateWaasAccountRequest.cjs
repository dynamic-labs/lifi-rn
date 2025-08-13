'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ThresholdSignatureScheme = require('./ThresholdSignatureScheme.cjs');
var WaasChainEnum = require('./WaasChainEnum.cjs');

/* tslint:disable */
function CreateWaasAccountRequestFromJSON(json) {
    return CreateWaasAccountRequestFromJSONTyped(json);
}
function CreateWaasAccountRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chain': WaasChainEnum.WaasChainEnumFromJSON(json['chain']),
        'clientKeygenIds': json['clientKeygenIds'],
        'thresholdSignatureScheme': !runtime.exists(json, 'thresholdSignatureScheme') ? undefined : ThresholdSignatureScheme.ThresholdSignatureSchemeFromJSON(json['thresholdSignatureScheme']),
    };
}
function CreateWaasAccountRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chain': WaasChainEnum.WaasChainEnumToJSON(value.chain),
        'clientKeygenIds': value.clientKeygenIds,
        'thresholdSignatureScheme': ThresholdSignatureScheme.ThresholdSignatureSchemeToJSON(value.thresholdSignatureScheme),
    };
}

exports.CreateWaasAccountRequestFromJSON = CreateWaasAccountRequestFromJSON;
exports.CreateWaasAccountRequestFromJSONTyped = CreateWaasAccountRequestFromJSONTyped;
exports.CreateWaasAccountRequestToJSON = CreateWaasAccountRequestToJSON;
