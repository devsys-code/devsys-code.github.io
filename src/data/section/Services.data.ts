import type { LocalizedContent } from '../../type/i18n.type';
import type { ServicesData } from '../../type/section/Services.type';

export const servicesData: LocalizedContent<ServicesData> = {
  es: {
    sectionBadge: 'Ecosistema SaaS',
    sectionTitle: 'Pilares de la Arquitectura',
    sectionSubtitle: 'Solución empresarial integral basada en interoperabilidad, seguridad y automatización.',
    pillars: [
      {
        id: 'multitenancy',
        title: 'Arquitectura Multitenant Nativa',
        badge: 'Aislamiento & Seguridad',
        description:
          'Aislamiento estricto de datos por organización implementado tanto en Django (`TenantModelUUID` / `TenantModelID`) como en NestJS (`BaseTenantService`), garantizando cero fugas de información y permisos basados en roles.',
        features: [
          'Modelos base con tenant context automático',
          'Autenticación JWT con rotación y roles (ADMIN, OPERATOR, VIEWER)',
          'Soporte dual de claves primarias UUID y enteros secuenciales',
          'Filtro de contexto por request sin intervención manual en queries',
        ],
        techStack: ['Django 6.0+', 'NestJS 11+', 'PostgreSQL', 'Prisma 7'],
      },
      {
        id: 'api-adapter',
        title: 'ApiAdapter Dual & Interoperable',
        badge: 'Frontend Agnóstico',
        description:
          'Patrón de diseño adaptador que permite a las aplicaciones frontend en Angular y React consumir indistintamente el backend de Django o NestJS mediante una configuración centralizada sin modificar componentes de UI.',
        features: [
          'Cambio de motor backend con solo una variable de entorno',
          'Normalización de payloads, errores HTTP y tokens de sesión',
          'Gestor de organizaciones unificado (Org Switcher)',
          'Sincronización de estado con Zustand en React y Signals en Angular',
        ],
        techStack: ['React 19', 'Angular 22', 'TypeScript', 'Zustand 5', 'Signals'],
      },
      {
        id: 'ai-suite',
        title: 'Suite de Automatización por IA',
        badge: 'Productividad x10',
        description:
          'Ecosistema de 8 skills estandarizadas para el CLI de skills (`npx skills`) y MCP, capaces de generar arquitectura base, migraciones, DTOs y CRUDs completos en segundos.',
        features: [
          '4 Skills Core para setup inicial en Django, NestJS, Angular y React',
          '4 Skills CRUD para scaffolding de entidades de negocio',
          'Validaciones automáticas de contratos y tipos en tiempo real',
          'Integración transparente con agentes de IA autónomos',
        ],
        techStack: ['Skills', 'Prompt', 'MCP', 'Node.js', 'TypeScript', 'Python'],
      },
    ],
  },
  en: {
    sectionBadge: 'SaaS Ecosystem',
    sectionTitle: 'Architectural Pillars',
    sectionSubtitle: 'Comprehensive enterprise solution built on interoperability, security, and automation.',
    pillars: [
      {
        id: 'multitenancy',
        title: 'Native Multitenant Architecture',
        badge: 'Isolation & Security',
        description:
          'Strict tenant data isolation implemented in both Django (`TenantModelUUID` / `TenantModelID`) and NestJS (`BaseTenantService`), preventing data leaks and enforcing role-based permissions.',
        features: [
          'Base models with automatic tenant context injection',
          'JWT authentication with rotation and roles (ADMIN, OPERATOR, VIEWER)',
          'Dual PK support: UUID and sequential auto-incrementing IDs',
          'Request-level filtering without manual query intervention',
        ],
        techStack: ['Django 6.0+', 'NestJS 11+', 'PostgreSQL', 'Prisma 7'],
      },
      {
        id: 'api-adapter',
        title: 'Dual Interoperable ApiAdapter',
        badge: 'Agnostic Frontend',
        description:
          'Adapter design pattern enabling Angular and React frontend applications to connect seamlessly to either Django or NestJS through centralized configuration without touching UI components.',
        features: [
          'Backend engine swap via a single environment flag',
          'Normalized payloads, HTTP error codes, and session tokens',
          'Unified tenant manager (Org Switcher)',
          'State synchronization with Zustand in React and Signals in Angular',
        ],
        techStack: ['React 19', 'Angular 22', 'TypeScript', 'Zustand 5', 'Signals'],
      },
      {
        id: 'ai-suite',
        title: 'AI Acceleration Suite',
        badge: '10x Engineering Velocity',
        description:
          'Ecosystem of 8 standardized skills for the skills CLI (`npx skills`) and MCP, generating base architectures, migrations, DTOs, and full CRUDs in seconds.',
        features: [
          '4 Core Skills for initial scaffolding in Django, NestJS, Angular, and React',
          '4 CRUD Skills for automated business entity creation',
          'Automated contract & type verification in real time',
          'Seamless integration with autonomous AI coding agents',
        ],
        techStack: ['Skills', 'Prompt', 'MCP', 'Node.js', 'TypeScript', 'Python'],
      },
    ],
  },
};
