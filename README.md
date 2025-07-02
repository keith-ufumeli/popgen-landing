# 🧬 Population Genetics Meets Deep Learning
### *A Modern Landing Page Design Prototype*

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r128-000000?style=for-the-badge&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3+-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

> **⚠️ Important Notice**: This is a **design prototype** showcasing visual design, layout, and animations. Interactive features, form submissions, data processing, and backend functionality are **not implemented**. This project demonstrates frontend design capabilities and serves as a foundation for future development.

---

## 📖 Overview

This project is a sophisticated landing page design prototype that explores the intersection of **Population Genetics** and **Deep Learning**. The design targets both researchers and the general public, presenting complex scientific concepts through modern web technologies and engaging visual storytelling.

The prototype demonstrates how artificial intelligence is revolutionizing genetic research, from ancestry prediction to disease susceptibility analysis, using cutting-edge animations, 3D visualizations, and responsive design principles.

---

## ✨ Key Features

### 🎨 **Visual Design**
- **Modern Scientific Aesthetic** - Clean, professional design with scientific color palette
- **Dual-Audience Approach** - Content accessible to both researchers and general public
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Custom Design System** - Consistent typography, spacing, and component library

### 🚀 **Advanced Animations**
- **GSAP-Powered Interactions** - Smooth scroll-triggered animations and transitions
- **Parallax Effects** - Dynamic background elements and layered scrolling
- **Micro-Interactions** - Hover effects, button animations, and state transitions
- **Performance Optimized** - Hardware-accelerated animations for 60fps performance

### 🌐 **3D Visualizations**
- **Interactive DNA Helix** - Rotating double helix with particle effects
- **Population Clusters** - 3D scatter plots representing genetic populations
- **Phylogenetic Trees** - Animated evolutionary tree structures
- **WebGL Integration** - Optimized 3D rendering with fallback support

### 📱 **User Experience**
- **Accessibility First** - WCAG compliant with keyboard navigation and screen reader support
- **Progressive Enhancement** - Graceful degradation for older browsers
- **Touch Optimized** - Mobile-friendly interactions and touch targets
- **Loading States** - Skeleton screens and smooth content transitions

---

## 🛠️ Technology Stack

