import { Code2, Database, Server } from 'lucide-react';

export const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ['React.js', 'Next.js', 'TypeScript', 'Angular', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
    color: "cyan" as const
  },
  {
    icon: Database,
    title: "Backend",
    skills: ['Node.js', 'NestJS', 'Express.js', 'SQL', 'REST APIs'],
    color: "purple" as const
  },
  {
    icon: Server,
    title: "Tools & Others",
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'MySQL'],
    color: "cyan" as const
  }
];