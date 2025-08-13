'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ThresholdSignatureScheme = require('./ThresholdSignatureScheme.cjs');

/* tslint:disable */
function ReshareRequestFromJSON(json) {
    return ReshareRequestFromJSONTyped(json);
}
function ReshareRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientKeygenIds': json['clientKeygenIds'],
        'oldThresholdSignatureScheme': ThresholdSignatureScheme.ThresholdSignatureSchemeFromJSON(json['oldThresholdSignatureScheme']),
        'newThresholdSignatureScheme': ThresholdSignatureScheme.ThresholdSignatureSchemeFromJSON(json['newThresholdSignatureScheme']),
        'delegateToProjectEnvironment': !runtime.exists(json, 'delegateToProjectEnvironment') ? undefined : json['delegateToProjectEnvironment'],
    };
}
function ReshareRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientKeygenIds': value.clientKeygenIds,
        'oldThresholdSignatureScheme': ThresholdSignatureScheme.ThresholdSignatureSchemeToJSON(value.oldThresholdSignatureScheme),
        'newThresholdSignatureScheme': ThresholdSignatureScheme.ThresholdSignatureSchemeToJSON(value.newThresholdSignatureScheme),
        'delegateToProjectEnvironment': value.delegateToProjectEnvironment,
    };
}

exports.ReshareRequestFromJSON = ReshareRequestFromJSON;
exports.ReshareRequestFromJSONTyped = ReshareRequestFromJSONTyped;
exports.ReshareRequestToJSON = ReshareRequestToJSON;
