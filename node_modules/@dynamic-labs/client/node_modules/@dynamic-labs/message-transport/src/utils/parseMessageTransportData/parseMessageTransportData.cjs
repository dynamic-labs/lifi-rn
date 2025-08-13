'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const parseMessageTransportData = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
parsedData) => {
    if (!parsedData || typeof parsedData !== 'object') {
        return undefined;
    }
    const message = {
        args: parsedData.args,
        doNotAck: parsedData.doNotAck,
        messageSessionId: parsedData.messageSessionId,
        origin: parsedData.origin,
        transportStamps: parsedData.transportStamps,
        type: parsedData.type,
    };
    if (!Array.isArray(message.args) ||
        typeof message.messageSessionId !== 'string' ||
        typeof message.origin !== 'string' ||
        typeof message.type !== 'string') {
        return undefined;
    }
    return message;
};

exports.parseMessageTransportData = parseMessageTransportData;
