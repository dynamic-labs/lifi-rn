import { MessageTransportWithDefaultOrigin } from '../messageTransport';
import { Store } from './types';
export type CreateStoreProps<T extends Record<string, unknown>, U extends string> = {
    messageTransport: MessageTransportWithDefaultOrigin;
    key: U;
    initialState: T;
};
export declare const createStore: <T extends Record<string, unknown> = never, U extends string = never>({ initialState, key, messageTransport, }: CreateStoreProps<T, U>) => Store<T>;
