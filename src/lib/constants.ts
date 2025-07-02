export const SITE_CONFIG = {
    name: "PopGen AI",
    title: "Population Genetics Meets Deep Learning",
    description: "Discover how artificial intelligence is revolutionizing our understanding of human ancestry, evolution, and genetic diversity.",
    url: "https://popgen-landing.vercel.app",
    ogImage: "/og-image.jpg",
    links: {
      github: "https://github.com/keith-ufumeli/popgen-landing",
      contact: "mailto:ufumelik@gmail.com"
    }
  } as const;
  
  export const ANIMATION_DURATION = {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    hero: 2.0
  } as const;
  
  export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  } as const;
  
  export const COLORS = {
    primary: {
      blue: '#0066CC',
      teal: '#00A6A6',
      purple: '#6B46C1',
      green: '#10B981'
    },
    neutral: {
      dark: '#0F172A',
      medium: '#64748B',
      light: '#F1F5F9',
      white: '#FFFFFF'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #0066CC 0%, #6B46C1 100%)',
      data: 'linear-gradient(90deg, #00A6A6 0%, #10B981 100%)',
      accent: 'linear-gradient(45deg, #6B46C1 0%, #0066CC 100%)'
    }
  } as const;