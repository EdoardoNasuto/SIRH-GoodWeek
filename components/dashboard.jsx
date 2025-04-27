import { useEffect, useState } from 'react'
import { ApiClient } from 'adminjs'
import BarChartComponent from './charts/barChart.jsx'
import PieChartComponent from './charts/pieChart.jsx'
import ChartStyles from './styles/chartStyles.jsx'

const api = new ApiClient()

const Dashboard = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.getDashboard()
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
            title="Égalité Homme / Femme"
            data={data.hommeFemme}
            xKey="sexe"
            yKey="count"
          />
    
          <PieChartComponent
            title="Répartition des Types de Contrat"
            data={data.typeContrat}
            dataKey="count"
            nameKey="type"
          />
        </div>
    )
}

export default Dashboard