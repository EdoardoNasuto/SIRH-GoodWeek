export default (sequelize, DataTypes) => {
    const Utilisation_ressource = sequelize.define('Utilisation_ressource', {
        date_utilisation: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nb_heure_utilisation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {});

    Utilisation_ressource.associate = (models) => {
        Utilisation_ressource.belongsTo(models.Tache, { foreignKey: 'id_tache' });
        Utilisation_ressource.belongsTo(models.Ressource, { foreignKey: 'id_ressource' });
    };

    return Utilisation_ressource;
};