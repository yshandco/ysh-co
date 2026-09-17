import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import AbstractCanvas from '../components/AbstractCanvas';

export const HeroSection = ({ onExploreClick, onTalkClick }) => {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden select-none">
      {/* Background Canvas: living monochrome system */}
      <AbstractCanvas />

      {/* Top Meta Details */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 md:pt-8 flex flex-col sm:flex-row justify-between sm:items-center text-zinc-500 text-[10px] md:text-[11px] font-mono tracking-widest uppercase gap-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          <span>INDEPENDENT PARENT ENTITY</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-6"
        >
          <span>FOUNDED WITH LONG-HORIZON CAPITAL</span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="hidden sm:inline">EST. 2026</span>
        </motion.div>
      </div>

      {/* Massive Typographic Hero Center/Left */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 md:py-16">
        {/* Brand Pre-Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mb-4 md:mb-6 flex items-center gap-3"
        >
          <span className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-zinc-400">
            YSH&CO
          </span>
          <span className="w-8 h-[1px] bg-zinc-700" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
            CORPORATE HOLDING
          </span>
        </motion.div>

        {/* Main Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fluid-hero font-bold tracking-tightest text-white uppercase"
        >
          <span className="block text-white/95">WE BUILD</span>
          <span className="block text-white/70 hover:text-white transition-colors duration-500">
            WHAT'S NEXT.
          </span>
        </motion.h1>

        {/* Supporting Line & Interactive CTAs */}
        <div className="mt-8 md:mt-12 pt-8 border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="space-y-2 max-w-md"
          >
            <p className="text-xl md:text-2xl font-light tracking-tight text-zinc-200">
              Ideas. Products. Brands.
            </p>
            <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
              A future-focused parent company. We validate real problems, engineer useful solutions, and scale what proves enduring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onExploreClick}
              className="px-6 py-3.5 bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-zinc-200 transition-all flex items-center gap-3 group"
              data-cursor="hover"
            >
              <span>EXPLORE YSH&CO</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>

            <button
              onClick={onTalkClick}
              className="px-6 py-3.5 border border-white/20 text-white font-medium text-xs tracking-widest uppercase hover:border-white hover:bg-white/[0.05] transition-all flex items-center gap-2 group"
              data-cursor="hover"
            >
              <span>VENTURE INQUIRY</span>
              <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-white transition-colors" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Coordinates & Scroll Prompter */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-zinc-500 text-[10px] font-mono tracking-widest uppercase pt-6 border-t border-white/[0.06]">
        <div className="flex items-center gap-4">
          <span>LAT 40.7128° N, 74.0060° W</span>
          <span className="hidden md:inline text-zinc-700">|</span>
          <span className="hidden md:inline text-zinc-400">GLOBAL INCUBATION MATRIX</span>
        </div>

        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group focus:outline-none"
          data-cursor="hover"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown size={12} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
