import { MessageTransportWithDefaultOrigin } from '../../messageTransport';
import { StoreSetter } from '../types';
type CreateStoreSetterProps<U extends string> = {
    messageTransport: MessageTransportWithDefaultOrigin;
    key: U;
};
export declare const createStoreSetter: <T extends Record<string, unknown> = never, U extends string = never>({ key, messageTransport, }: CreateStoreSetterProps<U>) => StoreSetter<T>;
export {};
