import type { LocalizedContent } from '../../type/i18n.type';
import type { HomeData } from '../../type/section/Home.type';

export const homeData: LocalizedContent<HomeData> = {
  es: {
    badge: 'Arquitectura SaaS & Aceleración IA',
    availableBadge: 'Disponible para proyectos y consultoría',
    name: 'DERLYS DANIEL ALVARADO MENDOZA',
    shortName: 'DANIEL ALVARADO',
    handle: 'devsys-code',
    role: 'IA Engineer • Desarrollador Full Stack • Analista de Sistemas',
    university: 'Analista de Sistemas — UCLA, Venezuela',
    description:
      'Ingeniero de software con sólida base en análisis de sistemas y arquitectura limpia. Cuento con amplia experiencia construyendo aplicaciones empresariales robustas de manera nativa desde sus fundamentos algorítmicos, así como potenciando su desarrollo mediante inteligencia artificial aplicada. Creador del ecosistema interoperable SaaS multitenant con plantillas desacopladas para Django, NestJS, Angular y React.',
    ctaPrimary: {
      text: 'Explorar Proyectos',
      href: '#projects',
    },
    ctaSecondary: {
      text: 'Contactar',
      href: '#contact',
    },
    stats: [
      { value: '5', label: 'Proyectos Principales' },
      { value: '8', label: 'Skills de IA Empaquetadas' },
      { value: '100%', label: 'Aislamiento Multitenant' },
      { value: 'Backend', label: 'Django & NestJS' },
      { value: 'Frontend', label: 'React & Angular' },
    ],
    terminal: {
      title: 'Instalación de Suite de Skills IA',
      command: 'npx skills add devsys-code/saas-skills --all',
      description: 'Automatiza la arquitectura multitenant y CRUDs en tus proyectos con un solo comando.',
    },
  },
  en: {
    badge: 'SaaS Architecture & AI Acceleration',
    availableBadge: 'Available for projects and consulting',
    name: 'DERLYS DANIEL ALVARADO MENDOZA',
    shortName: 'DANIEL ALVARADO',
    handle: 'devsys-code',
    role: 'AI Engineer • Full Stack Developer • Systems Analyst',
    university: 'Systems Analyst — UCLA, Venezuela',
    description:
      'Software engineer with strong foundations in systems analysis and clean architecture. Extensive experience delivering robust enterprise applications both natively from engineering fundamentals and augmented through applied AI engineering. Creator of an interoperable multitenant SaaS ecosystem with decoupled templates for Django, NestJS, Angular, and React.',
    ctaPrimary: {
      text: 'Explore Projects',
      href: '#projects',
    },
    ctaSecondary: {
      text: 'Get in Touch',
      href: '#contact',
    },
    stats: [
      { value: '5', label: 'Core Projects' },
      { value: '8', label: 'Packaged AI Skills' },
      { value: '100%', label: 'Multitenant Isolation' },
      { value: 'Backend', label: 'Django & NestJS' },
      { value: 'Frontend', label: 'React & Angular' },
    ],
    terminal: {
      title: 'AI Skills Suite Quickstart',
      command: 'npx skills add devsys-code/saas-skills --all',
      description: 'Automate multitenant scaffolding and CRUD entities with a single command.',
    },
  },
};
