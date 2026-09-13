export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  techStack: string[];
}

export interface ServicesData {
  sectionBadge: string;
  sectionTitle: string;
  sectionSubtitle: string;
  pillars: ServiceItem[];
}
