import React, { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';
import {
  Cpu,
  Layers,
  ScanEye,
  Network,
  Activity,
  Search,
  CheckCircle,
  Filter,
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'PLC / Controls',
    'SCADA / MES',
    'Machine Vision',
    'Industrial Networking',
    'Manufacturing & Industry 4.0',
  ];

  const filteredTech = TECH_STACK.filter((tech) => {
    const matchesCategory = selectedCategory === 'All' || tech.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-[#0A0C10] text-[#E2E8F0] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Hardware &amp; Protocols</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Technology Stack &amp; <span className="text-blue-500">Industrial Toolset</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Multi-vendor proficiency across major industrial hardware platforms, software suites, fieldbuses, and enterprise communication standards.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search protocol or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 bg-slate-900 border transition-all text-left ${
                item.highlight
                  ? 'border-blue-500/40 hover:border-blue-400 shadow-md'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-white tracking-tight">
                  {item.name}
                </span>
                {item.highlight && (
                  <span className="w-2 h-2 bg-blue-500" title="Core Expertise" />
                )}
              </div>
              <p className="text-[11px] text-slate-400 mb-2">
                {item.description}
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase">
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredTech.length === 0 && (
          <div className="p-8 text-center bg-slate-900 border border-slate-800 text-slate-400 text-sm font-mono">
            No technologies found matching "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};
