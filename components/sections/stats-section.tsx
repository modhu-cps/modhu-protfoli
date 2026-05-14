'use client';

import { motion } from 'framer-motion';
import { Calendar, Folder, Award, GitPullRequest } from 'lucide-react';
import { stats } from '@/data/timeline';
import { AnimatedCounter, parseStatValue } from '@/components/effects/animated-counter';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  folder: Folder,
  award: Award,
  'git-pull-request': GitPullRequest,
};

export function StatsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon ? iconMap[stat.icon] : null;
            const { number, suffix } = parseStatValue(stat.value);

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Apple‑style glass + 3D + gradient border + hover glow */}
                <div className="glass card-3d gradient-border-thick rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  {/* Icon */}
                  {Icon && (
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  )}

                  {/* Value */}
                  <div className="text-4xl font-bold text-foreground lg:text-5xl">
                    <AnimatedCounter value={number} suffix={suffix} />
                  </div>

                  {/* Label – now clearly visible */}
                  <p className="mt-2 text-foreground/80 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
