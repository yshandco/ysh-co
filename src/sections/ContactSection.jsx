import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

export const ContactSection = ({ onTalkClick }) => {
  const buttonRef = useRef(null);
  const [arrowPos, setArrowPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;
    setArrowPos({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setArrowPos({ x: 0, y: 0 });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#050505] text-white py-36 px-6 md:px-12 lg:px-16 border-b border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            07 / INITIATE DIALOGUE
          </span>
          <span className="w-12 h-[1px] bg-zinc-800" />
        </div>

        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tightest uppercase text-white leading-none mb-8">
            HAVE AN IDEA<br />
            <span className="text-zinc-500 hover:text-white transition-colors duration-500">
              WORTH BUILDING?
            </span>
          </h2>

          <p className="text-base sm:text-xl text-zinc-400 font-light max-w-xl mb-12 leading-relaxed">
            Whether you are a founder seeking a disciplined co-builder, an enterprise needing bespoke growth software, or a world-class engineer looking for long-term alignment.
          </p>

          {/* Interactive CTA with Magnetic Arrow */}
          <div className="flex flex-wrap items-center gap-6">
            <button
              ref={buttonRef}
              onClick={onTalkClick}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative inline-flex items-center gap-6 px-8 sm:px-12 py-5 sm:py-6 bg-white text-black font-bold text-sm sm:text-base tracking-widest uppercase hover:bg-zinc-200 transition-all duration-300 shadow-2xl focus:outline-none"
              data-cursor="hover"
            >
              <span>LET'S TALK</span>
              <motion.span
                animate={{ x: arrowPos.x, y: arrowPos.y }}
                transition={{ type: 'spring', damping: 15, stiffness: 250 }}
                className="inline-block text-xl"
              >
                →
              </motion.span>
            </button>

            <a
              href="mailto:hello@yshandco.com"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 hover:text-white py-3 px-4 border border-white/10 hover:border-white/40 transition-colors"
              data-cursor="hover"
            >
              <Mail size={14} />
              <span>DIRECT DISPATCH: HELLO@YSHANDCO.COM</span>
            </a>
          </div>
        </div>

        {/* Office & Coordinates Info */}
        <div className="mt-28 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs font-mono text-zinc-500">
          <div>
            <span className="text-[10px] uppercase text-zinc-400 block mb-1">OPERATING DESK</span>
            <span>Independent Ventures & Software Studio</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-zinc-400 block mb-1">TIMEZONE ALLIANCE</span>
            <span>Global Remote Node · UTC Alignment</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-zinc-400 block mb-1">RESPONSE PROTOCOL</span>
            <span>Direct Review within 24 Business Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
