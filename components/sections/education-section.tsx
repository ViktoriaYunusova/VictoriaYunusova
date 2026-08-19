'use client';

import { GraduationCap, Calendar, BookOpen, Layers } from 'lucide-react';
import { education } from '@/lib/data';
import { Reveal } from '@/components/shared/motion';

export function EducationSection() {
  return (
    <section id="education" className="snap-section flex items-center px-5 sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(140,48,68,0.14),transparent_70%)] blur-3xl animate-float-a" />
      </div>

      <div className="mx-auto w-full max-w-4xl">
        <Reveal direction="up" className="mb-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary/75">
              Квалификация
            </span>
            <h2 className="font-cormorant text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Образование
            </h2>
            <div className="mt-1 h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
        </Reveal>

        <div className="relative ml-2">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent" />

          <div className="flex flex-col gap-8">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.1} direction="left">
                <div className="relative pl-12">
                  <span className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-primary/20" />
                    <span className="h-3 w-3 rounded-full border-2 border-primary bg-card" />
                  </span>

                  <div className="card-base p-6 sm:p-8">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <Calendar size={14} />
                      {e.years}
                    </span>

                    <h3 className="mt-4 font-sans text-lg font-bold text-foreground sm:text-xl">
                      {e.university}
                    </h3>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <BookOpen size={18} />
                        </span>
                        <div className="flex min-w-0 flex-col">
                          <span className="text-xs uppercase tracking-wide text-muted-foreground">
                            Специальность
                          </span>
                          <span className="font-sans text-sm font-semibold text-foreground sm:text-base">
                            {e.specialty}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Layers size={18} />
                        </span>
                        <div className="flex min-w-0 flex-col">
                          <span className="text-xs uppercase tracking-wide text-muted-foreground">
                            Профиль
                          </span>
                          <span className="font-sans text-sm font-semibold text-foreground sm:text-base">
                            {e.profile}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-3 rounded-2xl bg-background/60 p-4">
                      <GraduationCap className="shrink-0 text-primary" size={20} />
                      <p className="text-sm text-muted-foreground">
                        Моё техническое образование — это прочная база на стыке аналитики, управления
                        процессами и цифровых решений.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
