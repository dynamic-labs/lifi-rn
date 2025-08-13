'use client'
import { getInitialParentURL } from './utils/getInitialParentURL/getInitialParentURL.js';
import { setupPlatformEventsService } from './utils/setupPlatformEventsService/setupPlatformEventsService.js';
import { setupPlatformService } from './utils/setupPlatformService/setupPlatformService.js';
import { setupSocialService } from './utils/setupSocialService/setupSocialService.js';

const setupInsideIframe = () => {
    if (typeof window === 'undefined')
        return;
    // Get the initial parent URL
    const initialParentURL = getInitialParentURL();
    // Setup services
    setupPlatformService(initialParentURL);
    setupPlatformEventsService(initialParentURL);
    setupSocialService();
};

export { setupInsideIframe };
