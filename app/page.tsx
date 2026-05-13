import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { StatsSection } from '@/components/sections/stats-section';
import { SkillsPreview } from '@/components/sections/skills-preview';
import { CTASection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ── New Apple‑style background ── */}
      <div className="fixed inset-0 -z-10">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9fafc] via-[#f2f4f8] to-[#e5e9f2] dark:from-[#0b0f19] dark:via-[#111827] dark:to-[#0f172a]" />

        {/* Aurora blobs – light mode */}
        <div className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(173,216,255,0.5)_0%,transparent_70%)] blur-3xl opacity-40 dark:opacity-0" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(220,190,255,0.4)_0%,transparent_70%)] blur-3xl opacity-30 dark:opacity-0" />
        <div className="absolute bottom-20 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(180,230,210,0.45)_0%,transparent_70%)] blur-3xl opacity-30 dark:opacity-0" />

        {/* Aurora blobs – dark mode */}
        <div className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(56,80,130,0.6)_0%,transparent_70%)] blur-3xl opacity-0 dark:opacity-50" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(75,50,120,0.5)_0%,transparent_70%)] blur-3xl opacity-0 dark:opacity-40" />
        <div className="absolute bottom-20 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(30,70,70,0.55)_0%,transparent_70%)] blur-3xl opacity-0 dark:opacity-35" />

        {/* Very subtle noise texture (Apple often uses a grain) */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />

        {/* Subtle dot grid (retina friendly) */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.3 0 0) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Top shine — Apple macOS style */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/25" />

        {/* Bottom fade vignette */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/40 to-transparent dark:from-black/40" />
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
