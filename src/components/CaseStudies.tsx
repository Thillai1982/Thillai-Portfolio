import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudyItem } from '../types';
import {
  FileText,
  ChevronRight,
  X,
  CheckCircle2,
  Cpu,
  Zap,
  TrendingUp,
  ShieldAlert,
  Sliders,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyItem | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0A0C10] text-[#E2E8F0] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Engineering Deep Dives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Selected Automation <span className="text-blue-500">Case Studies</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            In-depth analysis of high-stakes automation challenges, engineering methodology, and verifiable manufacturing outcomes.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              id={`case-study-card-${study.id}`}
              className="flex flex-col justify-between bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-6 transition-all duration-200 group shadow-lg text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold text-blue-400 px-2 py-0.5 bg-blue-950/80 border border-blue-800 uppercase tracking-wider">
                    CASE STUDY 0{idx + 1}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono uppercase">
                    {study.domain}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors mb-2 font-sans">
                  {study.title}
                </h3>

                <p className="text-xs text-slate-400 font-mono mb-4">
                  Context: {study.clientContext}
                </p>

                {/* Challenge Snapshot */}
                <div className="p-3 bg-slate-950 border border-slate-800 mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    The Challenge:
                  </span>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Primary Metric Pill */}
                <div className="flex items-center justify-between p-2.5 bg-blue-950/30 border border-blue-800/40 text-xs font-mono mb-4">
                  <span className="text-slate-300 text-[10px] uppercase">Audited Result:</span>
                  <span className="text-blue-400 font-bold">{study.metrics[0].value}</span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {study.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 bg-slate-950 border border-slate-800 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-950 text-slate-500">
                      +{study.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* View Full Case Study Button */}
              <button
                id={`btn-view-study-${study.id}`}
                onClick={() => setActiveCaseStudy(study)}
                className="w-full py-2.5 px-4 bg-slate-950 hover:bg-blue-950/60 border border-slate-800 hover:border-blue-500 text-xs font-mono uppercase tracking-wider font-bold text-blue-400 hover:text-blue-300 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>View Full Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Modal for Deep Case Study Inspection */}
        {activeCaseStudy && (
          <div
            id="case-study-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActiveCaseStudy(null)}
          >
            <div
              className="bg-slate-900 border border-slate-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200 relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-5 right-5 p-2 bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Case Study Details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 px-2.5 py-0.5 bg-blue-950 border border-blue-800">
                    Engineering Case Study
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    {activeCaseStudy.domain}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                  {activeCaseStudy.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Operating Context: {activeCaseStudy.clientContext}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeCaseStudy.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-950 border border-slate-800 text-center"
                  >
                    <div className="text-xl font-extrabold font-mono text-blue-400">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 font-mono">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge */}
              <div className="p-4 bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  The Problem &amp; Operational Friction:
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeCaseStudy.challenge}
                </p>
              </div>

              {/* Approach & Solution */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-1.5">
                  <Sliders className="w-4 h-4" />
                  Engineering Approach &amp; Implementation:
                </span>
                <ul className="space-y-2.5">
                  {activeCaseStudy.approach.map((step, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack used in this case study */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  System Architecture &amp; Controls Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCaseStudy.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Takeaway */}
              <div className="p-4 bg-blue-950/30 border border-blue-800/50 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 block">
                  Core Engineering Takeaway:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{activeCaseStudy.takeaway}"
                </p>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setActiveCaseStudy(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-200 text-black font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Discuss Similar Implementation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="w-full sm:w-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
