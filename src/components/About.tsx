import React from 'react';
import { PERSONAL_INFO, CAREER_JOURNEY } from '../data/portfolioData';
import {
  Compass,
  Cpu,
  Layers,
  Award,
  Globe2,
  CheckCircle2,
  TrendingUp,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0A0C10] text-[#E2E8F0] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Executive Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Engineering Experience. <br className="hidden sm:block" />
            <span className="text-blue-500">
              Manufacturing Impact.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            With more than two decades in industrial automation, controls architecture, and manufacturing systems, Thillai Nayagam bridges the critical gap between plant-floor deterministic execution and enterprise-level operational visibility.
          </p>
        </div>

        {/* 2-Column Grid: Narrative & Career Evolution Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Thillai has dedicated 20+ years to designing, commissioning, and stabilizing complex control systems across solar manufacturing, automotive, energy, and process industries. His domain mastery ranges from low-level PLC logic, high-speed machine vision, and multi-drop fieldbuses to plant-wide MES equipment integration and Industry 4.0 data pipelines.
              </p>
              <p>
                Currently serving as <strong className="text-white font-semibold">Controls Engineer III — MES Controls at First Solar</strong>, he led the controls and equipment integration for a fast-track greenfield solar module manufacturing facility—coordinating with over 40 global equipment builders and supporting commercial ramp within 6 months.
              </p>
              <p>
                Prior to this, his tenure as <strong className="text-white font-semibold">Senior Field Application Engineer at Brainchild Electronics</strong> in Taipei, Taiwan saw him providing tier-3 application support to clients across 85+ countries, solving complex multi-vendor networking puzzles and expanding regional revenue 10-fold.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-900 border border-slate-800 space-y-1.5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase font-mono tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>Deterministic Rigor</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Clean, modular, deterministic PLC/PAC architectures built for 24/7 uptime without intermittent communication dropouts.
                </p>
              </div>

              <div className="p-4 bg-slate-900 border border-slate-800 space-y-1.5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase font-mono tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>MES &amp; OT–IT Convergence</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enforcing strict recipe gating, serialized traceability, and paperless manufacturing workflows to prevent defect escapes.
                </p>
              </div>

              <div className="p-4 bg-slate-900 border border-slate-800 space-y-1.5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono tracking-wider">
                  <TrendingUp className="w-4 h-4" />
                  <span>Measurable ROI</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Focused on bottom-line outcomes: scrap reduction ($150K), throughput scaling (17K/day), and 50% faster MTTR.
                </p>
              </div>

              <div className="p-4 bg-slate-900 border border-slate-800 space-y-1.5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase font-mono tracking-wider">
                  <Globe2 className="w-4 h-4" />
                  <span>Global Execution</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Proven track record coordinating international OEMs, global FAT/SAT standards, and cross-cultural engineering teams.
                </p>
              </div>
            </div>

            {/* Quote banner */}
            <div className="p-5 bg-slate-900 border border-slate-800 space-y-2">
              <p className="text-sm font-medium text-slate-200 italic">
                "{PERSONAL_INFO.tagline}"
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1">
                <span>Location: Chennai, India</span>
                <button
                  onClick={onOpenConsultation}
                  className="text-blue-400 hover:text-blue-300 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <span>Discuss an Initiative</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Stage Career Progression Visual */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                    <Compass className="w-4 h-4 text-blue-400" />
                    Career Evolution Journey
                  </h3>
                  <p className="text-xs text-slate-400">
                    20+ years progression from field application to MES controls leadership
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 bg-blue-950 px-2 py-0.5 border border-blue-800">
                  Verified Trajectory
                </span>
              </div>

              {/* Vertical Stepper */}
              <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-blue-600 before:to-slate-800">
                {CAREER_JOURNEY.map((item) => (
                  <div key={item.stage} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[27px] top-1 w-4 h-4 bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors shadow-sm" />

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-blue-400 tracking-widest uppercase">
                          STAGE {item.stage} • {item.period}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-300 font-mono">
                        {item.role} • <span className="text-slate-400">{item.company}</span>
                      </p>
                      <p className="text-xs text-slate-400 pt-0.5 leading-relaxed">
                        {item.focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Badge */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-blue-400 font-medium uppercase tracking-wider text-[10px]">
                  <ShieldCheck className="w-4 h-4" />
                  Grounded in Verified Records
                </span>
                <span className="text-[10px]">Solar • OEM • Process</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
