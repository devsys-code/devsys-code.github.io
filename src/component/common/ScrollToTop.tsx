import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ScrollToTop = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const label = language === 'es' ? 'Volver arriba' : 'Back to top';

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 group flex items-center justify-center">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={label}
        className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white/90 text-zinc-700 shadow-md backdrop-blur-md hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400"
      >
        <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-100 shadow-md opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-950"
      >
        {label}
      </span>
    </div>
  );
};
