// =============================================================================
// src/components/sections/Applications.tsx
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

const applications = [
  {
    title: "Personalized Medicine",
    description: "AI-powered genetic analysis enables precision treatments tailored to individual ancestry and genetic profiles.",
    example: "Pharmacogenomics dosing recommendations based on population-specific allele frequencies",
    impact: "Reduced adverse drug reactions by 40%",
    icon: "💊",
    color: "blue"
  },
  {
    title: "Ancestry Tracing",
    description: "Deep learning models reconstruct detailed migration histories and identify genetic connections across continents.",
    example: "Tracing Viking expansion routes through Scandinavian genetic signatures",
    impact: "Resolved 15,000+ year migration patterns",
    icon: "🧭",
    color: "purple"
  },
  {
    title: "Conservation Genetics",
    description: "AI helps preserve endangered species by analyzing genetic diversity and predicting population viability.",
    example: "Optimizing breeding programs for critically endangered Amur leopards",
    impact: "Increased genetic diversity by 25%",
    icon: "🐆",
    color: "green"
  },
  {
    title: "Disease Susceptibility",
    description: "Machine learning identifies population-specific risk factors for complex diseases like diabetes and cancer.",
    example: "Predicting Type 2 diabetes risk in South Asian populations",
    impact: "85% prediction accuracy improvement",
    icon: "🔬",
    color: "teal"
  },
  {
    title: "Forensic Identification",
    description: "Neural networks enhance DNA analysis for criminal investigations and disaster victim identification.",
    example: "Identifying remains from degraded DNA samples in mass disasters",
    impact: "Solved 300+ cold cases annually",
    icon: "🔍",
    color: "indigo"
  },
  {
    title: "Agricultural Genomics",
    description: "AI optimizes crop breeding by analyzing genetic diversity and predicting trait performance.",
    example: "Developing climate-resilient wheat varieties for changing environments",
    impact: "30% yield increase in drought conditions",
    icon: "🌾",
    color: "yellow"
  }
];

