import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './PerformanceCharts.css';
import './SectionHeader.css';

const PerformanceCharts = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const strikeRateData = [
    { year: '2016', sr: 137 },
    { year: '2017', sr: 132 },
    { year: '2018', sr: 143 },
    { year: '2019', sr: 146 },
    { year: '2020', sr: 141 },
    { year: '2021', sr: 149 },
    { year: '2022', sr: 144 },
    { year: '2023', sr: 151 },
    { year: '2024', sr: 153 },
  ];

  const performanceVsTeams = [
    { team: 'PAK', value: 145 },
    { team: 'AUS', value: 138 },
    { team: 'ENG', value: 142 },
    { team: 'SA', value: 136 },
    { team: 'NZ', value: 144 },
  ];

  return (
    <div className="performance-charts">
      <div 
        className="section-header" 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: 'pointer' }}
      >
        <h2 className="section-title">
          <span className="title-main">📈 PERFORMANCE ANALYTICS 📈</span>
          <span style={{ marginLeft: '10px', fontSize: '0.8em' }}>
            {isExpanded ? '▼' : '▶'}
          </span>
        </h2>
      </div>
      
      {isExpanded && (
      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="chart-title">
            <span className="chart-icon">📈</span>
            Strike Rate Progression
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={strikeRateData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="5 5" stroke="rgba(139, 92, 246, 0.15)" vertical={false} />
              <XAxis 
                dataKey="year" 
                stroke="#8b92a6" 
                tick={{ fill: '#8b92a6', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(139, 92, 246, 0.2)' }}
              />
              <YAxis 
                stroke="#8b92a6" 
                tick={{ fill: '#8b92a6', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(139, 92, 246, 0.2)' }}
                domain={[120, 160]}
              />
              <Tooltip 
                contentStyle={{
                  background: 'rgba(30, 41, 59, 0.95)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: '#e9d5ff'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="sr" 
                stroke="#a78bfa" 
                strokeWidth={3}
                dot={{ fill: '#e879f9', r: 6, strokeWidth: 0 }}
                activeDot={{ r: 8, fill: '#e879f9' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">
            <span className="chart-icon">🎯</span>
            Performance vs Top Teams
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceVsTeams} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="5 5" stroke="rgba(139, 92, 246, 0.15)" vertical={false} />
              <XAxis 
                dataKey="team" 
                stroke="#8b92a6" 
                tick={{ fill: '#8b92a6', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(139, 92, 246, 0.2)' }}
              />
              <YAxis 
                stroke="#8b92a6" 
                tick={{ fill: '#8b92a6', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(139, 92, 246, 0.2)' }}
                domain={[0, 160]}
              />
              <Tooltip 
                contentStyle={{
                  background: 'rgba(30, 41, 59, 0.95)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: '#e9d5ff'
                }}
              />
              <Bar dataKey="value" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      )}
    </div>
  );
};

export default PerformanceCharts;
