import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAreSection from './components/WhoWeAreSection';
import WhyKartomaniaSection from './components/WhyKartomaniaSection';
import RacingTimeline from './components/RacingTimeline';
import KartsSection from './components/KartsSection';
import GallerySection from './components/GallerySection';
import FounderSection from './components/FounderSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import SearchModal from './components/SearchModal';
import WhatsAppButton from './components/WhatsAppButton';

import { 
  TrackSection,
  LeapFrogSection,
  WhatsNewSection,
  PricingSection, 
  ContactSection
} from './components/Sections';

export function App() {
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
      'pricing', 
      'whats-new',
      'gallery',
      'founder',
      'why-kartomania',
      'testimonials', 
      'karts',
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
        {/* 1. HOME */}
        <Hero 
          onOpenBooking={handleOpenBooking} 
          onNavigate={handleNavigate} 
        />

        {/* 2. ABOUT */}
        <WhoWeAreSection onOpenBooking={handleOpenBooking} />

        {/* 3. PRICING */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* 4. WHAT'S NEW */}
        <WhatsNewSection onOpenBooking={handleOpenBooking} />

        {/* 5. GALLERY */}
        <GallerySection />

        {/* 6. FOUNDER HERITAGE */}
        <FounderSection />

        {/* 7. EXPERIENCE */}
        <WhyKartomaniaSection />
        <RacingTimeline />

        {/* 8. REVIEW */}
        <TestimonialsSection />

        {/* 9. KART FLEET & TRACK */}
        <TrackSection onOpenBooking={handleOpenBooking} />
        <KartsSection />
        <LeapFrogSection />

        {/* 10. CONTACT & FAQ */}
        <FAQSection />
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
}

export default App;
