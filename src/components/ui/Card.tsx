import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ 
  children, 
  className, 
  hover = false,
  padding = 'md' 
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={cn(
      'bg-white rounded-xl border border-slate-200 shadow-sm',
      hover && 'transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:-translate-y-1',
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  );
}