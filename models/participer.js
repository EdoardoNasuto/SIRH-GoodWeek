export default (sequelize, DataTypes) => {
    const Participer = sequelize.define('Participer', {
        presence_reunion: DataTypes.STRING,
        role_participant: DataTypes.STRING(50),
    }, { freezeTableName: true });

    Participer.associate = (models) => {
        Participer.belongsTo(models.Employe, { foreignKey: 'id_employe' });
        Participer.belongsTo(models.Reunion, { foreignKey: 'id_reunion' });
    };

    return Participer;
};