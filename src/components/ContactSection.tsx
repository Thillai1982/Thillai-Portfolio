import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Linkedin,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0A0C10] border-t border-slate-800 text-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Inquiries &amp; Consultations</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
                Let's Discuss Your <br />
                <span className="text-blue-500">
                  Automation Challenge
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Whether you are evaluating a greenfield automation project, looking to improve line throughput, stabilizing MES Controls, or seeking senior industrial automation leadership—let's start with the problem.
              </p>

              {/* Direct Info Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
                {/* Email Box */}
                <div className="p-4 bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <button
                      onClick={copyEmail}
                      className="text-[11px] font-mono text-slate-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer uppercase"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-mono text-slate-200 hover:text-blue-400 transition-colors font-medium break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn Box */}
                <div className="p-4 bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Verified</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">LinkedIn Profile</span>
                    <a
                      href={PERSONAL_INFO.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-200 hover:text-blue-400 transition-colors font-medium"
                    >
                      linkedin.com/in/thillai-nayagam
                    </a>
                  </div>
                </div>

                {/* Location Box */}
                <div className="p-4 bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Hub</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Location</span>
                    <span className="text-xs font-mono text-slate-200 font-medium">
                      Chennai, India (Global Remote / On-Site)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <a
                  id="contact-email-btn"
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                    'Automation Consulting Inquiry - Manufacturing Controls'
                  )}&body=${encodeURIComponent(
                    'Hello Thillai,\n\nI came across your portfolio and would like to discuss an automation / MES controls initiative.\n\nProject Scope:\nTimeline:\n\nBest regards,'
                  )}`}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-200 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>

                <button
                  id="contact-custom-scope-btn"
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-7 py-3.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
                >
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>Scope Assistant</span>
                </button>

                <a
                  id="contact-linkedin-btn"
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
