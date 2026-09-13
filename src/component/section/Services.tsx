import { useLanguage } from '../../context/LanguageContext';
import { servicesData } from '../../data/section/Services.data';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Badge, type BadgeProps } from '../common/Badge';
import { Layers, Network, Bot, CheckCircle2 } from 'lucide-react';

export const Services = () => {
  const { language } = useLanguage();
  const data = servicesData[language];

  const getPillarConfig = (id: string) => {
    switch (id) {
      case 'multitenancy':
        return {
          icon: <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
          containerBg: 'bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20',
          badgeVariant: 'blue' as BadgeProps['variant'],
        };
      case 'api-adapter':
        return {
          icon: <Network className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
          containerBg: 'bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20',
          badgeVariant: 'emerald' as BadgeProps['variant'],
        };
      case 'ai-suite':
        return {
          icon: <Bot className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
          containerBg: 'bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/20',
          badgeVariant: 'purple' as BadgeProps['variant'],
        };
      default:
        return {
          icon: <Layers className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />,
          containerBg: 'bg-zinc-100 dark:bg-zinc-800',
          badgeVariant: 'default' as BadgeProps['variant'],
        };
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={data.sectionBadge}
          title={data.sectionTitle}
          subtitle={data.sectionSubtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.pillars.map((pillar) => {
            const config = getPillarConfig(pillar.id);
            return (
              <Card key={pillar.id} padding="lg" className="flex flex-col justify-between">
                <div>
                  {/* Header with Icon & Badge */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className={`p-3 rounded-xl shadow-2xs ${config.containerBg}`}>
                      {config.icon}
                    </div>
                    <Badge variant={config.badgeVariant} size="sm">
                      {pillar.badge}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6 border-t border-zinc-100 dark:border-zinc-800/80 pt-5">
                    {pillar.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills Footer */}
                <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.techStack.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
