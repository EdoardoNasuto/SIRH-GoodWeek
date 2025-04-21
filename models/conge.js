export default (sequelize, DataTypes) => {
    const Conge = sequelize.define('Conge', {
        date_debut_conge: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        date_fin_conge: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        motif: DataTypes.TEXT,
        id_employe: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {});

    Conge.associate = (models) => {
        Conge.belongsTo(models.Employe, { foreignKey: 'id_employe' });
    };

    return Conge;
};