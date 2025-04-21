export default (sequelize, DataTypes) => {
    const Tache = sequelize.define('Tache', {
        nom_tache: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description_tache: DataTypes.TEXT,
        type_tache: DataTypes.STRING(50),
        date_debut_tache: DataTypes.DATE,
        date_fin_tache: DataTypes.DATE,
        statut_tache: DataTypes.STRING(50),
        progression_tache: DataTypes.STRING,
        cout_tache: DataTypes.STRING,
        id_projet: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {});

    Tache.associate = (models) => {
        Tache.belongsTo(models.Projet, { foreignKey: 'id_projet' });
        Tache.hasMany(models.Affectation, { foreignKey: 'id_tache' });
        Tache.hasMany(models.Document_tache, { foreignKey: 'id_tache' });
        Tache.hasMany(models.Utilisation_ressource, { foreignKey: 'id_tache' });
    };

    return Tache;
};