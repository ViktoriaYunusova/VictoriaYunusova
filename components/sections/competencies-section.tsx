'use client';

import { motion } from 'framer-motion';
import {
  ClipboardList,
  Search,
  BarChart3,
  Database,
  Table2,
  PenTool,
  Workflow,
  FileText,
} from 'lucide-react';
import { competencyCategories, tools } from '@/lib/data';
import { Reveal, StaggerGroup, staggerItem, TiltCard } from '@/components/shared/motion';

const categoryIcons = [ClipboardList, Search, BarChart3];
const toolIcons = [Database, Table2, PenTool, Workflow, Workflow, FileText];

export function CompetenciesSection() {
  return (
    <section id="competencies" className="snap-section flex items-center px-5 sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(140,48,68,0.14),transparent_70%)] blur-3xl animate-float-a" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <Reveal direction="up" className="mb-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary/75">
              Экспертиза
            </span>
            <h2 className="font-cormorant text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Компетенции
            </h2>
            <div className="mt-1 h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-4 md:grid-cols-3">
          {competencyCategories.map((cat, i) => {
            const Icon = categoryIcons[i] ?? ClipboardList;
            return (
              <motion.div key={cat.title} variants={staggerItem}>
                <TiltCard className="h-full rounded-[24px] border border-border bg-card p-5 shadow-card">
                  <div className="flex h-full flex-col gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={22} />
                    </span>
                    <h3 className="font-sans text-base font-bold text-foreground sm:text-lg">
                      {cat.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </StaggerGroup>

        <Reveal direction="up" className="mt-8">
          <h3 className="mb-1 font-cormorant text-xl font-bold text-foreground sm:text-2xl">
            Инструменты
          </h3>
          <p className="mb-5 max-w-2xl text-pretty text-sm text-muted-foreground">
            Инструменты, которыми я владею — и как они применяются в реальных рабочих процессах.
          </p>
        </Reveal>

        <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t, i) => {
            const Icon = toolIcons[i] ?? FileText;
            return (
              <motion.div key={t.name} variants={staggerItem}>
                <div className="group h-full rounded-[20px] border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={18} />
                    </span>
                    <h4 className="font-sans text-sm font-bold text-foreground sm:text-base">
                      {t.name}
                    </h4>
                  </div>
                  <p className="mt-3 text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {t.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
