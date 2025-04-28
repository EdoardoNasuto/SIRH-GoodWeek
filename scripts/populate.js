import db from '../models/index.js';

const competences = [
    { nom_competence: 'Conception Pneumatique', description: 'Conception et simulation des pneus pour différents types de véhicules.' },
    { nom_competence: 'Analyse de Matériaux', description: 'Étude des matériaux utilisés dans la fabrication des pneumatiques.' },
    { nom_competence: 'Gestion de Projet', description: 'Gestion de projets dans le domaine de la production et de la R&D.' },
    { nom_competence: 'Marketing Digital', description: 'Création et gestion des campagnes marketing digitales.' },
    { nom_competence: 'Ventes B2B', description: 'Stratégie et vente directe aux entreprises pour la fourniture de pneus.' },
    { nom_competence: 'Production Industrielle', description: 'Connaissance des processus industriels pour la fabrication des pneumatiques.' },
    { nom_competence: 'Ressources Humaines', description: 'Gestion des ressources humaines, recrutement et bien-être des employés.' },
    { nom_competence: 'Logistique et Approvisionnement', description: 'Planification et gestion de l’approvisionnement des matériaux pour la production.' },
    { nom_competence: 'Gestion Financière', description: 'Contrôle et analyse des coûts dans les projets de recherche et production.' },
    { nom_competence: 'Veille Technologique', description: 'Suivi des dernières innovations et technologies dans le domaine des pneumatiques.' }
];

const clients = [
    { nom_client: 'AutoTech', email_client: 'contact@autotech.com', telephone_client: '0123456789' },
    { nom_client: 'MecaTyre', email_client: 'info@mechatyre.com', telephone_client: '0987654321' },
    { nom_client: 'SpeedTire', email_client: 'support@speedtire.com', telephone_client: '0147258369' },
    { nom_client: 'EcoDrive', email_client: 'contact@ecodrive.fr', telephone_client: '0163487920' },
    { nom_client: 'TyreMasters', email_client: 'sales@tyremasters.fr', telephone_client: '0154698210' },
    { nom_client: 'FastPneu', email_client: 'service@fastpneu.com', telephone_client: '0173849201' },
    { nom_client: 'DriveSafe', email_client: 'contact@drivesafe.fr', telephone_client: '0182945603' },
    { nom_client: 'PneuMax', email_client: 'support@pneumax.fr', telephone_client: '0193759284' },
    { nom_client: 'PneusRoutiers', email_client: 'info@pneusroutiers.com', telephone_client: '0162893478' },
    { nom_client: 'LuxeTyre', email_client: 'sales@luxetyre.com', telephone_client: '0183794627' }
];

const reunions = [
    { objet_reunion: 'Planification de la production', date_reunion: '2025-05-10 09:00:00', lieu_reunion: 'Site Paris', compte_rendu_reunion: 'Discussion sur les besoins en ressources et les plannings de production.' },
    { objet_reunion: 'Suivi de l\'innovation', date_reunion: '2025-05-12 14:00:00', lieu_reunion: 'Site Lyon', compte_rendu_reunion: 'Revue des dernières recherches sur les matériaux innovants.' },
    { objet_reunion: 'Stratégie Marketing', date_reunion: '2025-05-15 11:00:00', lieu_reunion: 'Site Bordeaux', compte_rendu_reunion: 'Présentation des nouvelles campagnes marketing pour le lancement du produit.' },
    { objet_reunion: 'Développement de nouveaux produits', date_reunion: '2025-05-18 10:00:00', lieu_reunion: 'Site Lille', compte_rendu_reunion: 'Exploration des pistes pour le développement de nouveaux pneus écologiques.' },
    { objet_reunion: 'Revue des performances commerciales', date_reunion: '2025-05-20 16:00:00', lieu_reunion: 'Site Marseille', compte_rendu_reunion: 'Analyse des ventes et des performances des différents produits.' },
    { objet_reunion: 'Formation R&D', date_reunion: '2025-05-22 08:30:00', lieu_reunion: 'Site Nantes', compte_rendu_reunion: 'Session de formation sur les nouvelles méthodes de recherche en technologie des pneumatiques.' },
    { objet_reunion: 'Mise à jour des ressources humaines', date_reunion: '2025-05-25 15:00:00', lieu_reunion: 'Site Lyon', compte_rendu_reunion: 'Discussion sur la gestion des talents et des recrutements à venir.' },
    { objet_reunion: 'Analyse des retours clients', date_reunion: '2025-05-27 13:00:00', lieu_reunion: 'Site Paris', compte_rendu_reunion: 'Examen des retours et plaintes des clients pour améliorer les produits.' },
    { objet_reunion: 'Planning de maintenance', date_reunion: '2025-05-30 09:30:00', lieu_reunion: 'Site Toulouse', compte_rendu_reunion: 'Planification des maintenances préventives et des mises à jour des équipements.' },
    { objet_reunion: 'Sécurité au travail', date_reunion: '2025-06-02 14:00:00', lieu_reunion: 'Site Marseille', compte_rendu_reunion: 'Discussion sur la sécurité des employés et les mesures à mettre en place.' }
];

