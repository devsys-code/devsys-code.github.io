export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'whatsapp' | 'email';
}

export interface FooterData {
  developerName: string;
  tagline: string;
  university: string;
  copyright: string;
  backToTop: string;
  socials: SocialLink[];
}
