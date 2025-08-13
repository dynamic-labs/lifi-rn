declare global {
    interface DynamicEvents {
        /**
         * Raised when there is an error verifying the MFA challenge
         */
        mfaCompletionFailure: (args: {
            /**
             * The ID of the device that was used to complete the MFA challenge.
             * Can be undefined if a backup code was used.
             */
            deviceId?: string;
            /**
             * The error that occurred while verifying the MFA challenge.
             */
            error: unknown;
        }) => void;
        /**
         * Raised when the user successfully completes an MFA challenge.
         */
        mfaCompletionSuccess: (args: {
            /**
             * The ID of the device that was used to complete the MFA challenge.
             * Can be undefined if a backup code was used.
             */
            deviceId?: string;
            /**
             * The MFA token for the user.
             */
            mfaToken?: string;
        }) => void;
    }
}
export {};
//# sourceMappingURL=events.d.ts.map