import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { StatsSection } from '@/components/sections/stats-section';
import { SkillsPreview } from '@/components/sections/skills-preview';
import { CTASection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <StatsSection />
      <SkillsPreview />
      <CTASection />
    </>
  );
}
