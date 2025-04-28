import { useEffect, useState } from 'react'
import { ApiClient } from 'adminjs'
import BarChartComponent from './charts/barChart.jsx'
import PieChartComponent from './charts/pieChart.jsx'
import ChartStyles from './styles/chartStyles.jsx'

const api = new ApiClient()

const gender_equity = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.resourceAction({ resourceId: 'gender_equity', actionName: 'list' });
            setData(response.data?.data || {})
        }

        fetchData()
    }, [])

    if (!data) {
        return <div>Chargement...</div>
    }

    return (
        <div style={{ padding: '2rem' }}>
          <ChartStyles />

          <PieChartComponent
            title="Egalité homme femme"
            data={ data.egalite_homme_femme }
            nameKey="sexe"
            dataKey="count"
          />
    
          <BarChartComponent
            title="Ecart salarial"
            data={ data.ecart_salarial_par_sexe }
            xKey="sexe"
            yKeys={["salaire_moyen"]}
          />

          <BarChartComponent
            title="Nombre d'employés par poste"
            data={ data.nb_sexe_par_poste }
            xKey="poste"
            yKeys={["nb_femmes", "nb_hommes"]}
          />

          <BarChartComponent
            title="Anciennete"
            data={ data.anciennete_par_sexe }
            xKey="sexe"
            yKeys={["count"]}
          />
        </div>
    )
}

export default gender_equity