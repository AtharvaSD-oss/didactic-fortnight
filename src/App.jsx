import React, { useState, useEffect } from 'react';
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
import ExperiencePage from './pages/ExperiencePage';
import TrackPage from './pages/TrackPage';
import RacePage from './pages/RacePage';

import { 
  TrackSection,
  WhatsNewSection,
  PricingSection, 
  ContactSection
} from './components/Sections';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');
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

  // Active section intersection observer
  useEffect(() => {
    const sections = [
      'home', 
      'who-we-are',
      'karts',
      'pricing', 
      'whats-new',
      'contact'
    ];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
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
        activeSection={activeSection}
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

        {/* 04 — RACE / PACKAGES PREVIEW */}
        <PricingSection onOpenBooking={handleOpenBooking} />
        <WhatsNewSection onOpenBooking={handleOpenBooking} />

        {/* 05 — FINAL BOOKING CTA */}
        <ContactSection onOpenBooking={handleOpenBooking} />
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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/track" element={<TrackPage />} />
      <Route path="/race" element={<RacePage />} />
    </Routes>
  );
}

export default App;
