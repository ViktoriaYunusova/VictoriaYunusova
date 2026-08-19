'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MapPin, ChevronDown, Briefcase, TrendingUp } from 'lucide-react';
import { experience } from '@/lib/data';
import { Reveal, StaggerGroup, staggerItem } from '@/components/shared/motion';

function ExperienceCard({ job }: { job: (typeof experience)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={staggerItem}>
      <div className="relative pl-10 sm:pl-12">
        <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
          <span className="h-3 w-3 rounded-full border-2 border-primary bg-card shadow-glow" />
        </span>

        <div className="card-base overflow-hidden p-0">
          <div className="relative h-36 w-full overflow-hidden sm:h-44">
            <Image
              src={job.image}
              alt={job.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            <div className="absolute bottom-3 left-5 right-5 flex flex-wrap items-end justify-between gap-2">
              <div className="min-w-0">
                <h3 className="truncate font-sans text-lg font-bold text-foreground drop-shadow-sm sm:text-xl">
                  {job.company}
                </h3>
                <p className="font-sans text-sm font-semibold text-primary sm:text-base">
                  {job.role}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 text-right">
                <span className="rounded-full bg-card/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {job.period}
                </span>
                {job.location && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin size={12} />
                    {job.location}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {job.brief}
            </p>

            <button
              onClick={() => setOpen((v) => !v)}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary/10 hover:shadow-soft"
            >
              <Briefcase size={15} />
              Подробнее
              <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={15} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 max-h-[55svh] overflow-y-auto border-t border-border pt-5 pr-1">
                    <div className="flex flex-col gap-6">
                      {job.sections.map((section, si) => (
                        <motion.div
                          key={si}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * si, duration: 0.4 }}
                        >
                          <div className="mb-3 flex items-center gap-2">
                            <span className="h-4 w-1 rounded-full bg-primary" />
                            <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-foreground">
                              {section.title}
                            </h4>
                          </div>

                          {section.metrics && section.metrics.length > 0 && (
                            <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-2">
                              {section.metrics.map((m, mi) => (
                                <div
                                  key={mi}
                                  className="rounded-lg border border-primary/15 bg-primary/5 px-3 py-2 text-center"
                                >
                                  <span className="font-sans text-sm font-bold text-primary sm:text-base">
                                    {m}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          <ul className="flex flex-col gap-2.5">
                            {section.items?.map((item, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * j, duration: 0.4 }}
                                className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span className="text-pretty">
                                  {'title' in item && item.title && (
                                    <span className="mb-1 block font-semibold text-foreground">
                                      {item.title}
                                    </span>
                                  )}
                                  <span>{item.text}</span>
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="snap-section flex items-center px-5 sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(111,36,50,0.16),transparent_70%)] blur-3xl animate-float-b" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <Reveal direction="up" className="mb-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary/75">
              Карьерный путь
            </span>
            <h2 className="font-cormorant text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Опыт
            </h2>
            <div className="mt-1 h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
        </Reveal>

        <div
          className="relative ml-2 max-h-[68svh] overflow-y-auto pr-2 [scroll-behavior:smooth]"
          data-lenis-prevent
        >
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent" />

          <StaggerGroup className="flex flex-col gap-6">
            {experience.map((job, i) => (
              <ExperienceCard key={i} job={job} />
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
