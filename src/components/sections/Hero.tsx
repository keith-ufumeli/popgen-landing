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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* 3D DNA Helix */}
      <div className="absolute inset-0 z-10">
        <DNAHelix />
      </div>

      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: parallaxTransform }}
      >
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-50" />
      </div>

      {/* Content */}
      <Container className="relative z-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block">Population Genetics</span>
            <span className="block text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meets Deep Learning
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how artificial intelligence is revolutionizing our understanding of 
            <span className="text-blue-300 font-semibold"> human ancestry</span>, 
            <span className="text-purple-300 font-semibold"> evolution</span>, and 
            <span className="text-teal-300 font-semibold"> genetic diversity</span>.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={scrollToNext}
              className="min-w-[200px] bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Explore the Science
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[200px] border-white/30 text-white hover:bg-white/10"
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