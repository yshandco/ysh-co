import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const SignatureMotion = () => {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 'ideas',
      label: 'IDEAS',
      sub: 'Problem Discovery',
      x: 15,
      y: 25,
      role: 'Uncovering latent systemic friction and unbundling opportunities.',
    },
    {
      id: 'connections',
      label: 'CONNECTIONS',
      sub: 'Network Topology',
      x: 38,
      y: 65,
      role: 'Interlocking capital, technological modules, and human expertise.',
    },
    {
      id: 'products',
      label: 'PRODUCTS',
      sub: 'Engineered Solutions',
      x: 65,
      y: 35,
      role: 'Forging reliable software and workflows that solve verified demands.',
    },
    {
      id: 'brands',
      label: 'BRANDS',
      sub: 'Enduring Moats',
      x: 85,
      y: 75,
      role: 'Cultivating enduring cultural presence, customer trust, and global equity.',
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-28 px-6 md:px-12 lg:px-16 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                SIGNATURE MATRIX
              </span>
              <span className="w-12 h-[1px] bg-zinc-800" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tightest uppercase text-white">
              BUILDING THE NEXT
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
            Continuous synthesis: How solitary ideas systematically compound into sovereign brands.
          </p>
        </div>

        {/* Abstract Network Graph */}
        <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] bg-[#0c0c0c] border border-white/15 p-6 sm:p-12 overflow-hidden flex items-center justify-center">
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

          {/* SVG Animated Circuit Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Main connecting spine */}
            <path
              d="M 15% 25% L 38% 65% L 65% 35% L 85% 75%"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeDasharray="6 6"
              className="opacity-40"
            />

            {/* Secondary cross-linkages */}
            <path
              d="M 15% 25% Q 50% 15% 85% 75%"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.6"
              strokeOpacity="0.2"
            />
            <path
              d="M 38% 65% L 65% 35%"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
          </svg>

          {/* Interactive Nodes */}
          {nodes.map((node) => {
            const isHovered = activeNode === node.id;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                style={{
                  position: 'absolute',
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="z-10 cursor-pointer group"
                data-cursor="hover"
              >
                {/* Node Target Ring */}
                <div className="relative flex items-center justify-center">
                  <div
                    className={`w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center ${
                      isHovered
                        ? 'bg-white text-black border-white scale-125'
                        : 'bg-black text-white border-white/40 group-hover:border-white'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isHovered ? 'bg-black' : 'bg-white'
                      }`}
                    />
                  </div>

                  {/* Pulsing ring */}
                  <div
                    className={`absolute inset-0 rounded-full border border-white/40 -z-10 animate-ping opacity-25`}
                  />
                </div>

                {/* Node Label Box */}
                <div className="mt-3 text-center sm:text-left whitespace-nowrap">
                  <span className="block font-bold text-sm tracking-tight text-white group-hover:text-zinc-200">
                    {node.label}
                  </span>
                  <span className="block text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                    {node.sub}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Active Inspection Drawer at Bottom */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-8 sm:right-8 bg-black/90 backdrop-blur-md border border-white/15 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-20">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-mono text-zinc-400">
                {activeNode
                  ? nodes.find((n) => n.id === activeNode)?.role
                  : 'HOVER OVER ANY NODE IN THE TOPOLOGY TO INSPECT STRUCTURAL FUNCTION'}
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-600 uppercase">
              REVERSIBLE LATTICE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureMotion;
