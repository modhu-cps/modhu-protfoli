import { Metadata } from 'next';
import { SkillsPageContent } from '@/components/sections/skills-page-content';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Explore my technical expertise in AI Automation, Cyber Security, Cloud Security, IoT, and more.',
};

export default function SkillsPage() {
  return <SkillsPageContent />;
}
