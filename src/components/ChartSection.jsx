import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import '../Style/ChartSection.css';

const data = [
  { name: 'Jan', users: 400, conversions: 240 },
  { name: 'Feb', users: 300, conversions: 139 },
  { name: 'Mar', users: 200, conversions: 980 },
  { name: 'Apr', users: 278, conversions: 390 },
  { name: 'May', users: 189, conversions: 480 },
];

const pieData = [
  { name: 'Mobile', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Tablet', value: 300 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

function ChartSection() {
  return (
    <div className="charts-container">
      <div className="chart-box">
        <h3>Line Chart - User Growth</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-box">
        <h3>Bar Chart - Conversions</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="conversions" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-box">
        <h3>Pie Chart - Device Split</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartSection;
