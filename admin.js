import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';

import db from './models/index.js';
import { componentLoader, Components } from './components/index.js';
import handlers from './handlers/index.js';

import createPageResource from './utils/pageResource.js';
import navigation from './navigation.js';

const adminJs = new AdminJS({
    rootPath: '/',
    branding: {
        logo: 'https://cdn-icons-png.flaticon.com/512/1505/1505708.png',
        companyName: 'GoodWeek',
        withMadeWithLove: false,
        favicon: 'https://cdn-icons-png.flaticon.com/512/1505/1505708.png',
    },
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
});

const router = AdminJSExpress.buildRouter(adminJs);

export { adminJs, router };