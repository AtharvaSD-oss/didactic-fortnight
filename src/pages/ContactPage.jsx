import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import ScrollProgress from '../components/ScrollProgress';
import WhatsAppButton from '../components/WhatsAppButton';
import MagneticButton from '../components/MagneticButton';
import { MapPin, Phone, Mail, Clock, ChevronDown, Trophy, Navigation } from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../components/Icons';

export const ContactPage = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenBooking = () => {
    window.open("https://web.racefacer.com/kiosk/kartomaniaentertainlandmall", "_blank", "noopener,noreferrer");
  };

  const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9";

  const FAQS = [
    {
      question: "What are the age/height requirements?",
      answer: "Drivers for adult Sodi RT10 Pro 270cc karts must be at least 5ft (152cm) tall. Junior drivers for Cadet 160cc karts must be at least 4ft (122cm) tall."
    },
    {
      question: "How long is a race?",
      answer: "Each standard track karting session lasts 6 minutes of continuous track time. Multi-session bundles (e.g. 5 sessions = 30 minutes total) are also available."
    },
    {
      question: "Do I need previous experience?",
      answer: "Zero prior racing experience is needed! Our professional track marshals provide a mandatory safety and driving briefing before every grid launch."
    },
    {
      question: "What should I wear?",
      answer: "Flat closed-toe shoes (sneakers/sports shoes) are mandatory. DOT-certified full-face helmets, sanitary balaclavas, and neck braces are provided free at the paddock."
    },
    {
      question: "Can I book for groups?",
      answer: "Yes! We accommodate small friend groups (2–4 racers), birthday party Grand Prix events, and large corporate team leagues (5+ to 50+ drivers) with live leaderboard timing."
    },
    {
      question: "Do I need to book in advance?",
      answer: "Walk-ins are always welcome, but reserving online via our 1-tap RaceFacer kiosk guarantees your preferred track slot, especially during weekend peak hours."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#F47C20] selection:text-white relative overflow-x-hidden text-left">
      <ScrollProgress />
      <Cursor />

      {/* Navigation Header */}
      <Navbar
        onNavigate={() => {}}
        onOpenSearch={() => {}}
        onOpenBooking={handleOpenBooking}
      />

      <main className="relative z-10 pt-24 sm:pt-32">
        {/* ============================================================
            01 — HERO
        ============================================================ */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#F47C20]" /> // VENUE & NAVIGATION
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
              FIND THE <br />
              <span className="text-[#F47C20]">TRACK.</span>
            </h1>

            <p className="text-lg sm:text-2xl font-sans text-[#555555] font-medium leading-relaxed">
              Your next race is closer than you think.
            </p>
          </div>
        </section>

        {/* ============================================================
            02 — LOCATION & MAP
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-[2px] h-5 bg-[#F47C20]" />
                  <span className="text-[#F47C20] text-sm font-bold font-mono">02</span>
                  <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ LOCATION</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase">
                  ENTERTAINLAND MALL <span className="text-[#F47C20]">CIRCUIT</span>
                </h2>
              </div>

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#F47C20] hover:bg-[#E0670E] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md shrink-0"
              >
                <Navigation className="w-4 h-4" /> GET DIRECTIONS
              </a>
            </div>

            {/* Address Banner */}
            <div className="p-6 rounded-xl bg-[#F9F9F9] border border-[#E5E5E5] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#F47C20] font-bold uppercase tracking-widest block">OFFICIAL ADDRESS</span>
                <div className="text-lg font-sans font-bold text-[#0A0A0A]">
                  Entertainland Mall, Sector 83, Manesar, Gurugram, Haryana 122004
                </div>
              </div>
              <span className="font-mono text-xs text-[#666666] font-bold uppercase">
                720M OUTDOOR ASPHALT TRACK
              </span>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#E5E5E5] shadow-md">
              <iframe
                title="Kartomania Arena Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.963198083884!2d76.96024987625126!3d28.36081497581451!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d5267b14073%3A0xb36cb76e274b7027!2sKartomania!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 opacity-95 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — CONTACT
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">03</span>
                <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ CONTACT & HOURS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                COMMUNICATION <span className="text-[#F47C20]">CHANNELS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
              {/* Phone */}
              <div className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-[#F47C20]">
                  <Phone className="w-5 h-5" />
                  <span className="text-xs uppercase font-bold tracking-wider">// PHONE</span>
                </div>
                <div className="space-y-1 font-sans text-sm">
                  <a href="tel:+919717548897" className="block hover:text-[#F47C20] transition-colors font-bold text-[#0A0A0A]">+91 97175 48897</a>
                  <a href="tel:+919560492876" className="block hover:text-[#F47C20] transition-colors font-bold text-[#0A0A0A]">+91 95604 92876</a>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-[#F47C20]">
                  <Mail className="w-5 h-5" />
                  <span className="text-xs uppercase font-bold tracking-wider">// EMAIL</span>
                </div>
                <a href="mailto:kartomania.ggn@gmail.com" className="block hover:text-[#F47C20] transition-colors font-bold font-sans text-sm text-[#0A0A0A] break-all">
                  kartomania.ggn@gmail.com
                </a>
              </div>

              {/* Opening Hours */}
              <div className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-[#F47C20]">
                  <Clock className="w-5 h-5" />
                  <span className="text-xs uppercase font-bold tracking-wider">// OPENING HOURS</span>
                </div>
                <div className="font-sans text-xs space-y-1 text-[#555555]">
                  <div>Mon – Fri: 2:00 PM – 11:00 PM</div>
                  <div>Sat – Sun: 1:00 PM – 11:00 PM</div>
                  <div className="text-[#F47C20] font-bold font-mono">// OPEN 7 DAYS A WEEK</div>
                </div>
              </div>

              {/* Social Media */}
              <div className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-[#F47C20]">
                  <Trophy className="w-5 h-5" />
                  <span className="text-xs uppercase font-bold tracking-wider">// SOCIAL MEDIA</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/kartomaniacsggn/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white border border-[#E5E5E5] hover:bg-[#F47C20] hover:text-white text-[#0A0A0A] transition-colors shadow-xs"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white border border-[#E5E5E5] hover:bg-[#F47C20] hover:text-white text-[#0A0A0A] transition-colors shadow-xs"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/919717548897?text=Hi%20Kartomania!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20racing%20session."
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white border border-[#E5E5E5] hover:bg-[#25D366] hover:text-white text-[#0A0A0A] transition-colors shadow-xs"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            04 — FAQ
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-[2px] h-5 bg-[#F47C20]" />
                  <span className="text-[#F47C20] text-sm font-bold font-mono">04</span>
                  <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ FAQ</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase">
                  FREQUENTLY ASKED <span className="text-[#F47C20]">QUESTIONS</span>
                </h2>
              </div>
            </div>

            {/* Compact Accordion */}
            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div key={idx} className="overflow-hidden rounded-xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-sm">
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg font-bold text-[#0A0A0A] uppercase hover:text-[#F47C20] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`p-1.5 rounded-full border transition-colors shrink-0 ${
                          isOpen ? 'bg-[#F47C20] border-[#F47C20] text-white shadow-sm' : 'bg-white border-[#E5E5E5] text-[#0A0A0A]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm font-sans text-[#555555] border-t border-[#EAEAEA] leading-relaxed text-left">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — FINAL CTA
        ============================================================ */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
              SEE YOU ON <span className="text-[#F47C20]">THE GRID.</span>
            </h2>
            <p className="text-base sm:text-xl font-sans text-[#555555]">
              Reserve your race session online now for instant 1-tap confirmation.
            </p>
            <div className="pt-4 flex justify-center">
              <MagneticButton onClick={handleOpenBooking} className="py-4 px-10 text-xs font-bold">
                BOOK YOUR RACE &rarr;
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
