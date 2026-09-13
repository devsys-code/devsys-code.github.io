export interface SkillCategory {
  category: string;
  items: string[];
}

export interface PhilosophyPrinciple {
  title: string;
  description: string;
}

export interface ProfileData {
  sectionBadge: string;
  sectionTitle: string;
  sectionSubtitle: string;
  bio: string[];
  education: {
    degree: string;
    institution: string;
    location: string;
    description: string;
  };
  skills: SkillCategory[];
  philosophy: PhilosophyPrinciple[];
}
