import { useLanguage } from '../../context/LanguageContext';
import { Languages } from 'lucide-react';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const tooltipText = language === 'es' ? 'Cambiar a Inglés (EN)' : 'Switch to Spanish (ES)';

  return (
    <div className="relative group flex items-center justify-center">
      <button
        type="button"
        onClick={toggleLanguage}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors duration-200 cursor-pointer active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400"
        aria-label={tooltipText}
        title={tooltipText}
      >
        <Languages className="h-4 w-4" />
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-medium text-zinc-100 shadow-md opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-950 z-50"
      >
        {tooltipText}
      </span>
    </div>
  );
};
