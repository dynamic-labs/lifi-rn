export type PickedEventListeners<T extends Record<string, unknown>> = {
    on: <K extends keyof T>(eventName: K, listener: T[K]) => void;
    once: <K extends keyof T>(eventName: K, listener: T[K]) => void;
    off: <K extends keyof T>(eventName: K, listener: T[K]) => void;
};
