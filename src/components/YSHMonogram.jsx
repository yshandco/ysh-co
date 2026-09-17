import React from 'react';
import yshOfficialLogo from '../assets/ysh-logo.png';

/**
 * Official YSH Monogram & Corporate Wordmark
 * Uses the authentic official brand ligature mark supplied by YSH&CO.
 * Treatment: White logo on black background, clean, no shadows, no glow, no 3D effects.
 */
export const YSHMonogram = ({ size = 34, className = "" }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center shrink-0 overflow-hidden select-none ${className}`}
      aria-label="YSH Official Monogram"
    >
      <img
        src={yshOfficialLogo}
        alt="YSH Official Monogram"
        className="w-full h-full object-contain scale-[1.3] transition-transform duration-300"
        loading="eager"
      />
    </div>
  );
};

export const YSHWordmark = ({ showTagline = false, className = "" }) => {
  return (
    <div className={`flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-2">
        <span className="font-sans font-bold text-base tracking-tighter text-white uppercase">
          YSH&CO
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
      </div>
      {showTagline && (
        <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono -mt-0.5">
          Holding Co.
        </span>
      )}
    </div>
  );
};

export default YSHMonogram;
