import { ThresholdSignatureSchemeFromJSON, ThresholdSignatureSchemeToJSON } from './ThresholdSignatureScheme.js';
import { WaasChainEnumFromJSON, WaasChainEnumToJSON } from './WaasChainEnum.js';

/* tslint:disable */
function ImportWaasPrivateKeyRequestFromJSON(json) {
    return ImportWaasPrivateKeyRequestFromJSONTyped(json);
}
function ImportWaasPrivateKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chain': WaasChainEnumFromJSON(json['chain']),
        'clientKeygenIds': json['clientKeygenIds'],
        'thresholdSignatureScheme': ThresholdSignatureSchemeFromJSON(json['thresholdSignatureScheme']),
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
        'chain': WaasChainEnumToJSON(value.chain),
        'clientKeygenIds': value.clientKeygenIds,
        'thresholdSignatureScheme': ThresholdSignatureSchemeToJSON(value.thresholdSignatureScheme),
    };
}

export { ImportWaasPrivateKeyRequestFromJSON, ImportWaasPrivateKeyRequestFromJSONTyped, ImportWaasPrivateKeyRequestToJSON };
