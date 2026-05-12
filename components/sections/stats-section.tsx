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
                <div className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
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

                  {/* Label */}
                  <p className="mt-2 text-muted-foreground">{stat.label}</p>

                  {/* Decorative gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
