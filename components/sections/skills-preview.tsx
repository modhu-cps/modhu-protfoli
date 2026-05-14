'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Shield, Cloud, Cpu, Monitor, Server, GitBranch } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  shield: Shield,
  cloud: Cloud,
  cpu: Cpu,
  monitor: Monitor,
  server: Server,
  'git-branch': GitBranch,
};

export function SkillsPreview() {
  // Show only first 4 categories
  const previewCategories = skillCategories.slice(0, 4);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <Badge variant="outline" className="mb-4 bg-white/5">
            Expertise
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            Specialized in building secure, intelligent systems across multiple domains.
          </p>
        </motion.div>

        {/* Skills grid - Bento style */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {previewCategories.map((category, index) => {
            const Icon = iconMap[category.icon];

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                {/* Apple-style glass card + gradient border + 3D + hover glow */}
                <div
                  className={`glass card-3d gradient-border-thick h-full rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] ${
                    index === 0 ? 'flex flex-col' : ''
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                      {Icon && <Icon className="h-6 w-6 text-primary" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/70">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className={`mt-6 ${index === 0 ? 'flex-1' : ''}`}>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.slice(0, index === 0 ? 8 : 4).map((skill) => (
                        <div key={skill.name} className="group/skill">
                          <Badge 
                            variant="secondary" 
                            className="bg-white/5 transition-colors group-hover/skill:bg-white/10"
                          >
                            {skill.name}
                          </Badge>
                        </div>
                      ))}
                      {category.skills.length > (index === 0 ? 8 : 4) && (
                        <Badge variant="secondary" className="bg-white/5">
                          +{category.skills.length - (index === 0 ? 8 : 4)} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Progress bars for first card */}
                  {index === 0 && (
                    <div className="mt-6 space-y-3">
                      {category.skills.slice(0, 3).map((skill) => (
                        <div key={skill.name}>
                          <div className="mb-1 flex justify-between text-sm">
                            <span className="text-foreground/80">{skill.name}</span>
                            <span className="text-foreground font-semibold">{skill.level}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Link href="/skills">
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300"
            >
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
        }
