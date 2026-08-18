import React from 'react';
import {
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  Trophy,
  Navigation
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './Icons';
import MagneticButton from './MagneticButton';
import TrackCircuitVisual from './TrackCircuitVisual';

export const TrackSection = () => (
  <section id="track" className="py-14 sm:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-t border-[#EAEAEA] bg-white text-[#111111]">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-14">
      
      {/* Left Spec & Narrative */}
      <div className="space-y-6 lg:w-1/2 text-left">
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
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">~ 600 METERS</div>
            <span className="text-[11px] font-sans text-[#666666]">Outdoor GP circuit</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl text-left space-y-1 transition-colors group shadow-sm">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase tracking-widest block font-bold">02 // TOTAL TURNS</span>
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">11 APEXES</div>
            <span className="text-[11px] font-sans text-[#666666]">Technical chicanes</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl text-left space-y-1 transition-colors group shadow-sm">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase tracking-widest block font-bold">03 // DIRECTION</span>
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">CLOCKWISE</div>
            <span className="text-[11px] font-sans text-[#666666]">Official circuit flow</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] rounded-xl text-left space-y-1 transition-colors group shadow-sm">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase tracking-widest block font-bold">04 // TRACK TYPE</span>
            <div className="text-2xl font-display font-bold text-[#0A0A0A]">OUTDOOR</div>
            <span className="text-[11px] font-sans text-[#666666]">Polymer asphalt track</span>
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

      {/* Right Track Map Visual */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <TrackCircuitVisual />
      </div>

    </div>
  </section>
);

export const FounderHighlightSection = () => {
  return (
    <section id="founder-pedigree" className="py-14 sm:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-t border-[#EAEAEA] bg-white text-[#111111]">
      <div className="space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-6 text-left">
          <div>
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
  const SINGLE_SPRINTS = [
    {
      id: "sprint-adult",
      number: "01",
      category: "PRO",
      tag: "MOST POPULAR",
      name: "PRO ADULT SPRINT",
      kartName: "SODI RT10 PRO",
      desc: "High-speed outdoor sprint session with authentic Grand Prix telemetry.",
      power: "13.0 HP",
      topSpeed: "75 KM/H",
      engine: "270CC HONDA GX",
      weekdayPrice: "₹650",
      weekendPrice: "₹760",
      duration: "10 MINS / ~12-15 LAPS",
      features: [
        "Honda GX270 4-Stroke Engine",
        "RaceFacer Live Telemetry Timing",
        "DOT Helmet & Balaclava Included"
      ]
    },
    {
      id: "sprint-twin",
      number: "02",
      category: "HYPER",
      tag: "2 DRIVERS",
      name: "TWIN TANDEM SPRINT",
      kartName: "TWIN POWER 500CC",
      desc: "Dual steering & synchronized engines for couples and parent-child duos.",
      power: "22.0 HP",
      topSpeed: "80 KM/H",
      engine: "500CC DUAL ENGINE",
      weekdayPrice: "₹1,000",
      weekendPrice: "₹1,200",
      duration: "10 MINS / ~12-15 LAPS",
      features: [
        "Dual Steering & Dual Honda Engines",
        "Passenger Height 3'6\"+ with Adult",
        "Dual Safety Harness & Roll Bar"
      ]
    },
    {
      id: "sprint-cadet",
      number: "03",
      category: "CADET",
      tag: "JUNIOR CLASS",
      name: "CADET JUNIOR SPRINT",
      kartName: "SODI LR5 CADET",
      desc: "Calibrated speed-restricted junior chassis designed for young champions.",
      power: "6.5 HP",
      topSpeed: "45 KM/H",
      engine: "160CC HONDA OHV",
      weekdayPrice: "₹650",
      weekendPrice: "₹760",
      duration: "10 MINS / ~12-15 LAPS",
      features: [
        "Calibrated Speed Limiter Controls",
        "Padded Ergonomic Bucket Seat",
        "Junior Helmet & Neck Guard"
      ]
    }
  ];

  const REAL_PACKAGES = [
    {
      id: "pkg-5",
      number: "01",
      category: "ROOKIE",
      name: "5 SESSIONS + 1 BOWLING FREE",
      kartName: "PRO / CADET FLEET",
      desc: "Starter multi-session racing pass with complimentary bowling included.",
      power: "13.0 HP",
      topSpeed: "75 KM/H",
      engine: "PRO FLEET PASS",
      price: "₹3,250 / ₹3,800",
      priceNote: "Weekday: ₹3,250 | Weekend: ₹3,800",
      duration: "5 SESSIONS",
      included: [
        "Weekday - 5 sessions + 1 Bowling FREE (₹3,250)",
        "Weekend - 5 sessions + 1 Bowling FREE (₹3,800)",
        "DOT-certified helmet & balaclava included",
        "1 free bowling game included"
      ],
      tag: "5 SESSIONS"
    },
    {
      id: "pkg-10",
      number: "02",
      category: "PRO",
      name: "10 SESSIONS + 1 FREE + 1 BOWLING",
      kartName: "SHAREABLE PASS",
      desc: "Maximum popular value package shareable with friends and family.",
      power: "13.0 HP",
      topSpeed: "75 KM/H",
      engine: "PRO FLEET PASS",
      price: "₹6,500 / ₹7,600",
      priceNote: "Weekday: ₹6,500 | Weekend: ₹7,600",
      duration: "10 + 1 SESSIONS",
      included: [
        "Weekday - 10 sessions + 1 Session + 1 Bowling FREE (₹6,500)",
        "Weekend - 10 sessions + 1 Session + 1 Bowling FREE (₹7,600)",
        "Live RaceFacer telemetry tracking",
        "Shareable with friends & family"
      ],
      tag: "MOST POPULAR"
    },
    {
      id: "pkg-15",
      number: "03",
      category: "HYPER",
      name: "15 SESSIONS + 2 FREE + 2 BOWLING",
      kartName: "GROUP DRIVER PASS",
      desc: "Championship group volume pass for corporate leagues and race teams.",
      power: "13.0 HP",
      topSpeed: "75 KM/H",
      engine: "PRO FLEET PASS",
      price: "₹9,750 / ₹11,400",
      priceNote: "Weekday: ₹9,750 | Weekend: ₹11,400",
      duration: "15 + 2 SESSIONS",
      included: [
        "Weekday - 15 sessions + 2 Sessions + 2 Bowling FREE (₹9,750)",
        "Weekend - 15 sessions + 2 Sessions + 2 Bowling FREE (₹11,400)",
        "Shareable driver group pass",
        "Maximum flexibility across 6 months"
      ],
      tag: "BEST VALUE"
    },
    {
      id: "pkg-20",
      number: "04",
      category: "HYPER",
      name: "20 SESSIONS + 3 FREE + 3 BOWLING",
      kartName: "MEGA COMBO FLEET",
      desc: "Ultimate track time pass with maximum bonus sessions and bowling.",
      power: "13.0 HP",
      topSpeed: "75 KM/H",
      engine: "PRO FLEET PASS",
      price: "₹13,000 / ₹15,200",
      priceNote: "Weekday: ₹13,000 | Weekend: ₹15,200",
      duration: "20 + 3 SESSIONS",
      included: [
        "Weekday - 20 sessions + 3 Session + 3 Bowling FREE (₹13,000)",
        "Weekend - 20 sessions + 3 Session + 3 Bowling FREE (₹15,200)",
        "Maximum track time & savings",
        "3 bonus sessions + 3 bowling games"
      ],
      tag: "MEGA COMBO"
    }
  ];

  const renderSprintCard = (item, key) => (
    <div
      key={key}
      className="package-card-hover w-[82vw] xs:w-[310px] sm:w-[350px] lg:w-[380px] max-w-[380px] shrink-0 p-5 sm:p-6 rounded-2xl bg-[#F9F9F9] border-2 border-[#E5E5E5] flex flex-col justify-between shadow-sm group text-left relative"
    >
      <div className="space-y-4">
        {/* Top Telemetry Header */}
        <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-2.5">
          <span className="font-mono text-xs font-bold text-[#F47C20] tracking-wider">
            PACKAGE {item.number}
          </span>
          <span className="px-2.5 py-0.5 rounded-[3px] bg-[#0A0A0A] text-white font-mono text-[9px] font-bold uppercase tracking-wider group-hover:bg-[#F47C20] transition-colors">
            {item.category}
          </span>
        </div>

        {/* Kart Name & Title */}
        <div>
          <span className="font-mono text-[10px] font-bold text-[#888888] uppercase tracking-widest block mb-0.5">
            {item.kartName}
          </span>
          <h3 className="text-lg sm:text-xl font-display font-bold text-[#0A0A0A] uppercase tracking-wide group-hover:text-[#F47C20] transition-colors leading-tight">
            {item.name}
          </h3>
          <p className="text-xs font-sans text-[#555555] leading-relaxed mt-1 line-clamp-2">
            {item.desc}
          </p>
        </div>

        {/* Key Specifications Grid */}
        <div className="grid grid-cols-3 gap-2 py-2 px-2.5 rounded-lg bg-white border border-[#EAEAEA] text-center font-mono">
          <div>
            <span className="text-[8px] text-[#888888] uppercase block">POWER</span>
            <span className="text-[11px] font-bold text-[#0A0A0A]">{item.power}</span>
          </div>
          <div className="border-x border-[#EAEAEA]">
            <span className="text-[8px] text-[#888888] uppercase block">TOP SPEED</span>
            <span className="text-[11px] font-bold text-[#F47C20]">{item.topSpeed}</span>
          </div>
          <div>
            <span className="text-[8px] text-[#888888] uppercase block">ENGINE</span>
            <span className="text-[10px] font-bold text-[#0A0A0A] truncate block">{item.engine}</span>
          </div>
        </div>

        {/* Pricing Box */}
        <div className="py-2 px-3 rounded-lg bg-white border border-[#EAEAEA] flex items-center justify-between">
          <div>
            <span className="text-[9px] font-mono text-[#888888] block uppercase">WEEKDAY</span>
            <div className="text-base sm:text-lg font-display font-bold text-[#0A0A0A]">{item.weekdayPrice}</div>
          </div>
          <div className="w-[1px] h-6 bg-[#EAEAEA]" />
          <div>
            <span className="text-[9px] font-mono text-[#888888] block uppercase">WEEKEND</span>
            <div className="text-base sm:text-lg font-display font-bold text-[#F47C20]">{item.weekendPrice}</div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-1.5 pt-1">
          {item.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#444444]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F47C20] shrink-0 mt-0.5" />
              <span className="leading-snug">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 sm:pt-5 mt-4 border-t border-[#EAEAEA]">
        <MagneticButton
          href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
          className="w-full py-2 px-4 text-xs font-bold justify-center"
        >
          VIEW PACKAGE &rarr;
        </MagneticButton>
      </div>
    </div>
  );

  const renderPackageCard = (pkg, key) => (
    <div
      key={key}
      className="package-card-hover w-[82vw] xs:w-[310px] sm:w-[340px] lg:w-[360px] max-w-[360px] shrink-0 p-5 sm:p-6 rounded-2xl bg-[#F9F9F9] border-2 border-[#E5E5E5] flex flex-col justify-between shadow-sm group text-left relative"
    >
      <div className="space-y-4">
        {/* Top Telemetry Header */}
        <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-2.5">
          <span className="font-mono text-xs font-bold text-[#F47C20] tracking-wider">
            PACKAGE {pkg.number}
          </span>
          <span className="px-2.5 py-0.5 rounded-[3px] bg-[#0A0A0A] text-white font-mono text-[9px] font-bold uppercase tracking-wider group-hover:bg-[#F47C20] transition-colors">
            {pkg.category}
          </span>
        </div>

        {/* Kart Name & Title */}
        <div>
          <span className="font-mono text-[10px] font-bold text-[#888888] uppercase tracking-widest block mb-0.5">
            {pkg.kartName}
          </span>
          <h3 className="text-base font-display font-bold text-[#0A0A0A] uppercase tracking-wide group-hover:text-[#F47C20] transition-colors leading-snug">
            {pkg.name}
          </h3>
          <p className="text-xs font-sans text-[#555555] leading-relaxed mt-1 line-clamp-2">
            {pkg.desc}
          </p>
        </div>

        {/* Key Specifications Grid */}
        <div className="grid grid-cols-3 gap-2 py-2 px-2.5 rounded-lg bg-white border border-[#EAEAEA] text-center font-mono">
          <div>
            <span className="text-[8px] text-[#888888] uppercase block">POWER</span>
            <span className="text-[11px] font-bold text-[#0A0A0A]">{pkg.power}</span>
          </div>
          <div className="border-x border-[#EAEAEA]">
            <span className="text-[8px] text-[#888888] uppercase block">TOP SPEED</span>
            <span className="text-[11px] font-bold text-[#F47C20]">{pkg.topSpeed}</span>
          </div>
          <div>
            <span className="text-[8px] text-[#888888] uppercase block">ENGINE</span>
            <span className="text-[10px] font-bold text-[#0A0A0A] truncate block">{pkg.engine}</span>
          </div>
        </div>

        {/* Price Display */}
        <div className="py-2 border-y border-[#EAEAEA]">
          <span className="text-[9px] font-mono text-[#888888] block uppercase">PACKAGE PRICE</span>
          <div className="text-xl font-display font-bold text-[#0A0A0A]">
            {pkg.price}
          </div>
          <span className="text-[10px] font-sans text-[#666666]">
            {pkg.priceNote}
          </span>
        </div>

        {/* What's Included Bullet Inclusions */}
        <div className="space-y-2 pt-1">
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
      <div className="pt-5 mt-4 border-t border-[#EAEAEA]">
        <MagneticButton
          href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
          className="w-full py-2 px-4 text-xs font-bold justify-center"
        >
          VIEW PACKAGE &rarr;
        </MagneticButton>
      </div>
    </div>
  );

  return (
    <section id="pricing" className="py-14 sm:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-t border-[#EAEAEA] bg-white text-[#111111]">
      <div className="space-y-12 sm:space-y-16">
        
        {/* Section Header with 02 // RACE & PACKAGES and CHOOSE YOUR RACE */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-6 text-left">
          <div>
            <span className="font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest block mb-1">
              02 // RACE & PACKAGES
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
              CHOOSE YOUR <span className="text-[#F47C20]">RACE</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#666666] max-w-md">
            Championship-calibrated rental sprint sessions and multi-session group passes with live telemetry tracking.
          </p>
        </div>

        {/* ── Sub-Section 01: Single Sprint Sessions Infinite Track ── */}
        <div className="space-y-6 text-left">
          <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-3">
            <span className="font-mono text-xs font-bold text-[#0A0A0A] uppercase tracking-wider">
              // SINGLE SPRINT SESSIONS (10 MINS)
            </span>
            <span className="font-mono text-[10px] text-[#F47C20] font-bold uppercase">
              100% INCLUSIVE OF GST & TAXES
            </span>
          </div>

          <div className="animate-packages-container packages-fade-mask relative w-full overflow-hidden flex py-2">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                aria-hidden={groupIndex === 1 ? 'true' : undefined}
                className="animate-packages-track-group flex items-stretch shrink-0"
              >
                {[...SINGLE_SPRINTS, ...SINGLE_SPRINTS].map((item, idx) => (
                  renderSprintCard(item, `sprint-${groupIndex}-${idx}`)
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Sub-Section 02: Multi-Session Value Passes Infinite Track ── */}
        <div className="space-y-6 text-left">
          <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-3">
            <span className="font-mono text-xs font-bold text-[#0A0A0A] uppercase tracking-wider">
              // MULTI-SESSION VALUE PASSES & COMBO PACKAGES
            </span>
            <span className="font-mono text-[10px] text-[#666666] font-bold uppercase">
              SHAREABLE WITH FRIENDS & FAMILY
            </span>
          </div>

          <div className="animate-packages-container packages-fade-mask relative w-full overflow-hidden flex py-2">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                aria-hidden={groupIndex === 1 ? 'true' : undefined}
                className="animate-packages-track-group flex items-stretch shrink-0"
              >
                {REAL_PACKAGES.map((pkg, idx) => (
                  renderPackageCard(pkg, `pkg-${groupIndex}-${idx}`)
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export const ContactSection = () => {
  const GOOGLE_MAPS_LINK = "https://www.google.com/maps/dir/?api=1&destination=Kartomania+Entertainland+Mall+Sector+83+Gurugram";

  return (
    <section id="contact" className="border-t border-[#EAEAEA] bg-white text-[#111111]">
      {/* ── 01: Venue & Direction Section ── */}
      <div className="py-14 sm:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-b border-[#EAEAEA]">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-4 text-left">
            <div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                ENTERTAINLAND MALL <span className="text-[#F47C20]">CIRCUIT</span>
              </h2>
            </div>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#F47C20] hover:bg-[#E0670E] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md shrink-0 cursor-pointer text-decoration-none"
            >
              <Navigation className="w-4 h-4" /> GET DIRECTIONS
            </a>
          </div>

          {/* Address Banner */}
          <div className="p-6 rounded-xl bg-[#F9F9F9] border border-[#E5E5E5] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#F47C20] font-bold uppercase tracking-widest block">OFFICIAL ADDRESS</span>
              <div className="text-base sm:text-lg font-sans font-bold text-[#0A0A0A]">
                Entertainland Mall, Sector 83, Manesar, Gurugram, Haryana 122004
              </div>
            </div>
            <span className="font-mono text-xs text-[#666666] font-bold uppercase shrink-0">
              ★ 10 MINS FROM GURGAON NH-48 EXIT
            </span>
          </div>

          {/* Embedded Interactive Google Map */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#E5E5E5] shadow-md">
            <iframe
              title="Kartomania Arena Location Map"
              src="https://maps.google.com/maps?q=Kartomania%2C%20Entertainland%20Mall%2C%20Sector%2083%2C%20Gurugram%2C%20Haryana&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 opacity-95 transition-all duration-500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ── 02: Contact & Hours Section ── */}
      <div className="py-14 sm:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto text-left">
        <div className="space-y-8">
          <div className="space-y-2">
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
                <a href="tel:+919717548897" className="block hover:text-[#F47C20] transition-colors font-bold text-[#0A0A0A] text-decoration-none">+91 97175 48897</a>
                <a href="tel:+919560492876" className="block hover:text-[#F47C20] transition-colors font-bold text-[#0A0A0A] text-decoration-none">+91 95604 92876</a>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-[#F47C20]">
                <Mail className="w-5 h-5" />
                <span className="text-xs uppercase font-bold tracking-wider">// EMAIL</span>
              </div>
              <a href="mailto:kartomania.ggn@gmail.com" className="block hover:text-[#F47C20] transition-colors font-bold font-sans text-sm text-[#0A0A0A] break-all text-decoration-none">
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
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.facebook.com/kartomaniacsggn/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-[#E5E5E5] hover:bg-[#F47C20] hover:text-white text-[#0A0A0A] transition-colors shadow-xs"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-[#E5E5E5] hover:bg-[#F47C20] hover:text-white text-[#0A0A0A] transition-colors shadow-xs"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919717548897?text=Hi%20Kartomania!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20racing%20session."
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-[#E5E5E5] hover:bg-[#25D366] hover:text-white text-[#0A0A0A] transition-colors shadow-xs"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