const documents = [
    { nom_document: 'Rapport annuel 2024', type_document: 'PDF', url_document: 'https://www.goodweek.com/rapport_annuel_2024.pdf', date_document: '2025-04-01 10:00:00' },
    { nom_document: 'Analyse des matériaux pour pneus', type_document: 'PDF', url_document: 'https://www.goodweek.com/analyse_materiaux.pdf', date_document: '2025-03-15 14:00:00' },
    { nom_document: 'Plan marketing 2025', type_document: 'Word', url_document: 'https://www.goodweek.com/plan_marketing_2025.docx', date_document: '2025-02-20 09:00:00' },
    { nom_document: 'Étude sur la performance des pneus', type_document: 'PDF', url_document: 'https://www.goodweek.com/etude_performance_pneus.pdf', date_document: '2025-01-10 11:30:00' },
    { nom_document: 'Rapport de production Q1 2025', type_document: 'Excel', url_document: 'https://www.goodweek.com/rapport_production_Q1_2025.xlsx', date_document: '2025-04-05 16:00:00' },
    { nom_document: 'Proposition de partenariat avec AutoTech', type_document: 'PDF', url_document: 'https://www.goodweek.com/proposition_partenaire_autotech.pdf', date_document: '2025-03-25 15:00:00' },
    { nom_document: 'Compte-rendu réunion stratégie R&D', type_document: 'Word', url_document: 'https://www.goodweek.com/compte_rendu_RD.pdf', date_document: '2025-05-05 08:45:00' },
    { nom_document: 'Résultats du test de nouveaux matériaux', type_document: 'PDF', url_document: 'https://www.goodweek.com/resultats_test_materiaux.pdf', date_document: '2025-04-15 17:00:00' },
    { nom_document: 'Fiche technique produit PneuMax', type_document: 'PDF', url_document: 'https://www.goodweek.com/fiche_technique_pneumax.pdf', date_document: '2025-05-01 12:00:00' },
    { nom_document: 'Procédure de sécurité en production', type_document: 'Word', url_document: 'https://www.goodweek.com/procedure_securite_production.docx', date_document: '2025-04-30 10:30:00' }
];

const services = [
    { nom_service: 'Recherche et Développement', description_service: 'Développement de nouveaux produits et innovations technologiques dans le domaine des pneumatiques.' },
    { nom_service: 'Marketing', description_service: 'Stratégies de marketing pour la promotion des produits et services, gestion de la communication.' },
    { nom_service: 'Commercial', description_service: 'Gestion des ventes et des relations clients, négociation de contrats B2B et B2C.' },
    { nom_service: 'Production', description_service: 'Gestion de la fabrication des pneumatiques, optimisation des processus de production.' },
    { nom_service: 'Ressources Humaines', description_service: 'Recrutement, gestion des talents, formation, et bien-être des employés.' },
    { nom_service: 'Logistique', description_service: 'Organisation du transport, de la distribution et de l’approvisionnement en matières premières.' },
    { nom_service: 'Qualité', description_service: 'Assurance qualité des produits et processus, conformité aux normes industrielles et environnementales.' },
    { nom_service: 'Finance', description_service: 'Gestion financière, analyse des coûts et des dépenses, suivi du budget des projets.' },
    { nom_service: 'Support Client', description_service: 'Assistance aux clients, gestion des réclamations et des retours produits.' },
    { nom_service: 'Informatique', description_service: 'Support technique, gestion des systèmes d’information et développement des outils logiciels.' }
];

const sites = [
    { nom_site: 'Paris', adresse_site: '12 Rue de la Victoire, Paris, France' },
    { nom_site: 'Lyon', adresse_site: '45 Avenue des Frères Lumière, Lyon, France' },
    { nom_site: 'Marseille', adresse_site: '78 Boulevard de la Méditerranée, Marseille, France' },
    { nom_site: 'Bordeaux', adresse_site: '23 Rue de la République, Bordeaux, France' },
    { nom_site: 'Lille', adresse_site: '56 Rue de l\'Université, Lille, France' }
];

const produits = [
    { nom_produit: 'Pneu 205/55 R16', type_produit: 'Pneu été', cout: 100.00 },
    { nom_produit: 'Pneu 225/45 R17', type_produit: 'Pneu hiver', cout: 120.00 },
    { nom_produit: 'Pneu 185/65 R15', type_produit: 'Pneu tout temps', cout: 90.00 },
    { nom_produit: 'Pneu 245/40 R18', type_produit: 'Pneu été', cout: 150.00 },
    { nom_produit: 'Pneu 195/60 R15', type_produit: 'Pneu économique', cout: 80.00 },
    { nom_produit: 'Pneu 275/35 R20', type_produit: 'Pneu sport', cout: 200.00 },
    { nom_produit: 'Pneu 255/50 R19', type_produit: 'Pneu 4x4', cout: 130.00 },
    { nom_produit: 'Pneu 215/55 R17', type_produit: 'Pneu tout temps', cout: 110.00 },
    { nom_produit: 'Pneu 235/60 R18', type_produit: 'Pneu hiver', cout: 140.00 },
    { nom_produit: 'Pneu 205/50 R16', type_produit: 'Pneu été', cout: 95.00 }
];

