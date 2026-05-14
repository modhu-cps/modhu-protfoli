'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Cloud } from 'lucide-react';
import { TypingEffect } from '@/components/effects/typing-effect';
import { siteConfig, typingTexts } from '@/lib/config';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="hero-zone relative min-h-screen w-full overflow-hidden">
      {/* ══════ Theme tokens ══════ */}
      <style>{`
        .hero-zone {
          --bg: #030303;
          --text: #FAFAFA;
          --muted: #A1A1AA;
          --accent: #D4B06A;
          --glass-bg: rgba(255,255,255,0.06);
          --glass-border: rgba(255,255,255,0.1);
        }
      `}</style>

      {/* ══════════════════════════════════════
          FULL‑DISPLAY IMAGE BACKGROUND
          ══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {/* 
          🖼️ REPLACE THIS DIV WITH YOUR IMAGE:
          <img 
            src="/your-photo.jpg" 
            alt="Profile" 
            className="absolute inset-0 h-full w-full object-cover"
          />
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
          {/* Decorative gold accents on the image area */}
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,176,106,0.12)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)] blur-3xl" />
          
          {/* Placeholder text on image */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-white text-6xl font-bold tracking-widest">YOUR IMAGE</span>
          </div>
        </div>
        
        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Subtle noise grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />
      </div>

      {/* ══════════════════════════════════════
          TEXT OVERLAY (on top of image)
          ══════════════════════════════════════ */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* ── LEFT: All text content ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[var(--muted)]">
              <Sparkles className="h-4 w-4 text-[var(--accent)]" />
              <span>Available for new projects</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-bold tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl leading-[0.95] -tracking-[0.04em]">
              Hi, I&apos;m<br />
              <span className="text-[var(--accent)]">{siteConfig.name}</span>
            </h1>

            {/* Subtitle tags */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-[var(--muted)]">
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
            <div className="h-8 text-xl font-medium sm:text-2xl text-[var(--text)]">
              <TypingEffect texts={typingTexts} className="text-[var(--text)]/90" />
            </div>

            {/* Description */}
            <p className="max-w-xl text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              AI Automation Engineer, Security Researcher, and Cloud Security Specialist building the future of intelligent systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-black font-semibold hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)] hover:translate-y-[-2px] transition-all duration-500"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/blog">
                <button className="inline-flex items-center rounded-full bg-black text-white border border-white/10 px-8 py-3.5 text-sm font-semibold transition-all duration-500 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)] hover:translate-y-[-2px]">
                  View Blog
                </button>
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT: Demo text overlay + floating badge ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden flex justify-center relative"
          >
            {/* ✨ Demo text card – bottom right corner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-8 right-8 glass rounded-2xl border border-[var(--glass-border)] px-5 py-4 text-sm text-white space-y-2.5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                <span>AI &amp; Security Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                <span>10+ Projects Delivered</span>
              </div>
            </motion.div>

            {/* Floating decorative badge (existing) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-3 -right-3 glass rounded-2xl border border-[var(--glass-border)] px-5 py-3 text-sm text-[var(--text)] shadow-2xl"
            >
              <span className="text-[var(--accent)] font-bold">10+</span> Projects
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent z-10" />
    </section>
  );
                }
