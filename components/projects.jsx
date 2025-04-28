import { useEffect, useState } from 'react'
import { ApiClient } from 'adminjs'
import BarChartComponent from './charts/barChart.jsx'
import ChartStyles from './styles/chartStyles.jsx'

const api = new ApiClient()

const projects = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.resourceAction({ resourceId: 'projects', actionName: 'list' });
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

          <BarChartComponent
            title="Projets par clients"
            data={ data.projets_par_clients }
            xKey="client"
            yKeys={["Nombre de projets"]}
          />
        </div>
    )
}

export default projects