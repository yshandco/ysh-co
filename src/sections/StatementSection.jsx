import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const StatementSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yFirst = useTransform(scrollYProgress, [0.2, 0.55], [40, -10]);
  const opacitySecond = useTransform(scrollYProgress, [0.35, 0.65], [0.15, 1]);
  const ySecond = useTransform(scrollYProgress, [0.35, 0.65], [50, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-black text-white py-36 px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center border-b border-white/[0.08] overflow-hidden"
    >
      {/* Background Architectural Vector Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <div className="w-[85vw] h-[85vh] border border-white/10" />
        <div className="absolute w-[45vw] h-[45vh] border border-white/5" />
      </div>

      <div className="max-w-6xl mx-auto w-full text-center relative z-10 space-y-8 sm:space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-mono tracking-widest text-zinc-500 uppercase"
        >
          <span>FOUNDATIONAL AXIOM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <span>YSH&CO</span>
        </motion.div>

        {/* Primary Statement */}
        <motion.div style={{ y: yFirst }} className="overflow-hidden">
          <h2 className="fluid-statement font-bold tracking-tightest uppercase text-white/95 leading-none">
            THE NEXT<br />IS BUILT.
          </h2>
        </motion.div>

        {/* Revealed Follow-up Statement */}
        <motion.div
          style={{ opacity: opacitySecond, y: ySecond }}
          className="overflow-hidden pt-4"
        >
          <h3 className="fluid-statement font-bold tracking-tightest uppercase text-zinc-500 hover:text-zinc-200 transition-colors duration-500 leading-none">
            BY PEOPLE<br />WHO BUILD IT.
          </h3>
        </motion.div>

        {/* Micro Sub-note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-12 max-w-md mx-auto"
        >
          <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wider">
            Not by spectators, commentators, or committee consensus.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatementSection;
