'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Cloud } from 'lucide-react';
import { TypingEffect } from '@/components/effects/typing-effect';
import { siteConfig, typingTexts } from '@/lib/config';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ══════ Section‑only design tokens (dark gold theme) ══════ */}
      <style>{`
        .hero-zone {
          --bg: #030303;
          --text: #FAFAFA;
          --muted: #A1A1AA;
          --accent: #D4B06A;
          --glass-bg: rgba(255,255,255,0.035);
          --glass-border: rgba(255,255,255,0.07);
        }
      `}</style>

      {/* Cinematic background (full black with gold ambient) */}
      <div className="absolute inset-0 -z-10 bg-[var(--bg)]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(212,176,106,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_60%,var(--bg)_100%)]" />
      </div>

      {/* Main content grid */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ══════ LEFT: TEXT (overlaps image slightly) ══════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[var(--muted)] mb-8">
              <Sparkles className="h-4 w-4 text-[var(--accent)]" />
              <span>Available for new projects</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-bold tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl leading-[0.95] -tracking-[0.04em]">
              Hi, I&apos;m<br />
              <span className="text-[var(--accent)]">{siteConfig.name}</span>
            </h1>

            {/* Subtitle tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm sm:text-base text-[var(--muted)]">
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-[var(--accent)]" />
                AI Automation
              </span>
              <span className="text-[var(--glass-border)]">•</span>
              <span className="flex items-center gap-1.5">
                <Cloud className="h-4 w-4 text-[var(--accent)]" />
                Cyber Security
              </span>
              <span className="text-[var(--glass-border)]">•</span>
              <span>Cloud Security</span>
              <span className="text-[var(--glass-border)]">•</span>
              <span>IoT</span>
            </div>

            {/* Typing effect */}
            <div className="mt-4 h-8 text-xl font-medium sm:text-2xl text-[var(--text)]">
              <TypingEffect texts={typingTexts} className="text-[var(--text)]/90" />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-black font-semibold hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)] transition-all duration-500"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10"
                >
                  View Blog
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* ══════ RIGHT: LARGE IMAGE (floating glass card) ══════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Gold ambient glow behind image */}
            <div className="absolute -inset-10 rounded-[40px] bg-[radial-gradient(circle,rgba(212,176,106,0.12)_0%,transparent_70%)] blur-2xl" />

            {/* Giant glass card containing the image placeholder */}
            <div className="glass card-3d gradient-border-thick relative w-80 h-96 sm:w-[360px] sm:h-[440px] lg:w-[440px] lg:h-[560px] rounded-[40px] overflow-hidden shadow-2xl">
              {/* Placeholder – replace with real image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent flex items-center justify-center">
                <span className="text-white/20 text-lg font-medium">
                  YOUR IMAGE HERE
                </span>
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-3 -left-3 rounded-2xl glass border border-[var(--glass-border)] px-4 py-2 text-sm text-[var(--text)] shadow-lg"
            >
              10+ Projects
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
