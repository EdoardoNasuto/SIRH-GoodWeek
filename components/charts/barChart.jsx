import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts'
  
const BarChartComponent = ({ title, data, xKey, yKey, barColor = '#4F46E5' }) => (
    <div className="chart-card">
        <h2 className="chart-title">{title}</h2>
        <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey={yKey} fill={barColor} />
        </BarChart>
        </ResponsiveContainer>
    </div>
)

export default BarChartComponent  