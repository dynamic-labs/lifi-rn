'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var Oauth2Service = require('../../../services/Oauth2Service/Oauth2Service.cjs');
require('@dynamic-labs/types');
require('../../../logger/logger.cjs');
var PlatformService = require('../../../services/PlatformService/PlatformService.cjs');
require('tldts');

const setupSocialService = () => {
    Oauth2Service.Oauth2Service.implementation = {
        getOauthCode: (_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ setIsProcessing, strategy, provider, oauthLoginUrl, initWebAuth, redirectUrl, }) {
            return new Promise((_, reject) => {
                setIsProcessing(true);
                /**
                 * Use redirect flow on mobile for all providers except Telegram
                 */
                if (strategy === 'redirect' && provider !== sdkApiCore.ProviderEnum.Telegram) {
                    if (!redirectUrl) {
                        throw new Error('Redirect URL is required');
                    }
                    initWebAuth({
                        redirectUrl,
                    }).then(() => PlatformService.PlatformService.openURL(oauthLoginUrl.toString()));
                    return;
                }
                reject(new Error('Unsupported social provider'));
            });
        }),
    };
};

exports.setupSocialService = setupSocialService;