const ressources = [
    { nom_ressource: 'Machine de moulage', type_ressource: 'Machine de production', cout_horaire_ressource: 50.00, id_site: 1 },
    { nom_ressource: 'Robot de montage', type_ressource: 'Robot industriel', cout_horaire_ressource: 60.00, id_site: 2 },
    { nom_ressource: 'Presses hydrauliques', type_ressource: 'Machine de production', cout_horaire_ressource: 70.00, id_site: 3 },
    { nom_ressource: 'Chambre climatique', type_ressource: 'Équipement de test', cout_horaire_ressource: 40.00, id_site: 4 },
    { nom_ressource: 'Système de test de résistance', type_ressource: 'Équipement de test', cout_horaire_ressource: 45.00, id_site: 5 },
    { nom_ressource: 'Machine de contrôle qualité', type_ressource: 'Machine de production', cout_horaire_ressource: 55.00, id_site: 1 },
    { nom_ressource: 'Imprimante 3D', type_ressource: 'Équipement de prototypage', cout_horaire_ressource: 80.00, id_site: 2 },
    { nom_ressource: 'Scanner 3D', type_ressource: 'Équipement de test', cout_horaire_ressource: 65.00, id_site: 3 },
    { nom_ressource: 'Station de montage automatique', type_ressource: 'Robot industriel', cout_horaire_ressource: 90.00, id_site: 4 },
    { nom_ressource: 'Chambre de simulation climatique', type_ressource: 'Équipement de test', cout_horaire_ressource: 75.00, id_site: 5 }
];

const employes = [
    { nom_employe: 'Dupont', prenom_employe: 'Pierre', mot_de_passe_employe: 'password123', date_de_naissance_employe: '1985-04-10', sexe: 'Homme', email_employe: 'pierre.dupont@goodweek.com', telephone_employe: '0102030405', role_employe: 'Ingénieur R&D', date_embauche_employe: '2010-05-12', id_site: 1, id_service: 1 },
    { nom_employe: 'Martin', prenom_employe: 'Claire', mot_de_passe_employe: 'password123', date_de_naissance_employe: '1990-08-22', sexe: 'Femme', email_employe: 'claire.martin@goodweek.com', telephone_employe: '0102030406', role_employe: 'Responsable Marketing', date_embauche_employe: '2015-02-20', id_site: 2, id_service: 2 },
    { nom_employe: 'Lemoine', prenom_employe: 'Marc', mot_de_passe_employe: 'password123', date_de_naissance_employe: '1978-11-30', sexe: 'Homme', email_employe: 'marc.lemoine@goodweek.com', telephone_employe: '0102030407', role_employe: 'Chef de Production', date_embauche_employe: '2012-07-25', id_site: 3, id_service: 3 },
    { nom_employe: 'Bernard', prenom_employe: 'Sophie', mot_de_passe_employe: 'password123', date_de_naissance_employe: '1983-03-17', sexe: 'Femme', email_employe: 'sophie.bernard@goodweek.com', telephone_employe: '0102030408', role_employe: 'Commercial', date_embauche_employe: '2016-06-15', id_site: 4, id_service: 4 },
    { nom_employe: 'Durand', prenom_employe: 'Luc', mot_de_passe_employe: 'password123', date_de_naissance_employe: '1992-01-05', sexe: 'Homme', email_employe: 'luc.durand@goodweek.com', telephone_employe: '0102030409', role_employe: 'Responsable Logistique', date_embauche_employe: '2017-03-30', id_site: 5, id_service: 5 },
    { nom_employe: 'Petit', prenom_employe: 'Anne', mot_de_passe_employe: 'password123', date_de_naissance_employe: '1980-05-10', sexe: 'Femme', email_employe: 'anne.petit@goodweek.com', telephone_employe: '0102030410', role_employe: 'Ingénieur Qualité', date_embauche_employe: '2011-09-19', id_site: 1, id_service: 6 },
    { nom_employe: 'Leclerc', prenom_employe: 'David', mot_de_passe_employe: 'password123', date_de_naissance_employe: '1988-12-14', sexe: 'Homme', email_employe: 'david.leclerc@goodweek.com', telephone_employe: '0102030411', role_employe: 'Chef de projet', date_embauche_employe: '2014-04-10', id_site: 2, id_service: 7 },
    { nom_employe: 'Dufresne', prenom_employe: 'Julie', mot_de_passe_employe: 'password123', date_de_naissance_employe: '1994-07-22', sexe: 'Femme', email_employe: 'julie.dufresne@goodweek.com', telephone_employe: '0102030412', role_employe: 'Chargée de communication', date_embauche_employe: '2018-11-30', id_site: 3, id_service: 8 },
    { nom_employe: 'Fournier', prenom_employe: 'Philippe', mot_de_passe_employe: 'password123', date_de_naissance_employe: '1986-02-17', sexe: 'Homme', email_employe: 'philippe.fournier@goodweek.com', telephone_employe: '0102030413', role_employe: 'Responsable Production', date_embauche_employe: '2013-01-20', id_site: 4, id_service: 9 },
    { nom_employe: 'Robert', prenom_employe: 'Nathalie', mot_de_passe_employe: 'password123', date_de_naissance_employe: '1982-06-05', sexe: 'Femme', email_employe: 'nathalie.robert@goodweek.com', telephone_employe: '0102030414', role_employe: 'Ingénieur R&D', date_embauche_employe: '2010-08-30', id_site: 5, id_service: 10 }
];

