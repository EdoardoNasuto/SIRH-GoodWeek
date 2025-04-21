export default (sequelize, DataTypes) => {
    const Utiliser = sequelize.define('Utiliser', {
        date_utilisation: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nb_heure_utilisation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {});

    Utiliser.associate = (models) => {
        Utiliser.belongsTo(models.Tache, { foreignKey: 'id_tache' });
        Utiliser.belongsTo(models.Ressource, { foreignKey: 'id_ressource' });
    };

    return Utiliser;
};