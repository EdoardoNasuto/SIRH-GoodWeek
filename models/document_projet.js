export default (sequelize, DataTypes) => {
    const Document_projet = sequelize.define('Document_projet', {
    }, {});

    Document_projet.associate = (models) => {
        Document_projet.belongsTo(models.Projet, { foreignKey: 'id_projet' });
        Document_projet.belongsTo(models.Document, { foreignKey: 'id_document' });
    };

    return Document_projet;
};