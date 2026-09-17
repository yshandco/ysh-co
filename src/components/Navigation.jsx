import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { YSHMonogram, YSHWordmark } from './YSHMonogram';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navigation = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'UTC',
        }) + ' UTC'
      );
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navItems = [
    { label: 'WORK', href: '#what-we-build' },
    { label: 'ABOUT', href: '#about' },
    { label: 'VENTURES', href: '#currently-building' },
    { label: 'CONTACT', href: '#contact', onClick: onOpenContact },
  ];

  const handleNavClick = (e, item) => {
    if (item.onClick) {
      e.preventDefault();
      item.onClick();
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-black/85 backdrop-blur-md border-b border-white/[0.08]'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Group */}
          <a
            href="#"
            className="group flex items-center gap-3.5 focus:outline-none"
            data-cursor="hover"
            aria-label="YSH&CO Home"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <YSHMonogram size={38} />
            </div>
            <div className="hidden sm:block">
              <YSHWordmark />
            </div>
          </a>

          {/* Center Info: Live Studio Telemetry (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 text-[11px] font-mono tracking-wider text-zinc-500 border-x border-white/[0.06] px-6 py-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            <span className="text-zinc-400">HOLDING ARCHITECTURE</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-300 font-mono">{currentTime || '12:00:00 UTC'}</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] text-white">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="relative py-1 text-zinc-300 hover:text-white transition-colors duration-200 group focus:outline-none"
                data-cursor="hover"
              >
                <span>{item.label}</span>
                {/* Thin underline expanding left to right */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}

            <button
              onClick={onOpenContact}
              className="ml-2 px-3.5 py-1.5 text-[10px] tracking-widest uppercase border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
              data-cursor="hover"
            >
              INQUIRE
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-300 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="text-[10px] font-mono tracking-widest">{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-between px-8 pt-28 pb-12 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                INDEX NAVIGATION
              </span>
              <div className="flex flex-col space-y-4">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.3 }}
                    className="text-3xl font-light tracking-tighter text-zinc-200 hover:text-white flex items-center justify-between py-2 border-b border-white/[0.08]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={18} className="text-zinc-500" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/[0.08] flex flex-col gap-4 text-xs font-mono text-zinc-500">
              <div className="flex justify-between items-center">
                <span>YSH&CO · HOLDING CO.</span>
                <span>{currentTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[11px] text-zinc-400 font-sans">
                  Ideas. Products. Brands.
                </p>
                <a
                  href="https://www.instagram.com/yshandco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 font-mono uppercase"
                >
                  <span>INSTAGRAM</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
