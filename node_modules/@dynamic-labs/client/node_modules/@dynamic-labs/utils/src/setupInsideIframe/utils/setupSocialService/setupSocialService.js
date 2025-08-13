'use client'
import { __awaiter } from '../../../../_virtual/_tslib.js';
import { ProviderEnum } from '@dynamic-labs/sdk-api-core';
import { Oauth2Service } from '../../../services/Oauth2Service/Oauth2Service.js';
import '@dynamic-labs/types';
import '../../../logger/logger.js';
import { PlatformService } from '../../../services/PlatformService/PlatformService.js';
import 'tldts';

const setupSocialService = () => {
    Oauth2Service.implementation = {
        getOauthCode: (_a) => __awaiter(void 0, [_a], void 0, function* ({ setIsProcessing, strategy, provider, oauthLoginUrl, initWebAuth, redirectUrl, }) {
            return new Promise((_, reject) => {
                setIsProcessing(true);
                /**
                 * Use redirect flow on mobile for all providers except Telegram
                 */
                if (strategy === 'redirect' && provider !== ProviderEnum.Telegram) {
                    if (!redirectUrl) {
                        throw new Error('Redirect URL is required');
                    }
                    initWebAuth({
                        redirectUrl,
                    }).then(() => PlatformService.openURL(oauthLoginUrl.toString()));
                    return;
                }
                reject(new Error('Unsupported social provider'));
            });
        }),
    };
};

export { setupSocialService };
