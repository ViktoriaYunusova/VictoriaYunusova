'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Send, ArrowUpRight } from 'lucide-react';
import { contacts } from '@/lib/data';
import { Reveal, StaggerGroup, staggerItem } from '@/components/shared/motion';

const contactIcons = [Phone, Mail, MessageCircle, Send];

export function ContactsSection() {
  return (
    <section id="contacts" className="snap-section flex items-center px-5 sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,36,50,0.16),transparent_70%)] blur-3xl animate-float-b" />
      </div>

      <div className="mx-auto w-full max-w-4xl">
        <Reveal direction="up" className="mb-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary/75">
              Связь
            </span>
            <h2 className="font-cormorant text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Контакты
            </h2>
            <div className="mt-1 h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
        </Reveal>

        <StaggerGroup className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {contacts.map((c, i) => {
            const Icon = contactIcons[i] ?? Phone;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={staggerItem}
                className="group flex min-w-0 items-center justify-between gap-3 rounded-[24px] border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={20} />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="truncate font-sans text-sm font-semibold text-foreground sm:text-base">
                      {c.value}
                    </span>
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:rotate-45 group-hover:text-primary"
                />
              </motion.a>
            );
          })}

          <motion.div variants={staggerItem} className="sm:col-span-2">
            <a href="https://t.me/vikitakis" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              <Send size={17} />
              Написать
            </a>
          </motion.div>
        </StaggerGroup>
      </div>
    </section>
  );
}
