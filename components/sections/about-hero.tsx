'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageTransition } from '@/components/layout/page-transition';

export function AboutHero() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="glass glass-lg border-accent-top relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 rounded-[2rem]">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass hover-lift border-neon-blue rounded-3xl p-8"
            >
              <Badge variant="outline" className="mb-4 bg-white/5">
                About Me
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Building the Future of
                <span className="gradient-text"> Intelligent Security</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                I&apos;m Modhu Sudhan Roy, an AI Automation Engineer and Security Researcher passionate about
                creating intelligent systems that protect and empower.
              </p>

              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                My journey began with curiosity about systems, security and AI integration.
              </p>

              {/* QUICK FACTS */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="glass-sm hover-lift-sm flex items-center gap-3 p-4 rounded-2xl border border-white/10">
                  <div className="glass-sm flex h-10 w-10 items-center justify-center rounded-xl">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span>Remote / Worldwide</span>
                </div>

                <div className="glass-sm hover-lift-sm flex items-center gap-3 p-4 rounded-2xl border border-white/10">
                  <div className="glass-sm flex h-10 w-10 items-center justify-center rounded-xl">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <span>7+ Years Experience</span>
                </div>

                <div className="glass-sm hover-lift-sm flex items-center gap-3 p-4 rounded-2xl border border-white/10">
                  <div className="glass-sm flex h-10 w-10 items-center justify-center rounded-xl">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <span>Available for Projects</span>
                </div>

                <div className="glass-sm hover-lift-sm flex items-center gap-3 p-4 rounded-2xl border border-white/10">
                  <div className="glass-sm flex h-10 w-10 items-center justify-center rounded-xl">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <span>MSc Cybersecurity</span>
                </div>

              </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >

              <div className="glass glass-lg border-neon-purple relative aspect-square overflow-hidden rounded-[2rem] p-6">

                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30" />

                {/* Floating AI */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-12 left-12 glass hover-lift border-neon-cyan rounded-2xl p-4"
                >
                  <div className="text-2xl font-bold">AI</div>
                  <div className="text-xs text-muted-foreground">Automation</div>
                </motion.div>

                {/* Floating Security */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 7, repeat: Infinity }}
                  className="absolute bottom-20 right-12 glass hover-lift border-neon-purple rounded-2xl p-4"
                >
                  <div className="text-2xl font-bold">Sec</div>
                  <div className="text-xs text-muted-foreground">Security</div>
                </motion.div>

                {/* Center Logo */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass glass-lg rounded-2xl p-6"
                >
                  <div className="text-4xl font-bold gradient-text">M</div>
                </motion.div>

                {/* Floating IoT */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-12 left-20 glass hover-lift border-neon-blue rounded-2xl p-4"
                >
                  <div className="text-2xl font-bold">IoT</div>
                  <div className="text-xs text-muted-foreground">Systems</div>
                </motion.div>

              </div>

              {/* glow */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-[80px]" />
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-accent/30 blur-[80px]" />

            </motion.div>

          </div>
        </div>

      </section>
    </PageTransition>
  );
}
