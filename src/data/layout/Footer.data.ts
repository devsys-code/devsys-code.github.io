import type { LocalizedContent } from '../../type/i18n.type';
import type { FooterData } from '../../type/layout/Footer.type';

export const footerData: LocalizedContent<FooterData> = {
  es: {
    developerName: 'DERLYS DANIEL ALVARADO MENDOZA',
    tagline: 'IA Engineer • Desarrollador Full Stack • Analista de Sistemas',
    university: 'Universidad Centroccidental Lisandro Alvarado (UCLA) • Venezuela',
    copyright: '© 2026 devsys-code. Código abierto y arquitectura limpia.',
    backToTop: 'Volver arriba',
    socials: [
      { name: 'GitHub', url: 'https://github.com/devsys-code', icon: 'github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/devsys-code/', icon: 'linkedin' },
      { name: 'WhatsApp', url: 'https://wa.me/584223001681', icon: 'whatsapp' },
      { name: 'Email', url: 'mailto:ddam.java@gmail.com', icon: 'email' },
    ],
  },
  en: {
    developerName: 'DERLYS DANIEL ALVARADO MENDOZA',
    tagline: 'AI Engineer • Full Stack Developer • Systems Analyst',
    university: 'Lisandro Alvarado Central Occidental University (UCLA) • Venezuela',
    copyright: '© 2026 devsys-code. Open source and clean architecture.',
    backToTop: 'Back to top',
    socials: [
      { name: 'GitHub', url: 'https://github.com/devsys-code', icon: 'github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/devsys-code/', icon: 'linkedin' },
      { name: 'WhatsApp', url: 'https://wa.me/584223001681', icon: 'whatsapp' },
      { name: 'Email', url: 'mailto:ddam.java@gmail.com', icon: 'email' },
    ],
  },
};
