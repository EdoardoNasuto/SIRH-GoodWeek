import { handlerBuilder } from './utils/handlerBuilder.js';

export const gender_equity = async (req, res, context) => {
    const queries = [
        'egalite_homme_femme',
        'ecart_salarial_par_sexe',
        'nb_employe_direction_par_sexe',
        'anciennete_par_sexe'
    ];

    const response = await handlerBuilder(queries);

    return { data: response };
};