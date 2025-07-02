import { useState, useEffect } from 'react';
import { ScrollProgress } from '../types';

export function useScrollProgress(): ScrollProgress {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    progress: 0,
    direction: 'down',
    velocity: 0
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTimestamp = Date.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTimestamp = Date.now();
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0;
      
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      const velocity = Math.abs(currentScrollY - lastScrollY) / (currentTimestamp - lastTimestamp);

      setScrollProgress({
        progress: Math.min(Math.max(progress, 0), 1),
        direction,
        velocity: velocity || 0
      });

      lastScrollY = currentScrollY;
      lastTimestamp = currentTimestamp;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
}