import React, { useState } from 'react';
import { EXPERTISE_DATA } from '../data/portfolioData';
import { ExpertiseItem } from '../types';
import {
  Cpu,
  Layers,
  ScanEye,
  Network,
  Activity,
  CheckSquare,
  Users,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const ExpertiseGrid: React.FC = () => {
  const [selectedExpertise, setSelectedExpertise] = useState<string>(EXPERTISE_DATA[0].id);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    ia: true,
    mes: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-teal-400" />;
      case 'ScanEye':
        return <ScanEye className="w-5 h-5 text-indigo-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-blue-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-purple-400" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 text-emerald-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-amber-400" />;
      default:
        return <Zap className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="expertise" className="py-20 md:py-28 bg-[#0A0C10] border-t border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Deep Technical Mastery Across <br className="hidden sm:block" />
            <span className="text-blue-500">
              The Entire Automation Lifecycle
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            From deterministic sensor-to-PLC loop execution to enterprise MES integration and multi-protocol industrial networks, explore specialized capabilities refined over 20+ years of manufacturing execution.
          </p>
        </div>

        {/* 7-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_DATA.map((item) => {
            const isExpanded = !!expandedCards[item.id];

            return (
              <div
                key={item.id}
                id={`expertise-card-${item.id}`}
                className={`flex flex-col justify-between bg-slate-900 border transition-all duration-200 ${
                  isExpanded
                    ? 'border-blue-500/50 shadow-xl'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="p-6">
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-2.5 bg-slate-950 border border-slate-800">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 bg-slate-950 text-blue-400 border border-slate-800">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1 mb-4">
                    {item.tagline}
                  </p>

                  {/* Core Skills List */}
                  <div className="space-y-2 mb-4">
                    <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider block font-bold">
                      Core Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {item.skills.slice(0, isExpanded ? item.skills.length : 3).map((skill, sIdx) => (
                        <li key={sIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expanded Content: Standards & Business Value */}
                  {isExpanded && (
                    <div className="pt-4 mt-4 border-t border-slate-800/80 space-y-4 animate-in fade-in-50 duration-200">
                      {/* Protocols & Standards */}
                      <div>
                        <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider block mb-1.5 font-bold">
                          Protocols &amp; Standards:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.protocolsAndStandards.map((std, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono px-2 py-0.5 bg-slate-950 border border-slate-800 text-slate-300"
                            >
                              {std}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Business Value */}
                      <div className="p-3 bg-slate-950 border border-slate-800">
                        <span className="text-[10px] uppercase font-mono text-blue-400 tracking-wide block font-bold mb-1">
                          Manufacturing Value:
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {item.businessValue}
                        </p>
                      </div>

                      {/* Typical Engineering Deliverables */}
                      <div>
                        <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider block mb-1.5 font-bold">
                          Key Deliverables:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-400">
                          {item.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-1.5">
                              <FileCheck className="w-3 h-3 text-blue-400 shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Toggle Footer */}
                <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-blue-300 flex items-center justify-between font-bold cursor-pointer"
                  >
                    <span>{isExpanded ? 'Collapse Details' : 'View Protocols & Deliverables'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
