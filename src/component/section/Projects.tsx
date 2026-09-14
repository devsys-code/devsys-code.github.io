import { useState, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/section/Projects.data';
import type { ProjectCategory } from '../../type/section/Projects.type';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Badge, type BadgeProps } from '../common/Badge';
import { CheckCircle2, Sparkles, Server, Layout, Grid, ExternalLink } from 'lucide-react';

const GithubIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Projects = () => {
  const { language } = useLanguage();
  const data = projectsData[language];
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return data.projects;
    }
    return data.projects.filter((p) => p.category === selectedCategory);
  }, [data.projects, selectedCategory]);

  const categories: ProjectCategory[] = ['all', 'ai-suite', 'backend', 'frontend'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'all':
        return <Grid className="h-4 w-4 text-zinc-800 dark:text-zinc-200" />;
      case 'ai-suite':
        return <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />;
      case 'backend':
        return <Server className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />;
      case 'frontend':
        return <Layout className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />;
      default:
        return null;
    }
  };

  const getProjectBadgeVariant = (id: string): BadgeProps['variant'] => {
    switch (id) {
      case 'saas-skills':
        return 'purple';
      case 'django_saas':
        return 'emerald';
      case 'nestjs_saas':
        return 'rose';
      case 'angular_saas':
        return 'amber';
      case 'react_saas':
        return 'cyan';
      default:
        return 'accent';
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={data.sectionBadge}
          title={data.sectionTitle}
          subtitle={data.sectionSubtitle}
        />

        {/* Filter Buttons: Same background & border for all, only icons have color */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const label = data.filterLabels[cat];
            return (
              <div key={cat} className="relative group flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-label={label}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all duration-150 cursor-pointer active:scale-95 ${
                    isActive
                      ? 'ring-2 ring-zinc-400 dark:ring-zinc-600 shadow-xs'
                      : ''
                  }`}
                >
                  {getCategoryIcon(cat)}
                </button>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-medium text-zinc-100 shadow-md opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-950 z-50"
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              padding="lg"
              className="flex flex-col justify-between"
            >
              <div>
                {/* Header: Project Name, Slug & Badge */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-900 hover:text-purple-600 dark:text-zinc-50 dark:hover:text-purple-400 transition-colors inline-flex items-center gap-2"
                        title={`${data.repoButtonLabel}: ${project.name}`}
                      >
                        {project.name}
                      </a>
                    </h3>
                    <span className="block font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      devsys-code/{project.id}
                    </span>
                  </div>
                  <Badge variant={getProjectBadgeVariant(project.id)} size="sm">
                    {project.badge}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions: Icon-only buttons with Tooltips (Opción A) */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 mt-auto flex items-center justify-end gap-2.5">
                {/* Demo Button */}
                {project.demoUrl ? (
                  <div className="relative group flex items-center justify-center">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${data.demoButtonLabel} ${project.name}`}
                      title={`${data.demoButtonLabel}: ${project.name}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors duration-200 cursor-pointer active:scale-95 shadow-2xs"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-100 shadow-md opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-950 z-20"
                    >
                      {data.demoButtonLabel}
                    </span>
                  </div>
                ) : null}

                {/* Repository Button */}
                <div className="relative group flex items-center justify-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${data.repoButtonLabel} ${project.name}`}
                    title={`${data.repoButtonLabel}: ${project.name}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors duration-200 cursor-pointer active:scale-95 shadow-2xs"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-100 shadow-md opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-950 z-20"
                  >
                    {data.repoButtonLabel}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
