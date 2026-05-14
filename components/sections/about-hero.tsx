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

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass card-3d gradient-border-thick rounded-3xl p-8 shadow-xl shadow-black/5 dark:shadow-black/40"
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
                <div className="glass card-3d gradient-border-thick flex items-center gap-3 p-4 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Remote / Worldwide</span>
                </div>

                <div className="glass card-3d gradient-border-thick flex items-center gap-3 p-4 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">7+ Years Experience</span>
                </div>

                <div className="glass card-3d gradient-border-thick flex items-center gap-3 p-4 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Available for Projects</span>
                </div>

                <div className="glass card-3d gradient-border-thick flex items-center gap-3 p-4 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">MSc Cybersecurity</span>
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
              <div className="glass card-3d gradient-border-thick relative aspect-square overflow-hidden rounded-[2rem] p-6 shadow-xl shadow-black/5 dark:shadow-black/40">
                {/* Grid pattern – visible in both modes */}
                <div
                  className="absolute inset-0 opacity-30 dark:opacity-25"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Floating AI */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-12 left-12 glass card-3d gradient-border-thick rounded-2xl p-4 shadow-md shadow-black/10 dark:shadow-black/30"
                >
                  <div className="text-2xl font-bold text-foreground">AI</div>
                  <div className="text-xs text-muted-foreground">Automation</div>
                </motion.div>

                {/* Floating Security */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 7, repeat: Infinity }}
                  className="absolute bottom-20 right-12 glass card-3d gradient-border-thick rounded-2xl p-4 shadow-md shadow-black/10 dark:shadow-black/30"
                >
                  <div className="text-2xl font-bold text-foreground">Sec</div>
                  <div className="text-xs text-muted-foreground">Security</div>
                </motion.div>

                {/* Center Logo */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass card-3d gradient-border-thick rounded-2xl p-6 shadow-lg shadow-black/10 dark:shadow-black/30"
                >
                  <div className="text-4xl font-bold gradient-text">M</div>
                </motion.div>

                {/* Floating IoT */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-12 left-20 glass card-3d gradient-border-thick rounded-2xl p-4 shadow-md shadow-black/10 dark:shadow-black/30"
                >
                  <div className="text-2xl font-bold text-foreground">IoT</div>
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
