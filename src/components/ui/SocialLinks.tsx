import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = "" }) => {
  const links = [
    { icon: Mail,   href: "https://mail.google.com/mail/?view=cm&fs=1&to=edgarguerrerotirado@gmail.com&su=Hello Edgar!&body=Hi Edgar,%0D%0A%0D%0AI found your portfolio and would like to connect.", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com/in/edgar-tirado", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/EdgarGT041", label: "GitHub" }
  ];

  return (
    <div className={`flex gap-6 ${className}`}>
      {links.map(({ icon: Icon, href, label }) => (
        <a 
          key={label}
          href={href} 
          target={href.startsWith('http') ? "_blank" : undefined}
          rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
          className="text-slate-400 hover:text-cyan-400 transition-colors"
          aria-label={label}
        >
          <Icon size={28} />
        </a>
      ))}
    </div>
  );
};