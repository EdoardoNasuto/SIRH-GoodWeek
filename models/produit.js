export default (sequelize, DataTypes) => {
    const Produit = sequelize.define('Produit', {
        nom_produit: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        type_produit: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        cout: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {});

    Produit.associate = (models) => {
        Produit.hasMany(models.Produit_projet, { foreignKey: 'id_produit' });
    };

    return Produit;
};