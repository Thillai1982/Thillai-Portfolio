import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollHelper';
import {
  ArrowUp,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = (e?: React.MouseEvent) => {
    scrollToSection('hero', e);
  };

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Impact', href: '#impact' },
    { name: 'Experience', href: '#experience' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#0A0C10] text-[#E2E8F0] border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Value Statement */}
          <div className="md:col-span-5 space-y-3 text-left">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="font-bold tracking-wider text-white text-lg font-mono uppercase">
                {PERSONAL_INFO.displayName}
              </span>
            </div>

            <p className="text-xs text-blue-400 font-mono">
              Industrial Automation &bull; MES Controls &bull; Smart Manufacturing
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed pt-1 font-mono">
              {PERSONAL_INFO.tagline}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-200 block mb-3 font-bold">
              Site Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(link.href, e)}
                  className="text-slate-400 hover:text-blue-400 transition-colors py-1 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Professional Credentials & LinkedIn */}
          <div className="md:col-span-3 text-left space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-200 block mb-1 font-bold">
              Professional Profile
            </span>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              Connect on LinkedIn for insights on industrial automation, MES Controls, manufacturing systems, and Industry 4.0.
            </p>
            <div className="pt-1">
              <a
                id="footer-linkedin-link"
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white text-xs font-mono transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>&copy; 2026 Thillai Nayagam. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-slate-400">Chennai, India</span>
          </div>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors p-2 hover:bg-slate-900 border border-transparent hover:border-slate-800 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

