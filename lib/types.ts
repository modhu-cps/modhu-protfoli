// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  featured?: boolean;
  date: string;
}

export type ProjectCategory = 
  | 'ai-automation'
  | 'cyber-security'
  | 'cloud-security'
  | 'iot'
  | 'web-development'
  | 'devops'
  | 'other';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

// Blog Types
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
}

// Certification Types
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
  skills: string[];
  description?: string;
}

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  featured?: boolean;
}

// Skill Types
export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  description: string;
  skills: Skill[];
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Social Links
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Timeline Event
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
}

// Stats
export interface Stat {
  label: string;
  value: string;
  icon?: string;
}
