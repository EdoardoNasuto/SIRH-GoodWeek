import db from '../models/index.js';

export const gender_equity = async (req, res, context) => {
    // Première requête : répartition des employés par sexe
    const repartition_homme_femme = await db.sequelize.query(
        `SELECT sexe, COUNT(*) AS count 
         FROM Employe
         GROUP BY sexe`,
        {
            type: db.Sequelize.QueryTypes.SELECT,
        }
    );

    // Deuxième requête : écart salarial entre les sexes
    const ecart_salarial_entre_sexes = await db.sequelize.query(
        `SELECT "Employe"."sexe", 
                ROUND(AVG(CAST("Contrat"."remuneration_h" AS FLOAT)) * 151.67, 2) AS salaire_moyen
         FROM "Contrat"
         JOIN "Employe" ON "Contrat"."id_employe" = "Employe"."id"
         WHERE "Employe"."sexe" IN ('Féminin', 'Masculin')
         GROUP BY "Employe"."sexe"`,
        {
            type: db.Sequelize.QueryTypes.SELECT,
        }
    );

    return {
        data: {
            repartition_homme_femme,
            ecart_salarial_entre_sexes,
        }
    };
};