const projets = [
    { nom_projet: 'Pneu éco-responsable', description_projet: 'Développement d\'un pneu utilisant des matériaux recyclés pour réduire l\'empreinte carbone.', date_debut_projet: '2023-01-15', date_fin_projet: '2024-01-15', statut_projet: 'En cours', budget_projet: 500000.00, cout_projet: 300000.00, depense: 150000.00, id_client: 1 },
    { nom_projet: 'Pneu haute performance', description_projet: 'Conception d\'un pneu de haute performance pour les voitures sportives.', date_debut_projet: '2023-06-01', date_fin_projet: '2024-06-01', statut_projet: 'En cours', budget_projet: 700000.00, cout_projet: 450000.00, depense: 200000.00, id_client: 2 },
    { nom_projet: 'Pneu tout terrain', description_projet: 'Conception d\'un pneu robuste pour véhicules tout terrain.', date_debut_projet: '2023-02-10', date_fin_projet: '2024-02-10', statut_projet: 'En cours', budget_projet: 600000.00, cout_projet: 400000.00, depense: 100000.00, id_client: 3 },
    { nom_projet: 'Pneu pour véhicules électriques', description_projet: 'Développement d\'un pneu spécifique pour les véhicules électriques, optimisant l\'autonomie.', date_debut_projet: '2023-03-01', date_fin_projet: '2024-03-01', statut_projet: 'En cours', budget_projet: 550000.00, cout_projet: 350000.00, depense: 120000.00, id_client: 4 },
    { nom_projet: 'Pneu anti-crevaison', description_projet: 'Développement d\'un pneu équipé d\'une technologie anti-crevaison révolutionnaire.', date_debut_projet: '2023-05-15', date_fin_projet: '2024-05-15', statut_projet: 'En cours', budget_projet: 650000.00, cout_projet: 420000.00, depense: 130000.00, id_client: 5 },
    { nom_projet: 'Pneu avec technologie de réduction du bruit', description_projet: 'Création d\'un pneu qui réduit le bruit de la route pour une conduite plus silencieuse.', date_debut_projet: '2023-04-01', date_fin_projet: '2024-04-01', statut_projet: 'En cours', budget_projet: 500000.00, cout_projet: 300000.00, depense: 95000.00, id_client: 6 },
    { nom_projet: 'Pneu renforcé pour poids lourds', description_projet: 'Conception d\'un pneu ultra-résistant pour les poids lourds, capable de supporter des charges lourdes.', date_debut_projet: '2023-07-10', date_fin_projet: '2024-07-10', statut_projet: 'En cours', budget_projet: 800000.00, cout_projet: 600000.00, depense: 150000.00, id_client: 7 },
    { nom_projet: 'Pneu intelligent', description_projet: 'Développement d\'un pneu intelligent capable de surveiller l\'usure et la pression en temps réel.', date_debut_projet: '2023-08-20', date_fin_projet: '2024-08-20', statut_projet: 'En cours', budget_projet: 750000.00, cout_projet: 500000.00, depense: 140000.00, id_client: 8 },
    { nom_projet: 'Pneu à faible consommation de carburant', description_projet: 'Développement d\'un pneu qui réduit la consommation de carburant des véhicules.', date_debut_projet: '2023-09-05', date_fin_projet: '2024-09-05', statut_projet: 'En cours', budget_projet: 600000.00, cout_projet: 400000.00, depense: 110000.00, id_client: 9 },
    { nom_projet: 'Pneu pour voitures autonomes', description_projet: 'Conception d\'un pneu spécialement adapté aux voitures autonomes, optimisant la conduite automatique.', date_debut_projet: '2023-10-01', date_fin_projet: '2024-10-01', statut_projet: 'En cours', budget_projet: 700000.00, cout_projet: 460000.00, depense: 125000.00, id_client: 10 }
];

