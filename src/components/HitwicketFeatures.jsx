import React from 'react';
import './HitwicketFeatures.css';

const HitwicketFeatures = () => {
  const skillBoosters = [
    { name: 'Power Boost', level: 'MAX', icon: '💥', color: '#f093fb' },
    { name: 'Stamina Boost', level: 'Level 7', icon: '⚡', color: '#4facfe' },
    { name: 'Bowling Variation', level: 'Level 8', icon: '🎯', color: '#43e97b' },
  ];

  const comparisons = [
    { player: 'Hardik Pandya', batting: 92, bowling: 85, fielding: 88, overall: 88 },
    { player: 'Sam Curran', batting: 78, bowling: 88, fielding: 82, overall: 83 },
    { player: 'Marcus Stoinis', batting: 85, bowling: 75, fielding: 80, overall: 80 },
  ];

  return (
    <div className="hitwicket-features">
      <div className="hitwicket-header">
        <h2 className="section-title">
          <span className="title-decoration">━━━</span>
          <span className="title-icon">🎮</span>
          HITWICKET GAME FEATURES
          <span className="title-icon">🎮</span>
          <span className="title-decoration">━━━</span>
        </h2>
        <div className="game-badge">
          <span className="badge-pulse"></span>
          ● LIVE
        </div>
      </div>
      
      <div className="features-grid">
        <div className="feature-card marketplace-card">
          <h3 className="feature-title">
            <span className="feature-icon">💰</span>
            Marketplace Value
          </h3>
          <div className="marketplace-value">
            <div className="value-display">
              <span className="currency">₹</span>
              <span className="amount">16.35</span>
              <span className="unit">Cr</span>
            </div>
            <div className="value-trend positive">
              <span className="trend-icon">↗</span>
              <span className="trend-text">+12% from last season</span>
            </div>
          </div>
          <div className="value-prediction">
            <p className="prediction-label">Next Season Prediction</p>
            <p className="prediction-value">₹17-18 Cr</p>
          </div>
        </div>

        <div className="feature-card skill-boosters-card">
          <h3 className="feature-title">
            <span className="feature-icon">🚀</span>
            Skill Boosters
          </h3>
          <div className="boosters-list">
            {skillBoosters.map((booster, index) => (
              <div key={index} className="booster-item" style={{ borderLeftColor: booster.color }}>
                <span className="booster-icon">{booster.icon}</span>
                <div className="booster-info">
                  <span className="booster-name">{booster.name}</span>
                  <span className="booster-level" style={{ color: booster.color }}>
                    {booster.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-card fantasy-card">
          <h3 className="feature-title">
            <span className="feature-icon">🎮</span>
            Fantasy Selection Tips
          </h3>
          <ul className="fantasy-tips">
            <li className="tip-item">
              <span className="tip-bullet">⭐</span>
              <span>Pick for T20s and death-over scenarios</span>
            </li>
            <li className="tip-item">
              <span className="tip-bullet">⭐</span>
              <span>High captain potential in India matches</span>
            </li>
            <li className="tip-item">
              <span className="tip-bullet">⭐</span>
              <span>Exceptional value as an all-rounder</span>
            </li>
            <li className="tip-item">
              <span className="tip-bullet">⭐</span>
              <span>Consistent points in IPL & T20 World Cups</span>
            </li>
          </ul>
        </div>

        <div className="feature-card comparison-card">
          <h3 className="feature-title">
            <span className="feature-icon">⚖️</span>
            All-Rounder Comparison
          </h3>
          <div className="comparison-table">
            {comparisons.map((player, index) => (
              <div key={index} className={`player-comparison ${index === 0 ? 'highlighted' : ''}`}>
                <div className="player-name-row">
                  <span className="player-name">{player.player}</span>
                  <span className="overall-rating">{player.overall}</span>
                </div>
                <div className="skills-row">
                  <div className="skill">
                    <span className="skill-label">BAT</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: `${player.batting}%` }}></div>
                    </div>
                    <span className="skill-value">{player.batting}</span>
                  </div>
                  <div className="skill">
                    <span className="skill-label">BOWL</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: `${player.bowling}%` }}></div>
                    </div>
                    <span className="skill-value">{player.bowling}</span>
                  </div>
                  <div className="skill">
                    <span className="skill-label">FIELD</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: `${player.fielding}%` }}></div>
                    </div>
                    <span className="skill-value">{player.fielding}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HitwicketFeatures;
