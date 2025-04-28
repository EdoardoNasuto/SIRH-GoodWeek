SELECT sexe, AVG(CAST(julianday(date('now')) - julianday(date_embauche_employe) AS INTEGER)) AS count
FROM Employe
GROUP BY sexe