import { Metadata } from 'next';
import { TeamPageContent } from '@/components/sections/team-page-content';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the talented team behind our AI, security, and cloud solutions.',
};

export default function TeamPage() {
  return <TeamPageContent />;
}
