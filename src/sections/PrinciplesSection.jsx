import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const PrinciplesSection = () => {
  const [hoveredPrinciple, setHoveredPrinciple] = useState(null);

  const principles = [
    {
      num: '01',
      title: 'BUILD',
      tagline: 'Execution precedes abstraction. We make ideas tangible.',
      desc: 'Action generates information that theorizing cannot predict. We build functional prototypes immediately to confront reality early and resolve doubt.',
    },
    {
      num: '02',
      title: 'THINK',
      tagline: 'First-principles clarity over industry conformity.',
      desc: 'We question inherited assumptions. Every product, pricing model, and architecture is designed by deconstructing fundamental truths.',
    },
    {
      num: '03',
      title: 'CREATE',
      tagline: 'Obsessive aesthetic discipline and technological craftsmanship.',
      desc: 'Utility without beauty feels sterile. Beauty without utility is decorative. We treat engineering, design, and typography as a single indivisible discipline.',
    },
    {
      num: '04',
      title: 'SCALE',
      tagline: 'Systematic expansion anchored by honest unit economics.',
      desc: 'We do not subsidize unprofitable scale. Growth is earned through customer retention, operational leverage, and compounding brand equity.',
    },
  ];

  return (
    <section
      id="principles"
      className="relative w-full bg-black text-white py-32 px-6 md:px-12 lg:px-16 border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                06 / OPERATIONAL CANON
              </span>
              <span className="w-12 h-[1px] bg-zinc-800" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tightest uppercase text-white">
              PRINCIPLES
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-sm">
            Four non-negotiable operational tenets guiding every venture we form.
          </p>
        </div>

        {/* Minimal Principles List with Dynamic Hover States */}
        <div className="space-y-2 border-t border-b border-white/15 py-4">
          {principles.map((item, idx) => {
            const isSelected = hoveredPrinciple === idx;
            const hasHover = hoveredPrinciple !== null;
            const isMuted = hasHover && !isSelected;

            return (
              <div
                key={item.num}
                onMouseEnter={() => setHoveredPrinciple(idx)}
                onMouseLeave={() => setHoveredPrinciple(null)}
                data-cursor="view"
                data-cursor-text="FOCUS"
                className={`py-8 sm:py-10 px-4 sm:px-8 transition-all duration-400 cursor-pointer border-b border-white/[0.06] last:border-b-0 ${
                  isSelected
                    ? 'bg-[#121212] -translate-x-1'
                    : 'bg-transparent'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span
                      className={`font-mono text-sm sm:text-base tracking-widest transition-colors duration-300 ${
                        isSelected
                          ? 'text-white font-bold'
                          : isMuted
                          ? 'text-zinc-700'
                          : 'text-zinc-500'
                      }`}
                    >
                      {item.num}
                    </span>

                    <h3
                      className={`font-bold tracking-tightest transition-all duration-300 ${
                        isSelected
                          ? 'text-4xl sm:text-6xl md:text-7xl text-white scale-[1.02] origin-left'
                          : isMuted
                          ? 'text-2xl sm:text-4xl md:text-5xl text-zinc-700'
                          : 'text-3xl sm:text-5xl md:text-6xl text-zinc-300'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div className="max-w-md">
                    <p
                      className={`text-sm sm:text-base font-light transition-colors duration-300 ${
                        isSelected
                          ? 'text-zinc-200'
                          : isMuted
                          ? 'text-zinc-700'
                          : 'text-zinc-400'
                      }`}
                    >
                      {item.tagline}
                    </p>
                    {isSelected && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="text-xs text-zinc-400 mt-2 font-mono"
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
