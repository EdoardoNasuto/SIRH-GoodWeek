SELECT Projet.nom_projet AS projet, COUNT(*) AS 'Nombre de taches'
FROM Projet
JOIN Tache ON Tache.id_projet = Projet.id
GROUP BY Projet.nom_projet