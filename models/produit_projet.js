export default (sequelize, DataTypes) => {
    const Produit_projet = sequelize.define('Produit_projet', {
        prix_produit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantite_produit: DataTypes.STRING(50),
    }, {});

    Produit_projet.associate = (models) => {
        Produit_projet.belongsTo(models.Projet, { foreignKey: 'id_projet' });
        Produit_projet.belongsTo(models.Produit, { foreignKey: 'id_produit' });
    };

    return Produit_projet;
};