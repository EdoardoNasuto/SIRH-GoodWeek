export default (sequelize, DataTypes) => {
    const Maitriser = sequelize.define('Maitriser', {
        niveau: DataTypes.STRING,
    }, { freezeTableName: true });

    Maitriser.associate = (models) => {
        Maitriser.belongsTo(models.Employe, { foreignKey: 'id_employe' });
        Maitriser.belongsTo(models.Competence, { foreignKey: 'id_competence' });
    };

    return Maitriser;
};