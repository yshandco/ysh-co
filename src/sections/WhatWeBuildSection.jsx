import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const WhatWeBuildSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const pillars = [
    {
      num: '01',
      title: 'PRODUCTS',
      tagline: 'Digital products designed around real problems.',
      detail: 'Precision-engineered tools, enterprise workflow utilities, and cloud-native software built to eliminate friction and empower high-leverage teams.',
      deliverables: ['Software Architecture', 'System Usability', 'SaaS Engines', 'Continuous Iteration'],
    },
    {
      num: '02',
      title: 'SERVICES',
      tagline: 'High-value services that create measurable outcomes.',
      detail: 'Specialized technological acceleration, programmatic growth desks, and bespoke strategic consulting designed to multiply commercial efficiency.',
      deliverables: ['Growth Architecture', 'Automation Desks', 'Operational Analytics', 'Outcome Execution'],
    },
    {
      num: '03',
      title: 'BRANDS',
      tagline: 'Consumer and technology brands built for changing markets.',
      detail: 'Modern ventures characterized by distinctive visual identities, uncompromising design craftsmanship, and long-term brand equity.',
      deliverables: ['Brand Identity', 'Product Positioning', 'Physical & Digital Presence', 'Customer Loyalty'],
    },
  ];

  return (
    <section
      id="what-we-build"
      className="relative w-full bg-black text-white py-32 px-6 md:px-12 lg:px-16 border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                02 / CAPABILITIES & PILLARS
              </span>
              <span className="w-12 h-[1px] bg-zinc-800" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tightest uppercase text-white">
              WHAT WE BUILD
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-sm">
            Three distinct execution engines unified under one parent architecture.
          </p>
        </div>

        {/* The Three Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-b border-white/15">
          {pillars.map((item, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={item.num}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-cursor="view"
                data-cursor-text={item.title}
                className={`relative group p-8 sm:p-10 lg:p-12 transition-all duration-500 border-b lg:border-b-0 ${
                  idx !== pillars.length - 1 ? 'lg:border-r border-white/15' : ''
                } ${isHovered ? 'bg-[#111111]' : 'bg-black'}`}
              >
                {/* Top active hairline indicator */}
                <div
                  className={`absolute top-0 left-0 h-[2px] bg-white transition-all duration-500 ease-out ${
                    isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                />

                {/* Top Number and Arrow */}
                <div className="flex items-center justify-between mb-16">
                  <span
                    className={`font-mono text-sm tracking-widest transition-transform duration-300 ${
                      isHovered ? '-translate-y-1 text-white' : 'text-zinc-500'
                    }`}
                  >
                    {item.num}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                      isHovered ? 'bg-white text-black border-white rotate-45' : 'text-zinc-400'
                    }`}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Title */}
                <div className="space-y-4 mb-8">
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight transition-transform duration-300 ${
                      isHovered ? 'translate-x-1 text-white' : 'text-zinc-200'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base text-zinc-300 font-light leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                {/* Expanded Description & Deliverables */}
                <div
                  className={`space-y-6 pt-6 border-t border-white/[0.08] transition-all duration-500 ${
                    isHovered ? 'opacity-100 max-h-96' : 'opacity-60 max-h-48'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {item.detail}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.deliverables.map((deliv) => (
                      <span
                        key={deliv}
                        className="text-[10px] font-mono tracking-wider px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] text-zinc-300 uppercase"
                      >
                        {deliv}
                      </span>
                    ))}
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

export default WhatWeBuildSection;
