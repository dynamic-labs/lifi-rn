import type { ProjectSettings } from '@dynamic-labs/sdk-api-core';
import type { DynamicCoreState } from '../core/types';
/**
 * The client object needed to work with Dynamic SDK's functionality.
 */
export type DynamicClient = {
    /**
     * Status of client initialization.
     */
    readonly initStatus: DynamicCoreState['initStatus'];
    /**
     * The MFA token of the current user.
     */
    readonly mfaToken: string | null;
    /**
     * The settings of your Dynamic project as configured in dashboard.
     */
    readonly projectSettings: ProjectSettings | null;
    /**
     * The JWT of the current user.
     */
    readonly token: string | null;
    /**
     * The current user of the app.
     */
    readonly user: DynamicCoreState['user'];
};
//# sourceMappingURL=DynamicClient.d.ts.map