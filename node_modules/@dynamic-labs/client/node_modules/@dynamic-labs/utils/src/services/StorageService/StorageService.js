'use client'
import EventEmitter from 'eventemitter3';
import { logger } from '../../logger/logger.js';
import { createStorageService } from './createStorageService/createStorageService.js';

class StorageService {
    static clearRegistry() {
        StorageService.registry = {
            localStorage: undefined,
            secureStorage: undefined,
            sessionStorage: undefined,
        };
    }
    static registerSourceStorage(source, implementation) {
        logger.logVerboseTroubleshootingMessage('StorageService.registerSourceStorage', {
            implementation,
            source,
        });
        StorageService.registry[source] = implementation;
    }
    static getSourceStorage(source) {
        return StorageService.registry[source];
    }
    static resolveStorage(options) {
        const priority = (options === null || options === void 0 ? void 0 : options.priority) || ['localStorage'];
        logger.logVerboseTroubleshootingMessage('StorageService.resolveStorage', {
            options,
            priority,
        });
        for (const source of priority) {
            const storage = StorageService.getSourceStorage(source);
            if (storage) {
                return storage;
            }
        }
        /**
         * Temporary fallbacks until we ensure that one instance of the utils package is
         * installed
         *
         * thread https://dynamiclabsgroup.slack.com/archives/C03HMTUCXRR/p1752662470299459
         */
        if (priority.includes('localStorage')) {
            logger.info('No available storage found based on the specified priority, defaulting to localStorage');
            return createStorageService({
                storage: localStorage,
            });
        }
        if (priority.includes('sessionStorage')) {
            logger.info('No available storage found based on the specified priority, defaulting to sessionStorage');
            return createStorageService({
                storage: sessionStorage,
            });
        }
        logger.logVerboseTroubleshootingMessage('No storage found — StorageService.registry:', StorageService.registry);
        throw new Error('No available storage found based on the specified priority');
    }
    static getItem(key, options) {
        const storage = StorageService.resolveStorage(options);
        return storage.getItem(key);
    }
    static setItem(key, value, options) {
        const storage = StorageService.resolveStorage(options);
        storage.setItem(key, value);
    }
    static removeItem(key, options) {
        const storage = StorageService.resolveStorage(options);
        storage.removeItem(key);
    }
    static getKeys(options) {
        return StorageService.resolveStorage(options).getKeys();
    }
}
StorageService.registry = {
    localStorage: undefined,
    secureStorage: undefined,
    sessionStorage: undefined,
};
StorageService.events = new EventEmitter();

export { StorageService };
