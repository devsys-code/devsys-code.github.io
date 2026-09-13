export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface HeaderData {
  logo: {
    tag: string;
    text: string;
  };
  navigation: NavItem[];
  githubUrl: string;
  ctaText: string;
}
