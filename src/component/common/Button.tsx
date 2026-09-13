import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  children,
  href,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    sm: 'h-9 px-3 text-xs gap-1.5',
    md: 'h-11 px-4 text-sm gap-2',
    lg: 'h-12 px-6 text-base gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 border border-transparent shadow-xs',
    secondary:
      'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/90 dark:text-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60',
    outline:
      'bg-transparent text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800/60 border border-zinc-300 dark:border-zinc-700',
    ghost:
      'bg-transparent text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-zinc-50 dark:hover:bg-zinc-800/50',
  }[variant];

  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer active:scale-[0.98] select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600';

  const fullClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const iconElement = icon ? (
    <span className="shrink-0 transition-transform duration-150" aria-hidden="true">
      {icon}
    </span>
  ) : null;

  if (href !== undefined) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('https://wa.me');
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a
        href={href}
        className={fullClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...anchorProps}
      >
        {iconPosition === 'left' ? iconElement : null}
        <span>{children}</span>
        {iconPosition === 'right' ? iconElement : null}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type="button" className={fullClasses} {...buttonProps}>
      {iconPosition === 'left' ? iconElement : null}
      <span>{children}</span>
      {iconPosition === 'right' ? iconElement : null}
    </button>
  );
};
