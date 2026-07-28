'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function PageNav() {
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { threshold: 0.5 }
    );
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function go(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="fixed right-4 top-1/2 z-[60] hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
      >
        {navLinks.map((l) => {
          const isActive = active === l.href;
          return (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="group relative flex items-center"
              aria-label={l.label}
            >
              <span
                className={cn(
                  'absolute right-6 whitespace-nowrap rounded-full glass-strong px-3 py-1 text-xs font-medium text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-7',
                  isActive && 'opacity-100'
                )}
              >
                {l.label}
              </span>
              <span
                className={cn(
                  'h-2.5 w-2.5 rounded-full border transition-all duration-300',
                  isActive
                    ? 'scale-125 border-primary bg-primary'
                    : 'border-foreground/30 bg-transparent hover:border-primary hover:bg-primary/30'
                )}
              />
            </button>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
