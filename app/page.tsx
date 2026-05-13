import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { StatsSection } from '@/components/sections/stats-section';
import { SkillsPreview } from '@/components/sections/skills-preview';
import { CTASection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ── Apple-style background ── */}
      <div className="fixed inset-0 -z-10">

        {/* Base gradient */}
        <div className="absolute inset-0 bg-[oklch(0.97_0.005_240)]  dark:bg-[oklch(0.1_0.008_240)]" />

        {/* Mesh blobs — light mode */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.82_0.06_230)_0%,transparent_70%)] opacity-40 blur-3xl dark:opacity-0" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.80_0.05_280)_0%,transparent_70%)] opacity-30 blur-3xl dark:opacity-0" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.85_0.04_200)_0%,transparent_70%)] opacity-35 blur-3xl dark:opacity-0" />
        <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.88_0.03_160)_0%,transparent_70%)] opacity-25 blur-3xl dark:opacity-0" />

        {/* Mesh blobs — dark mode */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.28_0.06_240)_0%,transparent_70%)] opacity-0 blur-3xl dark:opacity-50" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.22_0.05_280)_0%,transparent_70%)] opacity-0 blur-3xl dark:opacity-40" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.25_0.04_200)_0%,transparent_70%)] opacity-0 blur-3xl dark:opacity-35" />
        <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.20_0.03_160)_0%,transparent_70%)] opacity-0 blur-3xl dark:opacity-25" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.4 0 0) 1px, transparent 1px),
                              linear-gradient(90deg, oklch(0.4 0 0) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Top shine — Apple macOS style */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/20" />

      </div>

      {/* ── Page content ── */}
      <HeroSection />
      <FeaturedProjects />
      <StatsSection />
      <SkillsPreview />
      <CTASection />

    </div>
  );
}
