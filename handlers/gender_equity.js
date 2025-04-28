import fs from 'fs';
import path from 'path';
import db from '../models/index.js';

const readSQLFile = (filename) => fs.readFileSync(path.resolve('queries', `${filename}.sql`), 'utf8');

const queries = [
    'repartition_homme_femme',
    'ecart_salarial_entre_sexes',
    'nombre_de_femme_direction',
    'ancienete_par_sexe'
];

export const gender_equity = async (req, res, context) => {
    const results = await Promise.all(
        queries.map(async (query) => {
            const queryText = readSQLFile(query);
            return db.sequelize.query(queryText, { type: db.Sequelize.QueryTypes.SELECT });
        })
    );

    const response = Object.fromEntries(
        queries.map((query, index) => [query, results[index]])
    );

    return { data: response };
};