export function Applications() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
    gsap.set([titleRef.current, cardsRef.current?.children], {
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
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.4");

    return () => {
      tl.kill();
    };
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50",
      green: "from-green-500 to-green-600 text-green-600 bg-green-50",
      teal: "from-teal-500 to-teal-600 text-teal-600 bg-teal-50",
      indigo: "from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-50",
      yellow: "from-yellow-500 to-yellow-600 text-yellow-600 bg-yellow-50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section 
      id="applications" 
      ref={sectionRef}
      className="section-container bg-white"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Real-World{' '}
            <span className="text-gradient"> Applications</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From personalized medicine to conservation efforts, AI-powered population 
            genetics is making a tangible impact across diverse fields, solving complex 
            problems and opening new possibilities.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => {
            const colorClasses = getColorClasses(app.color);
            const [gradientClasses, textColorClass, bgColorClass] = colorClasses.split(' ');
            
            return (
              <Card 
                key={app.title} 
                hover={true}
                className="h-full group"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradientClasses} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {app.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {app.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {app.description}
                </p>

                <div className={`${bgColorClass} rounded-lg p-4 mb-4`}>
                  <div className={`text-sm font-medium ${textColorClass} mb-2`}>
                    Example Application
                  </div>
                  <div className="text-sm text-slate-700">
                    {app.example}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800`}>
                    {app.impact}
                  </div>
                  <button className={`text-sm font-medium ${textColorClass} hover:underline flex items-center group`}>
                    Learn more 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Interactive Showcase */}
        <div className="mt-20 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">Interactive Population Genetics Demo</h3>
            <p className="text-blue-100">
              Explore how AI transforms genetic data analysis in real-time
            </p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="text-center group cursor-pointer" hover={true}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Ancestry Prediction</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Upload genetic markers and see AI predict geographic ancestry
                </p>
                <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Demo Ready</span>
                </div>
              </Card>
              
              <Card className="text-center group cursor-pointer" hover={true}>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Population Structure</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Visualize genetic relationships in 3D space
                </p>
                <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Loading Data</span>
                </div>
              </Card>
              
              <Card className="text-center group cursor-pointer" hover={true}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Disease Risk</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Assess genetic predisposition using population data
                </p>
                <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Model Training</span>
                </div>
              </Card>
            </div>
            
            {/* Sample Results Display */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Sample Analysis Results</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-slate-700 mb-3">Ancestry Composition</h5>
                  <div className="space-y-3">
                    {[
                      { population: 'Northern European', percentage: 45.2, color: 'bg-blue-500' },
                      { population: 'Southern European', percentage: 28.7, color: 'bg-purple-500' },
                      { population: 'East Asian', percentage: 15.3, color: 'bg-green-500' },
                      { population: 'Sub-Saharan African', percentage: 8.1, color: 'bg-yellow-500' },
                      { population: 'Native American', percentage: 2.7, color: 'bg-red-500' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-12 text-xs font-medium text-slate-600">
                          {item.percentage}%
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-2 mb-1">
                            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                            <span className="text-sm font-medium text-slate-700">{item.population}</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-slate-700 mb-3">AI Confidence Metrics</h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="text-sm font-medium text-slate-700">Prediction Accuracy</span>
                      <span className="text-lg font-bold text-green-600">94.8%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="text-sm font-medium text-slate-700">Model Confidence</span>
                      <span className="text-lg font-bold text-blue-600">91.2%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="text-sm font-medium text-slate-700">Reference Match</span>
                      <span className="text-lg font-bold text-purple-600">97.5%</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-blue-800">Analysis Complete</p>
                        <p className="text-xs text-blue-600 mt-1">
                          Results based on 847,000 genetic markers compared against reference populations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Spotlight */}
        <div className="mt-20 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                Featured Case Study
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                COVID-19 Variant Tracking
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                During the pandemic, AI-powered population genetics revolutionized how we track 
                viral evolution. By analyzing genetic diversity in SARS-CoV-2 samples, researchers 
                identified variants of concern weeks before traditional methods, enabling faster 
                public health responses and more targeted interventions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">2-3 weeks</div>
                  <div className="text-xs text-slate-600 uppercase tracking-wide">Earlier Detection</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">98.7%</div>
                  <div className="text-xs text-slate-600 uppercase tracking-wide">Classification Accuracy</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">15M+</div>
                  <div className="text-xs text-slate-600 uppercase tracking-wide">Sequences Analyzed</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  Read Full Case Study
                </Button>
                <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                  View Research Paper →
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 mb-2">Phylogenetic Timeline</h4>
                <p className="text-sm text-slate-600">SARS-CoV-2 variant emergence prediction</p>
              </div>
              
              <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg relative overflow-hidden">
                {/* Simulated phylogenetic visualization */}
                <div className="absolute inset-4">
                  <div className="relative h-full">
                    {/* Tree branches */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
                      <defs>
                        <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                      
                      {/* Main trunk */}
                      <line x1="20" y1="130" x2="20" y2="80" stroke="url(#branchGradient)" strokeWidth="3" />
                      
                      {/* Branches */}
                      <line x1="20" y1="80" x2="60" y2="60" stroke="url(#branchGradient)" strokeWidth="2" />
                      <line x1="20" y1="80" x2="60" y2="100" stroke="url(#branchGradient)" strokeWidth="2" />
                      <line x1="60" y1="60" x2="100" y2="40" stroke="url(#branchGradient)" strokeWidth="2" />
                      <line x1="60" y1="60" x2="100" y2="80" stroke="url(#branchGradient)" strokeWidth="2" />
                      <line x1="60" y1="100" x2="100" y2="120" stroke="url(#branchGradient)" strokeWidth="2" />
                      
                      {/* Terminal branches */}
                      <line x1="100" y1="40" x2="140" y2="20" stroke="url(#branchGradient)" strokeWidth="1.5" />
                      <line x1="100" y1="40" x2="140" y2="60" stroke="url(#branchGradient)" strokeWidth="1.5" />
                      <line x1="100" y1="80" x2="140" y2="80" stroke="url(#branchGradient)" strokeWidth="1.5" />
                      <line x1="100" y1="120" x2="140" y2="120" stroke="url(#branchGradient)" strokeWidth="1.5" />
                      
                      {/* Nodes */}
                      <circle cx="20" cy="80" r="3" fill="#3B82F6" />
                      <circle cx="60" cy="60" r="3" fill="#6366F1" />
                      <circle cx="60" cy="100" r="3" fill="#6366F1" />
                      <circle cx="100" cy="40" r="3" fill="#8B5CF6" />
                      <circle cx="100" cy="80" r="3" fill="#8B5CF6" />
                      <circle cx="100" cy="120" r="3" fill="#8B5CF6" />
                      
                      {/* Variant labels */}
                      <text x="145" y="25" fontSize="8" fill="#374151" fontFamily="monospace">Alpha</text>
                      <text x="145" y="65" fontSize="8" fill="#374151" fontFamily="monospace">Beta</text>
                      <text x="145" y="85" fontSize="8" fill="#374151" fontFamily="monospace">Delta</text>
                      <text x="145" y="125" fontSize="8" fill="#374151" fontFamily="monospace">Omicron</text>
                    </svg>
                  </div>
                </div>
                
                {/* Time axis */}
                <div className="absolute bottom-2 left-4 right-4 flex justify-between text-xs text-slate-500">
                  <span>2020</span>
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-600">Interactive visualization</span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Explore Data →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { 
              metric: '2.3M+', 
              label: 'Genomes Analyzed', 
              description: 'Across diverse global populations',
              icon: '🧬',
              color: 'text-blue-600'
            },
            { 
              metric: '847', 
              label: 'Research Papers', 
              description: 'Published using AI methods',
              icon: '📄',
              color: 'text-purple-600'
            },
            { 
              metric: '156', 
              label: 'Countries', 
              description: 'Contributing genetic data',
              icon: '🌍',
              color: 'text-green-600'
            },
            { 
              metric: '94.2%', 
              label: 'Average Accuracy', 
              description: 'Across all AI models',
              icon: '🎯',
              color: 'text-yellow-600'
            }
          ].map((stat, index) => (
            <Card key={index} className="text-center group" hover={true}>
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                {stat.metric}
              </div>
              <div className="font-semibold text-slate-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-slate-600">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}