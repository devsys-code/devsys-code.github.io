import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { headerData } from '../../data/layout/Header.data';
import { ThemeToggle } from '../common/ThemeToggle';
import { LanguageToggle } from '../common/LanguageToggle';
import { Menu, X, Terminal, Mail, MessageCircle } from 'lucide-react';

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

export const Header = () => {
  const { language } = useLanguage();
  const data = headerData[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85 transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100 transition-opacity hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 font-mono font-bold text-xs shadow-xs group-hover:scale-105 transition-transform duration-200">
            <Terminal className="h-4 w-4" />
          </div>
          <span className="font-mono font-bold tracking-tight text-base sm:text-lg">
            {data.logo.text}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {data.navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Controls: ONLY ICON BUTTONS WITH TOOLTIPS */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* WhatsApp Direct Link */}
          <div className="relative group flex items-center justify-center">
            <a
              href="https://wa.me/584223001681"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp (+58 04223001681)"
              title="WhatsApp: +58 04223001681"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-emerald-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-emerald-400 dark:hover:bg-zinc-800 transition-colors duration-200 cursor-pointer active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <span
              role="tooltip"
              className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-medium text-zinc-100 shadow-md opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-950 z-50"
            >
              WhatsApp
            </span>
          </div>

          {/* LinkedIn Link */}
          <div className="relative group flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/devsys-code/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn devsys-code"
              title="LinkedIn devsys-code"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-blue-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-blue-400 dark:hover:bg-zinc-800 transition-colors duration-200 cursor-pointer active:scale-95"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <span
              role="tooltip"
              className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-medium text-zinc-100 shadow-md opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-950 z-50"
            >
              LinkedIn
            </span>
          </div>

          {/* GitHub Link */}
          <div className="relative group flex items-center justify-center">
            <a
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub devsys-code"
              title="GitHub devsys-code"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors duration-200 cursor-pointer active:scale-95"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <span
              role="tooltip"
              className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-medium text-zinc-100 shadow-md opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-950 z-50"
            >
              GitHub
            </span>
          </div>

          {/* Contact CTA */}
          <div className="relative group flex items-center justify-center">
            <a
              href="#contact"
              aria-label={data.ctaText}
              title={data.ctaText}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors duration-200 cursor-pointer active:scale-95"
            >
              <Mail className="h-4 w-4" />
            </a>
            <span
              role="tooltip"
              className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-medium text-zinc-100 shadow-md opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-950 z-50"
            >
              {data.ctaText}
            </span>
          </div>

          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-0.5" />

          {/* Language Toggle */}
          <LanguageToggle />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 cursor-pointer active:scale-95 transition-colors duration-200"
            aria-expanded={mobileMenuOpen}
            aria-label="Alternar menú de navegación"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen ? (
        <div className="md:hidden border-t border-zinc-200 bg-white/95 px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950/95 backdrop-blur-md animate-fade-in">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {data.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center rounded-lg px-3.5 py-2.5 text-base font-medium text-zinc-800 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-3 gap-2">
              <a
                href="https://wa.me/584223001681"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-emerald-600 dark:text-emerald-400 text-xs font-medium"
              >
                <MessageCircle className="h-4 w-4 mb-1" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.linkedin.com/in/devsys-code/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-blue-600 dark:text-blue-400 text-xs font-medium"
              >
                <LinkedinIcon className="h-4 w-4 mb-1" />
                <span>LinkedIn</span>
              </a>
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium"
              >
                <GithubIcon className="h-4 w-4 mb-1" />
                <span>GitHub</span>
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
};
