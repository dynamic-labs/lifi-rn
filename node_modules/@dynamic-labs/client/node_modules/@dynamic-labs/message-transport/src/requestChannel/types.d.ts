/**
 * An object that defines request types, and whether they expect a response
 */
export type RequestTypes = Record<string, (...params: any[]) => Promise<any> | void>;
/**
 * Only the request types from T that return promises
 * i.e. those that expect a response
 */
export type TypesExpectingResponse<T extends RequestTypes> = Extract<{
    [K in keyof T]: ReturnType<T[K]> extends Promise<any> ? K : never;
}[keyof T], string>;
export type RequestChannel<T extends RequestTypes> = {
    /**
     * Listens to incoming requests of this type, and calls the handler when they arrive.
     * If the type of this request expects some response, the handler must return a promise
     * that resolves to this response.
     *
     * @returns an unsubscribe function.
     */
    handle: <K extends Extract<keyof T, string>>(requestType: K, handler: T[K]) => VoidFunction;
    /**
     * Triggers handlers for this request type, with the given params.
     * Doesn't expect a response. Resolves as soon as the message is acknowledged by
     * any handler.
     *
     * If no handlers emit an ack for this message, this will reject.
     *
     * Lifetime of an "emit" message:
     * 1. "Emit" message is sent.
     * 2. A handler receives the message.
     * 3. The handler immediately emits an ack message for it, acknowledging it.
     * 4. This method's promise resolves.
     */
    emit: <K extends Extract<keyof T, string>>(requestName: K, ...params: Parameters<T[K]>) => Promise<void>;
    /**
     * Triggers handlers for this request type, with the given params.
     * As opposed to emit, this expects a response message. A handler must still
     * acknowledge this message, but the promise will only resolve when the handler
     * emits back a response message. The promise resolves with whatever data was sent
     * in the response.
     *
     * If no handlers emit an ack for this message, or if a handler responds
     * with a failure, this will reject.
     *
     * Lifetime of a "request" message:
     * 1. "Request" message is sent.
     * 2. A handler receives the message.
     * 3. The handler immediately emits an ack message for it, acknowledging it.
     * 4. The handler performs the requested action.
     * 5. The handler emits a response message.
     * 6. This method's promise resolves with the response's data.
     */
    request: <K extends TypesExpectingResponse<T>>(requestName: K, ...params: Parameters<T[K]>) => ReturnType<T[K]>;
};
