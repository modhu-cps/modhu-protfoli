import type { TeamMember } from '@/lib/types';

export const teamMembers: TeamMember[] = [
  {
    id: 'modhu-sudhan-roy',
    name: 'Modhu Sudhan Roy',
    role: 'Founder & Lead Engineer',
    bio: 'Passionate about building intelligent systems at the intersection of AI and security. Leading the vision for next-generation automation solutions that empower businesses and protect digital assets.',
    image: 'https://i.postimg.cc/QC9wr2vV/modhu.jpg',
    skills: ['AI/ML', 'Security', 'Cloud Architecture', 'Leadership'],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    featured: true,
  },
  {
    id: 'alex-chen',
    name: 'Alex Chen',
    role: 'AI Engineer',
    bio: 'Deep learning specialist focused on developing cutting-edge machine learning models for security applications. Expert in computer vision and natural language processing.',
    image: '/images/team/alex.jpg',
    skills: ['Deep Learning', 'Python', 'TensorFlow', 'Research'],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'sarah-martinez',
    name: 'Sarah Martinez',
    role: 'Security Researcher',
    bio: 'Cybersecurity expert with extensive experience in penetration testing and vulnerability research. Dedicated to staying ahead of emerging threats and protecting critical infrastructure.',
    image: '/images/team/sarah.jpg',
    skills: ['Penetration Testing', 'Malware Analysis', 'Threat Hunting', 'OSINT'],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'IoT Developer',
    bio: 'Hardware enthusiast specializing in IoT systems and embedded development. Building the bridge between physical devices and intelligent cloud systems.',
    image: '/images/team/david.jpg',
    skills: ['Embedded Systems', 'C++', 'Rust', 'Hardware Design'],
    socials: {
      github: 'https://github.com',
      website: 'https://davidkim.dev',
    },
  },
  {
    id: 'emma-wilson',
    name: 'Emma Wilson',
    role: 'Frontend Developer',
    bio: 'Creating beautiful, accessible, and performant user interfaces. Passionate about design systems and delivering exceptional user experiences.',
    image: '/images/team/emma.jpg',
    skills: ['React', 'TypeScript', 'UI/UX', 'Accessibility'],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
];

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id);
}

export function getFeaturedTeamMembers(): TeamMember[] {
  return teamMembers.filter(member => member.featured);
}
