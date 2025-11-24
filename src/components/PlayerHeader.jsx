import React from 'react';
import './PlayerHeader.css';

const PlayerHeader = () => {
  return (
    <div className="player-header">
      {/* Background content */}
      <div className="background-content">
        <div className="left-content">
          <h1 className="player-name">HARDIK HIMANSHU PANDYA</h1>
          
          <p className="player-bio">
            🎮 India's premier fast-bowling all-rounder known for explosive finishing and clutch spells in T20 cricket. 
            From IPL breakout star to World Cup leader, master of high-pressure situations.
          </p>
          
          <div className="player-attributes">
            <div className="attribute">
              <div className="attribute-icon">🎂</div>
              <span className="attribute-label">Age</span>
              <span className="attribute-value">32</span>
            </div>
            
            <div className="attribute">
              <div className="attribute-icon">🏏</div>
              <span className="attribute-label">Batting</span>
              <span className="attribute-value">Right Hand</span>
            </div>
            
            <div className="attribute">
              <div className="attribute-icon">🔴</div>
              <span className="attribute-label">Bowling</span>
              <span className="attribute-value">Medium Fast</span>
            </div>
            
            <div className="attribute">
              <div className="attribute-icon">👑</div>
              <span className="attribute-label">Role</span>
              <span className="attribute-value">All-Rounder</span>
            </div>
          </div>
        </div>
        
        <div className="right-content">
          <div className="abilities-preview">
            <h3 className="section-heading">ABILITIES</h3>
            <div className="ability-grid">
              <div className="ability-item">
                <span className="ability-icon">⚡</span>
                <span className="ability-name">Power Hitting</span>
              </div>
              <div className="ability-item">
                <span className="ability-icon">🎯</span>
                <span className="ability-name">Death Bowling</span>
              </div>
              <div className="ability-item">
                <span className="ability-icon">🧠</span>
                <span className="ability-name">Yorker Master</span>
              </div>
              <div className="ability-item">
                <span className="ability-icon">🔥</span>
                <span className="ability-name">Clutch Performer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Centered player image */}
      <div className="centered-player-image">
        <img src="/src/components/public/images/Hardik.jpg" alt="Hardik Pandya" />
      </div>
    </div>
  );
};

export default PlayerHeader;
