import { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about-hero';
import { Timeline } from '@/components/sections/timeline';
import { AboutStats } from '@/components/sections/about-stats';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Modhu Sudhan Roy - AI Automation Engineer, Security Researcher, and Cloud Security Specialist.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <Timeline />
    </>
  );
}
