import { useEffect, useState } from 'react'
import { ApiClient } from 'adminjs'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'

const api = new ApiClient()

const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.getDashboard()
            setData(response.data?.data || [])
        }

        fetchData()
    }, [])

    return (
        <div style={{ padding: '2rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Égalité Homme / Femme
            </h1>

            <div style={{
                backgroundColor: '#fff',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="sexe" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#4F46E5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Dashboard