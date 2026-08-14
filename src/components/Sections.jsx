import React from 'react';
import {
  MapPin,
  CheckCircle2
} from 'lucide-react';
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
