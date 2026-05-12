'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageTransition } from '@/components/layout/page-transition';

export function AboutHero() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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
                creating intelligent systems that protect and empower. With expertise spanning AI/ML, 
                cybersecurity, and cloud architecture, I build solutions that make a difference.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                My journey began with a fascination for how systems work - and how they can be broken. 
                This curiosity led me through computer science, cybersecurity, and eventually to the 
                intersection of AI and security where I now focus my work.
              </p>

              {/* Quick facts */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span>Remote / Worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <span>7+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <span>Available for Projects</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <span>MSc Cybersecurity</span>
                </div>
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30" />
                
                {/* Grid pattern */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), 
                                     linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-12 left-12 glass rounded-xl p-4"
                >
                  <div className="text-2xl font-bold text-foreground">AI</div>
                  <div className="text-xs text-muted-foreground">Automation</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-20 right-12 glass rounded-xl p-4"
                >
                  <div className="text-2xl font-bold text-foreground">Sec</div>
                  <div className="text-xs text-muted-foreground">Security</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-xl p-6"
                >
                  <div className="text-4xl font-bold gradient-text">M</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-12 left-20 glass rounded-xl p-4"
                >
                  <div className="text-2xl font-bold text-foreground">IoT</div>
                  <div className="text-xs text-muted-foreground">Systems</div>
                </motion.div>
              </div>

              {/* Decorative blur */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-[80px]" />
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-accent/30 blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
                    }
