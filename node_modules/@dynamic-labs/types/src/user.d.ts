import { JwtVerifiedCredential, ProjectSettingsKyc, UserFields } from '@dynamic-labs/sdk-api-core';
/**
 * @deprecated please use the SdkUser type from '@dynamic-labs/sdk-api-core' instead
 */
export type UserProfile = UserFields & {
    environmentId?: string;
    lastVerifiedCredentialId: string | undefined;
    lists?: string[];
    newUser?: boolean;
    sessionId: string;
    userId?: string;
    verifiedCredentials: JwtVerifiedCredential[];
    scope?: string;
    missingFields: ProjectSettingsKyc[] | undefined;
};