### **Frontend Framework**
- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[React 18+](https://reactjs.org/)** - Modern React with hooks and concurrent features

### **Styling & UI**
- **[Tailwind CSS 3+](https://tailwindcss.com/)** - Utility-first CSS framework
- **Custom Design System** - Extended Tailwind configuration with scientific theme
- **[Inter Font](https://rsms.me/inter/)** - Primary typography
- **[JetBrains Mono](https://www.jetbrains.com/lp/mono/)** - Monospace font for code

### **Animations & Interactions**
- **[GSAP (GreenSock)](https://greensock.com/gsap/)** - Professional animation library
- **[ScrollTrigger](https://greensock.com/scrolltrigger/)** - Scroll-based animations
- **[Framer Motion](https://www.framer.com/motion/)** - React animation library
- **CSS Custom Properties** - Dynamic theming and smooth transitions

### **3D Graphics**
- **[Three.js r128](https://threejs.org/)** - 3D graphics library
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[React Three Drei](https://docs.pmnd.rs/drei/)** - Useful helpers for R3F
- **WebGL Shaders** - Custom materials and effects

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for quality control

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Main landing page
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx           # Button variants and states
│   │   ├── Card.tsx             # Card components with animations
│   │   ├── Container.tsx        # Layout container with responsive sizing
│   │   └── ScrollIndicator.tsx  # Animated scroll indicator
│   │
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx             # Hero section with 3D DNA helix
│   │   ├── About.tsx            # Population genetics introduction
│   │   ├── Research.tsx         # AI research showcase
│   │   ├── Applications.tsx     # Real-world applications
│   │   └── Contact.tsx          # Contact form and information
│   │
│   ├── 3d/                      # Three.js components
│   │   ├── DNAHelix.tsx         # Interactive DNA double helix
│   │   ├── PopulationClusters.tsx # 3D population visualization
│   │   └── PhylogeneticTree.tsx # Animated evolutionary trees
│   │
│   ├── animations/              # Animation utilities
│   │   ├── ParallaxProvider.tsx # Scroll-based parallax effects
│   │   └── ScrollAnimations.tsx # Reusable scroll animations
│   │
│   ├── Navigation.tsx           # Main navigation with mobile menu
│   └── Footer.tsx               # Site footer with links
│
├── hooks/                       # Custom React hooks
│   ├── useScrollProgress.ts     # Scroll position tracking
│   └── useParallax.ts          # Parallax effect calculations
│
├── lib/                         # Utility libraries
│   ├── constants.ts             # Site configuration and constants
│   └── utils.ts                 # Helper functions and utilities
│
├── types/                       # TypeScript type definitions
│   └── index.ts                 # Shared interfaces and types
│
└── styles/                      # Additional stylesheets
    └── animations.css           # CSS animation definitions
```

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm, yarn, or pnpm
- Modern browser with WebGL support

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/keith-ufumeli/popgen-landing.git
   cd popgen-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
```bash
npm run build
npm run start
```

---

## 🎯 Current Implementation Status

### ✅ **Completed Features**
- [x] **Responsive Design System** - Complete Tailwind configuration with custom components
- [x] **Typography & Layout** - Professional typography scale and grid systems
- [x] **Color Palette** - Scientific color scheme with gradients and themes
- [x] **Component Library** - Reusable UI components (buttons, cards, forms)
- [x] **Animation Framework** - GSAP integration with scroll-triggered animations
- [x] **3D Visualizations** - Three.js components for DNA helix and genetic data
- [x] **Navigation System** - Responsive navigation with smooth scrolling
- [x] **Accessibility Features** - Keyboard navigation, screen reader support, focus management
- [x] **Performance Optimization** - Hardware acceleration, lazy loading, efficient rendering

### ⏳ **Not Yet Implemented** (Future Development)
- [ ] **Form Functionality** - Contact form submissions and validation
- [ ] **Real Data Integration** - Actual genetic datasets and research data
- [ ] **Interactive Demos** - Functional AI model demonstrations
- [ ] **User Authentication** - Login/signup for researchers
- [ ] **Content Management** - Dynamic content updates and blog system
- [ ] **API Integration** - Backend services for data processing
- [ ] **Search Functionality** - Site-wide search capabilities
- [ ] **Multi-language Support** - Internationalization (i18n)
- [ ] **Analytics Integration** - User behavior tracking and insights
- [ ] **SEO Optimization** - Advanced meta tags and structured data

---

## 🎨 Design Philosophy

### **Scientific Credibility**
The design emphasizes trust and authority through clean typography, consistent spacing, and professional color choices that reflect the serious nature of genetic research.

### **Visual Hierarchy**
Information is organized using clear visual hierarchy, guiding users from basic concepts to advanced applications while maintaining engagement.

### **Dual-Audience Strategy**
Content and interactions are designed to serve both expert researchers and curious general audiences, with progressive disclosure of complexity.

### **Performance-First**
All animations and 3D elements are optimized for smooth performance across devices, with graceful degradation for lower-powered hardware.

---

## 📊 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Mobile Safari | 14+ | ✅ Full |
| Chrome Mobile | 90+ | ✅ Full |

**Note**: 3D visualizations require WebGL support. Fallback content is provided for unsupported browsers.

---

## 🔧 Configuration

### **Tailwind CSS**
The project includes a comprehensive Tailwind configuration with:
- Custom color palette for scientific themes
- Extended typography scale
- Animation utilities and keyframes
- Component-level styling
- Responsive design tokens

### **GSAP Setup**
Animations are configured for:
- Scroll-triggered reveals
- Parallax effects
- Micro-interactions
- Performance optimization

### **Three.js Configuration**
3D components are optimized for:
- Efficient geometry rendering
- Responsive canvas sizing
- Performance monitoring
- Memory management

---

## 🚧 Development Notes

### **Adding New Sections**
1. Create component in `src/components/sections/`
2. Add to main page in `src/app/page.tsx`
3. Update navigation links in `src/components/Navigation.tsx`
4. Include GSAP animations for scroll reveals

### **Extending Animations**
1. Define keyframes in `src/styles/animations.css`
2. Add Tailwind utilities in `tailwind.config.js`
3. Create reusable components in `src/components/animations/`

### **Performance Monitoring**
- Use browser DevTools for animation performance
- Monitor Three.js rendering with stats.js
- Test scroll performance on lower-end devices
- Validate accessibility with screen readers

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

This is currently a design prototype. Contributions for converting this to a functional application are welcome! Please feel free to:

- Report bugs or design issues
- Suggest improvements to animations or interactions
- Propose new sections or content
- Submit pull requests for bug fixes

---

## 📞 Contact

For questions about this design prototype or collaboration opportunities:

- **Email**: [ufumelik@gmail.com](mailto:ufumelik@gmail.com)


---

## 🙏 Acknowledgments

- **Scientific Inspiration**: Population genetics research community
- **Design Inspiration**: Modern scientific publications and data visualization
- **Technical Resources**: Next.js, Three.js, and GSAP documentation
- **Accessibility Guidelines**: WCAG 2.1 standards and best practices

---

**Built with ❤️ for the scientific community and curious minds exploring the intersection of genetics and artificial intelligence.**