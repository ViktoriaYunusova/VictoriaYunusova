'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Eye, Download, ArrowDown } from 'lucide-react';
import { heroContent } from '@/lib/data';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="snap-section flex items-center overflow-x-hidden px-5 pt-24 sm:px-8 lg:pt-0"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(111,36,50,0.22),transparent_70%)] blur-3xl animate-float-a" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(140,48,68,0.18),transparent_70%)] blur-3xl animate-float-b" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.35),transparent_70%)] blur-3xl animate-float-a" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div style={{ y: yText, opacity }} className="flex min-w-0 flex-col gap-5">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex w-fit max-w-full flex-wrap items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-primary"
          >
            <span className="break-words">{heroContent.roles}</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-cormorant text-4xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-5xl md:text-6xl xl:text-7xl"
          >
            {heroContent.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xl text-base font-medium leading-relaxed text-foreground/85 sm:text-lg"
          >
            {heroContent.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {heroContent.goal}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <a href="#contacts" className="btn-primary">
              <Mail size={16} />
              Связаться
            </a>
            <a href="#experience" className="btn-outline">
              <Eye size={16} />
              Смотреть опыт
            </a>
            <a
               href="https://drive.google.com/file/d/1v5t70uTHgsYC1xsOcbNn1jSTncRBr-J8/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
            >
              <Download size={16} />
              Скачать резюме
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yImg }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] border border-white/60 shadow-soft">
            <motion.div
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full"
            >
              <Image
                src="/images/photo copy.jpg"
                alt="Юнусова Виктория"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover object-top"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/12 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -bottom-4 -left-3 hidden rounded-2xl glass-strong px-4 py-2.5 shadow-soft sm:block"
          >
            <p className="font-sans text-sm font-bold text-foreground">3+ года опыта</p>
            <p className="text-xs text-muted-foreground">в управлении процессами</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
        aria-label="Прокрутить вниз"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Листайте</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
