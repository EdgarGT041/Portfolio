import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({title }) => (
  <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
    <span className="text-cyan-400 font-mono text-2xl"></span>
    {title}
    <div className="flex-1 h-px bg-slate-800"></div>
  </h2>
);