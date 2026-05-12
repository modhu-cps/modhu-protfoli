import type { TimelineEvent, Stat } from '@/lib/types';

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Founded AI Security Lab',
    description: 'Launched an independent research lab focused on AI-powered security solutions and automation frameworks.',
    type: 'work',
  },
  {
    year: '2023',
    title: 'Lead Security Engineer',
    description: 'Led security initiatives at a Fortune 500 company, implementing zero-trust architecture and AI-driven threat detection.',
    type: 'work',
  },
  {
    year: '2022',
    title: 'Cloud Security Architect',
    description: 'Designed and implemented multi-cloud security strategies for enterprise clients across AWS, Azure, and GCP.',
    type: 'work',
  },
  {
    year: '2021',
    title: 'Senior Security Researcher',
    description: 'Conducted vulnerability research and developed security tools for detecting emerging threats in IoT ecosystems.',
    type: 'work',
  },
  {
    year: '2020',
    title: 'OSCP Certification',
    description: 'Achieved the prestigious Offensive Security Certified Professional certification.',
    type: 'achievement',
  },
  {
    year: '2019',
    title: 'MSc in Cybersecurity',
    description: 'Completed Master of Science in Cybersecurity with focus on AI applications in threat detection.',
    type: 'education',
  },
  {
    year: '2017',
    title: 'BSc in Computer Science',
    description: 'Graduated with honors in Computer Science, specializing in distributed systems and cryptography.',
    type: 'education',
  },
];

export const stats: Stat[] = [
  {
    label: 'Years of Experience',
    value: '7+',
    icon: 'calendar',
  },
  {
    label: 'Projects Completed',
    value: '50+',
    icon: 'folder',
  },
  {
    label: 'Certifications',
    value: '12',
    icon: 'award',
  },
  {
    label: 'Open Source Contributions',
    value: '200+',
    icon: 'git-pull-request',
  },
];
