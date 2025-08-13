import type { ProviderEnum } from '@dynamic-labs/sdk-api-core';
import type { DynamicCore } from '../../../../../../client/core/types';
type OAuthUrl = {
    /** A randomly generated string for PKCE flows. */
    codeVerifier?: string;
    /** A randomly generated string for the OAuth flow. */
    state: string;
    /** The OAuth URL for the given provider. */
    url: URL;
};
/** Helper function to build the OAuth URL for a given provider. */
export declare const buildOAuthUrl: (core: DynamicCore, provider: ProviderEnum) => Promise<OAuthUrl>;
export {};
//# sourceMappingURL=buildOAuthUrl.d.ts.map