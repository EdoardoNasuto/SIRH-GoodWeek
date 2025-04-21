export default (sequelize, DataTypes) => {
    const Affectation = sequelize.define('Affectation', {
        id_affectation: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        date_affectation: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nb_heure_affectation: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    }, {});

    Affectation.associate = (models) => {
        Affectation.belongsTo(models.Employe, { foreignKey: 'id_employe' });
        Affectation.belongsTo(models.Tache, { foreignKey: 'id_tache' });
    };

    return Affectation;
};