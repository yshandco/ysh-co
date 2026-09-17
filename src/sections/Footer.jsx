import React from 'react';
import { YSHMonogram, YSHWordmark } from '../components/YSHMonogram';
import { ArrowUp } from 'lucide-react';

export const Footer = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/[0.08] select-none">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <YSHMonogram size={42} />
              <YSHWordmark showTagline={true} />
            </div>

            <div className="space-y-2 max-w-sm">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
                WE BUILD WHAT'S NEXT.
              </p>
              <p className="text-sm font-light text-zinc-400">
                Ideas. Products. Brands.
              </p>
            </div>

            <p className="text-xs text-zinc-500 font-mono max-w-xs leading-relaxed">
              YSH&CO is an independent parent entity building enduring technological products, high-outcome services, and contemporary consumer brands.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-4">
              INDEX DIRECTORY
            </span>
            <ul className="space-y-3 text-xs font-mono tracking-wider">
              <li>
                <a
                  href="#what-we-build"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                  data-cursor="hover"
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                  data-cursor="hover"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#currently-building"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                  data-cursor="hover"
                >
                  VENTURES
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-zinc-400 hover:text-white transition-colors duration-200 text-left"
                  data-cursor="hover"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-4">
                TRANSMISSION CHANNELS
              </span>
              <ul className="space-y-3 text-xs font-mono tracking-wider">
                <li>
                  <a
                    href="https://www.instagram.com/yshandco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
                    data-cursor="hover"
                  >
                    <span>Instagram</span>
                    <span className="text-zinc-600">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
                    data-cursor="hover"
                  >
                    <span>LinkedIn</span>
                    <span className="text-zinc-600">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 hover:text-white pt-6 border-t border-white/[0.06] group w-fit focus:outline-none"
              data-cursor="hover"
            >
              <span>RETURN TO APEX</span>
              <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Operational Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] font-mono text-zinc-500">
          <div>
            <span>© 2026 YSH&CO. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              SYSTEM CORE OPERATIONAL
            </span>
            <span className="text-zinc-700">|</span>
            <span>BUILD REV 2.6.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
