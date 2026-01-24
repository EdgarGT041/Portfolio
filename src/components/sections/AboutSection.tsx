import React from 'react';
import { Code2, Palette, Server, Globe } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FeatureCard } from '../ui/FeatureCard';

interface AboutSectionProps {
  isVisible: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isVisible }) => {
  const features = [
    { icon: Code2, title: "Clean Code", description: "Focus on maintainable, scalable solutions", color: "cyan" as const },
    { icon: Palette, title: "UI/UX", description: "User-centered design approach", color: "purple" as const },
    { icon: Server, title: "Backend", description: "RESTful APIs & databases", color: "cyan" as const },
    { icon: Globe, title: "Responsive", description: "Mobile-first development", color: "purple" as const }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader title="About Me" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-slate-400">
              <p>
                I am a recent graduate in <span className="text-slate-100">Information Technology Engineering</span> from 
                Universidad Politécnica de Sinaloa, passionate about creating exceptional web experiences.
              </p>
              <p>
                My journey in software development began with a strong foundation in frontend technologies, 
                and I am now expanding my expertise to become a <span className="text-cyan-400">Full Stack Developer</span>.
              </p>
              <p>
                I specialize in building modern, responsive applications using <span className="text-slate-100">React</span> and{' '}
                <span className="text-slate-100">Next.js</span>, with experience in backend development using{' '}
                <span className="text-slate-100">Node.js</span> and <span className="text-slate-100">Spring Boot</span>.
              </p>
              <p>
                I am currently seeking my first professional opportunity where I can contribute high-quality code, 
                learn from experienced developers, and grow my skills in modern web development.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};