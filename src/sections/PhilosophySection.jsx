import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export const PhilosophySection = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 'idea',
      step: '01',
      title: 'IDEA',
      heading: 'First-Principles Interrogation',
      description:
        'We do not chase trends or fleeting venture bubbles. Every idea begins with observing genuine market friction, structural inefficiency, and unfulfilled human intent.',
      criteria: [
        'Acute, identifiable user pain point',
        'Direct path to monetization without subsidies',
        'Underestimated technical or operational leverage',
      ],
      diagram: 'DISCOVERY · DECONSTRUCTION · VALIDATION',
    },
    {
      id: 'build',
      step: '02',
      title: 'BUILD',
      heading: 'Ruthless Engineering & Craft',
      description:
        'Ideas are commodities without immaculate execution. We build focused, stripped-down initial engines that solve the core problem with zero superfluous complexity.',
      criteria: [
        'Sub-second performance & minimal architecture',
        'Radically intuitive user interface design',
        'Resilient, maintainable codebases',
      ],
      diagram: 'PROTOTYPE · REFINE · HARDEN',
    },
    {
      id: 'launch',
      step: '03',
      title: 'LAUNCH',
      heading: 'Immediate Ground Truth Testing',
      description:
        'We test hypotheses directly against reality. No artificial vanity launch parties—just focused distribution to early customers who value utility above all else.',
      criteria: [
        'Direct quantitative telemetry & qualitative feedback',
        'Zero artificial engagement hacks',
        'Rapid weekly release cadence',
      ],
      diagram: 'DEPLOY · MEASURE · CALIBRATE',
    },
    {
      id: 'scale',
      step: '04',
      title: 'SCALE',
      heading: 'Compounding Long-Term Leverage',
      description:
        'When product-market truth is achieved, we inject structural capital, automated systems, and enterprise distribution to build durable multi-decade assets.',
      criteria: [
        'Positive unit economics before volume scaling',
        'Defensible intellectual property & brand equity',
        'Autonomous leadership & enduring governance',
      ],
      diagram: 'SYSTEMATIZE · EXPAND · COMPOUND',
    },
  ];

  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#080808] text-white py-32 px-6 md:px-12 lg:px-16 border-b border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                03 / SYSTEM ARCHITECTURE
              </span>
              <span className="w-12 h-[1px] bg-zinc-800" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tightest uppercase text-white">
              PHILOSOPHY OF CREATION
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-sm">
            From raw signal to scalable enterprise: our deterministic lifecycle.
          </p>
        </div>

        {/* The Transformation Pipeline Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: The 4-Stage Vertical Selector */}
          <div className="lg:col-span-4 space-y-3">
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <div key={stage.id} className="relative">
                  <button
                    onClick={() => setActiveStage(idx)}
                    className={`w-full text-left p-5 transition-all duration-300 border flex items-center justify-between group focus:outline-none ${
                      isActive
                        ? 'bg-white text-black border-white'
                        : 'bg-black/50 text-zinc-400 border-white/10 hover:border-white/40 hover:text-white'
                    }`}
                    data-cursor="hover"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs tracking-widest">{stage.step}</span>
                      <span className="text-xl sm:text-2xl font-bold tracking-tight">
                        {stage.title}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-mono tracking-widest transition-transform ${
                        isActive ? 'translate-x-1 font-semibold' : 'text-zinc-600'
                      }`}
                    >
                      {isActive ? 'ACTIVE' : 'SELECT'}
                    </span>
                  </button>

                  {/* Down Arrow between stages */}
                  {idx < stages.length - 1 && (
                    <div className="py-2 flex justify-center text-zinc-600">
                      <ArrowDown size={14} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Transformer Stage Display */}
          <div className="lg:col-span-8 bg-black border border-white/15 p-8 sm:p-12 lg:p-16 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
            {/* Background Geometric Line Circuit */}
            <svg
              className="absolute right-0 top-0 w-80 h-80 opacity-10 pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
              stroke="#FFFFFF"
            >
              <circle cx="100" cy="100" r="80" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="20" y1="100" x2="180" y2="100" strokeWidth="1" />
              <line x1="100" y1="20" x2="100" y2="180" strokeWidth="1" />
              <rect x="60" y="60" width="80" height="80" strokeWidth="1" />
            </svg>

            {/* Dynamic Stage Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 relative z-10"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                    STAGE {stages[activeStage].step} / {stages[activeStage].title}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-zinc-400 bg-white/[0.05] px-3 py-1 border border-white/10">
                    {stages[activeStage].diagram}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                    {stages[activeStage].heading}
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                    {stages[activeStage].description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.08]">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-4">
                    EXECUTION MANDATES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stages[activeStage].criteria.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-zinc-300 font-mono"
                      >
                        <CheckCircle2 size={14} className="text-white mt-0.5 shrink-0" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Progress Bar */}
            <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between text-zinc-500 text-[10px] font-mono">
              <span>PIPELINE PROGRESSION</span>
              <div className="flex gap-2">
                {stages.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveStage(i)}
                    className={`h-1 cursor-pointer transition-all duration-300 ${
                      activeStage === i ? 'w-8 bg-white' : 'w-4 bg-zinc-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
