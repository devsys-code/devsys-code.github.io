import type { LocalizedContent } from '../../type/i18n.type';
import type { ProjectsData } from '../../type/section/Projects.type';

export const projectsData: LocalizedContent<ProjectsData> = {
  es: {
    sectionBadge: 'Ecosistema de Software',
    sectionTitle: 'Proyectos Principales',
    sectionSubtitle: 'Los 5 componentes centrales del ecosistema SaaS multitenant interoperable desarrollado por devsys-code.',
    filterLabels: {
      all: 'Todos (5)',
      'ai-suite': 'Suite IA (1)',
      backend: 'Backend (2)',
      frontend: 'Frontend (2)',
    },
    quickstartLabel: 'Inicio Rápido:',
    repoButtonLabel: 'Ver Repositorio',
    demoButtonLabel: 'Ver Demo',
    projects: [
      {
        id: 'nestjs_saas',
        name: 'nestjs_saas',
        badge: 'Core Backend Template',
        category: 'backend',
        description:
          'Backend multitenant de alto rendimiento construido sobre NestJS 11 y Fastify, con BaseTenantService agnóstico al tipo de clave primaria y createTenantController con 6 endpoints estándar.',
        technologies: ['NestJS 11+', 'TypeScript', 'Fastify', 'Prisma 7', 'PostgreSQL', 'JWT'],
        quickstart: 'npm run start:dev',
        githubUrl: 'https://github.com/devsys-code/nestjs_saas',
        demoUrl: 'https://devsys-code.github.io/nestjs_saas',
        highlights: [
          'BaseTenantService agnóstico a tipo de clave primaria',
          'createTenantController con 6 endpoints REST estándar',
          'Motor ultra rápido con Fastify y Prisma ORM multi-modelo',
        ],
      },
      {
        id: 'django_saas',
        name: 'django_saas',
        badge: 'Core Backend Template',
        category: 'backend',
        description:
          'Backend multitenant en Django 6 con aislamiento estricto por organización, soporte para TenantModelUUID / TenantModelID, autenticación JWT con rotación y módulos org/, usr/, sed/.',
        technologies: ['Django 6.0+', 'Django REST Framework', 'PostgreSQL', 'JWT'],
        quickstart: 'python manage.py runserver',
        githubUrl: 'https://github.com/devsys-code/django_saas',
        demoUrl: 'https://devsys-code.github.io/django_saas',
        highlights: [
          'Aislamiento por organización TenantModelUUID y TenantModelID',
          'Autenticación JWT con rotación y roles ADMIN, OPERATOR, VIEWER',
          'Estructura modular limpia con módulos org/, usr/ y sed/',
        ],
      },
      {
        id: 'react_saas',
        name: 'react_saas',
        badge: 'Core Frontend Template',
        category: 'frontend',
        description:
          'Frontend SaaS ligero y ultra rápido desarrollado con React 19, Vite, Zustand 5 y React Router 7. ApiAdapter interoperable para intercambiar backend sin tocar vistas.',
        technologies: ['React 19+', 'Vite', 'Zustand 5', 'React Router 7', 'Tailwind CSS v4'],
        quickstart: 'npm run dev',
        githubUrl: 'https://github.com/devsys-code/react_saas',
        demoUrl: 'https://devsys-code.github.io/react_saas',
        highlights: [
          'ApiAdapter desacoplado para Django y NestJS',
          'Gestión de sesión multitenant reactiva con Zustand 5',
          'Rutas protegidas con guardias de autenticación y roles',
        ],
      },
      {
        id: 'angular_saas',
        name: 'angular_saas',
        badge: 'Core Frontend Template',
        category: 'frontend',
        description:
          'Frontend empresarial en Angular 22 con Signals, Standalone Components y Tailwind CSS v4. Incorpora ApiAdapter agnóstico para conectarse sin cambios a Django o NestJS.',
        technologies: ['Angular 22+', 'Signals', 'Tailwind CSS v4', 'Standalone Components'],
        quickstart: 'npm start',
        githubUrl: 'https://github.com/devsys-code/angular_saas',
        demoUrl: 'https://devsys-code.github.io/angular_saas',
        highlights: [
          'ApiAdapter agnóstico para conmutar backends sin tocar UI',
          'Layout SaaS colapsable con Org Switcher multitenant',
          'Reactividad de alto desempeño basada en Signals nativos',
        ],
      },
      {
        id: 'saas-skills',
        name: 'saas-skills',
        badge: 'Suite de Skills de IA',
        category: 'ai-suite',
        description:
          'Suite modular de 8 skills empaquetadas (4 Core + 4 CRUD) para la CLI de skills y MCP. Automatiza la arquitectura base y entidades de negocio en Django, NestJS, Angular y React.',
        technologies: ['Skill', 'Prompt', 'MCP'],
        quickstart: 'npx skills add devsys-code/saas-skills --all',
        githubUrl: 'https://github.com/devsys-code/saas-skills',
        highlights: [
          '8 Skills estandarizadas (4 Core Setup + 4 Scaffolding CRUD)',
          'Instalación directa vía gestor de paquetes de skills',
          'Soporte multi-stack coherente y parametrizable',
        ],
      },
    ],
  },
  en: {
    sectionBadge: 'Software Ecosystem',
    sectionTitle: 'Core Projects',
    sectionSubtitle: 'The 5 central pillars of the interoperable multitenant SaaS ecosystem created by devsys-code.',
    filterLabels: {
      all: 'All (5)',
      'ai-suite': 'AI Suite (1)',
      backend: 'Backend (2)',
      frontend: 'Frontend (2)',
    },
    quickstartLabel: 'Quickstart:',
    repoButtonLabel: 'View Repository',
    demoButtonLabel: 'View Demo',
    projects: [
      {
        id: 'nestjs_saas',
        name: 'nestjs_saas',
        badge: 'Core Backend Template',
        category: 'backend',
        description:
          'High-performance multitenant backend built with NestJS 11 and Fastify, featuring PK-agnostic BaseTenantService and createTenantController with 6 standard endpoints.',
        technologies: ['NestJS 11+', 'TypeScript', 'Fastify', 'Prisma 7', 'PostgreSQL', 'JWT'],
        quickstart: 'npm run start:dev',
        githubUrl: 'https://github.com/devsys-code/nestjs_saas',
        demoUrl: 'https://devsys-code.github.io/nestjs_saas',
        highlights: [
          'Primary-key agnostic BaseTenantService',
          'createTenantController providing 6 standardized REST endpoints',
          'High throughput powered by Fastify and Prisma multi-model ORM',
        ],
      },
      {
        id: 'django_saas',
        name: 'django_saas',
        badge: 'Core Backend Template',
        category: 'backend',
        description:
          'Django 6 multitenant backend with strict organization isolation, TenantModelUUID / TenantModelID support, rotating JWT authentication, and modular org/, usr/, sed/ architecture.',
        technologies: ['Django 6.0+', 'Django REST Framework', 'PostgreSQL', 'JWT'],
        quickstart: 'python manage.py runserver',
        githubUrl: 'https://github.com/devsys-code/django_saas',
        demoUrl: 'https://devsys-code.github.io/django_saas',
        highlights: [
          'Tenant isolation via TenantModelUUID and TenantModelID',
          'JWT authentication with rotation and ADMIN, OPERATOR, VIEWER roles',
          'Clean modular structure featuring org/, usr/, and sed/ apps',
        ],
      },
      {
        id: 'react_saas',
        name: 'react_saas',
        badge: 'Core Frontend Template',
        category: 'frontend',
        description:
          'Fast and lightweight SaaS frontend built with React 19, Vite, Zustand 5, and React Router 7. Features decoupled ApiAdapter to swap backends without touching views.',
        technologies: ['React 19+', 'Vite', 'Zustand 5', 'React Router 7', 'Tailwind CSS v4'],
        quickstart: 'npm run dev',
        githubUrl: 'https://github.com/devsys-code/react_saas',
        demoUrl: 'https://devsys-code.github.io/react_saas',
        highlights: [
          'Decoupled ApiAdapter for Django and NestJS',
          'Reactive multitenant session management with Zustand 5',
          'Protected routes with role-based auth guards',
        ],
      },
      {
        id: 'angular_saas',
        name: 'angular_saas',
        badge: 'Core Frontend Template',
        category: 'frontend',
        description:
          'Enterprise Angular 22 frontend leveraging Signals, Standalone Components, and Tailwind CSS v4. Features an agnostic ApiAdapter connecting to Django or NestJS.',
        technologies: ['Angular 22+', 'Signals', 'Tailwind CSS v4', 'Standalone Components'],
        quickstart: 'npm start',
        githubUrl: 'https://github.com/devsys-code/angular_saas',
        demoUrl: 'https://devsys-code.github.io/angular_saas',
        highlights: [
          'Agnostic ApiAdapter to switch backends without modifying UI',
          'Collapsible SaaS Layout with tenant Org Switcher',
          'High-performance reactivity powered by native Signals',
        ],
      },
      {
        id: 'saas-skills',
        name: 'saas-skills',
        badge: 'AI Skills Suite',
        category: 'ai-suite',
        description:
          'Modular suite of 8 packaged skills (4 Core + 4 CRUD) for the skills CLI and MCP. Automates foundational architecture and business entities across Django, NestJS, Angular, and React.',
        technologies: ['Skill', 'Prompt', 'MCP'],
        quickstart: 'npx skills add devsys-code/saas-skills --all',
        githubUrl: 'https://github.com/devsys-code/saas-skills',
        highlights: [
          '8 Standardized skills (4 Core Setup + 4 CRUD Scaffolding)',
          'Direct installation via skills package manager CLI',
          'Coherent, parameterizable multi-stack support',
        ],
      },
    ],
  },
};
