export type ProjectCategory = 'all' | 'ai-suite' | 'backend' | 'frontend';

export interface ProjectItem {
  id: string;
  name: string;
  badge: string;
  category: 'ai-suite' | 'backend' | 'frontend';
  description: string;
  technologies: string[];
  quickstart: string;
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
}

export interface ProjectsData {
  sectionBadge: string;
  sectionTitle: string;
  sectionSubtitle: string;
  filterLabels: Record<ProjectCategory, string>;
  quickstartLabel: string;
  repoButtonLabel: string;
  demoButtonLabel: string;
  projects: ProjectItem[];
}
