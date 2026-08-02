import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { 
  TrackSection, 
  KartsSection, 
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
import { Flame, Phone, MapPin, Zap } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  // Active section intersection observer
  useEffect(() => {
    const sections = ['home', 'track', 'karts', 'leap-frog', 'whats-new', 'pricing', 'leaderboard', 'gallery', 'founder', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

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
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-white selection:bg-[#FF4500] selection:text-white relative overflow-x-hidden">
      {/* High-Octane Fullsite Ambient Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Background Image */}
        <img 
          src="/bg-kart.jpg" 
          alt="Karting Background" 
          className="w-full h-full object-cover object-center opacity-25 scale-105 filter brightness-90 contrast-125 saturate-120" 
        />
        {/* Dark Radial Vignette & Seamless Color Matching Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/75 to-[#07070a]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070a]/80 via-transparent to-[#07070a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#07070a_85%)]" />
        {/* Carbon Pattern Overlay */}
        <div className="absolute inset-0 bg-carbon opacity-40 mix-blend-overlay" />
      </div>

      {/* Top Futuristic Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenBooking={() => setBookingOpen(true)} 
          onNavigate={handleNavigate} 
        />
        <TrackSection onOpenBooking={() => setBookingOpen(true)} />
        <KartsSection />
        <LeapFrogSection onOpenBooking={() => setBookingOpen(true)} />
        <WhatsNewSection onOpenBooking={() => setBookingOpen(true)} />
        <PricingSection onOpenBooking={() => setBookingOpen(true)} />
        <LeaderboardSection />
        <GallerySection />
        <FounderSection />
        <ContactSection onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050508] py-12 px-4 text-center sm:text-left">
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
