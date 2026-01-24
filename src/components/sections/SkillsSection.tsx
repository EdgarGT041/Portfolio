import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SkillCategory } from '../ui/SkillCategory';
import { skillCategories } from '../../data/skills';

interface SkillsSectionProps {
  isVisible: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible }) => (
  <section id="skills" className="min-h-screen flex items-center px-6 py-20">
    <div className="max-w-4xl mx-auto w-full">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader title="Skills & Technologies" />
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <SkillCategory key={idx} {...category} />
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2 text-cyan-400">Languages</h3>
          <div className="flex gap-6">
            <div>
              <span className="text-slate-100 font-semibold">Spanish:</span>
              <span className="text-slate-400 ml-2">Native</span>
            </div>
            <div>
              <span className="text-slate-100 font-semibold">English:</span>
              <span className="text-slate-400 ml-2">Intermediate B2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);