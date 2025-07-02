import { useState, useEffect, RefObject } from 'react';

interface ParallaxConfig {
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  disabled?: boolean;
}

export function useParallax(
  elementRef: RefObject<HTMLElement>,
  config: ParallaxConfig = {}
) {
  const { speed = 0.5, direction = 'vertical', disabled = false } = config;
  const [transform, setTransform] = useState('translate3d(0, 0, 0)');

  useEffect(() => {
    if (disabled || !elementRef.current) return;

    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      if (direction === 'vertical') {
        setTransform(`translate3d(0, ${rate}px, 0)`);
      } else {
        setTransform(`translate3d(${rate}px, 0, 0)`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, disabled, elementRef]);

  return transform;
}
