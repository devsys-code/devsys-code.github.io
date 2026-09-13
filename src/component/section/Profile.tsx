import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/section/Profile.data';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { GraduationCap, Code2, ShieldCheck, Zap } from 'lucide-react';

export const Profile = () => {
  const { language } = useLanguage();
  const data = profileData[language];

  const getPhilosophyIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />;
      case 1:
        return <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />;
      case 2:
        return <Zap className="h-5 w-5 text-amber-500" />;
      default:
        return <Code2 className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />;
    }
  };

  const getPhilosophyBg = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-cyan-500/10 border-cyan-500/20';
      case 1:
        return 'bg-emerald-500/10 border-emerald-500/20';
      case 2:
        return 'bg-amber-500/10 border-amber-500/20';
      default:
        return 'bg-zinc-100 dark:bg-zinc-800';
    }
  };

  return (
    <section id="profile" className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={data.sectionBadge}
          title={data.sectionTitle}
          subtitle={data.sectionSubtitle}
        />

        {/* Bio & Education 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Bio text cards */}
          <div className="lg:col-span-7 space-y-4">
            <Card padding="lg" hoverable={false}>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                {language === 'es' ? 'Sobre Mí & Enfoque Técnico' : 'About Me & Technical Focus'}
              </h3>
              <div className="space-y-3.5 text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                {data.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>
            </Card>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card padding="lg" className="border-l-4 border-l-blue-600 dark:border-l-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                    {language === 'es' ? 'Educación Superior' : 'Higher Education'}
                  </span>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {data.education.degree}
                  </h4>
                </div>
              </div>

              <div className="space-y-2 mt-4 text-sm">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {data.education.institution}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  {data.education.location}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800 leading-relaxed text-xs sm:text-sm">
                  {data.education.description}
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Technical Competencies Category Badges */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
            <span>{language === 'es' ? 'Competencias Técnicas por Capa' : 'Technical Competencies by Layer'}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.skills.map((skillGroup) => (
              <Card key={skillGroup.category} padding="md" hoverable={false}>
                <h4 className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} variant="default" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy Principles */}
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            {language === 'es' ? 'Principios de Ingeniería' : 'Engineering Principles'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.philosophy.map((principle, idx) => (
              <Card key={principle.title} padding="md">
                <div className={`mb-3 p-2.5 w-fit rounded-lg border ${getPhilosophyBg(idx)}`}>
                  {getPhilosophyIcon(idx)}
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {principle.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
