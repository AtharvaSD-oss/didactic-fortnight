import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAreSection from './components/WhoWeAreSection';
import KartsSection from './components/KartsSection';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import SearchModal from './components/SearchModal';
import WhatsAppButton from './components/WhatsAppButton';

import { 
  TrackSection,
  PricingSection,
  FounderHighlightSection
} from './components/Sections';

// Lazy Loaded Page Components for Code-Splitting
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const TrackPage = lazy(() => import('./pages/TrackPage'));
const RacePage = lazy(() => import('./pages/RacePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const PageFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center text-[#F47C20] font-mono text-sm font-bold tracking-widest uppercase">
    <div className="flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-[#F47C20] animate-ping" />
      LOADING KARTOMANIA TELEMETRY...
    </div>
  </div>
);

const HomePage = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [lenisInstance, setLenisInstance] = useState(null);

  const handleOpenBooking = () => {
    window.open("https://web.racefacer.com/kiosk/kartomaniaentertainlandmall", "_blank", "noopener,noreferrer");
  };

  // Initialize Lenis Smooth Scroll Engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      wheelMultiplier: 1.25,
      smoothWheel: true,
    });

    setLenisInstance(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (lenisInstance) {
        lenisInstance.scrollTo(element, { offset: -80, duration: 1.2 });
      } else {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#F47C20] selection:text-white relative overflow-x-hidden">
      {/* 1. Top Racing Progress Bar */}
      <ScrollProgress />

      {/* 2. System Telemetry Preloader */}
      <LoadingScreen />

      {/* 3. Interactive Precision Custom Cursor */}
      <Cursor />

      {/* Glassmorphism Single-Page Navbar */}
      <Navbar
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Single-Page Sections Container */}
      <main className="relative z-10">
        {/* 01 — HERO */}
        <Hero 
          onOpenBooking={handleOpenBooking} 
          onNavigate={handleNavigate} 
        />

        {/* 02 — KARTOMANIA EXPERIENCE */}
        <WhoWeAreSection onOpenBooking={handleOpenBooking} />

        {/* 03 — TRACK & KARTS */}
        <TrackSection onOpenBooking={handleOpenBooking} />
        <KartsSection />

        {/* 04 — RACE / PACKAGES PREVIEW & FOUNDER PEDIGREE */}
        <PricingSection onOpenBooking={handleOpenBooking} />
        <FounderHighlightSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Floating Action WhatsApp Button (Bottom Right) */}
      <WhatsAppButton />
    </div>
  );
};

export function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/race" element={<RacePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
