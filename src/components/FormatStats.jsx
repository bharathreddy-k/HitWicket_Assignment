import React, { useState } from 'react';
import './FormatStats.css';

const FormatStats = () => {
  const [selectedFormat, setSelectedFormat] = useState(null);

  const formats = [
    { name: 'Test', icon: '⚪' },
    { name: 'ODI', icon: '🔴' },
    { name: 'T20', icon: '🟡' },
    { name: 'IPL', icon: '🟣' },
  ];

  const formatImages = {
    Test: '/images/Test.png',
    ODI: '/images/ODI.png',
    T20: '/images/T20.png',
    IPL: '/images/MI.png'
  };

  const statsData = {
    Test: {
      batting: {
        span: '2017-2018',
        mat: 11,
        inns: 18,
        no: 1,
        runs: 532,
        hs: '108',
        avg: '31.29',
        bf: 720,
        sr: '73.88',
        hundreds: 1,
        fifties: 4,
        fours: 68,
        sixes: 12
      },
      bowling: {
        span: '2017-2018',
        mat: 11,
        inns: 19,
        overs: '156.1',
        mdns: 19,
        runs: 528,
        wkts: 17,
        bbi: '5/28',
        bbm: '6/50',
        avg: '31.05',
        econ: '3.38',
        sr: '55.1',
        fiveWkts: 1,
        tenWkts: 0
      }
    },
    ODI: {
      batting: {
        span: '2016-2025',
        mat: 101,
        inns: 86,
        no: 28,
        runs: 1852,
        hs: '92*',
        avg: '31.93',
        bf: 1920,
        sr: '96.46',
        hundreds: 0,
        fifties: 11,
        fours: 151,
        sixes: 73
      },
      bowling: {
        span: '2016-2025',
        mat: 101,
        inns: 93,
        overs: '772.0',
        mdns: 42,
        runs: 5348,
        wkts: 81,
        bbi: '3/31',
        bbm: '3/31',
        avg: '66.02',
        econ: '6.93',
        sr: '57.1',
        fiveWkts: 0,
        tenWkts: 0
      }
    },
    T20: {
      batting: {
        span: '2016-2025',
        mat: 125,
        inns: 94,
        no: 40,
        runs: 2163,
        hs: '87*',
        avg: '40.05',
        bf: 1382,
        sr: '156.51',
        hundreds: 0,
        fifties: 2,
        fours: 138,
        sixes: 158
      },
      bowling: {
        span: '2016-2025',
        mat: 125,
        inns: 107,
        overs: '318.1',
        mdns: 7,
        runs: 2627,
        wkts: 89,
        bbi: '4/24',
        bbm: '4/24',
        avg: '29.52',
        econ: '8.26',
        sr: '21.4',
        fiveWkts: 0,
        tenWkts: 0
      }
    },
    IPL: {
      batting: {
        span: '2015-2025',
        mat: 165,
        inns: 149,
        no: 46,
        runs: 4214,
        hs: '91',
        avg: '40.91',
        bf: 2742,
        sr: '153.72',
        hundreds: 0,
        fifties: 25,
        fours: 304,
        sixes: 267
      },
      bowling: {
        span: '2015-2025',
        mat: 165,
        inns: 151,
        overs: '476.4',
        mdns: 9,
        runs: 3989,
        wkts: 107,
        bbi: '3/20',
        bbm: '3/20',
        avg: '37.28',
        econ: '8.37',
        sr: '26.7',
        fiveWkts: 0,
        tenWkts: 0
      }
    }
  };

  return (
    <div className="format-stats">
      <div className="format-stats-header">
        <h2 className="format-stats-title">STATS</h2>
      </div>
      <div className="formats-grid">
        {formats.map((format, index) => (
          <div 
            key={index} 
            className={`format-card ${selectedFormat === format.name ? 'active' : ''}`}
            onClick={() => setSelectedFormat(selectedFormat === format.name ? null : format.name)}
          >
            <div className="format-icon">{format.icon}</div>
            <span className="format-name">{format.name}</span>
          </div>
        ))}
      </div>

      {selectedFormat && (
        <div className="stats-tables">
          <div className="stats-visual-wrapper">
            <div className="stats-header-title">
              {selectedFormat} STATISTICS
            </div>
            
            <div className="stats-visual-content">
              <div className="stats-cards-left">
                <div className="stat-card">
                  <div className="stat-label">MATCHES</div>
                  <div className="stat-value">{statsData[selectedFormat].batting.mat}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">RUNS</div>
                  <div className="stat-value highlight-gold">{statsData[selectedFormat].batting.runs}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">AVERAGE</div>
                  <div className="stat-value">{statsData[selectedFormat].batting.avg}</div>
                </div>
              </div>
              
              <div className="stats-player-image">
                <img 
                  src={formatImages[selectedFormat]} 
                  alt={`${selectedFormat} Player`} 
                  className="format-player-image"
                />
              </div>
              
              <div className="stats-cards-right">
                <div className="stat-card">
                  <div className="stat-label">STRIKE RATE</div>
                  <div className="stat-value">{statsData[selectedFormat].batting.sr}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">WICKETS</div>
                  <div className="stat-value highlight-gold">{statsData[selectedFormat].bowling.wkts}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">ECONOMY</div>
                  <div className="stat-value">{statsData[selectedFormat].bowling.econ}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormatStats;