const taches = [
    { nom_tache: 'Conception de la bande de roulement', description_tache: 'Conception et test des matériaux pour la bande de roulement du pneu.', type_tache: 'R&D', date_debut_tache: '2023-01-16', date_fin_tache: '2023-02-15', statut_tache: 'En cours', priorité_tache: 'Haute', progression_tache: 50.00, cout_tache: 50000.00, id_projet: 1 },
    { nom_tache: 'Analyse de la performance du pneu', description_tache: 'Tests en laboratoire pour analyser la performance du pneu sous différentes conditions.', type_tache: 'R&D', date_debut_tache: '2023-02-16', date_fin_tache: '2023-03-15', statut_tache: 'En cours', priorité_tache: 'Moyenne', progression_tache: 30.00, cout_tache: 45000.00, id_projet: 1 },
    { nom_tache: 'Développement du prototype', description_tache: 'Fabrication du premier prototype de pneu haute performance.', type_tache: 'R&D', date_debut_tache: '2023-06-02', date_fin_tache: '2023-07-15', statut_tache: 'En cours', priorité_tache: 'Haute', progression_tache: 40.00, cout_tache: 75000.00, id_projet: 2 },
    { nom_tache: 'Test de résistance', description_tache: 'Effectuer des tests de résistance pour vérifier la durabilité du pneu tout terrain.', type_tache: 'R&D', date_debut_tache: '2023-02-11', date_fin_tache: '2023-03-10', statut_tache: 'En cours', priorité_tache: 'Haute', progression_tache: 60.00, cout_tache: 60000.00, id_projet: 3 },
    { nom_tache: 'Développement de la technologie anti-crevaison', description_tache: 'R&D pour une technologie de pneu anti-crevaison.', type_tache: 'R&D', date_debut_tache: '2023-05-16', date_fin_tache: '2023-06-30', statut_tache: 'En cours', priorité_tache: 'Haute', progression_tache: 35.00, cout_tache: 70000.00, id_projet: 4 },
    { nom_tache: 'Tests d\'autonomie', description_tache: 'Tests de l\'autonomie des véhicules équipés de pneus pour voitures électriques.', type_tache: 'R&D', date_debut_tache: '2023-03-02', date_fin_tache: '2023-04-10', statut_tache: 'En cours', priorité_tache: 'Moyenne', progression_tache: 50.00, cout_tache: 55000.00, id_projet: 5 },
    { nom_tache: 'Optimisation de la réduction du bruit', description_tache: 'Optimisation des matériaux pour la réduction du bruit des pneus.', type_tache: 'R&D', date_debut_tache: '2023-04-02', date_fin_tache: '2023-05-10', statut_tache: 'En cours', priorité_tache: 'Haute', progression_tache: 70.00, cout_tache: 65000.00, id_projet: 6 },
    { nom_tache: 'Validation des pneus pour poids lourds', description_tache: 'Tests de validation des pneus pour poids lourds sous différentes conditions.', type_tache: 'R&D', date_debut_tache: '2023-07-11', date_fin_tache: '2023-08-20', statut_tache: 'En cours', priorité_tache: 'Haute', progression_tache: 45.00, cout_tache: 80000.00, id_projet: 7 },
    { nom_tache: 'Développement du système de surveillance', description_tache: 'R&D pour la création du système de surveillance de pression des pneus.', type_tache: 'R&D', date_debut_tache: '2023-08-21', date_fin_tache: '2023-09-15', statut_tache: 'En cours', priorité_tache: 'Moyenne', progression_tache: 25.00, cout_tache: 50000.00, id_projet: 8 },
    { nom_tache: 'Tests sur la consommation de carburant', description_tache: 'Tests pour mesurer la consommation de carburant avec les nouveaux pneus.', type_tache: 'R&D', date_debut_tache: '2023-09-06', date_fin_tache: '2023-10-10', statut_tache: 'En cours', priorité_tache: 'Moyenne', progression_tache: 20.00, cout_tache: 45000.00, id_projet: 9 }
];

const livrables = [
    { nom_livrable: 'Prototype du pneu', description_livrable: 'Prototype initial du pneu éco-responsable pour des tests en laboratoire.', date_livraison_livrable: '2023-02-01', statut_livrable: 'Livré', id_projet: 1 },
    { nom_livrable: 'Rapport des tests de performance', description_livrable: 'Rapport détaillant les résultats des tests de performance pour le pneu haute performance.', date_livraison_livrable: '2023-07-01', statut_livrable: 'Livré', id_projet: 2 },
    { nom_livrable: 'Prototype du pneu tout terrain', description_livrable: 'Prototype du pneu tout terrain pour les tests de résistance.', date_livraison_livrable: '2023-03-01', statut_livrable: 'Livré', id_projet: 3 },
    { nom_livrable: 'Prototype du pneu anti-crevaison', description_livrable: 'Prototype du pneu avec la technologie anti-crevaison.', date_livraison_livrable: '2023-06-01', statut_livrable: 'Livré', id_projet: 4 },
    { nom_livrable: 'Rapport sur les tests d\'autonomie', description_livrable: 'Rapport des tests d\'autonomie des véhicules électriques équipés de nouveaux pneus.', date_livraison_livrable: '2023-04-15', statut_livrable: 'Livré', id_projet: 5 },
    { nom_livrable: 'Prototype du pneu silencieux', description_livrable: 'Prototype des pneus optimisés pour une réduction significative du bruit.', date_livraison_livrable: '2023-05-20', statut_livrable: 'Livré', id_projet: 6 },
    { nom_livrable: 'Tests de validation des pneus pour poids lourds', description_livrable: 'Résultats des tests de validation des pneus pour poids lourds.', date_livraison_livrable: '2023-08-15', statut_livrable: 'Livré', id_projet: 7 },
    { nom_livrable: 'Prototype du pneu intelligent', description_livrable: 'Prototype de pneu intelligent avec système de surveillance intégré.', date_livraison_livrable: '2023-09-15', statut_livrable: 'Livré', id_projet: 8 },
    { nom_livrable: 'Rapport des tests sur la consommation de carburant', description_livrable: 'Rapport détaillant les résultats des tests sur la consommation de carburant des nouveaux pneus.', date_livraison_livrable: '2023-10-05', statut_livrable: 'Livré', id_projet: 9 },
    { nom_livrable: 'Prototype du pneu pour véhicules autonomes', description_livrable: 'Prototype du pneu conçu spécifiquement pour les véhicules autonomes.', date_livraison_livrable: '2023-11-10', statut_livrable: 'Livré', id_projet: 10 }
];

