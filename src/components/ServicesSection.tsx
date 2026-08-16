import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';
import {
  Compass,
  Database,
  Gauge,
  ShieldCheck,
  Wrench,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  FileText,
  UserCheck,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-teal-400" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-rose-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      default:
        return <Compass className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0A0C10] text-[#E2E8F0] border-t border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Consulting &amp; Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            How I Can <span className="text-blue-500">Help</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            High-impact consulting, technical leadership, and engineering services tailored to manufacturing leaders, plant directors, and OEMs seeking measurable operational performance.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="flex flex-col justify-between bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-6 sm:p-7 transition-all duration-200 group shadow-lg text-left"
            >
              <div>
                {/* Header & Icon */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 bg-slate-950 border border-slate-800 group-hover:border-blue-500/50 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-slate-950 text-slate-400 border border-slate-800 uppercase tracking-wider">
                    {service.engagementModel}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors mb-3 font-sans">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Who It's For */}
                <div className="p-3 bg-slate-950 border border-slate-800 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block font-bold mb-1">
                    Ideal For:
                  </span>
                  <p className="text-xs text-slate-400 font-mono">
                    {service.whoItsFor}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inquiry Action */}
              <button
                id={`btn-service-inquire-${service.id}`}
                onClick={() => onSelectService(service.title)}
                className="w-full py-2.5 px-4 bg-slate-950 hover:bg-blue-950/60 border border-slate-800 hover:border-blue-500 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-blue-300 font-bold transition-all flex items-center justify-between cursor-pointer"
              >
                <span>Request Scope on This Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
