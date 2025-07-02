export interface Section {
    id: string;
    title: string;
    subtitle?: string;
    content: string;
    visual?: string;
  }
  
  export interface ResearchApplication {
    title: string;
    description: string;
    example: string;
    impact: string;
    icon: string;
  }
  
  export interface AnimationConfig {
    duration: number;
    delay?: number;
    ease?: string;
    repeat?: number;
  }
  
  export interface ThreeDModelProps {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: number;
    visible?: boolean;
  }
  
  export interface ScrollProgress {
    progress: number;
    direction: 'up' | 'down';
    velocity: number;
  }