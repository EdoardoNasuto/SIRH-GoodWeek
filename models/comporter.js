export default (sequelize, DataTypes) => {
    const Comporter = sequelize.define('Comporter', {
    }, {});

    Comporter.associate = (models) => {
        Comporter.belongsTo(models.Projet, { foreignKey: 'id_projet' });
        Comporter.belongsTo(models.Reunion, { foreignKey: 'id_reunion' });
    };

    return Comporter;
};