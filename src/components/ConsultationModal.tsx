import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  X,
  Send,
  CheckCircle2,
  Sliders,
  Building2,
  Calendar,
  Sparkles,
  Mail,
  Copy,
  Check,
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [projectType, setProjectType] = useState<string>(
    preselectedService || 'MES Controls & Integration'
  );
  const [plantType, setPlantType] = useState<string>('Solar / Clean Energy');
  const [timeline, setTimeline] = useState<string>('1–3 Months');
  const [briefDetails, setBriefDetails] = useState<string>('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const projectOptions = [
    'Greenfield Plant Automation & FAT/SAT',
    'MES Controls & Integration',
    'Plant Throughput & Cycle Optimization',
    'Machine Vision & AOI Inspection',
    'Troubleshooting & MTTR Reduction',
    'Industrial Automation Training',
    'Senior Leadership Opportunity',
  ];

  const plantOptions = [
    'Solar / Clean Energy Manufacturing',
    'Semiconductor / Electronics',
    'Automotive & EV Components',
    'Chemical / Process / Food',
    'OEM Tool Builder / Machine Maker',
    'Other Manufacturing Domain',
  ];

  const timelineOptions = ['Immediate / Critical', '1–3 Months', '3–6 Months', 'Long-Term Advisory / Full-Time'];

  const mailtoSubject = `Inquiry: ${projectType} - ${plantType}`;
  const mailtoBody = `Hello Thillai,

I am reaching out regarding an industrial automation / MES controls initiative.

- Initiative Type: ${projectType}
- Manufacturing Domain: ${plantType}
- Target Timeline: ${timeline}

Brief Context & Problem Scope:
${briefDetails ? briefDetails : '[Please provide details on your current line setup, machinery, or controls challenge]'}

Looking forward to connecting with you.

Best regards,`;

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    mailtoSubject
  )}&body=${encodeURIComponent(mailtoBody)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(mailtoBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="consultation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-150 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Inquiry Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-950 text-blue-300 border border-blue-800 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>Structured Inquiry Generator</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
            Start a Technical Conversation
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Define your challenge parameters below. We'll generate a ready-to-send structured email to Thillai.
          </p>
        </div>

        {/* Form Controls */}
        <div className="space-y-4">
          {/* Project Type */}
          <div>
            <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
              1. Select Initiative Scope:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {projectOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setProjectType(opt)}
                  className={`p-2.5 text-xs text-left border transition-all cursor-pointer font-mono ${
                    projectType === opt
                      ? 'bg-blue-950/80 border-blue-500 text-blue-200 shadow-sm font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{opt}</span>
                    {projectType === opt && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Plant / Industry Domain */}
          <div>
            <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
              2. Manufacturing Domain / Environment:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {plantOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setPlantType(opt)}
                  className={`p-2 text-xs text-left border transition-all cursor-pointer font-mono ${
                    plantType === opt
                      ? 'bg-blue-950/80 border-blue-500 text-blue-200 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{opt}</span>
                    {plantType === opt && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
              3. Target Timeline:
            </label>
            <div className="flex flex-wrap gap-2">
              {timelineOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setTimeline(opt)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition-all cursor-pointer font-mono ${
                    timeline === opt
                      ? 'bg-blue-950 border-blue-500 text-blue-300 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
              4. Brief Problem Notes (Optional):
            </label>
            <textarea
              rows={3}
              value={briefDetails}
              onChange={(e) => setBriefDetails(e.target.value)}
              placeholder="e.g., We are integrating 12 new tools on an automated cell and need standardized PLC-to-MES recipe verification and cycle time optimization..."
              className="w-full p-3 bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-4 py-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied Draft</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Draft Text</span>
              </>
            )}
          </button>

          <a
            id="modal-send-mailto-btn"
            href={mailtoUrl}
            className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-slate-200 text-black font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open in Email Client</span>
          </a>
        </div>
      </div>
    </div>
  );
};
