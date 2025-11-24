import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GiBattery100, GiLaurels, GiBowlingStrike, GiRun, GiMedal, GiTrophy, GiCricketBat, GiWhistle, GiStairsGoal } from 'react-icons/gi';
import { useTheme } from '../context/AppThemeProvider';
import { handleArrowNavigation } from '../utils/accessibility';
import './SkillTree.css';

const SkillTree = () => {
  const [focusedNode, setFocusedNode] = useState(0);
  const [equippedSkills, setEquippedSkills] = useState(new Set());
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const { playSound, reducedMotion } = useTheme();
  const containerRef = useRef(null);

  const skills = [
    { id: 0, name: 'Power Surge', icon: GiBattery100, rating: 95, description: 'Devastating hitting power in death overs', color: '#fbbf24' },
    { id: 1, name: 'Yorker Master', icon: GiBowlingStrike, rating: 88, description: 'Precision yorkers at will', color: '#a78bfa' },
    { id: 2, name: 'Quick Hands', icon: GiRun, rating: 90, description: 'Lightning-fast fielding reflexes', color: '#43e97b' },
    { id: 3, name: 'Death Overs', icon: GiStairsGoal, rating: 92, description: 'Clutch performance under pressure', color: '#f093fb' },
    { id: 4, name: 'Match Winner', icon: GiTrophy, rating: 89, description: 'Turns matches single-handedly', color: '#ff7ab6' },
    { id: 5, name: 'All-Round Elite', icon: GiMedal, rating: 93, description: 'Balanced excellence in all formats', color: '#4facfe' },
    { id: 6, name: 'Power Play', icon: GiCricketBat, rating: 87, description: 'Explosive starts in powerplay overs', color: '#fa709a' },
    { id: 7, name: 'Tactical Mind', icon: GiWhistle, rating: 85, description: 'Strategic game awareness', color: '#667eea' },
    { id: 8, name: 'Champion', icon: GiLaurels, rating: 94, description: 'Proven winner in big tournaments', color: '#d97706' },
  ];

  const handleNodeActivation = (index, activate) => {
    if (activate) {
      const newEquipped = new Set(equippedSkills);
      if (equippedSkills.has(index)) {
        newEquipped.delete(index);
      } else {
        newEquipped.add(index);
      }
      setEquippedSkills(newEquipped);
      playSound('success');
    } else {
      setFocusedNode(index);
      const nodes = containerRef.current?.querySelectorAll('.skill-node');
      nodes?.[index]?.focus();
    }
  };

  const handleKeyDown = (e) => {
    handleArrowNavigation(e, focusedNode, 3, skills.length, handleNodeActivation);
  };

  const handleReset = () => {
    setEquippedSkills(new Set());
    setShowResetConfirm(false);
    playSound('success');
  };

  return (
    <section className="skill-tree-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">SKILL TREE</h2>
        <p className="section-subtitle">Master Your Abilities</p>
        <button
          className="respec-button"
          onClick={() => setShowResetConfirm(true)}
          disabled={equippedSkills.size === 0}
        >
          🔄 Reset Skills ({equippedSkills.size}/9)
        </button>
      </motion.div>

      <div ref={containerRef} className="skills-grid" onKeyDown={handleKeyDown}>
        {skills.map((skill, index) => (
          <SkillNode
            key={skill.id}
            skill={skill}
            index={index}
            isEquipped={equippedSkills.has(index)}
            isFocused={focusedNode === index}
            onEquip={() => handleNodeActivation(index, true)}
            onFocus={() => setFocusedNode(index)}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>

      {showResetConfirm && (
        <motion.div
          className="reset-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowResetConfirm(false)}
        >
          <motion.div
            className="reset-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Reset All Skills?</h3>
            <p>This will unequip all {equippedSkills.size} equipped skills.</p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowResetConfirm(false)}>
                Cancel
              </button>
              <button className="btn-confirm" onClick={handleReset}>
                Confirm Reset
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

const SkillNode = ({ skill, index, isEquipped, isFocused, onEquip, onFocus, reducedMotion }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      className={`skill-node ${isEquipped ? 'equipped' : ''} ${isFocused ? 'focused' : ''}`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
      onClick={onEquip}
      onMouseEnter={() => { setShowTooltip(true); onFocus(); }}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => { setShowTooltip(true); onFocus(); }}
      onBlur={() => setShowTooltip(false)}
      tabIndex={0}
      role="button"
      aria-label={`${skill.name}: ${skill.rating}. ${isEquipped ? 'Equipped' : 'Not equipped'}`}
      aria-pressed={isEquipped}
      style={{ '--node-color': skill.color }}
    >
      <div className="node-border" />
      
      <div className="node-content">
        <Icon className="node-icon" size={40} />
        <span className="node-rating">{skill.rating}</span>
      </div>

      <div className="node-label">{skill.name}</div>

      {isEquipped && (
        <motion.div
          className="equipped-indicator"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          ✓
        </motion.div>
      )}

      {showTooltip && (
        <motion.div
          className="skill-tooltip"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <div className="tooltip-header">
            <Icon size={24} />
            <strong>{skill.name}</strong>
          </div>
          <p className="tooltip-description">{skill.description}</p>
          <div className="tooltip-rating">
            <span>Power</span>
            <span>{skill.rating}/100</span>
          </div>
          <button className="tooltip-equip-btn" onClick={onEquip}>
            {isEquipped ? 'Unequip' : 'Equip'}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SkillTree;
