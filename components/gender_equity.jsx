import { useEffect, useState } from 'react'
import { ApiClient } from 'adminjs'
import BarChartComponent from './charts/barChart.jsx'
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
    
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Dashboard
          </h1>

          <BarChartComponent
            title="Répartition Homme/Femme"
            data={data.repartition_homme_femme}
            xKey="sexe"
            yKeys={["count"]}
          />
    
          <BarChartComponent
            title="Répartition des Types de Contrat"
            data={data.ecart_salarial_entre_sexes}
            xKey="sexe"
            yKeys={["salaire_moyen"]}
          />
        </div>
    )
}

export default gender_equity