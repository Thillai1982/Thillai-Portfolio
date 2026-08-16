import React, { useState } from 'react';
import { HERO_METRICS } from '../data/portfolioData';
import { MetricItem } from '../types';
import {
  Clock,
  Zap,
  TrendingDown,
  Globe,
  CheckCircle2,
  Info,
  X,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<MetricItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-5 h-5 text-blue-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-400" />;
      case 'TrendingDown':
        return <TrendingDown className="w-5 h-5 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-blue-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section
      id="metrics-strip"
      className="relative z-20 -mt-2 sm:-mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* 5-Column Data Grid Strip */}
      <div className="bg-[#0A0C10] border border-slate-800 shadow-2xl shadow-black/90 p-2 sm:p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.id}
              className={`group flex flex-col justify-between p-4 sm:p-5 hover:bg-slate-900 transition-all cursor-pointer ${
                activeMetric?.id === metric.id ? 'bg-blue-950/20 ring-1 ring-blue-500/50' : ''
              }`}
              onClick={() => setActiveMetric(metric)}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-slate-950 border border-slate-800 group-hover:border-blue-500/40 transition-colors">
                    {getIcon(metric.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors flex items-center gap-0.5">
                    <span>Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>

                <div className="mt-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono group-hover:text-blue-400 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider font-mono">
                    {metric.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {metric.sublabel}
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="text-blue-400 font-semibold tracking-wider uppercase">{metric.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metric Context Detail Modal */}
      {activeMetric && (
        <div
          id="metric-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setActiveMetric(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in zoom-in-95 duration-150 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveMetric(null)}
              className="absolute top-4 right-4 p-1.5 bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close metric details"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-slate-950 border border-slate-800">
                {getIcon(activeMetric.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                  Verified Manufacturing Metric
                </span>
                <h3 className="text-2xl font-bold text-white font-mono">
                  {activeMetric.value}{' '}
                  <span className="text-sm font-normal text-slate-300 font-sans">
                    {activeMetric.label}
                  </span>
                </h3>
              </div>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-400" />
                Engineering Context &amp; Approach
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeMetric.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-400 font-mono border-t border-slate-800">
              <span>Benchmark: {activeMetric.highlight}</span>
              <button
                onClick={() => setActiveMetric(null)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
