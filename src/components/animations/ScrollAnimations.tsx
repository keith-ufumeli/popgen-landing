'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  duration?: number;
  trigger?: string;
}

export function ScrollAnimation({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  trigger
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const triggerElement = trigger ? document.querySelector(trigger) : element;

    if (!triggerElement) return;

    // Animation configurations
    const animations = {
      fadeInUp: { y: 50, opacity: 0 },
      fadeInDown: { y: -50, opacity: 0 },
      fadeInLeft: { x: -50, opacity: 0 },
      fadeInRight: { x: 50, opacity: 0 },
      scaleIn: { scale: 0.8, opacity: 0 }
    };

    // Set initial state
    gsap.set(element, animations[animation]);

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(element, {
      ...Object.keys(animations[animation]).reduce((acc, key) => ({
        ...acc,
        [key]: key === 'opacity' ? 1 : 0
      }), {}),
      duration,
      delay,
      ease: "power3.out"
    });

    return () => {
      tl.kill();
    };
  }, [animation, delay, duration, trigger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Staggered children animation
export function StaggeredAnimation({
  children,
  className = '',
  stagger = 0.1,
  animation = 'fadeInUp'
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  animation?: 'fadeInUp' | 'fadeInDown' | 'scaleIn';
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const children = container.children;

    if (children.length === 0) return;

    const animations = {
      fadeInUp: { y: 30, opacity: 0 },
      fadeInDown: { y: -30, opacity: 0 },
      scaleIn: { scale: 0.8, opacity: 0 }
    };

    // Set initial state for all children
    gsap.set(children, animations[animation]);

    // Create staggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(children, {
      ...Object.keys(animations[animation]).reduce((acc, key) => ({
        ...acc,
        [key]: key === 'opacity' ? 1 : 0
      }), {}),
      duration: 0.6,
      stagger,
      ease: "power3.out"
    });

    return () => {
      tl.kill();
    };
  }, [stagger, animation]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

// Parallax text effect
export function ParallaxText({
  children,
  speed = 0.5,
  className = ''
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;

    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, [speed]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}