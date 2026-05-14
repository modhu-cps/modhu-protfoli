import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { StatsSection } from '@/components/sections/stats-section';
import { SkillsPreview } from '@/components/sections/skills-preview';
import { CTASection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: '#030303',
        // ── Override CSS variables for the entire home page ──
        '--background': '#030303',
        '--foreground': '#FAFAFA',
        '--primary': '#D4B06A',
        '--primary-foreground': '#030303',
        '--accent': '#D4B06A',
        '--accent-foreground': '#030303',
        '--muted-foreground': '#71717A',
        '--glass-bg': 'rgba(255,255,255,0.035)',
        '--glass-border': 'rgba(255,255,255,0.07)',
        '--border': 'rgba(255,255,255,0.07)',
      } as React.CSSProperties}
    >
      {/* ── Premium dark background with gold hints ── */}
      <div className="fixed inset-0 -z-10">
        {/* Base pure black */}
        <div className="absolute inset-0 bg-[#030303]" />

        {/* Gold-tinted blobs (only visible in dark mode, which is the default here) */}
        <div className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(212,176,106,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(212,176,106,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,176,106,0.07)_0%,transparent_70%)] blur-3xl" />

        {/* Ultra‑subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Subtle noise grain */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />

        {/* Top shine – very thin white line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom vignette – dark fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* ── Page content (sections automatically use new colors) ── */}
      <HeroSection />
      <FeaturedProjects />
      <StatsSection />
      <SkillsPreview />
      <CTASection />
    </div>
  );
        }
