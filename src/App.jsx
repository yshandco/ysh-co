import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import ContactModal from './components/ContactModal';

import HeroSection from './sections/HeroSection';
import IntroSection from './sections/IntroSection';
import WhatWeBuildSection from './sections/WhatWeBuildSection';
import SignatureMotion from './sections/SignatureMotion';
import PhilosophySection from './sections/PhilosophySection';
import CurrentBuildSection from './sections/CurrentBuildSection';
import AboutSection from './sections/AboutSection';
import PrinciplesSection from './sections/PrinciplesSection';
import StatementSection from './sections/StatementSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => setContactOpen(true);
  const handleCloseContact = () => setContactOpen(false);

  const handleExploreClick = () => {
    const el = document.getElementById('intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative font-sans">
      {/* Luxury Film Grain Texture */}
      <div className="film-grain" />

      {/* Smooth Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Primary Sticky / Blur Navigation Header */}
      <Navigation onOpenContact={handleOpenContact} />

      {/* Main Corporate Journey */}
      <main id="main-content">
        <HeroSection
          onExploreClick={handleExploreClick}
          onTalkClick={handleOpenContact}
        />
        <IntroSection />
        <WhatWeBuildSection />
        <SignatureMotion />
        <PhilosophySection />
        <CurrentBuildSection onTalkClick={handleOpenContact} />
        <AboutSection />
        <PrinciplesSection />
        <StatementSection />
        <ContactSection onTalkClick={handleOpenContact} />
      </main>

      {/* Corporate Minimal Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Communication Dispatch Modal */}
      <ContactModal isOpen={contactOpen} onClose={handleCloseContact} />
    </div>
  );
}

export default App;
