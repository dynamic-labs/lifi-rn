'use client'
/**
 * Applies transport stamps to a message transport
 * as a trail of where the message has been
 */
const applyTransportStamps = (messageTransport) => {
    const id = Math.random().toString(36).slice(2);
    return Object.assign(Object.assign({}, messageTransport), { emit: (message) => {
            var _a;
            const transportStamps = [
                ...((_a = message.transportStamps) !== null && _a !== void 0 ? _a : []),
                {
                    emittedAt: new Date().toISOString(),
                    messageTransportId: id,
                },
            ];
            messageTransport.emit(Object.assign(Object.assign({}, message), { transportStamps }));
        } });
};

export { applyTransportStamps };
