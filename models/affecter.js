export default (sequelize, DataTypes) => {
    const Affecter = sequelize.define('Affecter', {
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
    }, { freezeTableName: true });

    Affecter.associate = (models) => {
        Affecter.belongsTo(models.Employe, { foreignKey: 'id_employe' });
        Affecter.belongsTo(models.Tache, { foreignKey: 'id_tache' });
    };

    return Affecter;
};