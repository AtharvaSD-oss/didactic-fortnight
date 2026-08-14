import React, { useState, useEffect } from 'react';
import {
  Trophy,
  MapPin,
  Mail,
  Phone,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';
import MagneticButton from './MagneticButton';
import TrackCircuitVisual from './TrackCircuitVisual';

export const TrackSection = ({ onOpenBooking }) => (
  <section id="track" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-white text-[#111111]">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-14">
      
      {/* Left Spec & Narrative */}
      <div className="space-y-6 lg:w-5/12 text-left">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-[2px] h-5 bg-[#F47C20]" />
          <span className="text-[#F47C20] text-sm font-bold font-mono">07</span>
          <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ KART FLEET & TRACK</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-[#F47C20]" /> // CIRCUIT TELEMETRY
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#0A0A0A] leading-tight">
          THE MONACO OF <br />
          <span className="text-[#F47C20]">OUTDOOR KARTING</span>
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm font-sans leading-relaxed">
          Designed by championship racing engineers. Features a full 720-meter outdoor asphalt circuit with high-banked hairpin apexes, technical chicanes, and high-speed overtaking straights.
        </p>

        {/* Large Statistics: 01, 02, 03, 04 in Orange */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl text-left space-y-1 transition-colors group shadow-sm">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase tracking-widest block font-bold">01 // TRACK LENGTH</span>
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">720 METERS</div>
            <span className="text-[11px] font-sans text-[#666666]">Full outdoor asphalt circuit</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl text-left space-y-1 transition-colors group shadow-sm">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase tracking-widest block font-bold">02 // CORNERS</span>
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">14 APEXES</div>
            <span className="text-[11px] font-sans text-[#666666]">High-G tactical chicanes</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl text-left space-y-1 transition-colors group shadow-sm">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase tracking-widest block font-bold">03 // SURFACE</span>
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">POLYMER GRIP</div>
            <span className="text-[11px] font-sans text-[#666666]">Formula asphalt compound</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl text-left space-y-1 transition-colors group shadow-sm">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase tracking-widest block font-bold">04 // SAFETY</span>
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">F1 BARRIERS</div>
            <span className="text-[11px] font-sans text-[#666666]">Pro absorption bumpers</span>
          </div>
        </div>

        <div className="pt-4">
          <MagneticButton
            onClick={onOpenBooking}
            className="py-3 px-8 text-xs font-bold"
          >
            BOOK YOUR SESSION &rarr;
          </MagneticButton>
        </div>
      </div>

      {/* Right Vector 2.5D Schematic Visual */}
      <div className="w-full lg:w-7/12">
        <TrackCircuitVisual />
      </div>

    </div>
  </section>
);

export const LeapFrogSection = () => {
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    {
      src: "/leap-frog/leap-frog-1.jpg",
      title: "Rotax Max Championship Chassis #71",
      tag: "COMPETITION KART",
      desc: "Championship-winning Rotax 2-stroke race kart in full competition trim at the JK Tyre National Championship."
    },
    {
      src: "/leap-frog/leap-frog-2.jpg",
      title: "JK Tyre National Karting Championship Grid",
      tag: "NATIONAL GRID",
      desc: "Mr. Rohit Khanna and the Leap Frog Racing squad lined up on the national championship starting grid."
    },
    {
      src: "/leap-frog/leap-frog-4.jpg",
      title: "Championship Race Action & Pit Telemetry",
      tag: "CIRCUIT ACTION",
      desc: "High-G apex cornering and live engine telemetry monitoring during national championship finals."
    }
  ];

  return (
    <section id="leap-frog" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-white text-[#0A0A0A] relative z-20 overflow-hidden">
      {/* Background subtle grid — matches other white sections */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#E5E5E5] pb-8 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 text-[#F47C20] font-mono text-xs uppercase tracking-widest font-bold shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-[#F47C20]" /> // MOTORSPORT HERITAGE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
              LEAP FROG <span className="text-[#F47C20]">RACING</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#666666] uppercase tracking-wider max-w-md">
            Kartomania's official professional motorsport division competing across Indian National Karting Championships.
          </p>
        </div>

        {/* Story Narrative & Racing Accolades */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
          <div className="lg:col-span-7 space-y-5 font-sans">
            <p className="text-[#0A0A0A] text-base sm:text-lg leading-relaxed font-medium">
              <strong className="text-[#F47C20]">Leap Frog Racing</strong> is Northern India's championship-winning motorsport academy, founded and directed by veteran racer <strong className="text-[#0A0A0A] font-bold">Mr. Rohit Khanna</strong>.
            </p>
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
              With multiple podium finishes across the JK Tyre National Karting Championship, Rotax Max Challenge India, and national formula racing championships, our racing academy trains aspiring drivers with real competition telemetry, professional telemetry debriefs, and chassis setup.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 font-mono">
              <div className="p-4 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] text-left space-y-1 transition-colors">
                <span className="text-[#F47C20] text-xs font-bold block">// EXPERIENCE</span>
                <div className="text-2xl font-display font-bold text-[#0A0A0A]">20+ YRS</div>
                <span className="text-[11px] text-[#888888]">Active Racing</span>
              </div>
              <div className="p-4 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] text-left space-y-1 transition-colors">
                <span className="text-[#F47C20] text-xs font-bold block">// PODIUMS</span>
                <div className="text-2xl font-display font-bold text-[#0A0A0A]">50+ WINS</div>
                <span className="text-[11px] text-[#888888]">National Trophies</span>
              </div>
              <div className="p-4 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] text-left space-y-1 col-span-2 sm:col-span-1 transition-colors">
                <span className="text-[#F47C20] text-xs font-bold block">// ACADEMY</span>
                <div className="text-2xl font-display font-bold text-[#0A0A0A]">PRO TIER</div>
                <span className="text-[11px] text-[#888888]">Driver Coaching</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#E5E5E5] hover:border-[#F47C20] transition-colors duration-500 shadow-md group">
              <img
                src="/leap-frog/leap-frog-4.jpg"
                alt="Leap Frog Racing Competition Action"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <span className="text-[#F47C20] font-bold uppercase">// OFFICIAL RACING ACADEMY</span>
                <span className="text-white bg-black/80 px-2 py-0.5 rounded-sm font-semibold">JK TYRE NATIONALS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real Competition Photography Gallery Grid */}
        <div className="space-y-4 text-left">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#F47C20] uppercase tracking-wider">
              // AUTHENTIC NATIONAL CHAMPIONSHIP PHOTOGRAPHY
            </span>
            <span className="text-[10px] font-mono text-[#888888] uppercase">
              CLICK IMAGE TO EXPAND
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(item)}
                className="group relative rounded-xl overflow-hidden bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-sm bg-[#F47C20] text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <h4 className="text-sm font-display font-bold text-white uppercase tracking-wide group-hover:text-[#F47C20] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal for Leap Frog Gallery */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white border-2 border-[#F47C20] rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#0A0A0A] hover:text-[#F47C20] transition-colors cursor-pointer"
              >
                ✕
              </button>
              <img src={activeImage.src} alt={activeImage.title} className="w-full max-h-[75vh] object-contain bg-black" />
              <div className="p-6 bg-white border-t border-[#E5E5E5] flex items-center justify-between text-[#0A0A0A] text-left">
                <div>
                  <span className="text-[10px] font-mono text-[#F47C20] uppercase font-bold">{activeImage.tag}</span>
                  <h4 className="text-xl font-display font-bold text-[#0A0A0A] uppercase">{activeImage.title}</h4>
                  <p className="text-xs font-mono text-[#666666] mt-1">{activeImage.desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export const WhatsNewSection = () => {
  const [activePromoIdx, setActivePromoIdx] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const allPromos = [
    {
      id: 0,
      title: "WEEKLY MEGA RACING OFFERS",
      image: "/whats-new/weekly-offers.jpg",
      tag: "WEEKLY CAMPAIGN",
      badge: "FEATURED DEALS",
      dayName: "ALL WEEKDAYS",
      headline: "MONDAY BOGO • WEDNESDAY HAPPY HOUR • FRIDAY FRENZY",
      desc: "Unlock maximum track time with Kartomania's official weekday promotions. Valid across our 720-meter GP arena.",
      price: "STARTING ₹500",
      saveHighlight: "SAVE UP TO 50%",
      perks: [
        "Monday BOGO: Buy 1 session & get 2nd at 50% Off",
        "Wednesday Happy Hour: Flat ₹500 per race session",
        "Friday Frenzy: Buy 2 sessions & 3rd is 100% FREE",
        "DOT certified helmet, suit & telemetry included"
      ]
    },
    {
      id: 1,
      title: "MONDAY BONANZA",
      image: "/whats-new/monday-bonanza.jpg",
      tag: "WEEKDAY DEALS",
      badge: "50% OFF",
      dayName: "EVERY MONDAY",
      headline: "BUY 1 SESSION, GET 2ND AT 50% OFF",
      desc: "Kick off your week with double track time. Race your first heat and unlock your second session at half price!",
      price: "BOGO 50% OFF",
      saveHighlight: "SAVE 50% ON 2ND RACE",
      perks: [
        "Valid every Monday across all kart fleet categories",
        "Includes full 6-minute sprint on the 720M outdoor circuit",
        "Millisecond telemetry lap time printout included",
        "Shareable with a racing buddy on the same staging grid"
      ]
    },
    {
      id: 2,
      title: "HAPPY HOURS WEDNESDAY",
      image: "/whats-new/happy-hour-wednesday.jpg",
      tag: "HAPPY HOUR",
      badge: "₹500 SPECIAL",
      dayName: "EVERY WEDNESDAY",
      headline: "MIDWEEK SPEED SPRINT AT FLAT ₹500",
      desc: "Kart your heart out! Buy an authentic racing session at an unbeatable flat ₹500/- only on Wednesdays.",
      price: "₹500 FLAT",
      saveHighlight: "FLAT ₹500 ENTRY",
      perks: [
        "Unbeatable ₹500 flat entry rate on adult & junior karts",
        "Valid all day from 2:00 PM to 11:00 PM every Wednesday",
        "Experience 14 technical apexes & high-speed straights",
        "Mandatory safety briefing & certified race marshals"
      ]
    },
    {
      id: 3,
      title: "FRIDAY FRENZY",
      image: "/whats-new/friday-frenzy.jpg",
      tag: "WEEKEND PREVIEW",
      badge: "BUY 2 GET 1 FREE",
      dayName: "EVERY FRIDAY",
      headline: "BUY 2 SESSIONS & 3RD SESSION IS FREE!",
      desc: "Start, Kart, Repeat! Kickstart your weekend racing adrenaline. Buy 2 sessions and get your 3rd session 100% Free.",
      price: "3RD SESSION FREE",
      saveHighlight: "FREE 3RD SPRINT RUN",
      perks: [
        "Buy 2 sessions and get your 3rd session completely free",
        "Ideal for trio groups or drivers targeting fastest lap records",
        "Free live leaderboard tracking & championship telemetry",
        "Full access to the 720-meter polymer asphalt track"
      ]
    }
  ];



  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePromoIdx === null) return;
      if (e.key === 'Escape') setActivePromoIdx(null);
      if (e.key === 'ArrowRight') {
        setActivePromoIdx((prev) => (prev + 1) % allPromos.length);
      }
      if (e.key === 'ArrowLeft') {
        setActivePromoIdx((prev) => (prev - 1 + allPromos.length) % allPromos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePromoIdx, allPromos.length]);

  return (
    <section id="whats-new" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-[#F9F9F9] text-[#111111] relative z-20">
      <div className="space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E5E5] pb-8 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">04</span>
              <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ WHAT'S NEW</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F47C20]" /> // EXCLUSIVE TRACK OFFERS & VALUE BUNDLES
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
              WHAT'S <span className="text-[#F47C20]">NEW</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#666666] max-w-xl">
              Daily bonanzas, happy hour sprints, and multi-session value packages designed for maximum track velocity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white border border-[#E5E5E5] text-[#0A0A0A] font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              ★ 100% INCLUSIVE OF ALL TAXES
            </span>
          </div>
        </div>

        {/* Category Switcher Tabs in 60/30/10 styling */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] pb-4">
          <div className="inline-flex items-center p-1 rounded-lg bg-white border border-[#E5E5E5] shadow-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#F47C20] text-white shadow-sm'
                  : 'text-[#666666] hover:text-[#0A0A0A] bg-transparent'
              }`}
            >
              ALL SPECIALS
            </button>
            <button
              onClick={() => setActiveFilter('daily')}
              className={`px-4 py-2 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'daily'
                  ? 'bg-[#F47C20] text-white shadow-sm'
                  : 'text-[#666666] hover:text-[#0A0A0A] bg-transparent'
              }`}
            >
              DAILY BONANZAS (3)
            </button>
            <button
              onClick={() => setActiveFilter('bundles')}
              className={`px-4 py-2 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'bundles'
                  ? 'bg-[#F47C20] text-white shadow-sm'
                  : 'text-[#666666] hover:text-[#0A0A0A] bg-transparent'
              }`}
            >
              BUNDLE PASSES (3)
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#666666]">
            <Clock className="w-3.5 h-3.5 text-[#F47C20]" />
            <span>Open All 7 Days &bull; 2:00 PM – 11:00 PM</span>
          </div>
        </div>



        {/* 2. Three Main Daily Offer Cards (Monday, Wednesday, Friday) */}
        {(activeFilter === 'all' || activeFilter === 'daily') && (
          <div className="space-y-4 text-left">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#0A0A0A] uppercase tracking-wider">
                // DAILY RACE BONANZAS (CLICK POSTER TO EXPAND)
              </span>
              <span className="text-[10px] font-mono text-[#888888] uppercase">
                VALID EVERY WEEK
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {allPromos.slice(1).map((offer, idx) => (
                <div
                  key={offer.id}
                  className="rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between group"
                >
                  {/* Poster Image Frame */}
                  <div
                    onClick={() => setActivePromoIdx(idx + 1)}
                    className="relative aspect-[4/3] bg-black overflow-hidden cursor-pointer"
                  >
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-sm bg-[#0A0A0A] text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
                        {offer.dayName}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-sm bg-[#F47C20] text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
                        {offer.badge}
                      </span>
                    </div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-[10px]">
                      <span className="bg-black/80 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        {offer.tag}
                      </span>
                      <span className="text-[#B8B8B8] font-bold">
                        ZOOM POSTER 🔍
                      </span>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight group-hover:text-[#F47C20] transition-colors">
                          {offer.title}
                        </h4>
                      </div>

                      <div className="text-xs font-mono font-bold text-[#F47C20] uppercase">
                        {offer.headline}
                      </div>

                      <p className="text-xs font-sans text-[#666666] leading-relaxed">
                        {offer.desc}
                      </p>

                      {/* Perk Inclusions */}
                      <div className="pt-3 space-y-1.5 border-t border-[#F0F0F0]">
                        {offer.perks.map((perk, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs font-sans text-[#444444]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F47C20] shrink-0 mt-0.5" />
                            <span className="leading-snug">{perk}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Pricing & Booking Action */}
                    <div className="pt-4 flex items-center justify-between border-t border-[#EAEAEA] gap-3">
                      <div>
                        <span className="text-[9px] font-mono text-[#888888] block uppercase">SPECIAL RATE</span>
                        <div className="text-xl font-display font-bold text-[#0A0A0A]">{offer.price}</div>
                      </div>
                      <MagneticButton
                        href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                        className="py-2.5 px-5 text-xs font-bold"
                      >
                        BOOK DEAL &rarr;
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}



        {/* 4. Track Transparency & Racer Assurance 4-Pillar Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono">
          <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-1.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#F47C20]" />
            <div className="text-xs font-bold text-[#0A0A0A] uppercase">ALL TAXES INCLUDED</div>
            <p className="text-[11px] font-sans text-[#666666]">100% GST included in all listed rates. Zero hidden checkout fees.</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-1.5 shadow-sm">
            <Trophy className="w-4 h-4 text-[#F47C20]" />
            <div className="text-xs font-bold text-[#0A0A0A] uppercase">SAFETY GEAR PROVIDED</div>
            <p className="text-[11px] font-sans text-[#666666]">DOT-certified helmets, sanitary balaclavas, and rib protectors free.</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-1.5 shadow-sm">
            <Zap className="w-4 h-4 text-[#F47C20]" />
            <div className="text-xs font-bold text-[#0A0A0A] uppercase">LIVE TELEMETRY</div>
            <p className="text-[11px] font-sans text-[#666666]">Millisecond lap timing & leaderboards by RaceFacer systems.</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-1.5 shadow-sm">
            <Clock className="w-4 h-4 text-[#F47C20]" />
            <div className="text-xs font-bold text-[#0A0A0A] uppercase">OPEN 7 DAYS A WEEK</div>
            <p className="text-[11px] font-sans text-[#666666]">Mon–Fri 2PM–11PM | Sat–Sun & Holidays 1PM–11PM.</p>
          </div>
        </div>

        {/* 5. Luxury Fullscreen Lightbox Modal with Next/Prev Carousel Controls */}
        {activePromoIdx !== null && (
          <div
            onClick={() => setActivePromoIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white border-2 border-[#F47C20] rounded-2xl overflow-hidden shadow-2xl my-auto text-left flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePromoIdx(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 text-white hover:text-[#F47C20] transition-colors cursor-pointer shadow-lg"
                aria-label="Close Lightbox"
              >
                ✕
              </button>

              {/* Prev / Next Carousel Arrow Controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePromoIdx((prev) => (prev - 1 + allPromos.length) % allPromos.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/75 text-white hover:bg-[#F47C20] transition-colors cursor-pointer shadow-xl hidden sm:flex items-center justify-center"
                aria-label="Previous Offer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePromoIdx((prev) => (prev + 1) % allPromos.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/75 text-white hover:bg-[#F47C20] transition-colors cursor-pointer shadow-xl hidden sm:flex items-center justify-center"
                aria-label="Next Offer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Main Image Stage */}
              <div className="w-full bg-[#0A0A0A] flex items-center justify-center max-h-[70vh] overflow-hidden">
                <img
                  src={allPromos[activePromoIdx].image}
                  alt={allPromos[activePromoIdx].title}
                  className="w-full max-h-[68vh] object-contain"
                />
              </div>

              {/* Modal Metadata & CTA Footer */}
              <div className="p-6 sm:p-8 bg-white border-t border-[#E5E5E5] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-white bg-[#F47C20] px-2.5 py-0.5 rounded-sm font-bold uppercase">
                      {allPromos[activePromoIdx].tag}
                    </span>
                    <span className="text-[10px] font-mono text-[#888888] uppercase font-semibold">
                      PROMO {activePromoIdx + 1} OF {allPromos.length} &bull; {allPromos[activePromoIdx].dayName}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-[#0A0A0A] uppercase">
                    {allPromos[activePromoIdx].title}
                  </h4>
                  <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed">
                    {allPromos[activePromoIdx].desc}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#EAEAEA]">
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-[#888888] block uppercase">OFFER PRICE</span>
                    <span className="text-xl font-display font-bold text-[#F47C20]">
                      {allPromos[activePromoIdx].price}
                    </span>
                  </div>
                  <MagneticButton
                    href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                    className="py-3 px-7 text-xs font-bold flex-1 md:flex-initial"
                  >
                    BOOK ONLINE &rarr;
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export const PricingSection = ({ onOpenBooking }) => {
  const weekdayCombos = [
    { package: '5 Sessions + 1 Bowling FREE', bonus: '1 Bowling FREE', price: '₹3,250' },
    { package: '10 Sessions + 1 Session + 1 Bowling FREE', bonus: '+1 Session & 1 Bowling FREE', price: '₹6,500' },
    { package: '15 Sessions + 2 Sessions + 2 Bowling FREE', bonus: '+2 Sessions & 2 Bowling FREE', price: '₹9,750' },
    { package: '20 Sessions + 3 Sessions + 3 Bowling FREE', bonus: '+3 Sessions & 3 Bowling FREE', price: '₹13,000' },
  ];

  const weekendCombos = [
    { package: '5 Sessions + 1 Bowling FREE', bonus: '1 Bowling FREE', price: '₹3,800' },
    { package: '10 Sessions + 1 Session + 1 Bowling FREE', bonus: '+1 Session & 1 Bowling FREE', price: '₹7,600' },
    { package: '15 Sessions + 2 Sessions + 2 Bowling FREE', bonus: '+2 Sessions & 2 Bowling FREE', price: '₹11,400' },
    { package: '20 Sessions + 3 Sessions + 3 Bowling FREE', bonus: '+3 Sessions & 3 Bowling FREE', price: '₹15,200' },
  ];

  const standardRates = [
    { sessions: '1 Session (6 Min)', weekday: '₹550', weekend: '₹650' },
    { sessions: '5 Sessions', weekday: '₹2,750', weekend: '₹3,250' },
    { sessions: '10 Sessions', weekday: '₹5,200', weekend: '₹6,175' },
    { sessions: '15 Sessions', weekday: '₹7,500', weekend: '₹8,850' },
    { sessions: '20 Sessions', weekday: '₹9,570', weekend: '₹11,400' },
  ];

  const [calcGroup, setCalcGroup] = useState('solo'); // 'solo' | 'friends' | 'corporate'
  const [calcDay, setCalcDay] = useState('weekday'); // 'weekday' | 'weekend'
  const [calcKart, setCalcKart] = useState('pro'); // 'pro' | 'twin' | 'cadet'

  // Calculate rate based on parameters
  const getCalculatedFare = () => {
    let basePerSession = 550;
    if (calcDay === 'weekend') basePerSession = 650;
    if (calcKart === 'twin') basePerSession = 1200;
    if (calcKart === 'cadet') basePerSession = 450;

    let racersCount = 1;
    if (calcGroup === 'friends') racersCount = 4;
    if (calcGroup === 'corporate') racersCount = 10;

    let _totalSessions = racersCount;
    let totalPrice = basePerSession * racersCount;
    let bonusText = "Includes 1 Free Bowling Coupon!";

    if (calcDay === 'weekday' && calcKart === 'pro') {
      bonusText = "🔥 WEEKDAY BOGO: Buy 1 Session, Get 1 FREE!";
    } else if (racersCount >= 4) {
      bonusText = "🎁 Includes +1 FREE Race Session & 2 FREE Bowling Coupons!";
    }

    return {
      racersCount,
      totalPrice,
      perRacerPrice: Math.round(totalPrice / racersCount),
      bonusText
    };
  };

  const calculated = getCalculatedFare();

  return (
    <section id="pricing" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-white text-[#111111]">
      <div className="space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-6 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">03</span>
              <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ PRICING & COMBOS</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 text-[#F47C20] font-mono text-[10px] font-bold uppercase tracking-wider mb-2 shadow-sm">
              ★ ALL PRICES INCLUSIVE OF ALL TAXES
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
              OFFICIAL <span className="text-[#F47C20]">PRICING & COMBOS</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#666666] max-w-md">
            Exclusive multi-session packages featuring complimentary free bowling and bonus race sessions.
          </p>
        </div>

        {/* ====================================================
            1. INSTANT FARE & PACKAGE CALCULATOR
        ==================================================== */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] text-white space-y-6 text-left border-2 border-[#F47C20]/40 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-sm bg-[#F47C20] text-white font-mono text-[10px] font-bold uppercase tracking-widest">
                ⚡ 1-CLICK CALCULATOR
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-white mt-1">
                ESTIMATE YOUR RACE FARE
              </h3>
            </div>
            <span className="text-xs font-mono text-[#AAAAAA]">
              Instant calculation &bull; Taxes included
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Group Size */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-[#F47C20] uppercase tracking-wider block">
                1. SELECT GROUP SIZE
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'solo', label: '1 Racer' },
                  { id: 'friends', label: '2–4 Friends' },
                  { id: 'corporate', label: '5+ Team' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setCalcGroup(item.id)}
                    className={`py-2.5 px-2 rounded-lg text-xs font-mono font-bold transition-all border ${
                      calcGroup === item.id
                        ? 'bg-[#F47C20] border-[#F47C20] text-white shadow-md'
                        : 'bg-white/5 border-white/15 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Race Day */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-[#F47C20] uppercase tracking-wider block">
                2. SELECT RACE DAY
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'weekday', label: 'Mon–Thu BOGO' },
                  { id: 'weekend', label: 'Fri–Sun Weekend' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setCalcDay(item.id)}
                    className={`py-2.5 px-2 rounded-lg text-xs font-mono font-bold transition-all border ${
                      calcDay === item.id
                        ? 'bg-[#F47C20] border-[#F47C20] text-white shadow-md'
                        : 'bg-white/5 border-white/15 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Kart Fleet */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-[#F47C20] uppercase tracking-wider block">
                3. SELECT KART MODEL
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'pro', label: '270cc Pro' },
                  { id: 'twin', label: 'Twin 500cc' },
                  { id: 'cadet', label: '160cc Junior' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setCalcKart(item.id)}
                    className={`py-2.5 px-2 rounded-lg text-xs font-mono font-bold transition-all border ${
                      calcKart === item.id
                        ? 'bg-[#F47C20] border-[#F47C20] text-white shadow-md'
                        : 'bg-white/5 border-white/15 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator Output Display Banner */}
          <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono text-[#F47C20] font-bold">
                {calculated.bonusText}
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                ESTIMATED FARE: <span className="text-[#F47C20]">₹{calculated.totalPrice.toLocaleString()}</span>
                <span className="text-xs font-mono text-[#AAAAAA] ml-2 font-normal">
                  (₹{calculated.perRacerPrice}/racer)
                </span>
              </div>
            </div>

            <MagneticButton
              onClick={onOpenBooking}
              className="py-3 px-6 text-xs font-bold whitespace-nowrap shadow-md"
            >
              BOOK THIS FARE NOW &rarr;
            </MagneticButton>
          </div>
        </div>

        {/* 1. Official Value Combo Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Weekday Combos */}
          <div className="bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl p-8 shadow-sm hover:shadow-md transition-all text-left">
            <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-5 border-b border-[#E5E5E5]">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono font-bold text-[#F47C20] uppercase tracking-widest block">SUPER VALUE DEALS</span>
                <h3 className="text-xl font-display font-bold text-[#0A0A0A] uppercase tracking-wider">WEEKDAY COMBOS</h3>
              </div>
              <span className="px-3 py-1 rounded-sm bg-white border border-[#E5E5E5] text-[#0A0A0A] font-mono text-xs font-bold uppercase whitespace-nowrap shadow-sm">
                MON – THU
              </span>
            </div>

            <div className="space-y-3.5">
              {weekdayCombos.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white border border-[#EAEAEA] hover:border-[#F47C20] flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors shadow-sm">
                  <div className="space-y-0.5">
                    <div className="text-xs sm:text-sm font-display font-bold text-[#0A0A0A] uppercase">{item.package}</div>
                    <span className="inline-block px-2 py-0.5 rounded-sm bg-[#FFF0E5] text-[#F47C20] font-mono text-[9px] font-bold uppercase tracking-wider">
                      🎁 {item.bonus}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-display font-bold text-[#0A0A0A]">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekend Combos */}
          <div className="bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl p-8 shadow-sm hover:shadow-md transition-all text-left">
            <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-5 border-b border-[#E5E5E5]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono font-bold text-[#F47C20] uppercase tracking-widest block">PEAK RACING & ENTERTAINMENT</span>
                  <span className="px-2 py-0.5 rounded-sm bg-[#F47C20] text-[8px] font-mono font-bold text-white uppercase tracking-wider">
                    ★ POPULAR
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-[#0A0A0A] uppercase tracking-wider">WEEKEND COMBOS</h3>
              </div>
              <span className="px-3 py-1 rounded-sm bg-white border border-[#E5E5E5] text-[#0A0A0A] font-mono text-xs font-bold uppercase whitespace-nowrap shadow-sm">
                FRI – SUN & HOLIDAYS
              </span>
            </div>

            <div className="space-y-3.5">
              {weekendCombos.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white border border-[#EAEAEA] hover:border-[#F47C20] flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors shadow-sm">
                  <div className="space-y-0.5">
                    <div className="text-xs sm:text-sm font-display font-bold text-[#0A0A0A] uppercase">{item.package}</div>
                    <span className="inline-block px-2 py-0.5 rounded-sm bg-[#FFF0E5] text-[#F47C20] font-mono text-[9px] font-bold uppercase tracking-wider">
                      🔥 {item.bonus}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-display font-bold text-[#0A0A0A]">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Standard Session Tariff Table */}
        <div className="bg-white border border-[#E5E5E5] rounded-xl p-8 shadow-sm text-left">
          <div className="pb-4 mb-5 border-b border-[#EAEAEA]">
            <h3 className="text-lg font-display font-bold text-[#0A0A0A] uppercase tracking-wider">
              STANDARD KARTING SESSIONS TARIFF
            </h3>
            <p className="text-xs font-mono text-[#666666]">Pure track time rates without bowling additions (Taxes Included).</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs sm:text-sm">
              <thead className="bg-[#F5F5F5] text-[#0A0A0A] uppercase text-[11px] border border-[#E5E5E5]">
                <tr>
                  <th className="py-3.5 px-5 rounded-l-sm font-bold">SESSIONS</th>
                  <th className="py-3.5 px-5 text-center font-bold">WEEKDAY (MON – THU)</th>
                  <th className="py-3.5 px-5 text-right rounded-r-sm font-bold">WEEKEND (FRI – SUN)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAEAEA] text-[#111111]">
                {standardRates.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FFF9F5] transition-colors">
                    <td className="py-3.5 px-5 font-bold text-[#0A0A0A]">{row.sessions}</td>
                    <td className="py-3.5 px-5 text-center font-display font-semibold text-[#555555]">{row.weekday}</td>
                    <td className="py-3.5 px-5 text-right font-display font-bold text-[#F47C20] text-sm sm:text-base">{row.weekend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Terms and Conditions Card */}
        <div className="bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl p-8 space-y-4 text-left shadow-sm">
          <h4 className="font-display font-bold text-xs sm:text-sm text-[#0A0A0A] uppercase tracking-wider">
            TERMS AND CONDITIONS
          </h4>
          <ul className="space-y-2 text-xs font-mono text-[#666666] list-disc list-inside">
            <li>Each karting session lasts 6 minutes on the track.</li>
            <li><strong>All prices are inclusive of all taxes.</strong></li>
            <li>All sessions and free bowling coupons must be consumed on the day they are bought.</li>
            <li>Packages are non-transferable and non-refundable.</li>
          </ul>

          <div className="pt-4 flex justify-center">
            <MagneticButton onClick={onOpenBooking} className="py-3.5 px-10 text-xs font-bold shadow-sm">
              BOOK YOUR RACE NOW 🏁
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9";

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-[#F9F9F9] text-[#111111]">
      <div className="space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E5E5] pb-6 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">08</span>
              <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ LOCATION & CONTACT</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs text-[#F47C20] uppercase tracking-widest font-bold mb-2 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#F47C20]" /> // ARENA LOCATION & NAVIGATION
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
              FIND THE <span className="text-[#F47C20]">ARENA</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#666666] max-w-sm">
            Located at Entertainland Mall, India's premier 720m outdoor pro karting circuit.
          </p>
        </div>

        {/* Location Info & CTAs */}
        <div className="bg-white border border-[#E5E5E5] rounded-xl p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-left font-mono">
            <div className="p-5 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-2">
              <div className="flex items-center gap-2 text-[#F47C20]">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">// ARENA ADDRESS</span>
              </div>
              <div className="text-xs text-[#111111] font-sans font-semibold leading-relaxed">
                Entertainland Mall, Sector 83, Manesar, Gurgaon.
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-2">
              <div className="flex items-center gap-2 text-[#F47C20]">
                <Clock className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">// OPEN ALL 7 DAYS</span>
              </div>
              <div className="text-xs text-[#111111] font-sans font-semibold space-y-0.5">
                <div>Mon – Fri: 2:00 PM – 11:00 PM</div>
                <div>Sat – Sun: 1:00 PM – 11:00 PM</div>
                <div className="text-[#F47C20] font-bold">// Open All Days</div>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-2">
              <div className="flex items-center gap-2 text-[#F47C20]">
                <Phone className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">// CALL US / HOTLINE</span>
              </div>
              <div className="text-xs text-[#111111] font-sans font-semibold space-y-0.5">
                <a href="tel:+919717548897" className="block hover:text-[#F47C20] transition-colors font-bold">+91 97175 48897</a>
                <a href="tel:+919560492876" className="block hover:text-[#F47C20] transition-colors font-bold">+91 95604 92876</a>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-2">
              <div className="flex items-center gap-2 text-[#F47C20]">
                <Mail className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">// EMAIL ENQUIRIES</span>
              </div>
              <div className="text-xs text-[#111111] font-sans font-semibold space-y-0.5">
                <a href="mailto:kartomania.ggn@gmail.com" className="block hover:text-[#F47C20] transition-colors font-bold break-all">
                  kartomania.ggn@gmail.com
                </a>
                <div className="text-[10px] text-[#888888] font-mono">Corporate & Booking queries</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-6 border-t border-[#EAEAEA]">
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-center lg:justify-start">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#F5F5F5] hover:bg-[#FFF0E5] border border-[#E5E5E5] hover:border-[#F47C20] text-xs font-mono tracking-wider uppercase text-[#0A0A0A] hover:text-[#F47C20] font-bold transition-all shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-[#F47C20]" />
                <span>GOOGLE MAPS</span>
              </a>

              <a
                href="https://www.facebook.com/kartomaniacsggn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#F5F5F5] hover:bg-[#FFF0E5] border border-[#E5E5E5] hover:border-[#F47C20] text-xs font-mono tracking-wider uppercase text-[#0A0A0A] hover:text-[#F47C20] font-bold transition-all shadow-sm"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-[#0A0A0A]" />
                <span>FACEBOOK</span>
              </a>

              <a
                href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#F5F5F5] hover:bg-[#FFF0E5] border border-[#E5E5E5] hover:border-[#F47C20] text-xs font-mono tracking-wider uppercase text-[#0A0A0A] hover:text-[#F47C20] font-bold transition-all shadow-sm"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#0A0A0A]" />
                <span>INSTAGRAM</span>
              </a>

              <a
                href="https://wa.me/919717548897?text=Hi%20Kartomania!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20racing%20session."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Hotline"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#F5F5F5] hover:bg-[#FFF0E5] border border-[#E5E5E5] hover:border-[#F47C20] text-xs font-mono tracking-wider uppercase text-[#0A0A0A] hover:text-[#F47C20] font-bold transition-all shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WHATSAPP</span>
              </a>
            </div>

            <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3 px-8 text-xs whitespace-nowrap">
              BOOK YOUR RACE
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
