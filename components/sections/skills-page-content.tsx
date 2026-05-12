'use client';

import { motion } from 'framer-motion';
import { Brain, Shield, Cloud, Cpu, Monitor, Server, GitBranch } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PageTransition } from '@/components/layout/page-transition';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  shield: Shield,
  cloud: Cloud,
  cpu: Cpu,
  monitor: Monitor,
  server: Server,
  'git-branch': GitBranch,
};

export function SkillsPageContent() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 bg-white/5">
              Expertise
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Technical <span className="gradient-text">Skills</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across multiple domains,
              from AI and security to cloud infrastructure and development.
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = iconMap[category.icon];

              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="group"
                >
                  <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                        {Icon && <Icon className="h-7 w-7 text-primary" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills with progress */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                        >
                          <div className="flex justify-between text-sm mb-1.5">
                            <span className="text-muted-foreground">{skill.name}</span>
                            <span className="text-foreground font-medium">{skill.level}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.2 + skillIndex * 0.05,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="glass inline-block rounded-2xl px-8 py-6">
              <p className="text-muted-foreground">
                Always learning and expanding my skill set.{' '}
                <span className="text-foreground font-medium">
                  Currently exploring: WebAssembly, Rust, and Zero-Knowledge Proofs
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
                  }
