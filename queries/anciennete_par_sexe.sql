SELECT sexe, ROUND(AVG((julianday('now') - julianday(date_embauche_employe)) / 30.436875),2) AS count
FROM Employe
GROUP BY sexe;