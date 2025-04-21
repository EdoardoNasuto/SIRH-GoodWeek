export default (sequelize, DataTypes) => {
    const Niveau_employe = sequelize.define('Niveau_employe', {
        niveau: DataTypes.STRING,
    }, {});

    Niveau_employe.associate = (models) => {
        Niveau_employe.belongsTo(models.Employe, { foreignKey: 'id_employe' });
        Niveau_employe.belongsTo(models.Competence, { foreignKey: 'id_competence' });
    };

    return Niveau_employe;
};