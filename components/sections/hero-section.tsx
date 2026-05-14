'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Cloud } from 'lucide-react';
import { TypingEffect } from '@/components/effects/typing-effect';
import { siteConfig, typingTexts } from '@/lib/config';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-28">
          
          {/* ── LEFT CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-foreground/80">Available for new projects</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] -tracking-[0.03em]">
              Hi, I&apos;m<br />
              <span className="gradient-text">{siteConfig.name}</span>
            </h1>

            {/* Subtitle tags */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-muted-foreground">
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
            </div>

            {/* Typing effect */}
            <div className="h-8 text-xl font-medium sm:text-2xl text-foreground">
              <TypingEffect texts={typingTexts} className="text-foreground/90" />
            </div>

            {/* Description */}
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
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
                  className="rounded-full bg-white/5 border-white/10 text-foreground hover:bg-white/10"
                >
                  View Blog
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT VISUAL: Profile Image Placeholder ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Soft ambient glow */}
            <div className="absolute -inset-20 bg-[radial-gradient(circle,rgba(212,176,106,0.15)_0%,transparent_70%)] blur-3xl" />

            {/* Glassmorphism image frame */}
            <div className="glass card-3d gradient-border-thick relative w-80 h-80 lg:w-96 lg:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl">
              {/* Placeholder image — replace with your own */}
              <img
                src="https://ui-avatars.com/api/?name=Modhu+Sudhan&size=512&background=D4B06A&color=030303&bold=true&format=png"
                alt={siteConfig.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Subtle gradient overlay to maintain depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 shadow-xl"
            >
              <span className="text-sm font-medium text-foreground">10+ Projects</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
