import React, { useState } from 'react';
import './Achievements.css';
import './SectionHeader.css';
import './Collapsible.css';

const Achievements = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const achievements = [
    {
      icon: '🏆',
      title: 'IPL Champion',
      description: '5x IPL Winner with Mumbai Indians',
      year: '2015, 2017, 2019, 2020, 2024'
    },
    {
      icon: '🌟',
      title: 'T20 World Cup Winner',
      description: 'Key player in India\'s 2024 T20 World Cup victory',
      year: '2024'
    },
    {
      icon: '👑',
      title: 'IPL Captain',
      description: 'Led Gujarat Titans to title in debut season',
      year: '2022'
    },
    {
      icon: '⚡',
      title: 'Fastest IPL Fifty',
      description: '15 balls - Joint record holder',
      year: '2019'
    },
    {
      icon: '🎯',
      title: 'ICC T20I Team',
      description: 'Selected in ICC T20I Team of the Year',
      year: '2022, 2023'
    },
  ];

  return (
    <div className="achievements">
      <div className="section-header clickable" onClick={() => setIsExpanded(!isExpanded)}>
        <h2 className="section-title">
          <span className="title-main">🏆 ACHIEVEMENTS 🏆</span>
        </h2>
      </div>
      <div className={`achievements-list ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
              <span className="achievement-year">{achievement.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
