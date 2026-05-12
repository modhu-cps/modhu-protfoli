'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Cloud } from 'lucide-react';
import { TypingEffect } from '@/components/effects/typing-effect';
import { siteConfig, typingTexts, heroSubtitle } from '@/lib/config';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />
      {/* Animated gradient background */}
<div className="absolute inset-0 animated-gradient" />

{/* Noise layer (NEW ADD) */}
<div
  className="absolute inset-0 opacity-[0.03] pointer-events-none"
  style={{
    backgroundImage:
      'url("https://grainy-gradients.vercel.app/noise.svg")',
  }}
/>

{/* Grid pattern overlay */}
<div className="absolute inset-0 opacity-[0.02]" />
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4h-[500px] w-[500px]rounded-fullbg-primary/20blur-[140px]mix-blend-screen"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 right-1/4h-[500px] w-[500px]rounded-fullbg-accent/20blur-[140px]mix-blend-screen"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40">
        <div
  className="glassflex flex-col items-center text-centerrounded-[32px]px-8 py-12 border border-white/10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Available for new projects</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8text-5xlfont-blacktracking-[-0.04em]text-foregroundsm:text-7xllg:text-8xl"
          >
            <span className="text-balance">Hi, I&apos;m</span>
            <br />
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground sm:text-base"
          >
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary" />
              AI Automation
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Cloud className="h-4 w-4 text-accent" />
              Cyber Security
            </span>
            <span className="text-border">•</span>
            <span>Cloud Security</span>
            <span className="text-border">•</span>
            <span>IoT</span>
          </motion.div>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 h-8 text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            <TypingEffect texts={typingTexts} className="text-foreground" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 max-w-2xl text-lg text-muted-foreground text-balance"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/projects">
              <Button size="lg" className="card-3dglassgroup">
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
                View Blog
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="ghost" className="hover:bg-white/5">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-muted-foreground">Scroll to explore</span>
              <div className="h-10 w-6 rounded-full border border-white/20 p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-2 w-full rounded-full bg-white/40"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
