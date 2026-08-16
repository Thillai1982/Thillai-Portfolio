import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import {
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  CheckCircle,
  FileCheck2,
} from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-teal-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-indigo-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
    }
  };

  const coreStandards = [
    'ISA-95 Enterprise-Control System Integration',
    'IEC 61131-3 Programmable Controllers Standard',
    'ISA-101 Human-Machine Interface Guidelines',
    'IEC 61850 Substation & Energy Communication',
    'GAMP 5 Validation & Commissioning Principles',
    'ISO 9001 Manufacturing Quality Standards',
  ];

  return (
    <section className="py-20 bg-[#0A0C10] text-[#E2E8F0] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Academic Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
                <span>Academic Background</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                Education &amp; <span className="text-blue-500">Qualifications</span>
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Rigorous formal training spanning project management, instrumentation, and electrical control engineering.
              </p>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex items-start gap-4"
                >
                  <div className="p-3 bg-slate-950 border border-slate-800 shrink-0">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white tracking-tight font-sans">
                        {item.degree}
                      </h3>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-slate-950 text-blue-400 border border-slate-800">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-300">
                      {item.institution}
                    </p>
                    <p className="text-xs text-slate-400 font-mono">
                      Focus: {item.field}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industrial Standards & Governance Alignment */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
                <span>Standards Compliance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                Engineering <span className="text-blue-500">Governance</span>
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Strict adherence to international automation standards across all delivered codebases and system architectures.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Applied International Standards:
              </span>
              <ul className="space-y-3">
                {coreStandards.map((std, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2.5">
                    <FileCheck2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="font-mono text-xs">{std}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
