'use client';

import { motion } from 'framer-motion';
import { Quote, Calendar, MapPin } from 'lucide-react';
import { aboutContent } from '@/lib/data';
import { Reveal, StaggerGroup, staggerItem } from '@/components/shared/motion';

export function AboutSection() {
  return (
    <section id="about" className="snap-section flex items-center px-5 sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(111,36,50,0.14),transparent_70%)] blur-3xl animate-float-b" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <Reveal direction="up" className="mb-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary/75">
              Знакомство
            </span>
            <h2 className="font-cormorant text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Обо мне
            </h2>
            <div className="mt-1 h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
        </Reveal>

        <Reveal direction="up" className="mb-8">
          <blockquote className="relative overflow-hidden rounded-[28px] glass p-6 sm:p-10">
            <Quote className="absolute -top-0 left-6 text-primary/15 size-[15px] sm:size-[35px]" />
            <p className="relative font-sans text-lg font-semibold leading-snug text-foreground sm:text-xl md:text-2xl">
              {aboutContent.quote}
            </p>
          </blockquote>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <Reveal direction="up">
            <div className="flex flex-col gap-4">
              {aboutContent.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-pretty text-sm leading-relaxed text-foreground/80 sm:text-base"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="card-base p-6">
              <h3 className="mb-4 font-sans text-base font-bold text-foreground sm:text-lg">
                Личная информация
              </h3>
              <StaggerGroup className="flex flex-col gap-3">
                {aboutContent.info.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={staggerItem}
                    className="flex items-center gap-3 rounded-2xl bg-background/60 p-3.5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {item.label === 'Дата рождения' ? <Calendar size={18} /> : <MapPin size={18} />}
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="font-sans text-sm font-semibold text-foreground sm:text-base">
                        {item.value}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
