'use client'
const isTxAlreadySigned = (transaction) => {
    let alreadySigned = false;
    if ('version' in transaction) {
        alreadySigned = transaction.signatures.some((sig) => !sig.every((byte) => byte === 0));
    }
    else {
        alreadySigned = transaction.signatures.some((sig) => sig.signature);
    }
    return alreadySigned;
};

export { isTxAlreadySigned };
