

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom Colors - Population Genetics Theme
      colors: {
        primary: {
          blue: '#0066CC',
          teal: '#00A6A6',
          purple: '#6B46C1',
          green: '#10B981',
        },
        neutral: {
          dark: '#0F172A',
          medium: '#64748B',
          light: '#F1F5F9',
          white: '#FFFFFF',
        },
        // Extended color palette for better flexibility
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#0066CC', // Our primary blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#6B46C1', // Our primary purple
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#00A6A6', // Our primary teal
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#10B981', // Our primary green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      
      // Typography
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'xs': ['0.75rem', { lineHeight: '1.4' }],
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Border Radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      // Box Shadow
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 8px -2px rgba(0, 0, 0, 0.05)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 20px rgba(107, 70, 193, 0.3)',
        'glow-teal': '0 0 20px rgba(0, 166, 166, 0.3)',
      },
      
      // Background Images & Gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0066CC 0%, #6B46C1 100%)',
        'data-gradient': 'linear-gradient(90deg, #00A6A6 0%, #10B981 100%)',
        'accent-gradient': 'linear-gradient(45deg, #6B46C1 0%, #0066CC 100%)',
      },
      
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      
      // Animation Delays
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      },
      
      // Z-Index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Backdrop Blur
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      
      // Container
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      
      // Aspect Ratio
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
      
      // Transform
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
      
      // Transition
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
        '1500': '1500ms',
      },
      
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    // Add useful plugins
    require('@tailwindcss/forms')({
      strategy: 'class', // Only add form styles when using the "form-*" classes
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    
    // Custom plugin for utilities
    function({ addUtilities, addComponents, theme }: any) {
      const newUtilities = {
        // Text gradient utility
        '.text-gradient': {
          'background': 'linear-gradient(135deg, #0066CC 0%, #6B46C1 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'color': 'transparent',
        },
        
        // Hero gradient background
        '.hero-gradient': {
          'background': 'linear-gradient(135deg, #0066CC 0%, #6B46C1 100%)',
        },
        
        // Data gradient background
        '.data-gradient': {
          'background': 'linear-gradient(90deg, #00A6A6 0%, #10B981 100%)',
        },
        
        // Glassmorphism effect
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        
        // Card hover effect
        '.card-hover': {
          'transition': 'all 0.3s ease',
          '&:hover': {
            'transform': 'translateY(-4px)',
            'box-shadow': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
          },
        },
        
        // Parallax container
        '.parallax-container': {
          'overflow': 'hidden',
        },
        
        '.parallax-element': {
          'will-change': 'transform',
        },
        
        // Animation delays
        '.animation-delay-100': { 'animation-delay': '100ms' },
        '.animation-delay-200': { 'animation-delay': '200ms' },
        '.animation-delay-300': { 'animation-delay': '300ms' },
        '.animation-delay-400': { 'animation-delay': '400ms' },
        '.animation-delay-500': { 'animation-delay': '500ms' },
        '.animation-delay-600': { 'animation-delay': '600ms' },
        '.animation-delay-700': { 'animation-delay': '700ms' },
        '.animation-delay-800': { 'animation-delay': '800ms' },
      }

      const newComponents = {
        // Button components
        '.btn-primary': {
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'border-radius': '0.5rem',
          'padding': '0.75rem 1.5rem',
          'font-size': '0.875rem',
          'font-weight': '500',
          'color': 'white',
          'background': 'linear-gradient(135deg, #0066CC 0%, #6B46C1 100%)',
          'transition': 'all 0.2s ease',
          '&:hover': {
            'background': 'linear-gradient(135deg, #0052A3 0%, #553C9A 100%)',
            'transform': 'translateY(-1px)',
            'box-shadow': '0 4px 12px rgba(0, 102, 204, 0.4)',
          },
          '&:focus': {
            'outline': 'none',
            'box-shadow': '0 0 0 3px rgba(59, 130, 246, 0.5)',
          },
        },
        
        '.btn-secondary': {
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'border-radius': '0.5rem',
          'padding': '0.75rem 1.5rem',
          'font-size': '0.875rem',
          'font-weight': '500',
          'color': '#374151',
          'background-color': '#F9FAFB',
          'border': '1px solid #E5E7EB',
          'transition': 'all 0.2s ease',
          '&:hover': {
            'background-color': '#F3F4F6',
            'border-color': '#D1D5DB',
            'transform': 'translateY(-1px)',
          },
          '&:focus': {
            'outline': 'none',
            'box-shadow': '0 0 0 3px rgba(156, 163, 175, 0.5)',
          },
        },
        
        // Section container
        '.section-container': {
          'padding-top': '4rem',
          'padding-bottom': '4rem',
          '@screen sm': {
            'padding-top': '5rem',
            'padding-bottom': '5rem',
          },
          '@screen lg': {
            'padding-top': '6rem',
            'padding-bottom': '6rem',
          },
        },
        
        // Card component
        '.card': {
          'background-color': 'white',
          'border-radius': '0.75rem',
          'border': '1px solid #E2E8F0',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          'padding': '1.5rem',
          'transition': 'all 0.3s ease',
        },
        
        '.card-hover': {
          '&:hover': {
            'transform': 'translateY(-4px)',
            'box-shadow': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
            'border-color': '#CBD5E1',
          },
        },
      }

      addUtilities(newUtilities)
      addComponents(newComponents)
    },
  ],
}