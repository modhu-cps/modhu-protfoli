'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Decorative orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Have a project in mind? I&apos;m always open to discussing new opportunities,
            creative ideas, or collaborations in AI, security, and cloud technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact">
            <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
              <MessageCircle className="mr-2 h-4 w-4" />
              Learn More About Me
            </Button>
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-sm text-muted-foreground mb-4">Trusted by companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {['AWS', 'Google Cloud', 'Microsoft', 'GitHub', 'Vercel'].map((company) => (
              <span key={company} className="text-lg font-semibold text-muted-foreground">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
          }
