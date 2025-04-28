import { handlerBuilder } from './utils/handlerBuilder.js';

export const gender_equity = async (req, res, context) => {
    const queries = [
        'repartition_homme_femme',
        'ecart_salarial_entre_sexes',
        'nombre_de_femme_direction',
        'ancienete_par_sexe'
    ];

    const response = await handlerBuilder(queries);

    return { data: response };
};