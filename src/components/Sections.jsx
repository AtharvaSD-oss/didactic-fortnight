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

export const TrackSection = () => (
  <section id="track" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-white text-[#111111]">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-14">
      
      {/* Left Spec & Narrative */}
      <div className="space-y-6 lg:w-5/12 text-left">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-[2px] h-5 bg-[#F47C20]" />
          <span className="text-[#F47C20] text-sm font-bold font-mono">03</span>
          <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ THE TRACK</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-[#F47C20]" /> // CIRCUIT TELEMETRY
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#0A0A0A] leading-tight">
          THE <span className="text-[#F47C20]">TRACK</span>
        </h2>
        <p className="text-[#666666] text-sm sm:text-base font-sans font-medium leading-relaxed">
          Every corner. Every straight. Every lap.
        </p>

        {/* Verified Track Statistics Grid */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl text-left space-y-1 transition-colors group shadow-sm">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase tracking-widest block font-bold">01 // TRACK LENGTH</span>
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">720 METERS</div>
            <span className="text-[11px] font-sans text-[#666666]">Outdoor asphalt circuit</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl text-left space-y-1 transition-colors group shadow-sm">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase tracking-widest block font-bold">02 // TURNS</span>
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">14 APEXES</div>
            <span className="text-[11px] font-sans text-[#666666]">Technical chicanes</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl text-left space-y-1 transition-colors group shadow-sm">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase tracking-widest block font-bold">03 // TOP SPEED</span>
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">70 KM/H</div>
            <span className="text-[11px] font-sans text-[#666666]">Sodi RT10 Pro fleet</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl text-left space-y-1 transition-colors group shadow-sm">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase tracking-widest block font-bold">04 // LAP INFORMATION</span>
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">41.82 SEC</div>
            <span className="text-[11px] font-sans text-[#666666]">Track record lap time</span>
          </div>
        </div>

        <div className="pt-4">
          <MagneticButton
            href="/track"
            className="py-3.5 px-8 text-xs font-bold"
          >
            EXPLORE THE TRACK &rarr;
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
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export const FounderHighlightSection = () => {
  return (
    <section id="founder-pedigree" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-white text-[#111111]">
      <div className="space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-6 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">04-B</span>
              <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ FOUNDER & MOTORSPORT HERITAGE</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 text-[#F47C20] font-mono text-[10px] font-bold uppercase tracking-wider mb-2 shadow-sm">
              ★ NATIONAL RACING CHAMPION PEDIGREE
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
              MEET OUR <span className="text-[#F47C20]">FOUNDER</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#666666] max-w-md text-left">
            Kartomania is the only racing track in Northern India owned, operated, and calibrated by an active national racing champion.
          </p>
        </div>

        {/* Founder Showcase Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#F9F9F9] text-[#111111] border-2 border-[#E5E5E5] hover:border-[#F47C20] shadow-sm relative overflow-hidden text-left transition-colors">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F47C20]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-block px-3 py-1 rounded-sm bg-[#F47C20] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
                FOUNDER & DIRECTOR — LEAP FROG RACING
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                  MR. ROHIT <span className="text-[#F47C20]">KHANNA</span>
                </h3>
                <p className="text-sm sm:text-base font-mono text-[#F47C20] font-bold">
                  20+ Years Active National & International Racing Champion
                </p>
              </div>

              <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed max-w-2xl">
                Founded and directed by veteran racer Mr. Rohit Khanna, Kartomania brings authentic national championship telemetry and track engineering to everyday drivers. As director of Northern India's championship-winning <strong className="text-[#0A0A0A]">Leap Frog Racing Academy</strong>, Mr. Khanna trains drivers across JK Tyre National Karting & Rotax Max Championships.
              </p>

              {/* 3 Quick Telemetry Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono">
                <div className="p-4 rounded-xl bg-white border border-[#E5E5E5] space-y-1 shadow-xs">
                  <span className="text-[9px] text-[#F47C20] font-bold uppercase tracking-widest block">// EXPERIENCE</span>
                  <div className="text-xl font-display font-bold text-[#0A0A0A]">20+ YRS</div>
                  <span className="text-[10px] text-[#666666]">Active Competition</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E5E5E5] space-y-1 shadow-xs">
                  <span className="text-[9px] text-[#F47C20] font-bold uppercase tracking-widest block">// PODIUMS</span>
                  <div className="text-xl font-display font-bold text-[#0A0A0A]">50+ WINS</div>
                  <span className="text-[10px] text-[#666666]">National Trophies</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E5E5E5] space-y-1 shadow-xs">
                  <span className="text-[9px] text-[#F47C20] font-bold uppercase tracking-widest block">// ACADEMY</span>
                  <div className="text-xl font-display font-bold text-[#0A0A0A]">PRO TIER</div>
                  <span className="text-[10px] text-[#666666]">Leap Frog Racing</span>
                </div>
              </div>

              <div className="pt-2">
                <MagneticButton href="/experience" className="py-3 px-6 text-xs font-bold">
                  EXPLORE OUR MOTORSPORT HERITAGE &rarr;
                </MagneticButton>
              </div>
            </div>

            {/* Right Column: Founder Portrait Photo & Quote Box */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative rounded-xl overflow-hidden border-2 border-[#E5E5E5] hover:border-[#F47C20] group shadow-md transition-colors">
                <img
                  src="/founder-rohit-khanna.jpg"
                  alt="Mr. Rohit Khanna - Kartomania Founder & National Racing Champion"
                  className="w-full h-64 sm:h-72 object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono">
                  <span className="px-2.5 py-1 rounded-sm bg-[#F47C20] text-white text-[9px] font-bold uppercase tracking-wider shadow-sm">
                    ★ ROHIT KHANNA
                  </span>
                  <span className="text-[9px] text-white font-bold uppercase bg-black/60 px-2 py-0.5 rounded-sm backdrop-blur-xs">
                    NATIONAL CHAMPION
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] space-y-2 shadow-xs">
                <div className="text-3xl text-[#F47C20] font-serif leading-none">“</div>
                <p className="text-xs font-display font-bold text-[#0A0A0A] uppercase leading-relaxed italic">
                  From beginners learning proper braking lines to pro racers shaving split seconds, Kartomania offers authentic racing velocity.
                </p>
                <div className="pt-2 border-t border-[#EAEAEA] text-[9px] font-mono text-[#888888]">
                  // Track Calibration & Telemetry Briefing
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export const PricingSection = () => {
  const REAL_PACKAGES = [
    {
      id: "pkg-5",
      name: "5 SESSIONS + 1 BOWLING FREE",
      price: "₹3,250 / ₹3,800",
      priceNote: "Weekday: ₹3,250 | Weekend: ₹3,800",
      duration: "5 SESSIONS",
      included: [
        "Weekday - 5 sessions + 1 Bowling FREE (₹3,250)",
        "Weekend - 5 sessions + 1 Bowling FREE (₹3,800)",
        "DOT-certified helmet & balaclava"
      ],
      tag: "5 SESSIONS"
    },
    {
      id: "pkg-10",
      name: "10 SESSIONS + 1 SESSION + 1 BOWLING FREE",
      price: "₹6,500 / ₹7,600",
      priceNote: "Weekday: ₹6,500 | Weekend: ₹7,600",
      duration: "10 + 1 SESSIONS",
      included: [
        "Weekday - 10 sessions + 1 Session + 1 Bowling FREE (₹6,500)",
        "Weekend - 10 sessions + 1 Session + 1 Bowling FREE (₹7,600)",
        "Live RaceFacer telemetry tracking"
      ],
      tag: "MOST POPULAR"
    },
    {
      id: "pkg-15",
      name: "15 SESSIONS + 2 SESSIONS + 2 BOWLING FREE",
      price: "₹9,750 / ₹11,400",
      priceNote: "Weekday: ₹9,750 | Weekend: ₹11,400",
      duration: "15 + 2 SESSIONS",
      included: [
        "Weekday - 15 sessions + 2 Sessions + 2 Bowling FREE (₹9,750)",
        "Weekend - 15 sessions + 2 Sessions + 2 Bowling FREE (₹11,400)",
        "Shareable driver group pass"
      ],
      tag: "BEST VALUE"
    },
    {
      id: "pkg-20",
      name: "20 SESSIONS + 3 SESSION + 3 BOWLING FREE",
      price: "₹13,000 / ₹15,200",
      priceNote: "Weekday: ₹13,000 | Weekend: ₹15,200",
      duration: "20 + 3 SESSIONS",
      included: [
        "Weekday - 20 sessions + 3 Session + 3 Bowling FREE (₹13,000)",
        "Weekend - 20 sessions + 3 Session + 3 Bowling FREE (₹15,200)",
        "Maximum track time & savings"
      ],
      tag: "MEGA COMBO"
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-white text-[#111111]">
      <div className="space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-6 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">04</span>
              <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ RACE & PACKAGES PREVIEW</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 text-[#F47C20] font-mono text-[10px] font-bold uppercase tracking-wider mb-2 shadow-sm">
              ★ ALL PRICES INCLUSIVE OF GST & TAXES
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
              RACE & <span className="text-[#F47C20]">PACKAGES</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#666666] max-w-md">
            Official Kartomania racing packages with live telemetry tracking & safety gear.
          </p>
        </div>

        {/* 4 Compact Package Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="p-6 rounded-2xl bg-[#F9F9F9] border-2 border-[#E5E5E5] hover:border-[#F47C20] transition-all duration-300 flex flex-col justify-between text-left shadow-sm hover:shadow-md group"
            >
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-sm bg-[#0A0A0A] text-white font-mono text-[9px] font-bold uppercase tracking-wider group-hover:bg-[#F47C20] transition-colors">
                    {pkg.tag}
                  </span>
                  <span className="text-[10px] font-mono text-[#888888] font-bold uppercase">
                    {pkg.duration}
                  </span>
                </div>

                {/* Package Title */}
                <h3 className="text-lg font-display font-bold text-[#0A0A0A] uppercase tracking-wide group-hover:text-[#F47C20] transition-colors">
                  {pkg.name}
                </h3>

                {/* Price Display */}
                <div className="py-2 border-y border-[#EAEAEA]">
                  <span className="text-[9px] font-mono text-[#888888] block uppercase">PACKAGE PRICE</span>
                  <div className="text-2xl font-display font-bold text-[#0A0A0A]">
                    {pkg.price}
                  </div>
                  <span className="text-[10px] font-sans text-[#666666]">
                    {pkg.priceNote}
                  </span>
                </div>

                {/* What's Included Bullet Inclusions */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono text-[#F47C20] font-bold uppercase block tracking-wider">
                    // WHAT'S INCLUDED
                  </span>
                  <div className="space-y-1.5">
                    {pkg.included.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#444444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F47C20] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Booking CTA */}
              <div className="pt-6 mt-4 border-t border-[#EAEAEA]">
                <MagneticButton
                  href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                  className="w-full py-2.5 px-4 text-xs font-bold justify-center"
                >
                  BOOK NOW &rarr;
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation CTA */}
        <div className="pt-4 text-center">
          <MagneticButton
            href="/race"
            className="py-3.5 px-8 text-xs font-bold"
          >
            VIEW ALL RACE OPTIONS &rarr;
          </MagneticButton>
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
        
        {/* Section Header — Task 6 Final Homepage CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#E5E5E5] pb-6 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">05</span>
              <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ FINAL BOOKING CTA</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs text-[#F47C20] uppercase tracking-widest font-bold shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#F47C20]" /> // ARENA LOCATION & NAVIGATION
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
              READY TO <span className="text-[#F47C20]">RACE?</span>
            </h2>
            <p className="text-base sm:text-xl font-sans font-medium text-[#555555]">
              Your next lap starts here.
            </p>
          </div>

          <div className="shrink-0 pt-2 sm:pt-0">
            <MagneticButton href="/race" className="py-4 px-10 text-sm font-bold shadow-md">
              BOOK YOUR RACE &rarr;
            </MagneticButton>
          </div>
        </div>

        {/* Location Info & Navigation Strip */}
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

            <MagneticButton href="/race" className="py-3.5 px-8 text-xs font-bold whitespace-nowrap">
              BOOK YOUR RACE &rarr;
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
};
