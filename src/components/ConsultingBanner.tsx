import React from 'react';
import { PERSONAL_INFO, ENGAGEMENT_MODES } from '../data/portfolioData';
import {
  ArrowRight,
  Linkedin,
  MessageSquare,
  Award,
  Compass,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

interface ConsultingBannerProps {
  onOpenConsultation: () => void;
}

export const ConsultingBanner: React.FC<ConsultingBannerProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-cyan-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-teal-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      default:
        return <Compass className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#0A0C10] border-t border-b border-slate-800 text-[#E2E8F0] relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3 Engagement Paths */}
        <div className="mb-14">
          <div className="max-w-3xl mb-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
              <span>Flexible Engagement Framework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
              Three Collaboration <span className="text-blue-500">Models</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODES.map((mode, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between group shadow-md text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 bg-slate-950 border border-slate-800">
                      {getIcon(mode.iconName)}
                    </div>
                    <span className="text-[10px] font-mono text-blue-300 px-2 py-0.5 bg-blue-950 border border-blue-800 uppercase tracking-wider">
                      {mode.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-sans">
                    {mode.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {mode.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  <strong className="text-slate-300">Target Fit:</strong> {mode.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High-Contrast Executive Positioning Banner */}
        <div className="bg-slate-900 border border-blue-500/40 p-8 sm:p-12 shadow-2xl relative">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 text-blue-300 text-xs font-mono border border-blue-800 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Senior Engineering Advisory</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans">
              Have an Automation Problem That Needs an Experienced Perspective?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I help manufacturing teams evaluate automation problems, improve controls reliability, stabilize MES-connected operations and identify practical opportunities for productivity improvement.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="banner-discuss-challenge-btn"
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-white hover:bg-slate-200 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Challenge</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="banner-view-linkedin-btn"
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>View LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
