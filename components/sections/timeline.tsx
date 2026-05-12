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
  work: 'from-primary to-primary',
  education: 'from-accent to-accent',
  achievement: 'from-yellow-500 to-orange-500',
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

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${typeColors[event.type]} shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
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
