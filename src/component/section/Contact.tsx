import { useLanguage } from '../../context/LanguageContext';
import { contactData } from '../../data/section/Contact.data';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Badge, type BadgeProps } from '../common/Badge';
import { Button } from '../common/Button';
import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact = () => {
  const { language } = useLanguage();
  const data = contactData[language];

  const getChannelStyle = (type: string) => {
    switch (type) {
      case 'whatsapp':
        return {
          icon: <MessageCircle className="h-6 w-6 text-emerald-500" />,
          containerBg: 'bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20',
          badgeVariant: 'emerald' as BadgeProps['variant'],
        };
      case 'email':
        return {
          icon: <Mail className="h-6 w-6 text-sky-500" />,
          containerBg: 'bg-sky-500/10 dark:bg-sky-500/15 border border-sky-500/20',
          badgeVariant: 'cyan' as BadgeProps['variant'],
        };
      case 'linkedin':
        return {
          icon: <LinkedinIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
          containerBg: 'bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20',
          badgeVariant: 'blue' as BadgeProps['variant'],
        };
      case 'github':
        return {
          icon: <GithubIcon className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />,
          containerBg: 'bg-zinc-500/10 dark:bg-zinc-500/15 border border-zinc-500/20',
          badgeVariant: 'default' as BadgeProps['variant'],
        };
      default:
        return {
          icon: <Mail className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />,
          containerBg: 'bg-zinc-100 dark:bg-zinc-800',
          badgeVariant: 'default' as BadgeProps['variant'],
        };
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/30 dark:bg-zinc-950/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={data.sectionBadge}
          title={data.sectionTitle}
          subtitle={data.sectionSubtitle}
        />



        {/* Channels 4-grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.channels.map((channel) => {
            const style = getChannelStyle(channel.type);
            return (
              <Card key={channel.id} padding="lg" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className={`p-3 rounded-xl shadow-2xs ${style.containerBg}`}>
                      {style.icon}
                    </div>
                    <Badge variant={style.badgeVariant} size="sm">
                      {channel.badge}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                    {channel.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 break-all mb-6">
                    {channel.value}
                  </p>
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  href={channel.href}
                  icon={<ArrowUpRight className="h-3.5 w-3.5" />}
                  iconPosition="right"
                  className="w-full justify-between mt-auto"
                >
                  {channel.actionText}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
