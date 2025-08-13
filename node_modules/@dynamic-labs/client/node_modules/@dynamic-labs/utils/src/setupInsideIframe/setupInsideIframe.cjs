'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getInitialParentURL = require('./utils/getInitialParentURL/getInitialParentURL.cjs');
var setupPlatformEventsService = require('./utils/setupPlatformEventsService/setupPlatformEventsService.cjs');
var setupPlatformService = require('./utils/setupPlatformService/setupPlatformService.cjs');
var setupSocialService = require('./utils/setupSocialService/setupSocialService.cjs');

const setupInsideIframe = () => {
    if (typeof window === 'undefined')
        return;
    // Get the initial parent URL
    const initialParentURL = getInitialParentURL.getInitialParentURL();
    // Setup services
    setupPlatformService.setupPlatformService(initialParentURL);
    setupPlatformEventsService.setupPlatformEventsService(initialParentURL);
    setupSocialService.setupSocialService();
};

exports.setupInsideIframe = setupInsideIframe;
