import { useEffect, useState } from 'react'
import { ApiClient } from 'adminjs'
import ChartStyles from './styles/chartStyles.jsx'
import CircleValue from './charts/circleValue.jsx'

const api = new ApiClient()

const Dashboard = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.getDashboard();
            setData(response.data?.data || {})
        }

        fetchData()
    }, [])

    if (!data) {
        return <div>Chargement...</div>
    }

    return (
        <div style={styles.page}>
            <ChartStyles />
            
            <h1 style={styles.welcomeTitle}>Bienvenue dans votre SIRH</h1>
            <p style={styles.welcomeSubtitle}>Voici les principales statistiques de votre entreprise</p>

            <div style={styles.circlesContainer}>
                <CircleValue title="Nombre d'employés" value={data.nb_employes[0].count} />
                <CircleValue title="Nombre de projets" value={data.nb_projets[0].count} />
                <CircleValue title="Nombre de clients" value={data.nb_clients[0].count} />
                <CircleValue title="Nombre de produits" value={data.nb_produits[0].count} />
            </div>
        </div>
    )
}

const styles = {
    page: {
        padding: '2rem',
        backgroundColor: '#f9fafb',
        minHeight: '0vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: '2rem',
    },
    welcomeSubtitle: {
        fontSize: '1.25rem',
        color: '#6b7280',
        marginBottom: '2rem',
    },
    circlesContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        marginTop: '2rem',
    }
}

export default Dashboard