const contrats = [
    { type_contrat: 'CDI', date_debut_contrat: '2020-01-15', date_fin_contrat: null, nb_heure_contrat: 35, remuneration_h: 25.00, poste_contrat: 'Ingénieur R&D', id_employe: 1 },
    { type_contrat: 'CDD', date_debut_contrat: '2022-06-01', date_fin_contrat: '2023-06-01', nb_heure_contrat: 40, remuneration_h: 22.00, poste_contrat: 'Technicien de test', id_employe: 2 },
    { type_contrat: 'CDI', date_debut_contrat: '2019-04-20', date_fin_contrat: null, nb_heure_contrat: 35, remuneration_h: 28.00, poste_contrat: 'Chef de projet R&D', id_employe: 3 },
    { type_contrat: 'CDI', date_debut_contrat: '2021-09-10', date_fin_contrat: null, nb_heure_contrat: 35, remuneration_h: 30.00, poste_contrat: 'Responsable marketing', id_employe: 4 },
    { type_contrat: 'CDD', date_debut_contrat: '2022-07-01', date_fin_contrat: '2023-07-01', nb_heure_contrat: 40, remuneration_h: 20.00, poste_contrat: 'Assistant marketing', id_employe: 5 },
    { type_contrat: 'CDI', date_debut_contrat: '2020-11-15', date_fin_contrat: null, nb_heure_contrat: 35, remuneration_h: 24.00, poste_contrat: 'Ingénieur de production', id_employe: 6 },
    { type_contrat: 'CDI', date_debut_contrat: '2018-05-01', date_fin_contrat: null, nb_heure_contrat: 35, remuneration_h: 26.00, poste_contrat: 'Responsable qualité', id_employe: 7 },
    { type_contrat: 'CDI', date_debut_contrat: '2021-12-01', date_fin_contrat: null, nb_heure_contrat: 40, remuneration_h: 32.00, poste_contrat: 'Ingénieur matériaux', id_employe: 8 },
    { type_contrat: 'CDD', date_debut_contrat: '2023-01-01', date_fin_contrat: '2023-12-31', nb_heure_contrat: 40, remuneration_h: 21.00, poste_contrat: 'Technicien maintenance', id_employe: 9 },
    { type_contrat: 'CDI', date_debut_contrat: '2019-06-15', date_fin_contrat: null, nb_heure_contrat: 35, remuneration_h: 29.00, poste_contrat: 'Chef de production', id_employe: 10 }
];

const congés = [
    { date_debut_conge: '2023-02-15', date_fin_conge: '2023-02-22', type_congé: 'Congé payé', motif: 'Vacances', id_employe: 1 },
    { date_debut_conge: '2023-03-01', date_fin_conge: '2023-03-05', type_congé: 'Congé payé', motif: 'Voyage personnel', id_employe: 2 },
    { date_debut_conge: '2023-04-10', date_fin_conge: '2023-04-17', type_congé: 'Congé payé', motif: 'Congé familial', id_employe: 3 },
    { date_debut_conge: '2023-05-20', date_fin_conge: '2023-05-27', type_congé: 'Congé payé', motif: 'Vacances', id_employe: 4 },
    { date_debut_conge: '2023-06-10', date_fin_conge: '2023-06-15', type_congé: 'Congé payé', motif: 'Congé maternité', id_employe: 5 },
    { date_debut_conge: '2023-07-01', date_fin_conge: '2023-07-05', type_congé: 'Congé payé', motif: 'Congé personnel', id_employe: 6 },
    { date_debut_conge: '2023-08-01', date_fin_conge: '2023-08-10', type_congé: 'Congé payé', motif: 'Congé maladie', id_employe: 7 },
    { date_debut_conge: '2023-09-01', date_fin_conge: '2023-09-08', type_congé: 'Congé payé', motif: 'Voyage', id_employe: 8 },
    { date_debut_conge: '2023-10-15', date_fin_conge: '2023-10-22', type_congé: 'Congé payé', motif: 'Vacances', id_employe: 9 },
    { date_debut_conge: '2023-11-05', date_fin_conge: '2023-11-12', type_congé: 'Congé payé', motif: 'Récupération d\'heures', id_employe: 10 }
];

const maitrises = [
    { id: 1, id_employe: 1, id_competence: 1, niveau: '5' }, // Expertise en développement de produits
    { id: 2, id_employe: 1, id_competence: 2, niveau: '4' }, // Compétence avancée en tests de produits
    { id: 3, id_employe: 2, id_competence: 3, niveau: '3' }, // Compétence intermédiaire en marketing
    { id: 4, id_employe: 2, id_competence: 4, niveau: '2' }, // Compétence de base en gestion de projet
    { id: 5, id_employe: 3, id_competence: 1, niveau: '4' }, // Compétence avancée en recherche
    { id: 6, id_employe: 3, id_competence: 5, niveau: '5' }, // Expertise en gestion d'équipe
    { id: 7, id_employe: 4, id_competence: 3, niveau: '4' }, // Compétence avancée en communication
    { id: 8, id_employe: 4, id_competence: 6, niveau: '3' }, // Compétence intermédiaire en gestion de budget
    { id: 9, id_employe: 5, id_competence: 7, niveau: '5' }, // Expertise en stratégie marketing
    { id: 10, id_employe: 6, id_competence: 2, niveau: '4' }, // Compétence avancée en recherche et développement
    { id: 11, id_employe: 6, id_competence: 8, niveau: '3' }, // Compétence intermédiaire en négociation
    { id: 12, id_employe: 7, id_competence: 9, niveau: '4' }, // Compétence avancée en gestion de projet
    { id: 13, id_employe: 7, id_competence: 10, niveau: '2' }, // Compétence de base en analyse de données
    { id: 14, id_employe: 8, id_competence: 5, niveau: '3' }, // Compétence intermédiaire en gestion d'équipe
    { id: 15, id_employe: 9, id_competence: 9, niveau: '5' }, // Expertise en gestion des ressources humaines
    { id: 16, id_employe: 10, id_competence: 8, niveau: '4' } // Compétence avancée en production industrielle
];

