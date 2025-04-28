SELECT 
    Contrat.poste_contrat AS poste, 
    COUNT(CASE WHEN Employe.sexe = 'Féminin' THEN 1 END) AS nb_femmes,
    COUNT(CASE WHEN Employe.sexe = 'Masculin' THEN 1 END) AS nb_hommes
FROM Contrat
JOIN Employe ON Contrat.id_employe = Employe.id
GROUP BY Contrat.poste_contrat