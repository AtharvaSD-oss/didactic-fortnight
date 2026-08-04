import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

// Components & Pages Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import BookingModal from './components/BookingModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LeapFrogPage from './pages/LeapFrogPage';
import WhatsNewPage from './pages/WhatsNewPage';
import PricingPage from './pages/PricingPage';
import GamePage from './pages/GamePage';
import GalleryPage from './pages/GalleryPage';
import FounderPage from './pages/FounderPage';
import ContactPage from './pages/ContactPage';

export function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize Lenis Smooth Scroll Engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      wheelMultiplier: 1.25,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-white selection:bg-[#FF4500] selection:text-white relative overflow-x-hidden">
      {/* Top Racing Scroll Progress Line */}
      <ScrollProgress />

      {/* System Telemetry Preloader */}
      <Loader />

      {/* Precision Custom Cursor */}
      <Cursor />

      {/* Glassmorphism Multi-page Navbar */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Multi-Page Routes Container with Framer Motion Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 min-h-[80vh]"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage onOpenBooking={() => setBookingOpen(true)} onNavigate={handleNavigate} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={() => setBookingOpen(true)} />} />
            <Route path="/leap-frog" element={<LeapFrogPage onOpenBooking={() => setBookingOpen(true)} />} />
            <Route path="/whats-new" element={<WhatsNewPage onOpenBooking={() => setBookingOpen(true)} />} />
            <Route path="/pricing" element={<PricingPage onOpenBooking={() => setBookingOpen(true)} />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/contact" element={<ContactPage onOpenBooking={() => setBookingOpen(true)} />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}

export default App;
