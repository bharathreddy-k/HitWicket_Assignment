import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '../context/AppThemeProvider';
import './PowerOrbs.css';

const PowerOrbs = () => {
  const { reducedMotion } = useTheme();
  const [hoveredOrb, setHoveredOrb] = useState(null);

  const attributes = [
    { name: 'Batting Power', value: 92, color: '#667eea', icon: '⚡' },
    { name: 'Finishing', value: 95, color: '#764ba2', icon: '🎯' },
    { name: 'Death Bowling', value: 85, color: '#f093fb', icon: '🔥' },
    { name: 'Consistency', value: 78, color: '#4facfe', icon: '💪' },
    { name: 'Fielding', value: 88, color: '#43e97b', icon: '🏃' },
  ];

  return (
    <section className="power-orbs-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">POWER ATTRIBUTES</h2>
        <p className="section-subtitle">Master of All Trades</p>
      </motion.div>

      <div className="orbs-grid">
        {attributes.map((attr, index) => (
          <Orb
            key={attr.name}
            attribute={attr}
            index={index}
            isHovered={hoveredOrb === index}
            onHover={() => setHoveredOrb(index)}
            onLeave={() => setHoveredOrb(null)}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </section>
  );
};

const Orb = ({ attribute, index, isHovered, onHover, onLeave, reducedMotion }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const controls = useAnimation();
  const { playSound } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayValue((prev) => {
          if (prev >= attribute.value) {
            clearInterval(interval);
            return attribute.value;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }, 300 + index * 100);

    return () => clearTimeout(timer);
  }, [attribute.value, index]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (circumference * displayValue) / 100;

  const handleHover = () => {
    onHover();
    if (!reducedMotion) {
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.3 },
      });
      playSound('hover');
    }
  };

  return (
    <motion.div
      className={`orb-container ${isHovered ? 'hovered' : ''}`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
      onMouseEnter={handleHover}
      onMouseLeave={onLeave}
      animate={controls}
      role="button"
      tabIndex={0}
      aria-label={`${attribute.name}: ${attribute.value}`}
    >
      <svg className="orb-svg" viewBox="0 0 120 120">
        <defs>
          <linearGradient id={`orbGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={attribute.color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={attribute.color} stopOpacity="1" />
          </linearGradient>
          <filter id={`orbGlow-${index}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id={`orbRadial-${index}`}>
            <stop offset="0%" stopColor={attribute.color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={attribute.color} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow effect */}
        <circle
          cx="60"
          cy="60"
          r="50"
          fill={`url(#orbRadial-${index})`}
          className="orb-glow-bg"
        />

        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="6"
        />

        {/* Progress circle */}
        <motion.circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke={`url(#orbGradient-${index})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 60 60)"
          filter={`url(#orbGlow-${index})`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Icon */}
        <text
          x="60"
          y="55"
          textAnchor="middle"
          className="orb-icon"
          fontSize="32"
        >
          {attribute.icon}
        </text>

        {/* Value */}
        <text
          x="60"
          y="75"
          textAnchor="middle"
          className="orb-value"
          fill="#ffffff"
          fontSize="20"
          fontWeight="900"
        >
          {displayValue}
        </text>
      </svg>

      {/* Label */}
      <div className="orb-label">{attribute.name}</div>

      {/* Hover tooltip */}
      {isHovered && (
        <motion.div
          className="orb-tooltip"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <div className="tooltip-content">
            <strong>{attribute.name}</strong>
            <span className="tooltip-rating">{attribute.value}/100</span>
          </div>
        </motion.div>
      )}

      {/* Particle burst on hover */}
      {isHovered && !reducedMotion && (
        <div className="particle-burst">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{ backgroundColor: attribute.color }}
              initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: 0,
                scale: 1,
                x: Math.cos((i * Math.PI * 2) / 8) * 50,
                y: Math.sin((i * Math.PI * 2) / 8) * 50,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default PowerOrbs;
