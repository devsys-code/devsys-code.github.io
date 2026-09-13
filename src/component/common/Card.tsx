import type { ReactNode, ElementType } from 'react';

export interface CardProps {
  children: ReactNode;
  as?: ElementType;
  hoverable?: boolean;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = ({
  children,
  as: Component = 'div',
  hoverable = true,
  className = '',
  padding = 'md',
}: CardProps) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }[padding];

  const hoverClasses = hoverable
    ? 'hover:-translate-y-1 hover:shadow-lg hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-zinc-950/5 dark:hover:shadow-black/40'
    : '';

  return (
    <Component
      className={`rounded-xl border border-zinc-200/90 bg-white dark:border-zinc-800/90 dark:bg-zinc-900/60 backdrop-blur-xs transition-all duration-200 ${paddingClasses} ${hoverClasses} ${className}`}
    >
      {children}
    </Component>
  );
};
