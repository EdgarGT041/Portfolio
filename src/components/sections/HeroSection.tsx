import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SocialLinks } from '../ui/SocialLinks';

interface HeroSectionProps {
  isVisible: boolean;
  onNavigate: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, onNavigate }) => (
  <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
    <div className="max-w-4xl mx-auto text-center">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6">
          <span className="text-cyan-400 text-lg font-mono">Hi there! I&apos;m</span>
        </div>
        <h1 className="pb-2 text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent h-auto">
          Edgar Guerrero
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
          Frontend Developer
        </h2>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Aspiring Full Stack Developer specializing in{' '}
          <span className="text-cyan-400">React</span> and{' '}
          <span className="text-purple-400">Next.js</span>. 
          Building modern, responsive web applications with clean code and great UX.
        </p>
        <SocialLinks className="justify-center mb-8" />
        <button
          onClick={() => onNavigate('projects')}
          className="bg-cyan-500/10 border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 font-semibold"
        >
          View My Work
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-600" size={32} />
      </div>
    </div>
  </section>
);