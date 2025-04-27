import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const COLORS = ['#4F46E5', '#EC4899', '#10B981', '#F59E0B', '#3B82F6']

const PieChartComponent = ({ title, data, nameKey, dataKey }) => (
  <div className="chart-card">
    <h2 className="chart-title">{title}</h2>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey={dataKey} nameKey={nameKey} outerRadius={100} fill="#8884d8" label>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
)

export default PieChartComponent