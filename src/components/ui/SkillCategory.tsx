import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCategoryProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  color?: 'cyan' | 'purple';
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ 
  icon: Icon, 
  title, 
  skills, 
  color = "cyan" 
}) => {
  const colorClasses = {
    cyan: "text-cyan-400 border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-400",
    purple: "text-purple-400 border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-400"
  };

  return (
    <div className={`bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:${colorClasses[color].split(' ')[1]} transition-all`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className={colorClasses[color].split(' ')[0]} size={28} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span 
            key={i}
            className={`text-sm bg-slate-800 text-slate-300 px-3 py-1 rounded-lg ${colorClasses[color].split('hover:')[1]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};