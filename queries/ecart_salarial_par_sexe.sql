SELECT Employe.sexe, ROUND(AVG(CAST(Contrat.remuneration_h AS FLOAT)) * 151.67, 2) AS salaire_moyen
FROM Contrat
JOIN Employe ON Contrat.id_employe = Employe.id
WHERE Employe.sexe IN ('Femme', 'Homme')
GROUP BY Employe.sexe