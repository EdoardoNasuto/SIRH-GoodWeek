export default (sequelize, DataTypes) => {
    const Competence = sequelize.define('Competence', {
        nom_competence: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: DataTypes.TEXT,
    }, {});

    Competence.associate = (models) => {
        Competence.hasMany(models.Maitriser, { foreignKey: 'id_competence' });
    };

    return Competence;
};