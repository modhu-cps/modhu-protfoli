'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypingEffectProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingEffect({
  texts,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentFullText.length) {
            setDisplayText(currentFullText.slice(0, displayText.length + 1));
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="inline-block"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-0.5 inline-block h-[1em] w-[3px] bg-primary align-middle"
      />
    </span>
  );
}
