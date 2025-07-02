// =============================================================================
// src/components/sections/Contact.tsx
// =============================================================================

'use client';

import { useRef, useEffect, useState } from 'react';
import { Container } from '../../components/ui/Container';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FormData {
  name: string;
  email: string;
  organization: string;
  userType: 'researcher' | 'student' | 'industry' | 'other';
  message: string;
}

const contactInfo = [
  {
    title: "For Researchers",
    icon: "🔬",
    color: "blue",
    benefits: [
      "Access to cutting-edge datasets",
      "Collaborative research opportunities", 
      "AI model development support",
      "Publication and conference resources"
    ],
    cta: "Join Research Network"
  },
  {
    title: "For Students",
    icon: "🎓",
    color: "purple",
    benefits: [
      "Educational materials and tutorials",
      "Internship opportunities",
      "Mentorship programs",
      "Career guidance and networking"
    ],
    cta: "Start Learning"
  },
  {
    title: "For Industry",
    icon: "🏢",
    color: "green",
    benefits: [
      "Consulting and advisory services",
      "Custom AI model development",
      "Technology transfer programs",
      "Partnership opportunities"
    ],
    cta: "Explore Partnerships"
  }
];

const faqs = [
  {
    question: "How can I access genetic datasets for research?",
    answer: "We provide access to curated, anonymized datasets through our research collaboration program. Contact us with your research proposal and institutional affiliation."
  },
  {
    question: "Do you offer training programs for AI in genomics?",
    answer: "Yes! We offer workshops, online courses, and hands-on training sessions covering machine learning applications in population genetics."
  },
  {
    question: "Can you help develop custom AI models for our organization?",
    answer: "Absolutely. Our team works with industry partners to develop tailored AI solutions for genomics applications, from ancestry prediction to disease risk assessment."
  },
  {
    question: "What programming languages and tools do you recommend?",
    answer: "We primarily use Python with scikit-learn, TensorFlow, and PyTorch for AI, plus R for statistical genetics. We also recommend Jupyter notebooks for interactive analysis."
  }
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    userType: 'researcher',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'contact' | 'faq'>('contact');

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
    gsap.set([titleRef.current, cardsRef.current?.children, formRef.current], {
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
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.4")
    .to(formRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      organization: '',
      userType: 'researcher',
      message: ''
    });
    setIsSubmitting(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100",
      purple: "border-purple-200 bg-purple-50 text-purple-600 hover:bg-purple-100", 
      green: "border-green-200 bg-green-50 text-green-600 hover:bg-green-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-container bg-gradient-to-b from-slate-50 to-white"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Join the 
            <span className="text-gradient"> Revolution</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re a researcher, student, or industry professional, we&apos;re here to 
            support your journey in population genetics and AI. Get in touch to learn more 
            about our resources, collaborations, and opportunities.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === 'contact' 
                  ? 'bg-blue-500 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Get in Touch
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === 'faq' 
                  ? 'bg-blue-500 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              FAQ
            </button>
          </div>
        </div>

        {activeTab === 'contact' && (
          <>
            {/* Contact Information Cards */}
            <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((info) => {
                const colorClasses = getColorClasses(info.color);
                return (
                  <Card key={info.title} hover={true} className="h-full text-center group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {info.title}
                    </h3>
                    <ul className="space-y-3 text-slate-600 mb-6 text-left">
                      {info.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`w-full ${colorClasses} border-current`}
                    >
                      {info.cta}
                    </Button>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <div ref={formRef}>
                <Card className="h-full">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                    Send us a Message
                  </h3>
                  
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
                          <p className="text-xs text-green-600 mt-1">We&apos;ll get back to you within 24 hours.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-300 focus:bg-white transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-300 focus:bg-white transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-300 focus:bg-white transition-colors"
                          placeholder="University, Company, etc."
                        />
                      </div>
                      <div>
                        <label htmlFor="userType" className="block text-sm font-medium text-slate-700 mb-2">
                          I am a... *
                        </label>
                        <select
                          id="userType"
                          name="userType"
                          required
                          value={formData.userType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-300 focus:bg-white transition-colors"
                        >
                          <option value="researcher">Researcher</option>
                          <option value="student">Student</option>
                          <option value="industry">Industry Professional</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-300 focus:bg-white transition-colors resize-none"
                        placeholder="Tell us about your interests, research goals, or how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Details & Quick Links */}
              <div className="space-y-6">
                <Card>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">
                    Direct Contact
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Email</p>
                        <p className="text-sm text-slate-600">contact@popgen-ai.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Office Hours</p>
                        <p className="text-sm text-slate-600">Mon-Fri, 9AM-5PM EST</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Location</p>
                        <p className="text-sm text-slate-600">Global (Remote-first)</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">
                    Quick Resources
                  </h4>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center space-x-3 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Getting Started Guide</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>Documentation</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      <span>Help Center</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Download Resources</span>
                    </a>
                  </div>
                </Card>

                <Card>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">
                    Follow Our Work
                  </h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </>
        )}

        {activeTab === 'faq' && (
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-slate-600 mb-4">
                Don&apos;t see your question? We&apos;d love to hear from you.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setActiveTab('contact')}
              >
                Ask a Question
              </Button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}