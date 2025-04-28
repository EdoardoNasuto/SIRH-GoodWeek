CREATE TABLE Competence(
   id_competence INT,
   nom_competence VARCHAR(50) NOT NULL,
   description TEXT,
   PRIMARY KEY(id_competence)
);

CREATE TABLE Client(
   id_client VARCHAR(50),
   nom_client VARCHAR(50) NOT NULL,
   email_client VARCHAR(50),
   telephone_client VARCHAR(50),
   PRIMARY KEY(id_client)
);

CREATE TABLE Reunion(
   id_reunion VARCHAR(50),
   objet_reunion VARCHAR(50) NOT NULL,
   date_reunion DATETIME NOT NULL,
   lieu_reunion VARCHAR(50),
   compte_rendu_reunion TEXT,
   PRIMARY KEY(id_reunion)
);

CREATE TABLE Document(
   id_document VARCHAR(50),
   nom_document VARCHAR(50) NOT NULL,
   type_document VARCHAR(50) NOT NULL,
   url_document TEXT NOT NULL,
   date_document DATETIME NOT NULL,
   PRIMARY KEY(id_document)
);

CREATE TABLE Service(
   id_service VARCHAR(50),
   nom_service VARCHAR(50) NOT NULL,
   description_service VARCHAR(50),
   PRIMARY KEY(id_service)
);

CREATE TABLE Site(
   id_site INT,
   nom_site VARCHAR(50),
   adresse_site VARCHAR(50),
   PRIMARY KEY(id_site)
);

CREATE TABLE Produit(
   id_produit VARCHAR(50),
   nom_produit VARCHAR(50) NOT NULL,
   type_produit VARCHAR(50) NOT NULL,
   cout CURRENCY NOT NULL,
   PRIMARY KEY(id_produit)
);

CREATE TABLE Ressource(
   id_ressource VARCHAR(50),
   nom_ressource VARCHAR(50) NOT NULL,
   type_ressource VARCHAR(50),
   cout_horaire_ressource CURRENCY,
   id_site INT NOT NULL,
   PRIMARY KEY(id_ressource),
   FOREIGN KEY(id_site) REFERENCES Site(id_site)
);

CREATE TABLE Employe(
   id_employe INT,
   nom_employe VARCHAR(50) NOT NULL,
   prenom_employe VARCHAR(50) NOT NULL,
   mot_de_passe_employe VARCHAR(50) NOT NULL,
   date_de_naissance_employe DATE NOT NULL,
   sexe VARCHAR(50) NOT NULL,
   email_employe VARCHAR(50) NOT NULL,
   telephone_employe VARCHAR(50),
   role_employe VARCHAR(50) NOT NULL,
   date_embauche_employe DATE,
   id_site INT,
   id_service VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_employe),
   FOREIGN KEY(id_site) REFERENCES Site(id_site),
   FOREIGN KEY(id_service) REFERENCES Service(id_service)
);

CREATE TABLE Projet(
   id_projet INT,
   nom_projet VARCHAR(50) NOT NULL,
   description_projet TEXT,
   date_debut_projet DATE,
   date_fin_projet DATE,
   statut_projet VARCHAR(50),
   budget_projet CURRENCY,
   cout_projet CURRENCY,
   depense CURRENCY,
   id_client VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_projet),
   FOREIGN KEY(id_client) REFERENCES Client(id_client)
);

CREATE TABLE Tache(
   id_tache INT,
   nom_tache VARCHAR(50) NOT NULL,
   description_tache TEXT,
   type_tache VARCHAR(50),
   date_debut_tache DATE,
   date_fin_tache DATE,
   statut_tache VARCHAR(50),
   priorité_tache VARCHAR(50),
   progression_tache DECIMAL(15,2),
   cout_tache CURRENCY,
   id_projet INT NOT NULL,
   PRIMARY KEY(id_tache),
   FOREIGN KEY(id_projet) REFERENCES Projet(id_projet)
);

CREATE TABLE Livrable(
   id_livrable VARCHAR(50),
   nom_livrable VARCHAR(50) NOT NULL,
   description_livrable TEXT,
   date_livraison_livrable DATE,
   statut_livrable VARCHAR(50),
   id_projet INT NOT NULL,
   PRIMARY KEY(id_livrable),
   FOREIGN KEY(id_projet) REFERENCES Projet(id_projet)
);

