import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import db from './models/index.js';
import { componentLoader, Components } from './components/index.js';
import handlers from './handlers/index.js';

const adminJs = new AdminJS({
    dashboard: {
        component: Components.dashboard,
        handler: handlers.dashboard2,
    },
    componentLoader,
    databases: [db],
    rootPath: '/admin',
});

const router = AdminJSExpress.buildRouter(adminJs);

export { adminJs, router };