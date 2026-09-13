export interface StatItem {
  value: string;
  label: string;
}

export interface HomeData {
  badge: string;
  availableBadge: string;
  name: string;
  shortName: string;
  handle: string;
  role: string;
  university: string;
  description: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
  stats: StatItem[];
  terminal: {
    title: string;
    command: string;
    description: string;
  };
}
