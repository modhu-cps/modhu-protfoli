'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Floating orb */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/20 blur-[100px]"
      />

      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 text */}
          <h1 className="text-8xl font-bold gradient-text sm:text-9xl">404</h1>
          
          <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
            Page Not Found
          </h2>
          
          <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent">
                <Home className="h-5 w-5" />
                Go Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="gap-2 bg-white/5 border-white/10"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
