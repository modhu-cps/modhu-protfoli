import { Metadata } from 'next';
import { ProjectsPageContent } from '@/components/sections/projects-page-content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of projects in AI Automation, Cyber Security, Cloud Security, IoT, and more.',
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
