'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var EventEmitter = require('eventemitter3');
var logger = require('../../logger/logger.cjs');
var createStorageService = require('./createStorageService/createStorageService.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

class StorageService {
    static clearRegistry() {
        StorageService.registry = {
            localStorage: undefined,
            secureStorage: undefined,
            sessionStorage: undefined,
        };
    }
    static registerSourceStorage(source, implementation) {
        logger.logger.logVerboseTroubleshootingMessage('StorageService.registerSourceStorage', {
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
        logger.logger.logVerboseTroubleshootingMessage('StorageService.resolveStorage', {
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
            logger.logger.info('No available storage found based on the specified priority, defaulting to localStorage');
            return createStorageService.createStorageService({
                storage: localStorage,
            });
        }
        if (priority.includes('sessionStorage')) {
            logger.logger.info('No available storage found based on the specified priority, defaulting to sessionStorage');
            return createStorageService.createStorageService({
                storage: sessionStorage,
            });
        }
        logger.logger.logVerboseTroubleshootingMessage('No storage found — StorageService.registry:', StorageService.registry);
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
StorageService.events = new EventEmitter__default["default"]();

exports.StorageService = StorageService;
