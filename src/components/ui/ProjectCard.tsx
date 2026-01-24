import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, status, description, tech, features, demo, github, image } = project;

  return (
    <div className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative overflow-hidden bg-slate-800/50 h-64 md:h-auto">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
          />
          {status === 'progress' && (
            <div className="absolute top-4 left-4 bg-purple-500/20 border border-purple-400 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
              🚧 In Development
            </div>
          )}
          {status === 'live' && (
            <div className="absolute top-4 left-4 bg-cyan-500/20 border border-cyan-400 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
              ✓ Live
            </div>
          )}
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {features.map((feature, i) => (
                <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t, i) => (
              <span 
                key={i}
                className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-400/30"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {demo && (
              <a 
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink size={18} />
                <span className="font-semibold">Live Demo</span>
              </a>
            )}
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-slate-100 transition-colors"
            >
              <Github size={18} />
              <span className="font-semibold">Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};