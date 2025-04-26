import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';

import db from './models/index.js';
import { componentLoader, Components } from './components/index.js';
import handlers from './handlers/index.js';

import createPageResource from './utils/pageResource.js';
import navigation from './navigation.js';

const adminJs = new AdminJS({
    dashboard: {
        component: Components.dashboard,
        handler: handlers.dashboard,
    },
    componentLoader,
    databases: [db],
    resources: [
        createPageResource({
            name: 'custom-dashboard',
            navigation: navigation.settings,
            component: Components.dashboard,
            handler: handlers.dashboard,
        }),
        createPageResource({
            name: 'another-dashboard',
            navigation: navigation.settings,
            component: Components.dashboard,
            handler: handlers.dashboard,
        }),
    ],
    rootPath: '/admin',
});

const router = AdminJSExpress.buildRouter(adminJs);

export { adminJs, router };