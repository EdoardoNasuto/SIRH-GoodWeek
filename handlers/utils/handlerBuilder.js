import fs from 'fs';
import path from 'path';
import db from '../../models/index.js';

// Fonction utilitaire pour lire les fichiers SQL
const readSQLFile = (filename) => fs.readFileSync(path.resolve('queries', `${filename}.sql`), 'utf8');

/**
 * Builder de requêtes SQL
 * @param {Array} queries - Un tableau de noms de fichiers SQL sans l'extension.
 * @returns {Promise<Object>} - Un objet avec les résultats des requêtes.
 */
export const handlerBuilder = async (queries) => {
    const results = await Promise.all(
        queries.map(async (query) => {
            const queryText = readSQLFile(query);
            return db.sequelize.query(queryText, { type: db.Sequelize.QueryTypes.SELECT });
        })
    );

    // Retourner les résultats sous forme d'un objet
    return Object.fromEntries(
        queries.map((query, index) => [query, results[index]])
    );
};