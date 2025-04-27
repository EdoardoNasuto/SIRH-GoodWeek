import db from '../models/index.js';

export const dashboard = async (req, res, context) => {
    const hommeFemmeData = [
        { sexe: 'Femme', count: await db.Employe.count({ where: { sexe: 'Féminin' } }) },
        { sexe: 'Homme', count: await db.Employe.count({ where: { sexe: 'Masculin' } }) },
    ];

    const autreData = [
        { type: 'CDI', count: 5 },
        { type: 'CDD', count: 10 },
    ];

    return {
        data: {
            hommeFemme: hommeFemmeData,
            typeContrat: autreData,
        }
    };
};