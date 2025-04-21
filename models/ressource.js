export default (sequelize, DataTypes) => {
    const Ressource = sequelize.define('Ressource', {
        nom_ressource: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        type_ressource: DataTypes.STRING(50),
        cout_horaire_ressource: DataTypes.STRING,
        id_site: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {});

    Ressource.associate = (models) => {
        Ressource.belongsTo(models.Site, { foreignKey: 'id_site' });
        Ressource.hasMany(models.Utiliser, { foreignKey: 'id_ressource' });
    };

    return Ressource;
};