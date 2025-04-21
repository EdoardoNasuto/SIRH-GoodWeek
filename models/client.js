export default (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        nom_client: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email_client: DataTypes.STRING(50),
        telephone_client: DataTypes.STRING(50),
    }, {});

    Client.associate = (models) => {
        Client.hasMany(models.Projet, { foreignKey: 'id_client' });
    };

    return Client;
};