SELECT Employe.sexe, COUNT(*) AS count 
FROM Contrat
JOIN Employe ON Contrat.id_employe = Employe.id
WHERE Contrat.poste_contrat = 'direction'
GROUP BY Employe.sexe