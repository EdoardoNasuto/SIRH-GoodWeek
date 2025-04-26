import db from '../models/index.js';

export const dashboard = async (req, res, context) => {
    return {
        data: [
            { sexe: 'Femme', count: await db.Employe.count({ where: { sexe: 'Féminin' } }) },
            { sexe: 'Homme', count: await db.Employe.count({ where: { sexe: 'Masculin' } }) },
        ],
    };
};