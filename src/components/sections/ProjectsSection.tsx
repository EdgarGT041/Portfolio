import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

interface ProjectsSectionProps {
  isVisible: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isVisible }) => (
  <section id="projects" className="min-h-screen flex items-center px-6 py-20">
    <div className="max-w-6xl mx-auto w-full">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader title="Projects" />
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  </section>
);