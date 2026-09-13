import type { LocalizedContent } from '../../type/i18n.type';
import type { ProfileData } from '../../type/section/Profile.type';

export const profileData: LocalizedContent<ProfileData> = {
  es: {
    sectionBadge: 'Trayectoria & Filosofía',
    sectionTitle: 'Perfil Profesional',
    sectionSubtitle: 'Formación académica sólida y mentalidad de arquitectura escalable.',
    bio: [
      'Soy Analista de Sistemas graduado de la Universidad Centroccidental Lisandro Alvarado (UCLA) en Venezuela, con amplia experiencia diseñando e implementando soluciones web empresariales de punta a punta.',
      'Mi enfoque se centra en la construcción de arquitecturas desacopladas y multitenant seguras, donde cada capa del sistema cumpla una responsabilidad estricta, minimizando la deuda técnica y garantizando la interoperabilidad.',
      'A través de la suite saas-skills, integro agentes y herramientas de inteligencia artificial directamente en los flujos de trabajo de ingeniería de software, multiplicando la velocidad de entrega de funcionalidades robustas.',
    ],
    education: {
      degree: 'Analista de Sistemas',
      institution: 'Universidad Centroccidental Lisandro Alvarado (UCLA)',
      location: 'Barquisimeto, Venezuela',
      description:
        'Fundamentos rigurosos en análisis y diseño de sistemas, modelado relacional de datos, ingeniería de software, estructuras algorítmicas y seguridad informática.',
    },
    skills: [
      {
        category: 'Backend & Arquitectura',
        items: ['Python', 'Node.js', 'Django 6.0+', 'Django REST Framework', 'NestJS 11+', 'Fastify', 'Prisma 7', 'PostgreSQL', 'JWT Auth'],
      },
      {
        category: 'Frontend Moderno',
        items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React 19', 'Angular 22 (Signals)', 'Tailwind CSS v4', 'Zustand 5', 'React Router 7', 'Vite'],
      },
      {
        category: 'IA & Herramientas',
        items: ['Skill', 'Prompt', 'MCP', 'Git', 'GitHub', 'Postman'],
      },
    ],
    philosophy: [
      {
        title: 'Desacoplamiento Estricto',
        description: 'Capas de datos, lógica de negocio y presentación completamente independientes para máxima reusabilidad y testeo.',
      },
      {
        title: 'Multitenancy Nativo',
        description: 'Aislamiento de datos a nivel de base de datos desde el día cero, previniendo fugas entre organizaciones.',
      },
      {
        title: 'Velocidad Acelerada por IA',
        description: 'Automatización de tareas repetitivas de andamiaje mediante skills empaquetadas sin comprometer la calidad del código.',
      },
    ],
  },
  en: {
    sectionBadge: 'Background & Philosophy',
    sectionTitle: 'Professional Profile',
    sectionSubtitle: 'Solid academic foundation combined with a scalable engineering mindset.',
    bio: [
      'I am a Systems Analyst graduated from Universidad Centroccidental Lisandro Alvarado (UCLA) in Venezuela, with extensive experience designing and deploying end-to-end enterprise web solutions.',
      'My focus is centered on building decoupled, secure multitenant architectures where each system tier serves a distinct responsibility, minimizing technical debt and ensuring interoperability.',
      'Through the saas-skills suite, I embed AI agents and tooling directly into software engineering workflows, multiplying feature delivery speed without sacrificing robustness.',
    ],
    education: {
      degree: 'Systems Analyst',
      institution: 'Lisandro Alvarado Central Occidental University (UCLA)',
      location: 'Barquisimeto, Venezuela',
      description:
        'Rigorous foundation in systems analysis & design, relational database modeling, software engineering principles, algorithms, and security.',
    },
    skills: [
      {
        category: 'Backend & Architecture',
        items: ['Python', 'Node.js', 'Django 6.0+', 'Django REST Framework', 'NestJS 11+', 'Fastify', 'Prisma 7', 'PostgreSQL', 'JWT Auth'],
      },
      {
        category: 'Modern Frontend',
        items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React 19', 'Angular 22 (Signals)', 'Tailwind CSS v4', 'Zustand 5', 'React Router 7', 'Vite'],
      },
      {
        category: 'AI & Tooling',
        items: ['Skill', 'Prompt', 'MCP', 'Git', 'GitHub', 'Postman'],
      },
    ],
    philosophy: [
      {
        title: 'Strict Decoupling',
        description: 'Data layer, business logic, and UI remain completely decoupled for maximum maintainability and testing confidence.',
      },
      {
        title: 'Native Multitenancy',
        description: 'Database-level tenant isolation built into base models from day one, preventing cross-organization data leakage.',
      },
      {
        title: 'AI-Driven Velocity',
        description: 'Repetitive boilerplate and CRUD creation are automated through packaged skills without compromising code standards.',
      },
    ],
  },
};
