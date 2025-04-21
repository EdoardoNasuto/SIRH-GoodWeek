export default (sequelize, DataTypes) => {
    const Site = sequelize.define('Site', {
        nom_site: DataTypes.STRING(50),
        adresse_site: DataTypes.STRING(50),
    }, { freezeTableName: true });

    Site.associate = (models) => {
        Site.hasMany(models.Ressource, { foreignKey: 'id_site' });
        Site.hasMany(models.Employe, { foreignKey: 'id_site' });
    };

    return Site;
};