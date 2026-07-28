'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.25,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  const { x, y } = offset[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function StaggerGroup({
  children,
  className,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({
  children,
  className,
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 9}deg) rotateY(${(px - 0.5) * 9}deg) scale(1.012)`;
    if (glare) {
      el.style.setProperty('--mx', `${px * 100}%`);
      el.style.setProperty('--my', `${py * 100}%`);
    }
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        'group relative [transform-style:preserve-3d] transition-[transform,box-shadow] duration-300 ease-out will-change-transform',
        className
      )}
      style={glare ? { ['--mx' as string]: '50%', ['--my' as string]: '50%' } : undefined}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(360px circle at var(--mx) var(--my), rgba(255,255,255,0.5), transparent 45%)',
          }}
        />
      )}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={cn('mb-10 md:mb-14', className)}>
      <div className="flex flex-col gap-3">
        {eyebrow && (
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary/75">
            {eyebrow}
          </span>
        )}
        <h1 className="font-sans text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <div className="mt-1 h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
      </div>
    </Reveal>
  );
}

export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('relative px-5 py-16 sm:px-8 md:py-24', className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}
