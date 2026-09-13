import { useLanguage } from '../../context/LanguageContext';
import { footerData } from '../../data/layout/Footer.data';
import { MessageCircle, Mail } from 'lucide-react';

const GithubIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer = () => {
  const { language } = useLanguage();
  const data = footerData[language];

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <GithubIcon className="h-4 w-4" />;
      case 'linkedin':
        return <LinkedinIcon className="h-4 w-4" />;
      case 'whatsapp':
        return <MessageCircle className="h-4 w-4" />;
      case 'email':
        return <Mail className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50/50 dark:border-zinc-800/80 dark:bg-zinc-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800/80">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-1.5">
            <p className="font-mono text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              {data.developerName}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {data.tagline}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">
              {data.university}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            {data.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 dark:hover:border-zinc-700 transition-colors duration-150 active:scale-95"
                title={social.name}
                aria-label={social.name}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex items-center justify-center sm:justify-between text-xs text-zinc-500 dark:text-zinc-500">
          <p className="font-mono">{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
