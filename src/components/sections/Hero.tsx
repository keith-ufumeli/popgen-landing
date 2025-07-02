'use client';

import { useRef, useEffect } from 'react';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { DNAHelix } from '../../components/3d/DNAHelix';
import { ScrollIndicator } from '../../components/ui/ScrollIndicator';
import { useParallax } from '../../hooks/useParallax';
import { gsap } from 'gsap';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const parallaxTransform = useParallax(heroRef as React.RefObject<HTMLElement>, { speed: 0.5 });

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .from(ctaRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* 3D DNA Helix - Responsive positioning */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full z-10 opacity-60 md:opacity-60 sm:opacity-40 max-sm:opacity-20 max-sm:w-full max-sm:top-1/2 max-sm:translate-y-0 max-sm:h-1/2">
        <DNAHelix />
      </div>

      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: parallaxTransform }}
      >
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60 max-sm:top-1/3 max-sm:left-5" />
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40 max-sm:top-1/4 max-sm:right-10" />
        <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-50 max-sm:bottom-1/3 max-sm:left-10" />
      </div>

      {/* Content - Responsive layout */}
      <Container className="absolute inset-0 flex items-center z-20 text-white max-sm:px-4">
        <div className="max-w-2xl max-sm:max-w-full max-sm:pr-4">
          <h1 
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-[0.95] tracking-tight"
          >
            <span className="block text-white mb-1">Population</span>
            <span className="block text-white mb-1">Genetics</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meets Deep Learning
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 mb-6 sm:mb-8 leading-relaxed font-light max-w-2xl"
          >
            Discover how artificial intelligence is revolutionizing our understanding of 
            <span className="text-cyan-300 font-medium"> human ancestry</span>, 
            <span className="text-blue-300 font-medium"> evolution</span>, and 
            <span className="text-purple-300 font-medium"> genetic diversity</span>.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
            <Button 
              variant="primary" 
              size="lg"
              onClick={scrollToNext}
              className="w-full sm:min-w-[200px] bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25"
            >
              Explore the Science
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:min-w-[200px] border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              See Applications
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <ScrollIndicator onClick={scrollToNext} />
    </section>
  );
}