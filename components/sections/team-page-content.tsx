'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Globe, Users } from 'lucide-react';
import { teamMembers } from '@/data/team';
import { Badge } from '@/components/ui/badge';
import { PageTransition } from '@/components/layout/page-transition';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  website: Globe,
};

export function TeamPageContent() {
  const founder = teamMembers.find((member) => member.featured);
  const otherMembers = teamMembers.filter((member) => !member.featured);

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
              Our Team
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Meet the <span className="gradient-text">Team</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
              A passionate group of engineers, researchers, and creators building
              the future of intelligent and secure systems.
            </p>
          </motion.div>

          {/* Founder spotlight */}
          {founder && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <div className="glass card-3d gradient-border-thick rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-primary/30 to-accent/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="h-32 w-32 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                      />
                    </div>
                    {/* Decorative elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute top-8 left-8 glass rounded-lg px-3 py-2"
                    >
                      <span className="text-sm font-medium text-foreground/90">{founder.role}</span>
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                      className="absolute bottom-8 right-8 glass rounded-lg px-3 py-2"
                    >
                      <Users className="h-5 w-5 text-primary" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-primary/20 text-primary border-primary/20">
                      Founder
                    </Badge>
                    <h2 className="text-3xl font-bold text-foreground">
                      {founder.name}
                    </h2>
                    <p className="mt-2 text-lg text-primary">{founder.role}</p>
                    <p className="mt-4 text-foreground/80 leading-relaxed">
                      {founder.bio}
                    </p>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {founder.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-white/5">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Socials */}
                    <div className="mt-6 flex gap-3">
                      {Object.entries(founder.socials).map(([key, url]) => {
                        if (!url) return null;
                        const Icon = socialIcons[key];
                        return (
                          <motion.a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-primary transition-colors"
                          >
                            {Icon && <Icon className="h-5 w-5" />}
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Team members grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="glass card-3d gradient-border-thick h-full rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  {/* Avatar */}
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-24 w-24 mx-auto rounded-full object-cover border border-white/10 shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>

                  {/* Info */}
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-3 text-sm text-foreground/80 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap justify-center gap-1">
                    {member.skills.slice(0, 3).map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white/5 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Socials */}
                  <div className="mt-4 flex justify-center gap-2">
                    {Object.entries(member.socials).map(([key, url]) => {
                      if (!url) return null;
                      const Icon = socialIcons[key];
                      return (
                        <motion.a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-primary transition-colors"
                        >
                          {Icon && <Icon className="h-4 w-4" />}
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="glass card-3d gradient-border-thick inline-block rounded-2xl px-8 py-6">
              <h3 className="text-xl font-semibold text-foreground">
                Want to join our team?
              </h3>
              <p className="mt-2 text-foreground/80">
                We&apos;re always looking for talented individuals to collaborate with.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center text-primary hover:underline font-medium"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
