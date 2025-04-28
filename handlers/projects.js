import { handlerBuilder } from './utils/handlerBuilder.js';

export const projects = async (req, res, context) => {
    const queries = [
        'projets_par_clients',
    ];

    const response = await handlerBuilder(queries);

    return { data: response };
};