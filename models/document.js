export default (sequelize, DataTypes) => {
    const Document = sequelize.define('Document', {
        nom_document: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        type_document: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        url_document: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date_document: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {});

    Document.associate = (models) => {
        Document.hasMany(models.Documenter_projet, { foreignKey: 'id_document' });
        Document.hasMany(models.Documenter_tache, { foreignKey: 'id_document' });
        Document.hasMany(models.Editer, { foreignKey: 'id_document' });
    };

    return Document;
};