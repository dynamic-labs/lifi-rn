declare global {
    interface DynamicCoreState {
        /**
         * The current available MFA token.
         *
         * When the user authenticates with MFA, the token is set to the MFA token.
         * Once consumed, the token is set to null.
         */
        mfaToken: string | null;
    }
}
export {};
//# sourceMappingURL=state.d.ts.map