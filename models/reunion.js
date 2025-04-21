export default (sequelize, DataTypes) => {
    const Reunion = sequelize.define('Reunion', {
        objet_reunion: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        date_reunion: {
            type: DataTypes.DATE,
            allowNull: false
        },
        lieu_reunion: DataTypes.STRING(50),
        compte_rendu_reunion: DataTypes.TEXT,
    }, { freezeTableName: true });

    Reunion.associate = (models) => {
        Reunion.hasMany(models.Comporter, { foreignKey: 'id_reunion' });
        Reunion.hasMany(models.Participer, { foreignKey: 'id_reunion' });
    };

    return Reunion;
};