'use client';

import { motion } from 'framer-motion';
import { Code, Shield, Rocket, Users } from 'lucide-react';
import { AnimatedCounter } from '@/components/effects/animated-counter';

const aboutStats = [
  {
    icon: Code,
    value: 50000,
    suffix: '+',
    label: 'Lines of Code',
    description: 'Written across various projects',
  },
  {
    icon: Shield,
    value: 100,
    suffix: '+',
    label: 'Vulnerabilities Found',
    description: 'Through security research',
  },
  {
    icon: Rocket,
    value: 30,
    suffix: '+',
    label: 'Projects Deployed',
    description: 'In production environments',
  },
  {
    icon: Users,
    value: 15,
    suffix: '+',
    label: 'Happy Clients',
    description: 'From startups to enterprises',
  },
];

export function AboutStats() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent dark:via-muted/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {/* Glass + 3D + Gradient Border + Colored Glow */}
                <div className="glass card-3d gradient-border-thick p-6 h-full shadow-lg shadow-black/5 dark:shadow-black/30 transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] dark:group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                    <Icon className="h-6 w-6 text-foreground dark:text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 font-semibold text-foreground">{stat.label}</div>
                  <p className="mt-1 text-sm font-medium text-foreground/80 dark:text-foreground/90">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
