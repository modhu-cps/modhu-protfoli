import type { NavItem, SocialLink } from './types';

export const siteConfig = {
  name: 'Modhu Sudhan Roy',
  title: 'Modhu Portfolio',
  description: 'AI Automation Engineer, Security Researcher, and Cloud Security Specialist building the future of intelligent systems.',
  url: 'https://modhu-portfolio.vercel.app',
  ogImage: '/og-image.png',
  creator: 'Modhu Sudhan Roy',
  keywords: [
    'AI Automation',
    'Cyber Security',
    'Cloud Security',
    'IoT',
    'Python Developer',
    'Security Researcher',
    'Portfolio',
  ],
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'X', url: 'https://x.com', icon: 'twitter' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
  { name: 'Telegram', url: 'https://telegram.org', icon: 'send' },
];

export const typingTexts = [
  'AI Workflow Engineer',
  'Security Researcher',
  'Cloud Security Learner',
  'IoT Systems Builder',
  'Python Automation Developer',
];

export const heroSubtitle = 'AI Automation • Cyber Security • Cloud Security • IoT';

export const contactInfo = {
  email: 'hello@modhu.dev',
  location: 'Remote / Worldwide',
  availability: 'Available for projects',
};
