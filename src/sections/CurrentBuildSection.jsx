import React from 'react';
import { ArrowUpRight, Cpu, Layers, Terminal, Clock } from 'lucide-react';

export const CurrentBuildSection = ({ onTalkClick }) => {
  const modules = [
    {
      code: 'ENG-01',
      title: 'Attribution Matrix',
      desc: 'Deterministic tracking pipelines that reconcile fragmented customer acquisition touches into single ledger clarity.',
      status: 'Prototyping',
    },
    {
      code: 'ENG-02',
      title: 'Algorithmic Outreach Desk',
      desc: 'High-signal programmatic communication flows that replace inefficient manual business development.',
      status: 'In Architecture',
    },
    {
      code: 'ENG-03',
      title: 'Margin & Unit Economic Audit',
      desc: 'Real-time telemetry measuring client acquisition costs against lifetime gross contribution in live production.',
      status: 'Specification',
    },
  ];

  return (
    <section
      id="currently-building"
      className="relative w-full bg-black text-white py-32 px-6 md:px-12 lg:px-16 border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Pre-header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                04 / VENTURE LAB
              </span>
              <span className="w-12 h-[1px] bg-zinc-800" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tightest uppercase text-white">
              CURRENTLY BUILDING
            </h2>
          </div>

          {/* Transparent Live Status Indicator */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-graphite border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-white uppercase font-medium">
              STATUS: IN DEVELOPMENT
            </span>
          </div>
        </div>

        {/* Project Card: YSH&CO GROWTH DESK */}
        <div className="bg-[#0e0e0e] border border-white/20 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Top Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-8 mb-10 gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                VENTURE CODE: YSH-GD-01
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                YSH&CO GROWTH DESK
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                CLASSIFICATION
              </span>
              <span className="text-xs font-mono text-zinc-300">
                Technology-Enabled Growth Services
              </span>
            </div>
          </div>

          {/* Description & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xl sm:text-2xl text-zinc-200 font-light leading-relaxed">
                Technology-enabled growth services for businesses.
              </p>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Most businesses struggle with disconnected growth: ad agencies operate in silos, analytics tools report conflicting figures, and customer acquisition costs spiral uncontrollably.
              </p>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                YSH&CO Growth Desk unites quantitative data engineering with pragmatic outbound execution to turn growth into a transparent, repeatable mathematical function.
              </p>
            </div>

            {/* Development Roadmap Tracker */}
            <div className="lg:col-span-5 bg-black/60 border border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  ACTIVE SPRINT ROADMAP
                </span>
                <span className="text-[10px] font-mono text-zinc-500">2026 CYCLE</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>01. Market Verification</span>
                  <span className="text-[10px] text-white bg-white/10 px-2 py-0.5">COMPLETED</span>
                </div>
                <div className="flex items-center justify-between text-white font-medium">
                  <span>02. Core Architecture</span>
                  <span className="text-[10px] text-black bg-white px-2 py-0.5 font-bold">IN PROGRESS</span>
                </div>
                <div className="flex items-center justify-between text-zinc-600">
                  <span>03. Alpha Pilot Cohort</span>
                  <span className="text-[10px] border border-zinc-800 px-2 py-0.5">QUEUED</span>
                </div>
                <div className="flex items-center justify-between text-zinc-600">
                  <span>04. General Availability</span>
                  <span className="text-[10px] border border-zinc-800 px-2 py-0.5">SCHEDULED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Internal Modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10 mb-10">
            {modules.map((mod) => (
              <div key={mod.code} className="bg-black/40 border border-white/[0.08] p-6 space-y-3">
                <div className="flex items-center justify-between text-zinc-500 font-mono text-[10px]">
                  <span>{mod.code}</span>
                  <span className="text-zinc-400">{mod.status}</span>
                </div>
                <h4 className="text-base font-medium text-white tracking-tight">
                  {mod.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 font-mono flex items-center gap-2">
              <Clock size={14} className="text-zinc-500" />
              <span>Target Pilot Onboarding: Q3 2026</span>
            </div>

            <button
              onClick={onTalkClick}
              className="px-6 py-3 bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
              data-cursor="hover"
            >
              <span>INQUIRE ABOUT GROWTH DESK</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentBuildSection;
