import { handlerBuilder } from './utils/handlerBuilder.js';

export const dashboard = async (req, res, context) => {
    const queries = [
        'nb_employes',
        'nb_projets',
        'nb_clients',
        'nb_produits',
    ];

    const response = await handlerBuilder(queries);

    return { data: response };
};