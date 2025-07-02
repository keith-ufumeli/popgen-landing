'use client';

interface ScrollIndicatorProps {
  onClick?: () => void;
}

export function ScrollIndicator({ onClick }: ScrollIndicatorProps) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
      aria-label="Scroll to next section"
    >
      <div className="flex flex-col items-center animate-bounce">
        <span className="text-sm font-medium mb-2">Scroll</span>
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </button>
  );
}