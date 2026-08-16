import React from 'react';
import { IMPACT_STORIES } from '../data/portfolioData';
import {
  TrendingUp,
  Zap,
  CheckCircle2,
  Globe2,
  DollarSign,
  Clock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface ImpactSectionProps {
  onOpenConsultation: () => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="impact" className="py-20 md:py-28 bg-[#0A0C10] text-[#E2E8F0] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Verified Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Selected Business <span className="text-blue-500">Impact</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Tangible, audited operational achievements delivered through rigorous controls engineering, MES synchronization, and structured technical execution.
          </p>
        </div>

        {/* 5 Impact Cards Grid */}
        <div className="space-y-6">
          {/* Top 2 Cards: Large Highlight Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 01: Greenfield Plant Startup */}
            <div
              id="impact-card-01"
              className="lg:col-span-7 bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-6 sm:p-8 transition-all group shadow-xl"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-1 bg-blue-950/80 border border-blue-800 uppercase tracking-wider">
                  {IMPACT_STORIES[0].number} • {IMPACT_STORIES[0].badge}
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline uppercase">
                  {IMPACT_STORIES[0].domain}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5">
                  <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {IMPACT_STORIES[0].metric}
                  </div>
                  <div className="text-xs font-bold font-mono text-blue-400 mt-1 uppercase tracking-wider">
                    {IMPACT_STORIES[0].metricLabel}
                  </div>
                </div>
                <div className="sm:col-span-7 space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                    {IMPACT_STORIES[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {IMPACT_STORIES[0].description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {IMPACT_STORIES[0].keyOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 02: Production Throughput */}
            <div
              id="impact-card-02"
              className="lg:col-span-5 bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-6 sm:p-8 transition-all group shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-1 bg-blue-950/80 border border-blue-800 uppercase tracking-wider">
                    {IMPACT_STORIES[1].number} • {IMPACT_STORIES[1].badge}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {IMPACT_STORIES[1].metric}
                  </div>
                  <div className="text-xs font-bold font-mono text-blue-400 mt-1 uppercase tracking-wider">
                    {IMPACT_STORIES[1].metricLabel}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2 font-sans">
                  {IMPACT_STORIES[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {IMPACT_STORIES[1].description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {IMPACT_STORIES[1].keyOutcomes.slice(0, 2).map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom 3 Cards: 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 03: Scrap Reduction */}
            <div
              id="impact-card-03"
              className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-6 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 bg-emerald-950/80 border border-emerald-800 uppercase tracking-wider">
                    {IMPACT_STORIES[2].number} • Quality
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight group-hover:text-emerald-400 transition-colors mb-1">
                  {IMPACT_STORIES[2].metric}
                </div>
                <div className="text-xs font-mono font-bold text-emerald-400 mb-3 uppercase tracking-wider">
                  {IMPACT_STORIES[2].metricLabel}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 font-sans">
                  {IMPACT_STORIES[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {IMPACT_STORIES[2].description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 font-mono">
                Direct bottom-line material recovery
              </div>
            </div>

            {/* Card 04: Troubleshooting Reduction */}
            <div
              id="impact-card-04"
              className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-6 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-blue-400 px-2 py-0.5 bg-blue-950/80 border border-blue-800 uppercase tracking-wider">
                    {IMPACT_STORIES[3].number} • Reliability
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight group-hover:text-blue-400 transition-colors mb-1">
                  {IMPACT_STORIES[3].metric}
                </div>
                <div className="text-xs font-mono font-bold text-blue-400 mb-3 uppercase tracking-wider">
                  {IMPACT_STORIES[3].metricLabel}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 font-sans">
                  {IMPACT_STORIES[3].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {IMPACT_STORIES[3].description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 font-mono">
                From ~2 hours down to ~1 hour MTTR
              </div>
            </div>

            {/* Card 05: Global Support */}
            <div
              id="impact-card-05"
              className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-6 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-blue-400 px-2 py-0.5 bg-blue-950/80 border border-blue-800 uppercase tracking-wider">
                    {IMPACT_STORIES[4].number} • Global Field
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight group-hover:text-blue-400 transition-colors mb-1">
                  {IMPACT_STORIES[4].metric}
                </div>
                <div className="text-xs font-mono font-bold text-blue-400 mb-3 uppercase tracking-wider">
                  {IMPACT_STORIES[4].metricLabel}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 font-sans">
                  {IMPACT_STORIES[4].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {IMPACT_STORIES[4].description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 font-mono">
                Brainchild regional sales: $50K → $500K
              </div>
            </div>
          </div>
        </div>

        {/* Impact Call-to-Action bar */}
        <div className="mt-12 p-6 bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white font-sans uppercase tracking-tight">
              Looking to achieve similar operational benchmarks on your lines?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Let's evaluate your current cycle times, scrap bottlenecks, or MES integration gaps.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-white hover:bg-slate-200 text-black font-bold font-mono text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Consult on an Opportunity</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
