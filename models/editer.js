export default (sequelize, DataTypes) => {
    const Editer = sequelize.define('Editer', {
        date_editer: {
            type: DataTypes.DATE,
            allowNull: false
        },
        commentaire: DataTypes.TEXT,
    }, { freezeTableName: true });

    Editer.associate = (models) => {
        Editer.belongsTo(models.Employe, { foreignKey: 'id_employe' });
        Editer.belongsTo(models.Document, { foreignKey: 'id_document' });
    };

    return Editer;
};