'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { timelineEvents } from '@/data/timeline';
import { Badge } from '@/components/ui/badge';

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award,
};

const typeColors = {
  work: {
    border: 'from-blue-500 via-sky-400 to-indigo-500',
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'from-blue-500/20 to-sky-500/20',
  },
  education: {
    border: 'from-violet-500 via-purple-400 to-fuchsia-500',
    text: 'text-violet-600 dark:text-violet-400',
    bg: 'from-violet-500/20 to-purple-500/20',
  },
  achievement: {
    border: 'from-amber-500 via-orange-400 to-yellow-500',
    text: 'text-amber-600 dark:text-amber-400',
    bg: 'from-amber-500/20 to-orange-500/20',
  },
};

export function Timeline() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-white/5">
            Journey
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Career Timeline
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A journey through technology, security, and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 md:left-1/2 md:-translate-x-px" />

          {timelineEvents.map((event, index) => {
            const Icon = typeIcons[event.type];
            const isEven = index % 2 === 0;
            const colors = typeColors[event.type];

            return (
              <motion.div
                key={`${event.year}-${event.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 pb-12 md:gap-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="text-sm font-medium text-primary">{event.year}</span>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">{event.title}</h3>
                  <p className="mt-2 text-muted-foreground">{event.description}</p>
                </div>

                {/* Icon – Glass + 3D + Gradient Border + Thicker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2">
                  <div
                    className={`
                      flex h-20 w-20 items-center justify-center rounded-2xl
                      glass card-3d gradient-border-thick
                      bg-gradient-to-br ${colors.bg} dark:bg-none
                      shadow-lg shadow-${event.type === 'achievement' ? 'amber' : event.type === 'education' ? 'violet' : 'blue'}-500/20
                    `}
                  >
                    <Icon
                      className={`h-8 w-8 ${colors.text}`}
                      strokeWidth={2.5}
                    />
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
