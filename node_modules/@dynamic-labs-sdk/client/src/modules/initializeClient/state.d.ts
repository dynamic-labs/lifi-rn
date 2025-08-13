export type DynamicInitStatus = 'uninitialized' | 'in-progress' | 'finished' | 'failed';
declare global {
    export interface DynamicCoreState extends Record<string, unknown> {
        /**
         * Status of client initialization.
         *
         * - `uninitialized`: Initialization has not started yet.
         * - `in-progress`: Initialization is in progress.
         * - `finished`: Initialization has finished successfully.
         * - `failed`: Initialization failed. Check console logs for more details.
         */
        initStatus: DynamicInitStatus;
    }
}
//# sourceMappingURL=state.d.ts.map