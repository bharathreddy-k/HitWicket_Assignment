import React, { Suspense, lazy } from 'react';
import { ThemeProvider, useTheme } from './context/AppThemeProvider';
const AnimatedBackground = lazy(() => import('./components/AnimatedBackground'));
import CharacterHub from './components/CharacterHub';
import PowerOrbs from './components/PowerOrbs';
import SkillTree from './components/SkillTree';
import PlayerHeader from './components/PlayerHeader';
import QuickStats from './components/QuickStats';
import FormatStats from './components/FormatStats';
import PerformanceCharts from './components/PerformanceCharts';
import Achievements from './components/Achievements';
import IconicMoments from './components/IconicMoments';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import './App.css';

function AppContent() {
  const { mode, toggleMode, playSound } = useTheme();
  const [backgroundReady, setBackgroundReady] = React.useState(false);

  React.useEffect(() => {
    if (mode === 'game') {
      // Small delay to let the DOM render first
      const timer = setTimeout(() => {
        setBackgroundReady(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setBackgroundReady(false);
    }
  }, [mode]);

  const handleModeToggle = () => {
    playSound('success');
    toggleMode();
  };

  return (
    <div className="app">
      {mode === 'game' && backgroundReady && (
        <Suspense fallback={<div className="background-loader" />}>
          <AnimatedBackground />
        </Suspense>
      )}
      
      {/* Persistent mode toggle button */}
      <button
        className="global-mode-toggle"
        onClick={handleModeToggle}
        title={`Switch to ${mode === 'game' ? 'Classic' : 'Game'} Mode`}
      >
        <span className="mode-icon">{mode === 'game' ? '📊' : '🎮'}</span>
        <span className="mode-text">{mode === 'game' ? 'Classic Mode' : 'Game Mode'}</span>
      </button>
      
      <div className="container">
        {mode === 'game' ? (
          <>
            <CharacterHub />
            <PowerOrbs />
            <SkillTree />
          </>
        ) : (
          <>
            <PlayerHeader />
            <QuickStats />
            <FormatStats />
            <PerformanceCharts />
            <div className="two-column-grid">
              <Achievements />
              <IconicMoments />
            </div>
            <AdvancedAnalytics />
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
