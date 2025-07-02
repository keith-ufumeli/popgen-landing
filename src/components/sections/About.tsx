// =============================================================================
// src/components/sections/About.tsx
// =============================================================================

'use client';

import { useRef, useEffect } from 'react';
import { Container } from '../../components/ui/Container';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const concepts = [
  {
    title: "Allele Frequencies",
    description: "How genetic variants are distributed across populations, revealing patterns of human migration and adaptation.",
    icon: "🧬",
    visual: "frequency-chart",
    example: "CYP2D6 variants show 10-fold frequency differences between populations",
    color: "blue"
  },
  {
    title: "Genetic Drift",
    description: "Random changes in gene frequencies that shape genetic diversity in small populations over time.",
    icon: "🌊",
    visual: "drift-simulation",
    example: "Founder effects in isolated populations like Ashkenazi Jews",
    color: "teal"
  },
  {
    title: "Natural Selection",
    description: "Evolutionary forces that drive advantageous traits to become more common in populations.",
    icon: "🎯",
    visual: "selection-pressure",
    example: "Lactase persistence in dairy-farming populations",
    color: "purple"
  },
  {
    title: "Population Structure",
    description: "How genetic relationships between individuals reveal ancestry and demographic history.",
    icon: "🗺️",
    visual: "population-clusters",
    example: "Principal component analysis reveals geographic ancestry",
    color: "green"
  }
];

const milestones = [
  { 
    year: "1908", 
    event: "Hardy-Weinberg Principle", 
    description: "Mathematical foundation for population genetics established by Godfrey Hardy and Wilhelm Weinberg",
    impact: "Fundamental Law",
    color: "blue"
  },
  { 
    year: "1930s", 
    event: "Modern Synthesis", 
    description: "Integration of Mendelian genetics with Darwinian evolution by Fisher, Haldane, and Wright",
    impact: "Theoretical Framework",
    color: "purple"
  },
  { 
    year: "1966", 
    event: "Molecular Evolution", 
    description: "Kimura's neutral theory revolutionizes understanding of genetic variation",
    impact: "Paradigm Shift",
    color: "teal"
  },
  { 
    year: "2003", 
    event: "Human Genome Project", 
    description: "Complete human DNA sequence enables large-scale population studies",
    impact: "Data Revolution",
    color: "green"
  },
  { 
    year: "2010s", 
    event: "GWAS & Big Data", 
    description: "Genome-wide association studies reveal genetic basis of complex traits",
    impact: "Medical Breakthroughs",
    color: "yellow"
  },
  { 
    year: "2020s", 
    event: "AI Integration", 
    description: "Deep learning transforms genetic inference and population analysis",
    impact: "Current Era",
    color: "red"
  }
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    // Set initial states
    gsap.set([titleRef.current, cardsRef.current?.children, timelineRef.current?.children], {
      opacity: 0,
      y: 30
    });

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(cardsRef.current?.children || [], {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.4")
    .to(timelineRef.current?.children || [], {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 bg-blue-50 text-blue-600",
      teal: "border-teal-200 bg-teal-50 text-teal-600",
      purple: "border-purple-200 bg-purple-50 text-purple-600",
      green: "border-green-200 bg-green-50 text-green-600",
      yellow: "border-yellow-200 bg-yellow-50 text-yellow-600",
      red: "border-red-200 bg-red-50 text-red-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-container bg-gradient-to-b from-white to-slate-50"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Understanding{' '}
            <span className="text-gradient">Population Genetics</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Population genetics studies how genetic variation is distributed within and between 
            populations, providing insights into human evolution, migration patterns, and the 
            biological basis of traits and diseases.
          </p>
        </div>

        {/* Core Concepts */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {concepts.map((concept, index) => (
            <Card 
              key={concept.title} 
              hover={true}
              className="text-center h-full group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {concept.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {concept.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {concept.description}
              </p>
              
              {/* Visual Placeholder */}
              <div className="mb-4 h-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-colors duration-300">
                <span className="text-xs text-slate-500 font-mono">
                  {concept.visual}
                </span>
              </div>
              
              {/* Example */}
              <div className="text-xs text-slate-500 bg-slate-50 rounded-lg p-3 border-l-4 border-blue-200">
                <span className="font-semibold text-slate-600">Example: </span>
                {concept.example}
              </div>
            </Card>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="mb-20 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
            Population Genetics by the Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3.2 billion</div>
              <div className="text-sm font-medium text-slate-700 mb-1">Base pairs in human genome</div>
              <div className="text-xs text-slate-500">99.9% identical between individuals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">~10 million</div>
              <div className="text-sm font-medium text-slate-700 mb-1">Common genetic variants</div>
              <div className="text-xs text-slate-500">SNPs with &gt;1% frequency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">7+ populations</div>
              <div className="text-sm font-medium text-slate-700 mb-1">Major ancestry groups</div>
              <div className="text-xs text-slate-500">African, European, Asian, etc.</div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-12">
            Evolution of the Field
          </h3>
          <div ref={timelineRef} className="space-y-6">
            {milestones.map((milestone, index) => {
              const colorClasses = getColorClasses(milestone.color);
              return (
                <div key={milestone.year} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-lg font-bold text-slate-900">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {milestone.event}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClasses}`}>
                        {milestone.impact}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Challenges & Opportunities */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                Current Challenges & Opportunities
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-red-600 text-sm">⚠️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Diversity Bias</h4>
                    <p className="text-slate-600 text-sm">Most genetic studies focus on European populations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-yellow-600 text-sm">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Computational Scale</h4>
                    <p className="text-slate-600 text-sm">Big data requires new analytical approaches</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 text-sm">🔬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Complex Traits</h4>
                    <p className="text-slate-600 text-sm">Polygenic architectures are difficult to interpret</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-green-600 text-sm">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">AI Revolution</h4>
                    <p className="text-slate-600 text-sm">Machine learning unlocks new possibilities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-slate-900 mb-4">Where AI Makes a Difference</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-700">Pattern Recognition</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-slate-200 rounded-full">
                      <div className="w-14 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-500">90%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-700">Predictive Modeling</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-slate-200 rounded-full">
                      <div className="w-12 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-500">85%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-700">Data Integration</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-slate-200 rounded-full">
                      <div className="w-15 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-500">95%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-700">Hypothesis Generation</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-slate-200 rounded-full">
                      <div className="w-10 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-500">75%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <p className="text-sm text-slate-700 font-medium mb-2">Next Frontier</p>
                <p className="text-xs text-slate-600">
                  Combining population genetics with AI to understand complex disease mechanisms 
                  and develop personalized treatments across diverse populations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Explore How AI is Transforming the Field?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Discover the cutting-edge research and applications that are revolutionizing 
            population genetics through artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See AI Research →
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Applications
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}