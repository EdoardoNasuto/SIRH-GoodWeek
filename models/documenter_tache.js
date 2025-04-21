export default (sequelize, DataTypes) => {
    const Documenter_tache = sequelize.define('Documenter_tache', {
    }, {});

    Documenter_tache.associate = (models) => {
        Documenter_tache.belongsTo(models.Tache, { foreignKey: 'id_tache' });
        Documenter_tache.belongsTo(models.Document, { foreignKey: 'id_document' });
    };

    return Documenter_tache;
};