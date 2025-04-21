export default (sequelize, DataTypes) => {
    const Produire = sequelize.define('Produire', {
        prix_produit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantite_produit: DataTypes.STRING(50),
    }, {});

    Produire.associate = (models) => {
        Produire.belongsTo(models.Projet, { foreignKey: 'id_projet' });
        Produire.belongsTo(models.Produit, { foreignKey: 'id_produit' });
    };

    return Produire;
};