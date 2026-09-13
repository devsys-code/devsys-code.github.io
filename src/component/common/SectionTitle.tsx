import { Badge } from './Badge';

export interface SectionTitleProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      <div className={`mb-3.5 ${isCenter ? 'flex justify-center' : 'flex justify-start'}`}>
        <Badge variant="dot" size="md">
          {badge}
        </Badge>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3.5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};
