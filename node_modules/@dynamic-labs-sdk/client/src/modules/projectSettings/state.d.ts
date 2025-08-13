import type { ProjectSettings } from '@dynamic-labs/sdk-api-core';
declare global {
    interface DynamicCoreState {
        /**
         * The settings of the Dynamic project as configured in dashboard.
         */
        projectSettings: ProjectSettings | null;
    }
}
//# sourceMappingURL=state.d.ts.map