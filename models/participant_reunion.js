export default (sequelize, DataTypes) => {
    const Participant_reunion = sequelize.define('Participant_reunion', {
        presence_reunion: DataTypes.STRING,
        role_participant: DataTypes.STRING(50),
    }, {});

    Participant_reunion.associate = (models) => {
        Participant_reunion.belongsTo(models.Employe, { foreignKey: 'id_employe' });
        Participant_reunion.belongsTo(models.Reunion, { foreignKey: 'id_reunion' });
    };

    return Participant_reunion;
};