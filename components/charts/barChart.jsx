import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
  
const BarChartComponent = ({ title, data, xKey, yKeys = [], barColors = [] }) => (
    <div className="chart-card">
        <h2 className="chart-title">{title}</h2>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xKey} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                {yKeys.map((key, index) => (
                    <Bar
                        dataKey={key}
                        fill={barColors[index] || '#4F46E5'}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    </div>
)

export default BarChartComponent