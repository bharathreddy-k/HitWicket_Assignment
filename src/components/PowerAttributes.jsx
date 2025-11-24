import React from 'react';
import './PowerAttributes.css';
import './SectionHeader.css';

const PowerAttributes = () => {
  const attributes = [
    { name: 'Batting Power', value: 92, color: '#667eea' },
    { name: 'Finishing Ability', value: 95, color: '#764ba2' },
    { name: 'Death Bowling', value: 85, color: '#f093fb' },
    { name: 'Consistency', value: 78, color: '#4facfe' },
    { name: 'Fielding Skill', value: 88, color: '#43e97b' },
    { name: 'Fitness/Workload', value: 72, color: '#fa709a' },
  ];

  return (
    <div className="power-attributes">
      <div className="section-header">
        <h2 className="section-title">
          <span className="chapter-number">[ CHAPTER 01 ]</span>
          <span className="title-main">💪 POWER ATTRIBUTES 💪</span>
        </h2>
      </div>
      <p className="section-subtitle">Gaming-Style Player Ratings (Out of 100)</p>
      
      <div className="attributes-grid">
        {attributes.map((attr, index) => (
          <div key={index} className="attribute-card">
            <div className="attribute-header">
              <span className="attribute-name">{attr.name}</span>
              <span className="attribute-score">{attr.value}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ 
                  width: `${attr.value}%`,
                  background: `linear-gradient(90deg, ${attr.color}, ${attr.color}dd)`
                }}
              >
                <div className="progress-shimmer"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerAttributes;
