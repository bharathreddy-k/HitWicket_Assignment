import React, { useEffect, useState, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../context/AppThemeProvider';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const { particlesEnabled, reducedMotion } = useTheme();
  const [init, setInit] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (particlesEnabled) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      }).catch(err => {
        console.error('Particles init error:', err);
        setInit(false);
      });
    }
  }, [particlesEnabled]);

  const handleMouseMove = useCallback((e) => {
    if (reducedMotion) return;
    // Throttle updates
    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePosition({ x, y });
    });
  }, [reducedMotion]);

  useEffect(() => {
    if (!reducedMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [reducedMotion, handleMouseMove]);

  const particlesConfig = {
    fpsLimit: 30,
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 1200,
        },
      },
      color: {
        value: ['#a78bfa', '#c084fc', '#e879f9'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
        },
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'out',
        },
        attract: {
          enable: false,
        },
      },
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: false,
        },
        resize: true,
      },
    },
    detectRetina: true,
  };

  return (
    <div className="animated-background">
      {/* Nebula gradient layer */}
      <div className="nebula-layer">
        <div 
          className="nebula nebula-1" 
          style={!reducedMotion ? { transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` } : {}}
        />
        <div 
          className="nebula nebula-2" 
          style={!reducedMotion ? { transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` } : {}}
        />
        <div 
          className="nebula nebula-3" 
          style={!reducedMotion ? { transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` } : {}}
        />
      </div>

      {/* Particles layer */}
      {init && particlesEnabled && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
          className="particles-layer"
        />
      )}

      {/* Parallax shards layer */}
      <div className="parallax-shards">
        <svg className="shard shard-1" viewBox="0 0 100 100" style={!reducedMotion ? { transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` } : {}}>
          <polygon points="50,10 90,90 10,90" fill="rgba(167, 139, 250, 0.05)" />
        </svg>
        <svg className="shard shard-2" viewBox="0 0 100 100" style={!reducedMotion ? { transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)` } : {}}>
          <polygon points="20,20 80,30 70,80 30,70" fill="rgba(192, 132, 252, 0.03)" />
        </svg>
        <svg className="shard shard-3" viewBox="0 0 100 100" style={!reducedMotion ? { transform: `translate(${mousePosition.x * 0.25}px, ${mousePosition.y * -0.25}px)` } : {}}>
          <polygon points="40,10 90,50 50,90 10,50" fill="rgba(232, 121, 249, 0.04)" />
        </svg>
      </div>

      {/* Vignette overlay */}
      <div className="vignette-overlay" />
    </div>
  );
};

export default AnimatedBackground;