const affectations = [
    { id: 1, id_employe: 1, id_tache: 1, id_affectation: 'A001', date_affectation: '2023-01-15', nb_heure_affectation: 20 },
    { id: 2, id_employe: 2, id_tache: 2, id_affectation: 'A002', date_affectation: '2023-02-10', nb_heure_affectation: 18 },
    { id: 3, id_employe: 3, id_tache: 3, id_affectation: 'A003', date_affectation: '2023-03-05', nb_heure_affectation: 25 },
    { id: 4, id_employe: 4, id_tache: 4, id_affectation: 'A004', date_affectation: '2023-03-20', nb_heure_affectation: 15 },
    { id: 5, id_employe: 5, id_tache: 5, id_affectation: 'A005', date_affectation: '2023-04-01', nb_heure_affectation: 10 },
    { id: 6, id_employe: 6, id_tache: 6, id_affectation: 'A006', date_affectation: '2023-04-15', nb_heure_affectation: 30 },
    { id: 7, id_employe: 7, id_tache: 7, id_affectation: 'A007', date_affectation: '2023-05-10', nb_heure_affectation: 22 },
    { id: 8, id_employe: 8, id_tache: 8, id_affectation: 'A008', date_affectation: '2023-05-15', nb_heure_affectation: 20 },
    { id: 9, id_employe: 9, id_tache: 9, id_affectation: 'A009', date_affectation: '2023-06-01', nb_heure_affectation: 18 },
    { id: 10, id_employe: 10, id_tache: 10, id_affectation: 'A010', date_affectation: '2023-06-20', nb_heure_affectation: 25 }
];

const comporter = [
    { id: 1, id_projet: 1, id_reunion: 1 },
    { id: 2, id_projet: 1, id_reunion: 2 },
    { id: 3, id_projet: 2, id_reunion: 3 },
    { id: 4, id_projet: 2, id_reunion: 4 },
    { id: 5, id_projet: 3, id_reunion: 5 },
    { id: 6, id_projet: 3, id_reunion: 6 },
    { id: 7, id_projet: 4, id_reunion: 7 },
    { id: 8, id_projet: 4, id_reunion: 8 },
    { id: 9, id_projet: 5, id_reunion: 9 },
    { id: 10, id_projet: 5, id_reunion: 10 }
];

const participer = [
    { id: 1, id_employe: 1, id_reunion: 1, presence_reunion: true, role_participant: 'Président' },
    { id: 2, id_employe: 2, id_reunion: 2, presence_reunion: true, role_participant: 'Secrétaire' },
    { id: 3, id_employe: 3, id_reunion: 3, presence_reunion: true, role_participant: 'Participant' },
    { id: 4, id_employe: 4, id_reunion: 4, presence_reunion: true, role_participant: 'Président' },
    { id: 5, id_employe: 5, id_reunion: 5, presence_reunion: false, role_participant: 'Participant' },
    { id: 6, id_employe: 6, id_reunion: 6, presence_reunion: true, role_participant: 'Participant' },
    { id: 7, id_employe: 7, id_reunion: 7, presence_reunion: true, role_participant: 'Secrétaire' },
    { id: 8, id_employe: 8, id_reunion: 8, presence_reunion: true, role_participant: 'Participant' },
    { id: 9, id_employe: 9, id_reunion: 9, presence_reunion: true, role_participant: 'Président' },
    { id: 10, id_employe: 10, id_reunion: 10, presence_reunion: true, role_participant: 'Participant' }
];

const documenterProjet = [
    { id: 1, id_projet: 1, id_document: 1 },
    { id: 2, id_projet: 1, id_document: 2 },
    { id: 3, id_projet: 2, id_document: 3 },
    { id: 4, id_projet: 2, id_document: 4 },
    { id: 5, id_projet: 3, id_document: 5 },
    { id: 6, id_projet: 3, id_document: 6 },
    { id: 7, id_projet: 4, id_document: 7 },
    { id: 8, id_projet: 4, id_document: 8 },
    { id: 9, id_projet: 5, id_document: 9 },
    { id: 10, id_projet: 5, id_document: 10 }
];

const documenterTache = [
    { id: 1, id_tache: 1, id_document: 1 },
    { id: 2, id_tache: 2, id_document: 2 },
    { id: 3, id_tache: 3, id_document: 3 },
    { id: 4, id_tache: 4, id_document: 4 },
    { id: 5, id_tache: 5, id_document: 5 },
    { id: 6, id_tache: 6, id_document: 6 },
    { id: 7, id_tache: 7, id_document: 7 },
    { id: 8, id_tache: 8, id_document: 8 },
    { id: 9, id_tache: 9, id_document: 9 },
    { id: 10, id_tache: 10, id_document: 10 }
];

