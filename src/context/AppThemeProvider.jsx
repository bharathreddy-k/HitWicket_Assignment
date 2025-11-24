import React, { createContext, useContext, useState, useEffect } from 'react';
import { setupReducedMotionListener, prefersReducedMotion } from '../utils/accessibility';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('profileMode');
    return saved || 'game';
  });

  const [particlesEnabled, setParticlesEnabled] = useState(() => {
    const saved = localStorage.getItem('particlesEnabled');
    return saved !== null ? saved === 'true' : true;
  });

  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('soundEnabled');
    return saved !== null ? saved === 'true' : false;
  });

  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion());

  useEffect(() => {
    const cleanup = setupReducedMotionListener(setReducedMotion);
    return cleanup;
  }, []);

  useEffect(() => {
    localStorage.setItem('profileMode', mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('particlesEnabled', particlesEnabled);
  }, [particlesEnabled]);

  useEffect(() => {
    localStorage.setItem('soundEnabled', soundEnabled);
  }, [soundEnabled]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'game' ? 'classic' : 'game'));
  };

  const toggleParticles = () => {
    setParticlesEnabled((prev) => !prev);
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const playSound = (soundName) => {
    if (!soundEnabled) return;
    
    // Simple beep sound using Web Audio API
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = soundName === 'success' ? 800 : 600;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.warn('Audio not supported:', error);
    }
  };

  const value = {
    mode,
    particlesEnabled,
    soundEnabled,
    reducedMotion,
    toggleMode,
    toggleParticles,
    toggleSound,
    playSound,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
