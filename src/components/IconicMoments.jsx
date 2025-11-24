import React, { useState } from 'react';
import './IconicMoments.css';
import './SectionHeader.css';
import './Collapsible.css';

const IconicMoments = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const moments = [
    {
      date: 'June 29, 2024',
      match: 'T20 World Cup Final',
      description: 'Match-winning spell of 3/20 in the final against South Africa, including crucial wickets in the death overs.',
      image: '🏏'
    },
    {
      date: 'October 23, 2022',
      match: 'India vs Pakistan',
      description: 'Unforgettable 40 off 37 balls in a high-pressure chase at MCG, keeping India alive in the World Cup.',
      image: '⚡'
    },
    {
      date: 'May 11, 2022',
      match: 'GT vs RR - IPL Final',
      description: 'Led Gujarat Titans to their maiden IPL title with both bat and ball, scoring 34 and taking 3 wickets.',
      image: '👑'
    },
    {
      date: 'April 11, 2019',
      match: 'MI vs KKR',
      description: 'Blitzed the fastest fifty in IPL history off just 15 balls, showcasing pure power hitting.',
      image: '🚀'
    },
  ];

  return (
    <div className="iconic-moments">
      <div className="section-header clickable" onClick={() => setIsExpanded(!isExpanded)}>
        <h2 className="section-title">
          <span className="title-main">⚔️ APEX MOMENTS ⚔️</span>
        </h2>
      </div>
      <div className={`moments-list ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {moments.map((moment, index) => (
          <div key={index} className="moment-card">
            <div className="moment-icon">{moment.image}</div>
            <div className="moment-content">
              <span className="moment-date">{moment.date}</span>
              <h3 className="moment-match">{moment.match}</h3>
              <p className="moment-description">{moment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconicMoments;
