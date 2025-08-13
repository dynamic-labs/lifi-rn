/**
 * Formats a sign in message to prove ownership of an address.
 */
export declare const formatSignInMessage: ({ domain, blockchainName, address, uri, chainId, nonce, issuedAt, requestId, statement, resources, }: {
    address: string;
    blockchainName: string;
    chainId?: string;
    domain: string;
    issuedAt: string;
    nonce: string;
    requestId: string;
    resources?: string[];
    statement?: string;
    uri: string;
}) => Promise<string>;
//# sourceMappingURL=formatSignInMessage.d.ts.map