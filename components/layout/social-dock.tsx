'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Youtube, Instagram, Facebook, Send, ExternalLink } from 'lucide-react';
import { socialLinks } from '@/lib/config';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  send: Send,
};

export function SocialDock() {
  return (
    <TooltipProvider delayDuration={0}>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <div className="glass rounded-2xl p-2">
          <div className="flex flex-col gap-2">
            {socialLinks.map((social, index) => {
              const Icon = socialIcons[social.icon];
              return (
                <Tooltip key={social.name}>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.1, x: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-white/10 hover:text-foreground"
                      aria-label={social.name}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="flex items-center gap-2">
                    {social.name}
                    <ExternalLink className="h-3 w-3" />
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
