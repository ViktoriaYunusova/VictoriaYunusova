'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { EducationSection } from '@/components/sections/education-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { CompetenciesSection } from '@/components/sections/competencies-section';
import { ContactsSection } from '@/components/sections/contacts-section';

export default function HomePage() {
  return (
    <div className="snap-container">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <CompetenciesSection />
      <ContactsSection />
    </div>
  );
}
