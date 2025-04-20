import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import db from './models/index.js';

const adminJs = new AdminJS({
    databases: [db],
    rootPath: '/admin',
});

const router = AdminJSExpress.buildRouter(adminJs);

export { adminJs, router };