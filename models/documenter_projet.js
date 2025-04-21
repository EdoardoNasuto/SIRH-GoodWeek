export default (sequelize, DataTypes) => {
    const Documenter_projet = sequelize.define('Documenter_projet', {
    }, {});

    Documenter_projet.associate = (models) => {
        Documenter_projet.belongsTo(models.Projet, { foreignKey: 'id_projet' });
        Documenter_projet.belongsTo(models.Document, { foreignKey: 'id_document' });
    };

    return Documenter_projet;
};