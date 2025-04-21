export default (sequelize, DataTypes) => {
    const Contrat = sequelize.define('Contrat', {
        type_contrat: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        date_debut_contrat: {
            type: DataTypes.DATE,
            allowNull: false
        },
        date_fin_contrat: DataTypes.DATE,
        remuneration_h: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_employe: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, { freezeTableName: true });

    Contrat.associate = (models) => {
        Contrat.belongsTo(models.Employe, { foreignKey: 'id_employe' });
    };

    return Contrat;
};