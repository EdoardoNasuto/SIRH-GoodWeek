export default (sequelize, DataTypes) => {
    const Reunir = sequelize.define('Reunir', {
    }, {});

    Reunir.associate = (models) => {
        Reunir.belongsTo(models.Projet, { foreignKey: 'id_projet' });
        Reunir.belongsTo(models.Reunion, { foreignKey: 'id_reunion' });
    };

    return Reunir;
};