import React, { useState } from 'react';
import './AdvancedAnalytics.css';
import './SectionHeader.css';
import './Collapsible.css';

const AdvancedAnalytics = () => {
  const strengths = [
    'Power-hitting against pace',
    'Death overs bowling',
    'Clutch performances',
    'Explosive strike rotation',
    'Yorker execution'
  ];

  const weaknesses = [
    'High injury frequency',
    'Occasional inconsistency',
    'Struggles against quality spin',
    'Workload management issues'
  ];

  const impactMetrics = [
    { metric: 'Match Impact Score', value: 8.7, max: 10, description: 'Overall influence on match outcomes' },
    { metric: 'Pressure Performance Index', value: 9.2, max: 10, description: 'Performance in high-stakes situations' },
    { metric: 'Win Contribution Rate', value: 34, max: 100, description: 'Percentage contribution to team wins', unit: '%' },
  ];

  return (
    <div className="advanced-analytics">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-main">🎯 TACTICAL ANALYSIS 🎯</span>
        </h2>
      </div>
      
      <div className="analytics-grid">
        <div className="strengths-weaknesses">
          <div className="swot-section strengths-section">
            <h3 className="swot-title">
              <span className="swot-icon">💪</span>
              Strengths
            </h3>
            <ul className="swot-list expanded">
              {strengths.map((strength, index) => (
                <li key={index} className="swot-item strength-item">
                  <span className="bullet">✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="swot-section weaknesses-section">
            <h3 className="swot-title">
              <span className="swot-icon">⚠️</span>
              Areas for Improvement
            </h3>
            <ul className="swot-list expanded">
              {weaknesses.map((weakness, index) => (
                <li key={index} className="swot-item weakness-item">
                  <span className="bullet">•</span>
                  {weakness}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="impact-metrics">
          <h3 className="analytics-subtitle">
            Match Impact Ratings
          </h3>
          <div className="impact-metrics-content expanded">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="impact-metric">
              <div className="metric-header">
                <span className="metric-name">{metric.metric}</span>
                <span className="metric-value">
                  {metric.value}{metric.unit || `/${metric.max}`}
                </span>
              </div>
              <p className="metric-description">{metric.description}</p>
              <div className="metric-bar">
                <div 
                  className="metric-fill"
                  style={{ width: `${(metric.value / metric.max) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;
