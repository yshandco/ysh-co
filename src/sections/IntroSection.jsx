import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const IntroSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Subtle upward shift for "WE BUILD"
  const yWeBuild = useTransform(scrollYProgress, [0.15, 0.55], [40, -25]);
  // Smooth reveal for "FOR WHAT'S NEXT."
  const opacitySecondLine = useTransform(scrollYProgress, [0.25, 0.5], [0.15, 1]);
  const ySecondLine = useTransform(scrollYProgress, [0.2, 0.55], [50, 0]);

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative w-full min-h-[90vh] bg-black text-white py-32 px-6 md:px-12 lg:px-16 flex flex-col justify-center border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            01 / MANIFESTO
          </span>
          <span className="w-12 h-[1px] bg-zinc-800" />
        </div>

        {/* Mask / Reveal Typography */}
        <div className="overflow-hidden py-4">
          <motion.div style={{ y: yWeBuild }} className="overflow-hidden">
            <h2 className="fluid-subhero font-bold tracking-tightest uppercase text-white/90">
              WE BUILD
            </h2>
          </motion.div>

          <motion.div
            style={{ opacity: opacitySecondLine, y: ySecondLine }}
            className="overflow-hidden mt-1 md:mt-2"
          >
            <h2 className="fluid-subhero font-bold tracking-tightest uppercase text-zinc-400 hover:text-white transition-colors duration-300">
              FOR WHAT'S NEXT.
            </h2>
          </motion.div>
        </div>

        {/* Narrative & Body Text with Editorial Grid */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block mb-3">
              CORE THESIS
            </span>
            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
              We do not pursue speculation. We build real infrastructure, modern software tools, and resilient commercial brands designed to outlast market cycles.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-zinc-100 leading-snug">
              YSH&CO identifies meaningful problems, builds practical solutions and develops successful ideas into scalable products, services and brands.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/[0.06]">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                  STRATEGY
                </span>
                <span className="text-xs font-medium text-zinc-300">Focus Over Breadth</span>
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                  VALIDATION
                </span>
                <span className="text-xs font-medium text-zinc-300">Market Ground Truth</span>
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                  HORIZON
                </span>
                <span className="text-xs font-medium text-zinc-300">Compounding Scale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
