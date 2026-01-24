import React from 'react';

interface Skill {
  title: string;
  color: string;
  items: string[];
}

interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  skills: Skill[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  period, 
  title, 
  company, 
  location, 
  description, 
  skills 
}) => (
  <div className="relative">
    <div className="absolute -left-[41px] w-4 h-4 bg-cyan-400 rounded-full"></div>
    <div className="mb-2">
      <span className="text-cyan-400 font-mono text-sm">{period}</span>
    </div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <h4 className="text-xl text-purple-400 mb-4">{company} · {location}</h4>
    <div className="space-y-3 text-slate-400">
      <p>{description}</p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {skills.map((skillGroup, idx) => (
          <div key={idx}>
            <h5 className={`${skillGroup.color} font-semibold mb-3`}>{skillGroup.title}</h5>
            <ul className="space-y-2 text-sm">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className={`${skillGroup.color} mt-1`}>▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);