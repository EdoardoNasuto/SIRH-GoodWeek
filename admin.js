import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import db from './models/index.js';
import { componentLoader, Components } from './components/index.js';

const adminJs = new AdminJS({
    dashboard: {
        component: Components.dashboard,
        handler: async (req, res, context) => {
            const femmes = await db.Employe.count({ where: { sexe: 'Féminin' } });
            const hommes = await db.Employe.count({ where: { sexe: 'Masculin' } });

            return {
                data: [
                    { sexe: 'Femme', count: femmes },
                    { sexe: 'Homme', count: hommes },
                ],
            };
        },
    },
    componentLoader,
    databases: [db],
    rootPath: '/admin',
});

const router = AdminJSExpress.buildRouter(adminJs);

export { adminJs, router };