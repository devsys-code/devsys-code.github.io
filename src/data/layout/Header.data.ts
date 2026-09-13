import type { LocalizedContent } from '../../type/i18n.type';
import type { HeaderData } from '../../type/layout/Header.type';

export const headerData: LocalizedContent<HeaderData> = {
  es: {
    logo: {
      tag: 'sys',
      text: 'devsys-code',
    },
    navigation: [
      { id: 'home', label: 'Inicio', href: '#home' },
      { id: 'profile', label: 'Perfil', href: '#profile' },
      { id: 'services', label: 'Ecosistema', href: '#services' },
      { id: 'projects', label: 'Proyectos', href: '#projects' },
      { id: 'contact', label: 'Contacto', href: '#contact' },
    ],
    githubUrl: 'https://github.com/devsys-code',
    ctaText: 'Contactar',
  },
  en: {
    logo: {
      tag: 'sys',
      text: 'devsys-code',
    },
    navigation: [
      { id: 'home', label: 'Home', href: '#home' },
      { id: 'profile', label: 'Profile', href: '#profile' },
      { id: 'services', label: 'Ecosystem', href: '#services' },
      { id: 'projects', label: 'Projects', href: '#projects' },
      { id: 'contact', label: 'Contact', href: '#contact' },
    ],
    githubUrl: 'https://github.com/devsys-code',
    ctaText: 'Get in Touch',
  },
};
