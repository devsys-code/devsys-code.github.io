import type { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?:
    | 'default'
    | 'outline'
    | 'dot'
    | 'accent'
    | 'emerald'
    | 'blue'
    | 'purple'
    | 'amber'
    | 'rose'
    | 'cyan';
  size?: 'sm' | 'md';
  className?: string;
  dotColor?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  dotColor = 'bg-emerald-500',
}: BadgeProps) => {
  const sizeClasses =
    size === 'sm'
      ? 'px-2 py-0.5 text-xs font-medium'
      : 'px-2.5 py-1 text-xs font-medium tracking-wide';

  const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
    default:
      'bg-zinc-100 text-zinc-800 border border-zinc-200/80 dark:bg-zinc-900/90 dark:text-zinc-300 dark:border-zinc-800',
    outline:
      'bg-transparent text-zinc-700 border border-zinc-300 dark:text-zinc-300 dark:border-zinc-700',
    dot: 'bg-zinc-100 text-zinc-800 border border-zinc-200/80 dark:bg-zinc-900/90 dark:text-zinc-300 dark:border-zinc-800 inline-flex items-center gap-1.5',
    accent:
      'bg-zinc-900 text-zinc-50 border border-zinc-900 dark:bg-zinc-100 dark:text-zinc-950 dark:border-zinc-100',
    emerald:
      'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/60',
    blue: 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/60',
    purple:
      'bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800/60',
    amber:
      'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/60',
    rose: 'bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800/60',
    cyan: 'bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-400 dark:border-cyan-800/60',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full transition-colors duration-150 ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {variant === 'dot' ? (
        <span
          className={`h-1.5 w-1.5 rounded-full animate-pulse ${dotColor}`}
          aria-hidden="true"
        />
      ) : null}
      {children}
    </span>
  );
};
