import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAreSection from './components/WhoWeAreSection';
import TestimonialsSection from './components/TestimonialsSection';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import { 
  LeapFrogSection,
  WhatsNewSection,
  PricingSection, 
  LeaderboardSection, 
  GallerySection, 
  FounderSection,
  ContactSection 
} from './components/Sections';
import SearchModal from './components/SearchModal';
import BookingModal from './components/BookingModal';
import { InstagramIcon } from './components/Icons';
import { Flame, Phone } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lenisInstance, setLenisInstance] = useState(null);

  // Initialize Lenis Smooth Scroll Engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Buttery smooth F1 curve
      touchMultiplier: 2,
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
    const sections = ['home', 'who-we-are', 'leap-frog', 'whats-new', 'pricing', 'leaderboard', 'gallery', 'testimonials', 'founder', 'contact'];
    
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
    <div className="min-h-screen bg-[#07070a] text-white selection:bg-[#FF4500] selection:text-white relative overflow-x-hidden">
      {/* 1. System Telemetry Loading Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* 2. Interactive Precision Custom Cursor */}
      <CustomCursor />

      {/* 3. Top Glassmorphism Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* 4. Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenBooking={() => setBookingOpen(true)} 
          onNavigate={handleNavigate} 
        />
        <WhoWeAreSection onOpenBooking={() => setBookingOpen(true)} />
        <LeapFrogSection onOpenBooking={() => setBookingOpen(true)} />
        <WhatsNewSection onOpenBooking={() => setBookingOpen(true)} />
        <PricingSection onOpenBooking={() => setBookingOpen(true)} />
        <LeaderboardSection />
        <GallerySection />
        <TestimonialsSection />
        <FounderSection />
        <ContactSection onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* 5. Footer */}
      <footer className="border-t border-white/10 bg-[#050508] py-12 px-4 text-center sm:text-left relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF4500] flex items-center justify-center shadow-[0_0_15px_#FF4500]">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white uppercase tracking-widest">KARTOMANIA</span>
              <span className="block text-[9px] font-mono text-gray-500 uppercase">F1 INDOOR CIRCUIT // INDIA</span>
            </div>
          </div>

          <div className="font-mono text-xs text-gray-400">
            © 2026 KARTOMANIA INDIA. INSPIRED BY F1 & HYPERCAR TELEMETRY.
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/kartomania.in" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-[#FF4500]/20 text-gray-300 hover:text-[#FF4500] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a 
              href="tel:+919876543210" 
              className="p-2 rounded-full bg-white/5 hover:bg-[#FF4500]/20 text-gray-300 hover:text-[#FF4500] transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

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
