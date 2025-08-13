import type { VerifyResponse } from '@dynamic-labs/sdk-api-core';
declare global {
    interface DynamicEvents {
        /**
         * Raised when the user is authenticated.
         */
        authenticated: (args: {
            verifyResponse: VerifyResponse;
        }) => void;
        /**
         * Raised when "logout" is called.
         */
        logout: () => void;
    }
}
//# sourceMappingURL=events.d.ts.map