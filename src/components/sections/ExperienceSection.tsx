import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ExperienceItem } from '../ui/ExperienceItem';
import { experience } from '../../data/experience';

interface ExperienceSectionProps {
  isVisible: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isVisible }) => (
  <section id="experience" className="min-h-screen flex items-center px-6 py-20">
    <div className="max-w-4xl mx-auto w-full">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader title="Experience" />
        <div className="border-l-2 border-slate-800 pl-8 ml-4">
          <ExperienceItem {...experience} />
        </div>
      </div>
    </div>
  </section>
);