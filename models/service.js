export default (sequelize, DataTypes) => {
    const Service = sequelize.define('Service', {
        nom_service: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description_service: DataTypes.STRING(50),
    }, { freezeTableName: true });

    Service.associate = (models) => {
        Service.hasMany(models.Employe, { foreignKey: 'id_service' });
    };

    return Service;
};