CREATE TABLE Contrat(
   id_contrat VARCHAR(50),
   type_contrat VARCHAR(50) NOT NULL,
   date_debut_contrat DATE NOT NULL,
   date_fin_contrat DATE,
   nb_heure_contrat INT NOT NULL,
   remuneration_h CURRENCY NOT NULL,
   poste_contrat VARCHAR(50) NOT NULL,
   id_employe INT NOT NULL,
   PRIMARY KEY(id_contrat),
   FOREIGN KEY(id_employe) REFERENCES Employe(id_employe)
);

CREATE TABLE Conge(
   id_conge VARCHAR(50),
   date_debut_conge VARCHAR(50) NOT NULL,
   date_fin_conge VARCHAR(50) NOT NULL,
   type_congé VARCHAR(50),
   motif TEXT,
   id_employe INT NOT NULL,
   PRIMARY KEY(id_conge),
   FOREIGN KEY(id_employe) REFERENCES Employe(id_employe)
);

CREATE TABLE Maitriser(
   id_employe INT,
   id_competence INT,
   niveau BYTE,
   PRIMARY KEY(id_employe, id_competence),
   FOREIGN KEY(id_employe) REFERENCES Employe(id_employe),
   FOREIGN KEY(id_competence) REFERENCES Competence(id_competence)
);

CREATE TABLE Affecter(
   id_employe INT,
   id_tache INT,
   id_affectation VARCHAR(50) NOT NULL,
   date_affectation DATETIME NOT NULL,
   nb_heure_affectation VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_employe, id_tache),
   UNIQUE(id_affectation),
   FOREIGN KEY(id_employe) REFERENCES Employe(id_employe),
   FOREIGN KEY(id_tache) REFERENCES Tache(id_tache)
);

CREATE TABLE Comporter(
   id_projet INT,
   id_reunion VARCHAR(50),
   PRIMARY KEY(id_projet, id_reunion),
   FOREIGN KEY(id_projet) REFERENCES Projet(id_projet),
   FOREIGN KEY(id_reunion) REFERENCES Reunion(id_reunion)
);

CREATE TABLE Participer(
   id_employe INT,
   id_reunion VARCHAR(50),
   presence_reunion LOGICAL,
   role_participant VARCHAR(50),
   PRIMARY KEY(id_employe, id_reunion),
   FOREIGN KEY(id_employe) REFERENCES Employe(id_employe),
   FOREIGN KEY(id_reunion) REFERENCES Reunion(id_reunion)
);

CREATE TABLE Documenter_projet(
   id_projet INT,
   id_document VARCHAR(50),
   PRIMARY KEY(id_projet, id_document),
   FOREIGN KEY(id_projet) REFERENCES Projet(id_projet),
   FOREIGN KEY(id_document) REFERENCES Document(id_document)
);

CREATE TABLE Documenter_tache(
   id_tache INT,
   id_document VARCHAR(50),
   PRIMARY KEY(id_tache, id_document),
   FOREIGN KEY(id_tache) REFERENCES Tache(id_tache),
   FOREIGN KEY(id_document) REFERENCES Document(id_document)
);

CREATE TABLE Produire(
   id_projet INT,
   id_produit VARCHAR(50),
   prix_produit CURRENCY NOT NULL,
   quantite_produit VARCHAR(50),
   PRIMARY KEY(id_projet, id_produit),
   FOREIGN KEY(id_projet) REFERENCES Projet(id_projet),
   FOREIGN KEY(id_produit) REFERENCES Produit(id_produit)
);

CREATE TABLE Utiliser(
   id_tache INT,
   id_ressource VARCHAR(50),
   date_utilisation DATETIME NOT NULL,
   nb_heure_utilisation INT NOT NULL,
   PRIMARY KEY(id_tache, id_ressource),
   FOREIGN KEY(id_tache) REFERENCES Tache(id_tache),
   FOREIGN KEY(id_ressource) REFERENCES Ressource(id_ressource)
);

CREATE TABLE Editer(
   id_employe INT,
   id_document VARCHAR(50),
   date_editer DATETIME NOT NULL,
   commentaire TEXT,
   PRIMARY KEY(id_employe, id_document),
   FOREIGN KEY(id_employe) REFERENCES Employe(id_employe),
   FOREIGN KEY(id_document) REFERENCES Document(id_document)
);