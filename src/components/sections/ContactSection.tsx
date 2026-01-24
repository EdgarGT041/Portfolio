import React from 'react';
import { Linkedin, Github } from 'lucide-react';

interface ContactSectionProps {
  isVisible: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isVisible }) => (
  <section id="contact" className="min-h-screen flex items-center px-6 py-20">
    <div className="max-w-2xl mx-auto text-center w-full">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold mb-6">
          Get In Touch
        </h2>
        <p className="text-xl text-slate-400 mb-8">
          I am currently seeking my first professional opportunity as a Frontend or Full Stack Developer. 
          Whether you have a position available or just want to connect, I would love to hear from you!
        </p>
        <div className="space-y-4 mb-8">
<a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=edgarguerrerotirado@gmail.com&su=Opportunity for Edgar - Portfolio Contact"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-cyan-500/10 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 font-semibold"
>
  Say Hello
</a>
          <div className="flex gap-6 justify-center">
            <a 
              href="https://linkedin.com/in/edgar-tirado" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/EdgarGT041" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-12">
          Designed & Built by Edgar Guerrero © 2026
        </p>
      </div>
    </div>
  </section>
);