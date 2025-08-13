'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ThresholdSignatureScheme = require('./ThresholdSignatureScheme.cjs');
var WaasChainEnum = require('./WaasChainEnum.cjs');

/* tslint:disable */
function ImportWaasPrivateKeyRequestFromJSON(json) {
    return ImportWaasPrivateKeyRequestFromJSONTyped(json);
}
function ImportWaasPrivateKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chain': WaasChainEnum.WaasChainEnumFromJSON(json['chain']),
        'clientKeygenIds': json['clientKeygenIds'],
        'thresholdSignatureScheme': ThresholdSignatureScheme.ThresholdSignatureSchemeFromJSON(json['thresholdSignatureScheme']),
    };
}
function ImportWaasPrivateKeyRequestToJSON(value) {
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

exports.ImportWaasPrivateKeyRequestFromJSON = ImportWaasPrivateKeyRequestFromJSON;
exports.ImportWaasPrivateKeyRequestFromJSONTyped = ImportWaasPrivateKeyRequestFromJSONTyped;
exports.ImportWaasPrivateKeyRequestToJSON = ImportWaasPrivateKeyRequestToJSON;
