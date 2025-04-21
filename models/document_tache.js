export default (sequelize, DataTypes) => {
    const Document_tache = sequelize.define('Document_tache', {
    }, {});

    Document_tache.associate = (models) => {
        Document_tache.belongsTo(models.Tache, { foreignKey: 'id_tache' });
        Document_tache.belongsTo(models.Document, { foreignKey: 'id_document' });
    };

    return Document_tache;
};