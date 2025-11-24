import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/AppThemeProvider';
import './CharacterHub.css';

const CharacterHub = ({
  playerImage = '/images/Hardik.jpg',
  name = 'HARDIK PANDYA',
  className = 'Stormbreaker',
  level = 95,
  tagline = 'THE STORM BREAKER',
  xpPercent = 78.75,
}) => {
  const [animatedXP, setAnimatedXP] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedXP(xpPercent);
    }, 500);
    return () => clearTimeout(timer);
  }, [xpPercent]);

  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (circumference * animatedXP) / 100;

  return (
    <div className="character-hub">
      <div className="character-content">
        {/* Left panel */}
        <motion.div
          className="character-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Player name */}
          <motion.h1
            className="character-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {name}
          </motion.h1>

          {/* Tagline */}
          <motion.div
            className="character-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            「 {tagline} 」
          </motion.div>

          {/* XP Ring */}
          <motion.div
            className="xp-ring-container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7, type: 'spring' }}
          >
            <svg className="xp-ring" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="xpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background circle */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="rgba(251, 191, 36, 0.1)"
                strokeWidth="12"
              />
              
              {/* Progress circle */}
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#xpGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                transform="rotate(-90 100 100)"
                filter="url(#glow)"
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              
              {/* Center content */}
              <text
                x="100"
                y="75"
                textAnchor="middle"
                className="xp-label"
                fill="#c4b5fd"
                fontSize="12"
                fontWeight="700"
                letterSpacing="3"
              >
                LVL
              </text>
              <text
                x="100"
                y="115"
                textAnchor="middle"
                className="xp-value"
                fill="#fbbf24"
                fontSize="52"
                fontWeight="900"
              >
                {level}
              </text>
              <text
                x="100"
                y="140"
                textAnchor="middle"
                className="xp-progress"
                fill="#cbd5e1"
                fontSize="11"
                fontWeight="700"
              >
                15,750 / 20,000 XP
              </text>
            </svg>
          </motion.div>

          {/* Role badges */}
          <motion.div
            className="role-badges"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="role-badge legendary">
              <span className="badge-icon">👑</span>
              <span className="badge-text">Legendary Tier</span>
            </div>
            <div className="role-badge allrounder">
              <span className="badge-icon">🎯</span>
              <span className="badge-text">All-Rounder</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right panel - Portrait */}
        <motion.div
          className="character-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="portrait-container"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Neon aura */}
            <div className="portrait-aura" />
            
            {/* Portrait */}
            <motion.img
              src={playerImage}
              alt={name}
              className="portrait-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            
            {/* Rim light */}
            <div className="portrait-rimlight" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CharacterHub;
