import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: 'cyan' | 'purple';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "cyan" 
}) => {
  const colorClasses = {
    cyan: "border-cyan-400/50 text-cyan-400",
    purple: "border-purple-400/50 text-purple-400"
  };

  return (
    <div className={`bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:${colorClasses[color]} transition-colors`}>
      <Icon className={colorClasses[color].split(' ')[1]} size={32} />
      <h3 className="font-semibold mb-2 mt-3">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
};