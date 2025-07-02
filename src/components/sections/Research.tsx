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

const researchAreas = [
  {
    title: "Ancestral Inference",
    description: "AI models predict geographic ancestry from genetic data with unprecedented accuracy, revealing complex migration patterns.",
    beforeAfter: {
      before: "Manual analysis of select markers",
      after: "AI analysis of millions of variants"
    },
    accuracy: "99.2%",
    icon: "🗺️"
  },
  {
    title: "Demographic History",
    description: "Deep learning reconstructs population size changes, bottlenecks, and admixture events from genomic data.",
    beforeAfter: {
      before: "Simple demographic models",
      after: "Complex multi-population scenarios"
    },
    accuracy: "95.8%",
    icon: "📈"
  },
  {
    title: "Selection Detection",
    description: "Neural networks identify signatures of natural selection, revealing how humans adapted to different environments.",
    beforeAfter: {
      before: "Limited to strong selection signals",
      after: "Detects subtle adaptive changes"
    },
    accuracy: "91.5%",
    icon: "🎯"
  },
  {
    title: "Kinship Inference",
    description: "Machine learning determines family relationships from DNA, even for distant and complex pedigrees.",
    beforeAfter: {
      before: "Close relatives only",
      after: "Extended family networks"
    },
    accuracy: "97.3%",
    icon: "👥"
  }
];

export function Research() {
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
        toggleActions: "play none none reverse"
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(cardsRef.current?.children || [], {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.4");

    return () => tl.kill();
  }, []);

  return (
    <section 
      id="research" 
      ref={sectionRef}
      className="section-container bg-slate-50"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            The 
            <span className="text-gradient"> Deep Learning</span>
            {' '}Revolution
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Artificial intelligence is transforming how we analyze genetic data, enabling 
            discoveries that were impossible with traditional methods. Here's how AI is 
            revolutionizing key areas of population genetics research.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <Card 
              key={area.title} 
              hover={true}
              className="h-full"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-3xl">{area.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {area.title}
                  </h3>
                  <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {area.accuracy} accuracy
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {area.description}
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                  <div className="text-sm font-medium text-red-800 mb-1">Before AI</div>
                  <div className="text-sm text-red-700">{area.beforeAfter.before}</div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <div className="text-sm font-medium text-green-800 mb-1">With Deep Learning</div>
                  <div className="text-sm text-green-700">{area.beforeAfter.after}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
            See AI in Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center" hover={true}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Neural Network Training</h4>
              <p className="text-sm text-slate-600 mb-4">Watch how AI learns genetic patterns</p>
              <Button variant="outline" size="sm">Explore</Button>
            </Card>
            
            <Card className="text-center" hover={true}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3V21L21 12L3 3Z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Real-time Prediction</h4>
              <p className="text-sm text-slate-600 mb-4">Test ancestry prediction models</p>
              <Button variant="outline" size="sm">Try Demo</Button>
            </Card>
            
            <Card className="text-center" hover={true}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Validation Results</h4>
              <p className="text-sm text-slate-600 mb-4">Compare with ground truth data</p>
              <Button variant="outline" size="sm">View Results</Button>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
