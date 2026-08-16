import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollHelper';
import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Layers,
  MonitorCheck,
  Database,
  CloudCog,
  Activity,
  CheckCircle2,
  ExternalLink,
  Sliders,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [selectedLayer, setSelectedLayer] = useState<number>(2); // Default to MES layer

  const architectureLayers = [
    {
      id: 0,
      level: 'L0/L1',
      title: 'Sensors & Machine I/O',
      badge: 'Field Devices',
      icon: Activity,
      protocols: ['IO-Link', 'Analog 4-20mA', 'Digital 24V', 'Keyence Vision'],
      focus: 'High-speed part detection, temperature/pressure transmitters, and optical verification.',
      color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300',
    },
    {
      id: 1,
      level: 'L1',
      title: 'Field PAC / PLCs & Drives',
      badge: 'Deterministic Control',
      icon: Cpu,
      protocols: ['EtherNet/IP', 'Modbus TCP/RTU', 'Profinet', 'CIP Safety'],
      focus: 'Deterministic ladder/structured-text logic, closed-loop motion, and safety interlocks.',
      color: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300',
    },
    {
      id: 2,
      level: 'L2',
      title: 'HMI & Plant SCADA',
      badge: 'Supervisory Control',
      icon: MonitorCheck,
      protocols: ['OPC UA', 'FactoryTalk View', 'Ignition', 'BACnet/IP'],
      focus: 'Real-time plant floor visualization, alarm dispatching, setpoints, and shift oversight.',
      color: 'border-blue-500/40 bg-blue-950/20 text-blue-300',
    },
    {
      id: 3,
      level: 'L3',
      title: 'MES & Traceability',
      badge: 'Manufacturing Execution',
      icon: Layers,
      protocols: ['MES Handshakes', 'SQL Logging', 'REST APIs', 'Recipe Interlocks'],
      focus: 'Product serialization, genealogy, scrap gating, route enforcement, and paperless orders.',
      color: 'border-indigo-500/40 bg-indigo-950/20 text-indigo-300',
    },
    {
      id: 4,
      level: 'L4',
      title: 'Manufacturing Data & Cloud',
      badge: 'Operational Intelligence',
      icon: Database,
      protocols: ['MQTT Sparkplug B', 'Unified Namespace', 'Data Lake', 'OEE Dashboards'],
      focus: 'Plant-wide yield analytics, machine learning telemetry, and executive OEE transparency.',
      color: 'border-purple-500/40 bg-purple-950/20 text-purple-300',
    },
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800 bg-[#0A0C10]"
    >
      {/* Background Engineering Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415518_1px,transparent_1px),linear-gradient(to_bottom,#33415518_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Executive Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{PERSONAL_INFO.availabilityStatus}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
                Industrial Automation &amp; <br />
                <span className="text-blue-500">
                  MES Controls
                </span> Expert
              </h1>
              <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl pt-2">
                {PERSONAL_INFO.subtitle}
              </p>
            </div>

            {/* Concise Value Proposition Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {PERSONAL_INFO.valuePills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-slate-300 bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Core Philosophy Callout */}
            <div className="p-4 bg-slate-900/80 border border-slate-800 border-l-4 border-l-blue-500">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "{PERSONAL_INFO.tagline}"
              </p>
              <p className="text-xs text-slate-400 font-mono pt-1.5 font-medium">
                — Thillai Nayagam • Controls Engineer III / MES Controls Lead
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-primary-cta-btn"
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-black bg-white hover:bg-slate-200 transition-all flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-secondary-experience-btn"
                href="#experience"
                onClick={(e) => scrollToSection('experience', e)}
                className="px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-slate-200 hover:text-white bg-transparent hover:bg-slate-900 border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>View My Experience</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                id="hero-secondary-projects-btn"
                href="#projects"
                onClick={(e) => scrollToSection('projects', e)}
                className="px-4 py-3.5 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Case Studies</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick trust proofs */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Greenfield Solar Plant (6 Mo Startup)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                40+ Equipment OEMs Coordinated
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                85+ Countries Supported
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Industrial Automation & MES Architecture Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-900 border border-slate-800 p-5 shadow-2xl shadow-black/80">
              {/* Header of Diagram */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-blue-950 border border-blue-800 text-blue-400">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono tracking-tight uppercase">
                      ISA-95 OT–IT Architecture
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Interactive Manufacturing Control Stack
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-950 text-slate-400 border border-slate-800">
                  Select Layer
                </span>
              </div>

              {/* Stack visualizer layers */}
              <div className="space-y-2">
                {architectureLayers.map((layer) => {
                  const Icon = layer.icon;
                  const isSelected = selectedLayer === layer.id;

                  return (
                    <button
                      key={layer.id}
                      id={`arch-layer-btn-${layer.id}`}
                      onClick={() => setSelectedLayer(layer.id)}
                      className={`w-full text-left p-3 border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-blue-500/60 bg-blue-950/30 text-blue-200 shadow-md'
                          : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-400' : 'text-slate-400'}`} />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white">{layer.title}</span>
                              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-slate-900 text-slate-400 border border-slate-800">
                                {layer.level}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-400 block">{layer.badge}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {isSelected && (
                            <span className="text-[10px] font-mono text-blue-400 flex items-center gap-1 font-semibold">
                              ACTIVE
                            </span>
                          )}
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              isSelected ? 'rotate-90 text-blue-400' : 'text-slate-600'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Expanded layer details */}
                      {isSelected && (
                        <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-xs space-y-2 animate-in fade-in-50 duration-200">
                          <p className="text-slate-300 leading-snug">{layer.focus}</p>
                          <div>
                            <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider block mb-1">
                              Handshakes &amp; Protocols:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {layer.protocols.map((proto) => (
                                <span
                                  key={proto}
                                  className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-900 border border-slate-700/80 text-blue-300"
                                >
                                  {proto}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Diagram Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-blue-400">
                  <Sparkles className="w-3 h-3" />
                  Deterministic OT • Real-time MES
                </span>
                <span>Sensors &rarr; PLC &rarr; SCADA &rarr; MES &rarr; Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
