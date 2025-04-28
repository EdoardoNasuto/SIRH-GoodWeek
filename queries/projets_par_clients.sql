SELECT Client.nom_client AS client, COUNT(*) AS 'Nombre de projets'
FROM Projet
JOIN Client ON Projet.id_client = Client.id
GROUP BY Client.nom_client