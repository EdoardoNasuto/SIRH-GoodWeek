export default (sequelize, DataTypes) => {
    const Employe = sequelize.define('Employe', {
        nom_employe: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        prenom_employe: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        mot_de_passe_employe: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        date_de_naissance_employe: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        sexe: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email_employe: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        telephone_employe: DataTypes.STRING(50),
        poste_employe: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        role_employe: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        date_embauche_employe: DataTypes.DATE,
        id_site: DataTypes.INTEGER,
        id_service: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    }, {});

    Employe.associate = (models) => {
        Employe.belongsTo(models.Site, { foreignKey: 'id_site' });
        Employe.belongsTo(models.Service, { foreignKey: 'id_service' });
        Employe.hasMany(models.Contrat, { foreignKey: 'id_employe' });
        Employe.hasMany(models.Conge, { foreignKey: 'id_employe' });
        Employe.hasMany(models.Niveau_employe, { foreignKey: 'id_employe' });
        Employe.hasMany(models.Affectation, { foreignKey: 'id_employe' });
        Employe.hasMany(models.Participant_reunion, { foreignKey: 'id_employe' });
        Employe.hasMany(models.Editer, { foreignKey: 'id_employe' });
    };

    return Employe;
};