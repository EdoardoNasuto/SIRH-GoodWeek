export async function populate(db) {
    try {
        await db.Competence.bulkCreate(competences);
        await db.Client.bulkCreate(clients);
        await db.Reunion.bulkCreate(reunions);
        // etc...
        console.log('Base de données peuplée avec succès !');
    } catch (error) {
        console.error('Erreur lors du peuplement de la base de données :', error);
    }
}