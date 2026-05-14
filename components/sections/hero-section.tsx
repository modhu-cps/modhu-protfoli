'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ══════ Hero‑only design tokens ══════ */}
      <style>{`
        .hero-section {
          --bg: #030303;
          --text: #FAFAFA;
          --muted: #A1A1AA;
          --accent: #D4B06A;
          --glass-bg: rgba(255,255,255,0.035);
          --glass-border: rgba(255,255,255,0.07);
          --card-bg: rgba(255,255,255,0.04);
        }
      `}</style>

      {/* ══════ Cinematic Background ══════ */}
      <div className="absolute inset-0 -z-10 bg-[var(--bg)]">
        {/* Gold glow – top right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,176,106,0.1)_0%,transparent_70%)] blur-3xl" />
        {/* Subtle white glow – bottom left */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-3xl" />
        {/* Noise grain */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_60%,var(--bg)_100%)]" />
      </div>

      {/* ══════ Content ══════ */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[1fr_auto] lg:gap-28 items-center">

          {/* ── RIGHT: Image (order first on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center order-1 lg:order-none"
          >
            {/* Gold glow behind the card */}
            <div className="absolute -inset-10 rounded-[32px] bg-[radial-gradient(circle,rgba(212,176,106,0.15)_0%,transparent_70%)] blur-2xl" />

            {/* Glass card frame */}
            <div className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[460px] lg:w-[420px] lg:h-[520px] rounded-[32px] border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.50)] flex items-center justify-center overflow-hidden transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_30px_80px_rgba(0,0,0,0.60)]">
              {/* Placeholder – replace with your image */}
              <span className="text-lg font-medium text-white/30">
                YOUR IMAGE HERE
              </span>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-3 -right-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-lg px-5 py-2 text-sm text-[var(--text)] shadow-xl"
            >
              10+ Projects
            </motion.div>
          </motion.div>

          {/* ── LEFT: Text (order last on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 order-2 lg:order-none"
          >
            {/* Badge */}
            <div className="inline-flex rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-lg px-5 py-2 text-sm text-[var(--muted)]">
              AI • Security • Developer
            </div>

            {/* Main heading */}
            <h1 className="text-[clamp(56px,8vw,100px)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--text)]">
              Crafting{' '}
              <span className="text-[var(--accent)]">intelligent</span>{' '}
              digital experiences for the{' '}
              <span className="text-[var(--accent)]">future</span>.
            </h1>

            {/* Description */}
            <p className="max-w-[580px] text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              I build modern, high-performance digital products with clean UI,
              smooth interactions, and secure architecture.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full bg-[var(--text)] px-8 py-3.5 text-sm font-semibold text-[var(--bg)] transition-all duration-500 hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)]"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-lg px-8 py-3.5 text-sm font-medium text-[var(--text)] transition-all duration-500 hover:translate-y-[-2px] hover:border-white/20 hover:bg-white/5"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