const produire = [
    { id: 1, id_projet: 1, id_produit: 1, prix_produit: 150, quantite_produit: 100 },
    { id: 2, id_projet: 1, id_produit: 2, prix_produit: 200, quantite_produit: 200 },
    { id: 3, id_projet: 2, id_produit: 3, prix_produit: 120, quantite_produit: 150 },
    { id: 4, id_projet: 2, id_produit: 4, prix_produit: 250, quantite_produit: 50 },
    { id: 5, id_projet: 3, id_produit: 5, prix_produit: 180, quantite_produit: 80 },
    { id: 6, id_projet: 3, id_produit: 6, prix_produit: 220, quantite_produit: 120 },
    { id: 7, id_projet: 4, id_produit: 7, prix_produit: 190, quantite_produit: 150 },
    { id: 8, id_projet: 4, id_produit: 8, prix_produit: 210, quantite_produit: 200 },
    { id: 9, id_projet: 5, id_produit: 9, prix_produit: 230, quantite_produit: 70 },
    { id: 10, id_projet: 5, id_produit: 10, prix_produit: 240, quantite_produit: 110 }
];

const utiliser = [
    { id: 1, id_tache: 1, id_ressource: 1, date_utilisation: '2023-01-10', nb_heure_utilisation: 10 },
    { id: 2, id_tache: 2, id_ressource: 2, date_utilisation: '2023-02-12', nb_heure_utilisation: 15 },
    { id: 3, id_tache: 3, id_ressource: 3, date_utilisation: '2023-03-05', nb_heure_utilisation: 20 },
    { id: 4, id_tache: 4, id_ressource: 4, date_utilisation: '2023-03-18', nb_heure_utilisation: 12 },
    { id: 5, id_tache: 5, id_ressource: 5, date_utilisation: '2023-04-01', nb_heure_utilisation: 25 },
    { id: 6, id_tache: 6, id_ressource: 6, date_utilisation: '2023-04-14', nb_heure_utilisation: 30 },
    { id: 7, id_tache: 7, id_ressource: 7, date_utilisation: '2023-05-05', nb_heure_utilisation: 18 },
    { id: 8, id_tache: 8, id_ressource: 8, date_utilisation: '2023-05-22', nb_heure_utilisation: 22 },
    { id: 9, id_tache: 9, id_ressource: 9, date_utilisation: '2023-06-02', nb_heure_utilisation: 20 },
    { id: 10, id_tache: 10, id_ressource: 10, date_utilisation: '2023-06-15', nb_heure_utilisation: 25 }
];

const editer = [
    { id: 1, id_employe: 1, id_document: 1, date_editer: '2023-01-20', commentaire: 'Document de réunion initial' },
    { id: 2, id_employe: 2, id_document: 2, date_editer: '2023-02-10', commentaire: 'Révisions suite à la réunion' },
    { id: 3, id_employe: 3, id_document: 3, date_editer: '2023-03-15', commentaire: 'Première version du document de spécifications' },
    { id: 4, id_employe: 4, id_document: 4, date_editer: '2023-04-05', commentaire: 'Mise à jour après l\'analyse' },
    { id: 5, id_employe: 5, id_document: 5, date_editer: '2023-05-01', commentaire: 'Ébauche du rapport de projet' },
    { id: 6, id_employe: 6, id_document: 6, date_editer: '2023-05-20', commentaire: 'Document de pré-production' },
    { id: 7, id_employe: 7, id_document: 7, date_editer: '2023-06-01', commentaire: 'Propositions de modifications sur le produit' },
    { id: 8, id_employe: 8, id_document: 8, date_editer: '2023-06-10', commentaire: 'Rapport de fin de projet' },
    { id: 9, id_employe: 9, id_document: 9, date_editer: '2023-06-20', commentaire: 'Résumé des résultats et analyse' },
    { id: 10, id_employe: 10, id_document: 10, date_editer: '2023-07-01', commentaire: 'Revue finale des documents' }
];

export async function populate(db) {
    try {
        await db.Competence.bulkCreate(competences);
        await db.Client.bulkCreate(clients);
        await db.Reunion.bulkCreate(reunions);
        await db.Document.bulkCreate(documents);
        await db.Service.bulkCreate(services);
        await db.Site.bulkCreate(sites);
        await db.Produit.bulkCreate(produits);
        await db.Ressource.bulkCreate(ressources);
        await db.Employe.bulkCreate(employes);
        await db.Projet.bulkCreate(projets);
        await db.Tache.bulkCreate(taches);
        await db.Livrable.bulkCreate(livrables);
        await db.Contrat.bulkCreate(contrats);
        await db.Conge.bulkCreate(congés);
        await db.Maitriser.bulkCreate(maitrises);
        await db.Affecter.bulkCreate(affectations);
        await db.Comporter.bulkCreate(comporter);
        await db.Participer.bulkCreate(participer);
        await db.Documenter_projet.bulkCreate(documenterProjet);
        await db.Documenter_tache.bulkCreate(documenterTache);
        await db.Produire.bulkCreate(produire);
        await db.Utiliser.bulkCreate(utiliser);
        await db.Editer.bulkCreate(editer);
        // etc...
        console.log('Base de données peuplée avec succès !');
    } catch (error) {
        console.error('Erreur lors du peuplement de la base de données :', error);
    }
}

await populate(db);