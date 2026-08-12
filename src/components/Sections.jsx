import React, { useState, useEffect } from 'react';
import {
  Trophy,
  MapPin,
  Mail,
  Phone,
  Clock,
  Tag,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';
import MagneticButton from './MagneticButton';
import GameCanvas from './GameCanvas';
import TrackCircuitVisual from './TrackCircuitVisual';

export const TrackSection = ({ onOpenBooking }) => (
  <section id="track" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-white text-[#111111]">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-14">
      
      {/* Left Spec & Narrative */}
      <div className="space-y-6 lg:w-5/12 text-left">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#666666] uppercase tracking-widest font-semibold">
          <MapPin className="w-3.5 h-3.5 text-[#080808]" /> // CIRCUIT TELEMETRY
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#080808] leading-tight">
          THE MONACO OF <br />
          <span className="text-[#666666]">OUTDOOR KARTING</span>
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm font-sans leading-relaxed">
          Designed by championship racing engineers. Features a full 720-meter outdoor asphalt circuit with high-banked hairpin apexes, technical chicanes, and high-speed overtaking straights.
        </p>

        {/* Large Statistics: 01, 02, 03, 04 */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl text-left space-y-1">
            <span className="text-[10px] font-mono text-[#888888] uppercase tracking-widest block font-bold">01 // TRACK LENGTH</span>
            <div className="text-2xl font-display font-bold text-[#080808]">720 METERS</div>
            <span className="text-[11px] font-sans text-[#666666]">Full outdoor asphalt circuit</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl text-left space-y-1">
            <span className="text-[10px] font-mono text-[#888888] uppercase tracking-widest block font-bold">02 // CORNERS</span>
            <div className="text-2xl font-display font-bold text-[#080808]">14 APEXES</div>
            <span className="text-[11px] font-sans text-[#666666]">High-G tactical chicanes</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl text-left space-y-1">
            <span className="text-[10px] font-mono text-[#888888] uppercase tracking-widest block font-bold">03 // SURFACE</span>
            <div className="text-2xl font-display font-bold text-[#080808]">POLYMER GRIP</div>
            <span className="text-[11px] font-sans text-[#666666]">Formula asphalt compound</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl text-left space-y-1">
            <span className="text-[10px] font-mono text-[#888888] uppercase tracking-widest block font-bold">04 // SAFETY</span>
            <div className="text-2xl font-display font-bold text-[#080808]">F1 BARRIERS</div>
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
      src: "/leap-frog-1.jpg",
      title: "Rotax Max Championship Chassis #71",
      tag: "COMPETITION KART",
      desc: "Championship-winning Rotax 2-stroke race kart in full competition trim at the JK Tyre National Championship."
    },
    {
      src: "/leap-frog-2.jpg",
      title: "JK Tyre National Karting Championship Grid",
      tag: "NATIONAL GRID",
      desc: "Mr. Rohit Khanna and the Leap Frog Racing squad lined up on the national championship starting grid."
    },
    {
      src: "/leap-frog-3.jpg",
      title: "Championship Race Action & Pit Telemetry",
      tag: "CIRCUIT ACTION",
      desc: "High-G apex cornering and live engine telemetry monitoring during national championship finals."
    }
  ];

  return (
    <section id="leap-frog" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#080808] text-white relative z-20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#888888] uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5 text-white" /> // MOTORSPORT HERITAGE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight leading-none">
              LEAP FROG <span className="text-[#888888]">RACING</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#888888] uppercase tracking-widest max-w-sm">
            THE OFFICIAL MOTORSPORT & CHAMPIONSHIP RACING DIVISION OF KARTOMANIA
          </p>
        </div>

        {/* Hero Narrative Block */}
        <div className="rounded-xl bg-[#111111] border border-white/10 p-8 sm:p-12 text-left space-y-6">
          <h3 className="text-xl sm:text-3xl font-display font-bold text-white uppercase leading-snug">
            BORN ON THE NATIONAL RACING GRID &bull; 20+ YEARS OF CHAMPIONSHIP MOTORSPORT
          </h3>
          <p className="text-sm sm:text-base font-sans text-[#CCCCCC] leading-relaxed max-w-4xl">
            Leap Frog Racing is the competition motorsport and driver-development branch of Kartomania, founded and led by active national racing champion <strong className="text-white font-bold">Mr. Rohit Khanna</strong>. Competing continuously in the JK Tyre FMSCI National Racing Championship and Rotax Max Karting Challenge, Leap Frog Racing brings legitimate national-tier vehicle dynamics, tire science, and telemetry to every driver at Kartomania.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 font-mono">
            <div className="p-4 bg-black rounded-lg border border-white/10 text-center">
              <div className="text-2xl font-display font-bold text-white">2003</div>
              <div className="text-[10px] text-[#888888] uppercase mt-1 font-semibold">ESTABLISHED</div>
            </div>
            <div className="p-4 bg-black rounded-lg border border-white/10 text-center">
              <div className="text-2xl font-display font-bold text-white">JK TYRE</div>
              <div className="text-[10px] text-[#888888] uppercase mt-1 font-semibold">NATIONAL SERIES</div>
            </div>
            <div className="p-4 bg-black rounded-lg border border-white/10 text-center">
              <div className="text-2xl font-display font-bold text-white">ROTAX MAX</div>
              <div className="text-[10px] text-[#888888] uppercase mt-1 font-semibold">2-STROKE FLEET</div>
            </div>
            <div className="p-4 bg-black rounded-lg border border-white/10 text-center">
              <div className="text-2xl font-display font-bold text-white">FMSCI</div>
              <div className="text-[10px] text-[#888888] uppercase mt-1 font-semibold">LICENSED PROS</div>
            </div>
          </div>
        </div>

        {/* Authentic High-Res Motorsport Photography Gallery */}
        <div className="space-y-4 text-left">
          <span className="font-mono text-xs text-[#888888] uppercase tracking-widest font-semibold block">
            // AUTHENTIC ON-TRACK CHAMPIONSHIP ARCHIVE
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(img)}
                className="group relative rounded-xl overflow-hidden bg-black border border-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer shadow-lg aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5 text-left">
                  <span className="px-2 py-0.5 rounded-sm bg-white text-[#080808] font-mono text-[9px] font-bold uppercase tracking-widest w-max mb-1">
                    {img.tag}
                  </span>
                  <h4 className="text-sm font-display font-bold text-white uppercase group-hover:text-[#CCCCCC] transition-colors">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <div className="relative max-w-4xl w-full bg-[#111111] border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 text-white hover:text-[#888888] border border-white/20 transition-colors cursor-pointer"
              >
                ✕
              </button>
              <img src={activeImage.src} alt={activeImage.title} className="w-full max-h-[75vh] object-contain bg-black" />
              <div className="p-6 bg-[#111111] border-t border-white/10 flex items-center justify-between text-white text-left">
                <div>
                  <span className="text-[10px] font-mono text-[#888888] uppercase font-bold">{activeImage.tag}</span>
                  <h4 className="text-xl font-display font-bold text-white uppercase">{activeImage.title}</h4>
                  <p className="text-xs font-mono text-[#AAAAAA] mt-1">{activeImage.desc}</p>
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

  const bundleSessions = [
    {
      tier: "TIER 01",
      name: "5 SESSIONS STARTER BUNDLE",
      bonus: "1 FREE Bowling Coupon",
      price: "₹3,250",
      effective: "₹650 / Session Value",
      desc: "Ideal for a racing duo or dedicated solo telemetry practice.",
      features: [
        "5 x 6-Min High-Speed Outdoor GP Sessions",
        "1 Free Bowling Voucher at Entertainland Mall",
        "Live Millisecond Telemetry Timing Printouts",
        "Valid for 30 Days from Purchase"
      ]
    },
    {
      tier: "TIER 02",
      badge: "MOST POPULAR",
      name: "10 SESSIONS RACER PACK",
      bonus: "1 FREE Session + 1 Bowling",
      price: "₹6,500",
      effective: "₹590 / Session Value",
      desc: "Our top-rated package for group shootouts & team Grand Prix challenges.",
      features: [
        "11 Total Racing Sessions (10 + 1 FREE Bonus)",
        "1 Free Bowling Voucher Included",
        "Shareable with Friends, Family & Colleagues",
        "Priority Grid Staging Access"
      ]
    },
    {
      tier: "TIER 03",
      badge: "BEST VALUE",
      name: "20 SESSIONS PRO CHAMPIONSHIP",
      bonus: "3 FREE Sessions + 3 Bowling",
      price: "₹13,000",
      effective: "₹565 / Session Value",
      desc: "Ultimate group Grand Prix package for corporate events & enthusiasts.",
      features: [
        "23 Total Racing Sessions (20 + 3 FREE Bonus)",
        "3 Free Bowling Vouchers Included",
        "Championship Podium Ceremony & Trophies",
        "Dedicated Track Marshal & Race Director"
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
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#666666] uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#080808]" /> // EXCLUSIVE TRACK OFFERS & VALUE BUNDLES
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#080808] uppercase tracking-tight leading-none">
              WHAT'S <span className="text-[#666666]">NEW</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#666666] max-w-xl">
              Daily bonanzas, happy hour sprints, and multi-session value packages designed for maximum track velocity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white border border-[#E5E5E5] text-[#080808] font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              ★ 100% INCLUSIVE OF ALL TAXES
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#080808] text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <Zap className="w-3 h-3 text-white" /> INSTANT KIOSK SLOTS
            </span>
          </div>
        </div>

        {/* Filter Switcher Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-1">
          <div className="flex items-center gap-2 p-1 rounded-md bg-white border border-[#E5E5E5] shadow-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#080808] text-white shadow-sm'
                  : 'text-[#666666] hover:text-[#080808] bg-transparent'
              }`}
            >
              ALL SPECIALS
            </button>
            <button
              onClick={() => setActiveFilter('daily')}
              className={`px-4 py-2 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'daily'
                  ? 'bg-[#080808] text-white shadow-sm'
                  : 'text-[#666666] hover:text-[#080808] bg-transparent'
              }`}
            >
              DAILY BONANZAS (3)
            </button>
            <button
              onClick={() => setActiveFilter('bundles')}
              className={`px-4 py-2 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'bundles'
                  ? 'bg-[#080808] text-white shadow-sm'
                  : 'text-[#666666] hover:text-[#080808] bg-transparent'
              }`}
            >
              BUNDLE PASSES (3)
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#888888]">
            <Clock className="w-3.5 h-3.5 text-[#080808]" />
            <span>Open All 7 Days &bull; 2:00 PM – 11:00 PM</span>
          </div>
        </div>

        {/* 1. Featured Weekly Mega Banner Showcase */}
        {(activeFilter === 'all' || activeFilter === 'daily') && (
          <div className="space-y-3 text-left">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#080808] uppercase tracking-wider">
                // FEATURED WEEKLY CAMPAIGN SHOWCASE
              </span>
              <span className="text-[10px] font-mono text-[#888888] uppercase">
                CLICK BANNER FOR EXPANDED VIEW
              </span>
            </div>

            <div
              onClick={() => setActivePromoIdx(0)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer border border-[#E5E5E5] hover:border-[#080808] transition-all duration-300 shadow-md hover:shadow-xl bg-black"
            >
              <img
                src="/whats-new/weekly-offers.jpg"
                alt="Kartomania Weekly Deals Banner"
                className="w-full h-auto max-h-[480px] object-cover object-center group-hover:scale-[1.015] transition-transform duration-700"
              />
              
              {/* Subtle Ambient Vignette & Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-between p-6 sm:p-8 text-left">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-sm bg-white/95 backdrop-blur-md text-[#080808] font-mono text-[10px] font-black uppercase tracking-widest shadow-md">
                    ★ OFFICIAL WEEKLY CAMPAIGN
                  </span>
                  <span className="px-3 py-1 rounded-sm bg-black/80 text-white border border-white/20 font-mono text-[10px] font-bold uppercase tracking-widest">
                    CLICK TO ZOOM 🔍
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-8">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-white/80 uppercase font-semibold">
                      ENTERTAINLAND MALL &bull; SECTOR 83 GURGAON
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white uppercase tracking-tight">
                      MONDAY BOGO &bull; WEDNESDAY HAPPY HOUR &bull; FRIDAY FRENZY
                    </h3>
                  </div>

                  <MagneticButton
                    href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                    className="py-3 px-7 text-xs font-bold shrink-0 bg-white text-[#080808] hover:bg-[#F0F0F0]"
                  >
                    CLAIM WEEKLY DEALS &rarr;
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Core 3 Daily Offers: Monday, Wednesday, Friday Cards */}
        {(activeFilter === 'all' || activeFilter === 'daily') && (
          <div className="space-y-6 text-left">
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#080808] uppercase tracking-wider block">
                  // DAILY BONANZA POSTERS & SPECIALS
                </span>
                <span className="text-[11px] font-sans text-[#666666]">
                  Click any poster to expand full resolution flyer & race telemetry details.
                </span>
              </div>
              <span className="hidden sm:inline font-mono text-[10px] text-[#888888] uppercase">
                3 SPECIALS ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {allPromos.slice(1).map((offer) => (
                <div
                  key={offer.id}
                  className="rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#080808] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left group"
                >
                  {/* Poster Image Frame with Zoom & Lightbox Trigger */}
                  <div
                    onClick={() => setActivePromoIdx(offer.id)}
                    className="relative aspect-[4/3] bg-[#080808] overflow-hidden cursor-pointer"
                  >
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Floating Header Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-sm bg-black/85 backdrop-blur-md text-white font-mono text-[9px] font-bold uppercase tracking-wider border border-white/20">
                        {offer.dayName}
                      </span>
                      <span className="px-2.5 py-1 rounded-sm bg-white text-[#080808] font-mono text-[9px] font-black uppercase shadow-md">
                        {offer.badge}
                      </span>
                    </div>

                    {/* Hover Overlay with Expand Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-sm bg-white text-[#080808] font-mono text-[10px] font-bold uppercase tracking-widest shadow-xl">
                        CLICK TO EXPAND 🔍
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Bullet Details */}
                  <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#888888] font-bold uppercase tracking-wider">
                          {offer.tag}
                        </span>
                        <span className="text-[10px] font-mono text-[#080808] font-bold uppercase bg-[#F5F5F5] px-2 py-0.5 rounded-sm border border-[#E5E5E5]">
                          {offer.saveHighlight}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-[#080808] uppercase tracking-tight">
                        {offer.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed">
                        {offer.desc}
                      </p>

                      {/* Key Feature Inclusions */}
                      <div className="pt-2 space-y-1.5 border-t border-[#F0F0F0]">
                        {offer.perks.slice(0, 3).map((perk, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs font-sans text-[#444444]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#080808] shrink-0 mt-0.5" />
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[9px] font-mono text-[#888888] block uppercase">SPECIAL RATE</span>
                        <div className="text-lg sm:text-xl font-display font-bold text-[#080808]">
                          {offer.price}
                        </div>
                      </div>
                      <MagneticButton
                        href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                        className="py-2 px-5 text-xs font-bold"
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

        {/* 3. Multi-Race Value Packs (Bundle Sessions) */}
        {(activeFilter === 'all' || activeFilter === 'bundles') && (
          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-10 space-y-8 text-left shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#666666] uppercase tracking-wider">
                  <Tag className="w-3.5 h-3.5 text-[#080808]" /> // MULTI-RACE VALUE BUNDLES
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#080808] uppercase tracking-tight">
                  BUNDLE SESSIONS & PRE-PAID PASSES
                </h3>
                <p className="text-xs font-sans text-[#666666]">
                  Pre-purchase session credits with bonus bowling vouchers. Shareable with your group & valid for 30 days.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#080808] font-bold uppercase bg-[#F9F9F9] px-3 py-1.5 rounded-sm border border-[#E5E5E5]">
                INCLUSIVE OF ALL TAXES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bundleSessions.map((bundle, idx) => (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-xl border flex flex-col justify-between space-y-5 transition-all duration-300 relative ${
                    bundle.badge
                      ? 'bg-[#FDFCFA] border-[#080808] shadow-md hover:shadow-lg'
                      : 'bg-[#F9F9F9] border-[#E5E5E5] hover:border-[#080808] shadow-sm'
                  }`}
                >
                  {bundle.badge && (
                    <span className="absolute -top-3 right-6 px-2.5 py-0.5 rounded-sm bg-[#080808] text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
                      {bundle.badge}
                    </span>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-sm bg-white border border-[#E5E5E5] text-[#666666] font-mono text-[9px] font-bold uppercase tracking-wider">
                        {bundle.tier}
                      </span>
                      <span className="text-[10px] font-mono text-[#080808] font-bold">
                        {bundle.effective}
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-bold text-[#080808] uppercase leading-tight">
                      {bundle.name}
                    </h4>

                    {/* Free Bonus Callout Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white border border-[#E5E5E5] text-[#080808] font-mono text-[10px] font-bold uppercase tracking-wider">
                      🎁 {bundle.bonus}
                    </div>

                    <p className="text-xs font-sans text-[#666666] leading-relaxed">
                      {bundle.desc}
                    </p>

                    {/* Feature Inclusions */}
                    <div className="pt-3 space-y-2 border-t border-[#EAEAEA]">
                      {bundle.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-sans text-[#444444]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#080808] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Booking Button */}
                  <div className="pt-4 flex items-center justify-between border-t border-[#EAEAEA] gap-3">
                    <div>
                      <span className="text-[9px] font-mono text-[#888888] block uppercase">PACKAGE TOTAL</span>
                      <div className="text-xl font-display font-bold text-[#080808]">{bundle.price}</div>
                    </div>
                    <MagneticButton
                      href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                      className="py-2 px-4 text-xs font-bold"
                    >
                      GET PASS &rarr;
                    </MagneticButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Track Transparency & Racer Assurance 4-Pillar Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono">
          <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] space-y-1.5">
            <ShieldCheck className="w-4 h-4 text-[#080808]" />
            <div className="text-xs font-bold text-[#080808] uppercase">ALL TAXES INCLUDED</div>
            <p className="text-[11px] font-sans text-[#666666]">100% GST included in all listed rates. Zero hidden checkout fees.</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] space-y-1.5">
            <Trophy className="w-4 h-4 text-[#080808]" />
            <div className="text-xs font-bold text-[#080808] uppercase">SAFETY GEAR PROVIDED</div>
            <p className="text-[11px] font-sans text-[#666666]">DOT-certified helmets, sanitary balaclavas, and rib protectors free.</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] space-y-1.5">
            <Zap className="w-4 h-4 text-[#080808]" />
            <div className="text-xs font-bold text-[#080808] uppercase">LIVE TELEMETRY</div>
            <p className="text-[11px] font-sans text-[#666666]">Millisecond lap timing & leaderboards by RaceFacer systems.</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] space-y-1.5">
            <Clock className="w-4 h-4 text-[#080808]" />
            <div className="text-xs font-bold text-[#080808] uppercase">OPEN 7 DAYS A WEEK</div>
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
              className="relative max-w-4xl w-full bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-2xl my-auto text-left flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePromoIdx(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 text-white hover:text-[#AAAAAA] transition-colors cursor-pointer shadow-lg"
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
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/75 text-white hover:bg-black transition-colors cursor-pointer shadow-xl hidden sm:flex items-center justify-center"
                aria-label="Previous Offer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePromoIdx((prev) => (prev + 1) % allPromos.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/75 text-white hover:bg-black transition-colors cursor-pointer shadow-xl hidden sm:flex items-center justify-center"
                aria-label="Next Offer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Main Image Stage */}
              <div className="w-full bg-[#080808] flex items-center justify-center max-h-[70vh] overflow-hidden">
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
                    <span className="text-[10px] font-mono text-white bg-[#080808] px-2 py-0.5 rounded-sm font-bold uppercase">
                      {allPromos[activePromoIdx].tag}
                    </span>
                    <span className="text-[10px] font-mono text-[#888888] uppercase font-semibold">
                      PROMO {activePromoIdx + 1} OF {allPromos.length} &bull; {allPromos[activePromoIdx].dayName}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-[#080808] uppercase">
                    {allPromos[activePromoIdx].title}
                  </h4>
                  <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed">
                    {allPromos[activePromoIdx].desc}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#EAEAEA]">
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-[#888888] block uppercase">OFFER PRICE</span>
                    <span className="text-xl font-display font-bold text-[#080808]">
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

  return (
    <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-white text-[#111111]">
      <div className="space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#F5F5F5] border border-[#E5E5E5] text-[#111111] font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
              ★ ALL PRICES INCLUSIVE OF ALL TAXES
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#080808] uppercase tracking-tight">
              OFFICIAL <span className="text-[#666666]">PRICING & COMBOS</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-md">
            Exclusive multi-session packages featuring complimentary free bowling and bonus race sessions.
          </p>
        </div>

        {/* 1. Official Value Combo Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Weekday Combos */}
          <div className="bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#080808] rounded-xl p-8 shadow-sm transition-all text-left">
            <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-5 border-b border-[#E5E5E5]">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono font-bold text-[#666666] uppercase tracking-widest block">SUPER VALUE DEALS</span>
                <h3 className="text-xl font-display font-bold text-[#080808] uppercase tracking-wider">WEEKDAY COMBOS</h3>
              </div>
              <span className="px-3 py-1 rounded-sm bg-white border border-[#E5E5E5] text-[#111111] font-mono text-xs font-bold uppercase whitespace-nowrap">
                MON – THU
              </span>
            </div>

            <div className="space-y-3.5">
              {weekdayCombos.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white border border-[#EAEAEA] flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors">
                  <div className="space-y-0.5">
                    <div className="text-xs sm:text-sm font-display font-bold text-[#111111] uppercase">{item.package}</div>
                    <span className="inline-block px-2 py-0.5 rounded-sm bg-[#F5F5F5] text-[#555555] font-mono text-[9px] font-bold uppercase tracking-wider">
                      🎁 {item.bonus}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-display font-bold text-[#080808]">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekend Combos */}
          <div className="bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#080808] rounded-xl p-8 shadow-sm transition-all text-left">
            <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-5 border-b border-[#E5E5E5]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono font-bold text-[#666666] uppercase tracking-widest block">PEAK RACING & ENTERTAINMENT</span>
                  <span className="px-2 py-0.5 rounded-sm bg-[#080808] text-[8px] font-mono font-bold text-white uppercase tracking-wider">
                    ★ POPULAR
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-[#080808] uppercase tracking-wider">WEEKEND COMBOS</h3>
              </div>
              <span className="px-3 py-1 rounded-sm bg-white border border-[#E5E5E5] text-[#111111] font-mono text-xs font-bold uppercase whitespace-nowrap">
                FRI – SUN & HOLIDAYS
              </span>
            </div>

            <div className="space-y-3.5">
              {weekendCombos.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white border border-[#EAEAEA] flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors">
                  <div className="space-y-0.5">
                    <div className="text-xs sm:text-sm font-display font-bold text-[#111111] uppercase">{item.package}</div>
                    <span className="inline-block px-2 py-0.5 rounded-sm bg-[#F5F5F5] text-[#555555] font-mono text-[9px] font-bold uppercase tracking-wider">
                      🔥 {item.bonus}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-display font-bold text-[#080808]">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Standard Session Tariff Table */}
        <div className="bg-white border border-[#E5E5E5] rounded-xl p-8 shadow-sm text-left">
          <div className="pb-4 mb-5 border-b border-[#EAEAEA]">
            <h3 className="text-lg font-display font-bold text-[#080808] uppercase tracking-wider">
              STANDARD KARTING SESSIONS TARIFF
            </h3>
            <p className="text-xs font-mono text-[#888888]">Pure track time rates without bowling additions (Taxes Included).</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs sm:text-sm">
              <thead className="bg-[#F5F5F5] text-[#111111] uppercase text-[11px] border border-[#E5E5E5]">
                <tr>
                  <th className="py-3.5 px-5 rounded-l-sm font-bold">SESSIONS</th>
                  <th className="py-3.5 px-5 text-center font-bold">WEEKDAY (MON – THU)</th>
                  <th className="py-3.5 px-5 text-right rounded-r-sm font-bold">WEEKEND (FRI – SUN)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAEAEA] text-[#111111]">
                {standardRates.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F9F9F9] transition-colors">
                    <td className="py-3.5 px-5 font-bold text-[#080808]">{row.sessions}</td>
                    <td className="py-3.5 px-5 text-center font-display font-semibold text-[#555555]">{row.weekday}</td>
                    <td className="py-3.5 px-5 text-right font-display font-bold text-[#080808] text-sm sm:text-base">{row.weekend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Terms and Conditions Card */}
        <div className="bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl p-8 space-y-4 text-left shadow-sm">
          <h4 className="font-display font-bold text-xs sm:text-sm text-[#080808] uppercase tracking-wider">
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
            <span className="font-mono text-xs text-[#666666] uppercase tracking-widest font-semibold block mb-2">
              // ARENA LOCATION & NAVIGATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#080808] uppercase tracking-tight">
              FIND THE <span className="text-[#666666]">ARENA</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-sm">
            Located at Entertainland Mall, India's premier 720m outdoor pro karting circuit.
          </p>
        </div>

        {/* Location Info & CTAs */}
        <div className="bg-white border border-[#E5E5E5] rounded-xl p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-left font-mono">
            <div className="p-5 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] space-y-2">
              <div className="flex items-center gap-2 text-[#080808]">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">// ARENA ADDRESS</span>
              </div>
              <div className="text-xs text-[#111111] font-sans font-semibold leading-relaxed">
                Entertainland Mall, Sector 83, Manesar, Gurgaon.
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] space-y-2">
              <div className="flex items-center gap-2 text-[#080808]">
                <Clock className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">// OPEN ALL 7 DAYS</span>
              </div>
              <div className="text-xs text-[#111111] font-sans font-semibold space-y-0.5">
                <div>Mon – Fri: 2:00 PM – 11:00 PM</div>
                <div>Sat – Sun: 1:00 PM – 11:00 PM</div>
                <div className="text-emerald-600 font-bold">// Open All Days</div>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] space-y-2">
              <div className="flex items-center gap-2 text-[#080808]">
                <Phone className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">// CALL US / HOTLINE</span>
              </div>
              <div className="text-xs text-[#111111] font-sans font-semibold space-y-0.5">
                <a href="tel:+919717548897" className="block hover:text-[#666666] transition-colors font-bold">+91 97175 48897</a>
                <a href="tel:+919560492876" className="block hover:text-[#666666] transition-colors font-bold">+91 95604 92876</a>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] space-y-2">
              <div className="flex items-center gap-2 text-[#080808]">
                <Mail className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">// EMAIL ENQUIRIES</span>
              </div>
              <div className="text-xs text-[#111111] font-sans font-semibold space-y-0.5">
                <a href="mailto:kartomania.ggn@gmail.com" className="block hover:text-[#666666] transition-colors font-bold break-all">
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
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#F5F5F5] hover:bg-[#EAEAEA] border border-[#E5E5E5] text-xs font-mono tracking-wider uppercase text-[#111111] font-bold transition-all shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-[#080808]" />
                <span>GOOGLE MAPS</span>
              </a>

              <a
                href="https://www.facebook.com/kartomaniacsggn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#F5F5F5] hover:bg-[#EAEAEA] border border-[#E5E5E5] text-xs font-mono tracking-wider uppercase text-[#111111] font-bold transition-all shadow-sm"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-[#080808]" />
                <span>FACEBOOK</span>
              </a>

              <a
                href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#F5F5F5] hover:bg-[#EAEAEA] border border-[#E5E5E5] text-xs font-mono tracking-wider uppercase text-[#111111] font-bold transition-all shadow-sm"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#080808]" />
                <span>INSTAGRAM</span>
              </a>

              <a
                href="https://wa.me/919717548897?text=Hi%20Kartomania!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20racing%20session."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Hotline"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#F5F5F5] hover:bg-[#EAEAEA] border border-[#E5E5E5] text-xs font-mono tracking-wider uppercase text-[#111111] font-bold transition-all shadow-sm"
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

export const GameSection = () => (
  <section id="game" className="py-20 sm:py-28 px-4 max-w-7xl mx-auto border-t border-[#EAEAEA] relative z-20 bg-white text-[#111111]">
    <div className="space-y-8 sm:space-y-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-6 text-left">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#666666] uppercase tracking-widest font-semibold mb-2">
            <Trophy className="w-3.5 h-3.5 text-[#080808]" /> // INTERACTIVE 2D KART RACER
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#080808] uppercase tracking-tight">
            PRO <span className="text-[#666666]">ARCADE</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-sm">
          Test your apex timing on our 16-bit retro arcade simulator before taking our 720M outdoor track!
        </p>
      </div>

      {/* Embedded 2D Game Canvas Component */}
      <GameCanvas />
    </div>
  </section>
);
