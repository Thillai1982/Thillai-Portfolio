import React, { useState } from 'react';
import { EXPERIENCE_HISTORY } from '../data/portfolioData';
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Building,
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    'First Solar': true,
    'Brainchild Electronics': true,
  });

  const toggleRole = (company: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [company]: !prev[company],
    }));
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0A0C10] border-t border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Professional <span className="text-blue-500">Experience</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            A continuous track record of senior engineering execution, international technical consulting, and greenfield manufacturing leadership.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 via-blue-600 to-slate-800 space-y-8">
          {EXPERIENCE_HISTORY.map((exp) => {
            const isExpanded = !!expandedRoles[exp.company];

            return (
              <div
                key={exp.company}
                id={`exp-card-${exp.company.replace(/\s+/g, '-').toLowerCase()}`}
                className="relative group text-left"
              >
                {/* Node marker on timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-5 h-5 bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 group-hover:bg-slate-950" />
                </div>

                {/* Card Container */}
                <div className={`bg-slate-900 border transition-all ${
                  isExpanded ? 'border-blue-500/60 shadow-xl' : 'border-slate-800 hover:border-slate-700'
                }`}>
                  {/* Card Header */}
                  <div
                    className="p-5 sm:p-6 cursor-pointer select-none"
                    onClick={() => toggleRole(exp.company)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-xl font-bold text-white tracking-tight font-sans">
                          {exp.role}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 bg-blue-950 text-blue-300 border border-blue-800">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1.5 text-blue-300">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                        <Building className="w-4 h-4 text-blue-400" />
                        <span>{exp.company}</span>
                      </div>
                      <button
                        className="text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-blue-300 flex items-center gap-1 font-bold cursor-pointer"
                        aria-label="Toggle role details"
                      >
                        <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Quick Metric Badges if available */}
                    {exp.metrics && (
                      <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-slate-800">
                        {exp.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-xs font-mono"
                          >
                            <span className="text-slate-400 uppercase tracking-wider text-[10px]">{m.label}: </span>
                            <span className="text-blue-400 font-bold">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Expanded Highlights & Technologies */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 pt-3 border-t border-slate-800 space-y-4 animate-in fade-in-50 duration-200">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Key Deliverables &amp; Engineering Scope:
                        </span>
                        <ul className="space-y-2">
                          {exp.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.keyAchievement && (
                        <div className="p-3.5 bg-blue-950/30 border border-blue-800/50 flex items-start gap-2.5">
                          <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <p className="text-xs text-blue-200 leading-snug">
                            <strong className="text-white">Core Highlight:</strong> {exp.keyAchievement}
                          </p>
                        </div>
                      )}

                      {/* Technology Chips */}
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Tools &amp; Protocols Utilized:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 bg-slate-950 border border-slate-800 text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
