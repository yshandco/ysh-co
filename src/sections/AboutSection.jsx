import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lines = [
    { text: 'YSH&CO is being built as a long-term company.', highlight: true },
    { text: 'We start small.', highlight: false },
    { text: 'We build carefully.', highlight: false },
    { text: 'We scale what works.', highlight: false },
    { text: 'Create useful things.', highlight: true },
    { text: 'Build lasting brands.', highlight: false },
    { text: 'Solve meaningful problems.', highlight: false },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white py-36 px-6 md:px-12 lg:px-16 border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            05 / CORPORATE DOCTRINE
          </span>
          <span className="w-12 h-[1px] bg-zinc-800" />
        </div>

        <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-500 mb-12">
          ABOUT YSH&CO
        </h2>

        {/* Oversized Typographic Manifest Lines */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {lines.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0.25, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="overflow-hidden group"
              >
                <p
                  className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter transition-colors duration-300 ${
                    item.highlight
                      ? 'text-white'
                      : 'text-zinc-400 group-hover:text-zinc-100'
                  }`}
                >
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Editorial Sub-Structure */}
        <div className="mt-28 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
              01 / PERPETUAL HORIZON
            </span>
            <h4 className="text-lg font-medium text-white tracking-tight">Decade-Scale Vision</h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              We operate without artificial exit pressures. By focusing on fundamental unit economics and practical customer utility, we establish independent durability.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
              02 / CAPITAL DISCIPLINE
            </span>
            <h4 className="text-lg font-medium text-white tracking-tight">Pragmatic Allocation</h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Every venture is validated with disciplined micro-budgets before receiving dedicated deployment capital. Waste is eliminated at the architectural layer.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
              03 / SYNERGISTIC PLATFORM
            </span>
            <h4 className="text-lg font-medium text-white tracking-tight">Shared Infrastructure</h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Ventures share core technology, engineering rigor, legal foundations, and distribution capability, allowing each subsidiary to compound faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
