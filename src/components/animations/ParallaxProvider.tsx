'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

interface ParallaxContextType {
  scrollProgress: number;
  direction: 'up' | 'down';
  velocity: number;
}

const ParallaxContext = createContext<ParallaxContextType | undefined>(undefined);

export function ParallaxProvider({ children }: { children: ReactNode }) {
  const { progress, direction, velocity } = useScrollProgress();

  return (
    <ParallaxContext.Provider value={{
      scrollProgress: progress,
      direction,
      velocity
    }}>
      {children}
    </ParallaxContext.Provider>
  );
}

export function useParallaxContext() {
  const context = useContext(ParallaxContext);
  if (!context) {
    throw new Error('useParallaxContext must be used within ParallaxProvider');
  }
  return context;
}