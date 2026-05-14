'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
  Send,
  ExternalLink,
} from 'lucide-react';
import { socialLinks } from '@/lib/config';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  send: Send,
};

// প্রতিটি সোশ্যাল প্ল্যাটফর্মের জন্য ইউনিক ভাইব্রেন্ট ব্যাকগ্রাউন্ড কালার
const socialColors: Record<string, string> = {
  github: 'from-gray-700 to-gray-900',
  linkedin: 'from-blue-600 to-blue-800',
  twitter: 'from-sky-400 to-blue-500',
  youtube: 'from-red-500 to-red-700',
  instagram: 'from-purple-500 to-pink-500',
  facebook: 'from-blue-500 to-blue-700',
  send: 'from-cyan-400 to-blue-500',
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
        {/* ডক কন্টেইনার – গ্লাস + 3D + গ্রেডিয়েন্ট বর্ডার */}
        <div className="glass card-3d gradient-border-thick rounded-2xl p-2">
          <div className="flex flex-col gap-2">
            {socialLinks.map((social, index) => {
              const Icon = socialIcons[social.icon];
              const gradient = socialColors[social.icon] || 'from-primary to-accent';

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
                      whileHover={{ scale: 1.15, x: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md transition-all duration-300 hover:shadow-lg bg-gradient-to-br ${gradient}`}
                      aria-label={social.name}
                    >
                      {Icon && <Icon className="h-5 w-5 drop-shadow-sm" />}
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
