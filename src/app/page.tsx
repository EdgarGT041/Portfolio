'use client';

import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/layout/Navigation';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ContactSection } from '../components/sections/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <HeroSection isVisible={isVisible.home} onNavigate={scrollToSection} />
      <AboutSection isVisible={isVisible.about} />
      <ExperienceSection isVisible={isVisible.experience} />
      <ProjectsSection isVisible={isVisible.projects} />
      <SkillsSection isVisible={isVisible.skills} />
      <ContactSection isVisible={isVisible.contact} />
    </div>
  );
}