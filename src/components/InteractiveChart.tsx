import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const InteractiveChart = ({ data }) => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="planned" fill="#3b82f6" />
          <Bar dataKey="actual" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}; 