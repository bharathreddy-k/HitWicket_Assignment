// Accessibility utilities for game-like UI

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const initParticlesSafely = () => {
  if (prefersReducedMotion()) return false;
  if (typeof window === 'undefined') return false;
  return window.innerWidth > 640;
};

export const setupReducedMotionListener = (callback) => {
  if (typeof window === 'undefined') return () => {};
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const handler = (e) => callback(e.matches);
  
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }
  
  return () => {};
};

// Keyboard navigation helpers for SkillTree
export const handleArrowNavigation = (event, currentIndex, gridColumns, totalItems, onNavigate) => {
  const { key } = event;
  let newIndex = currentIndex;

  switch (key) {
    case 'ArrowRight':
      newIndex = currentIndex + 1;
      if (newIndex >= totalItems) newIndex = 0;
      break;
    case 'ArrowLeft':
      newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = totalItems - 1;
      break;
    case 'ArrowDown':
      newIndex = currentIndex + gridColumns;
      if (newIndex >= totalItems) newIndex = currentIndex % gridColumns;
      break;
    case 'ArrowUp':
      newIndex = currentIndex - gridColumns;
      if (newIndex < 0) {
        const rows = Math.ceil(totalItems / gridColumns);
        newIndex = (rows - 1) * gridColumns + (currentIndex % gridColumns);
        if (newIndex >= totalItems) newIndex -= gridColumns;
      }
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      onNavigate(currentIndex, true); // true indicates activation
      return;
    default:
      return;
  }

  event.preventDefault();
  onNavigate(newIndex, false);
};

export const getFocusableElements = (container) => {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  );
};

export const trapFocus = (container, event) => {
  const focusableElements = getFocusableElements(container);
  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
};
