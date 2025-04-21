export default (sequelize, DataTypes) => {
    const Livrable = sequelize.define('Livrable', {
        nom_livrable: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description_livrable: DataTypes.TEXT,
        date_livraison_livrable: DataTypes.DATE,
        statut_livrable: DataTypes.STRING(50),
        id_projet: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, { freezeTableName: true });

    Livrable.associate = (models) => {
        Livrable.belongsTo(models.Projet, { foreignKey: 'id_projet' });
    };

    return Livrable;
};