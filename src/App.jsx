import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAreSection from './components/WhoWeAreSection';
import RacingTimeline from './components/RacingTimeline';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import BookingModal from './components/BookingModal';
import SearchModal from './components/SearchModal';

import { 
  LeapFrogSection,
  WhatsNewSection,
  PricingSection, 
  ContactSection,
  GameSection
} from './components/Sections';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [lenisInstance, setLenisInstance] = useState(null);

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
      'experience-timeline', 
      'leap-frog', 
      'whats-new', 
      'pricing', 
      'game', 
      'gallery', 
      'testimonials', 
      'founder', 
      'faq', 
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
    <div className="min-h-screen bg-[#07070a] text-white selection:bg-[#EE3124] selection:text-white relative overflow-x-hidden">
      {/* 1. Top Racing Progress Bar */}
      <ScrollProgress />

      {/* 2. System Telemetry Preloader */}
      <Loader />

      {/* 3. Interactive Precision Custom Cursor */}
      <Cursor />

      {/* 4. Glassmorphism Single-Page Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* 5. Main Single-Page Sections Container */}
      <main className="relative z-10">
        <Hero 
          onOpenBooking={() => setBookingOpen(true)} 
          onNavigate={handleNavigate} 
        />
        <WhoWeAreSection onOpenBooking={() => setBookingOpen(true)} />
        <RacingTimeline />
        <LeapFrogSection />
        <WhatsNewSection onOpenBooking={() => setBookingOpen(true)} />
        <PricingSection onOpenBooking={() => setBookingOpen(true)} />
        <GameSection />
        <Gallery />
        <Testimonials />
        <Timeline />
        <FAQSection />
        <ContactSection onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}

export default App;
