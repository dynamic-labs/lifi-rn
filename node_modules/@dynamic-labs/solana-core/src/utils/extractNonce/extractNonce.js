'use client'
const extractNonce = (messageToSign) => {
    const regex = messageToSign.match(/Nonce: (.*)/);
    if (regex && regex.length === 2) {
        return regex[1];
    }
    return undefined;
};

export { extractNonce };
