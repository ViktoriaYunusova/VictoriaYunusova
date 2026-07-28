'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 30));

  function handleNav(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    setActive(href);
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[80] flex justify-center px-4 pt-3 sm:pt-4"
      >
        <nav
          className={cn(
            'flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6',
            scrolled ? 'glass shadow-soft' : 'border border-transparent bg-transparent'
          )}
        >
          <button
            onClick={() => handleNav('#home')}
            className="font-cormorant text-lg font-bold tracking-tight text-primary sm:text-xl"
          >
            Юнусова Виктория
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className={cn(
                      'relative rounded-full px-3 py-1.5 text-sm transition-colors',
                      isActive
                        ? 'text-primary'
                        : 'text-foreground/65 hover:text-foreground'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {l.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-foreground lg:hidden"
            aria-label="Меню"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[75] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[#E6D4C2]/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="absolute inset-x-4 top-20 rounded-3xl glass-strong p-4 shadow-soft"
            >
              <ul className="flex flex-col">
                {navLinks.map((l, i) => {
                  const isActive = active === l.href;
                  return (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <button
                        onClick={() => handleNav(l.href)}
                        className={cn(
                          'block w-full rounded-2xl px-4 py-3 text-left text-base transition-colors',
                          isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground hover:bg-foreground/5'
                        )}
                      >
                        {l.label}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
