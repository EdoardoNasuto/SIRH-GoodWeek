export default (sequelize, DataTypes) => {
    const Projet = sequelize.define('Projet', {
        nom_projet: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description_projet: DataTypes.TEXT,
        date_debut_projet: DataTypes.DATE,
        date_fin_projet: DataTypes.DATE,
        statut_projet: DataTypes.STRING(50),
        budget_projet: DataTypes.STRING,
        cout_projet: DataTypes.STRING,
        depense: DataTypes.STRING,
        id_client: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    }, {});

    Projet.associate = (models) => {
        Projet.belongsTo(models.Client, { foreignKey: 'id_client' });
        Projet.hasMany(models.Tache, { foreignKey: 'id_projet' });
        Projet.hasMany(models.Livrable, { foreignKey: 'id_projet' });
        Projet.hasMany(models.Reunir, { foreignKey: 'id_projet' });
        Projet.hasMany(models.Document_projet, { foreignKey: 'id_projet' });
        Projet.hasMany(models.Produit_projet, { foreignKey: 'id_projet' });
    };

    return Projet;
};