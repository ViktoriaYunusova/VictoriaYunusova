'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 500));

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-[70] flex h-12 w-12 items-center justify-center rounded-full glass-strong text-primary shadow-soft"
          aria-label="Наверх"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
