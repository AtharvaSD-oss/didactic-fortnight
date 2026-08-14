import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import ScrollProgress from '../components/ScrollProgress';
import WhatsAppButton from '../components/WhatsAppButton';
import MagneticButton from '../components/MagneticButton';
import { Trophy, CheckCircle2, User, Users, Cake, Building2 } from 'lucide-react';

export const RacePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenBooking = () => {
    window.open("https://web.racefacer.com/kiosk/kartomaniaentertainlandmall", "_blank", "noopener,noreferrer");
  };

  const CATEGORIES = [
    {
      id: "individual",
      title: "INDIVIDUAL RACING",
      icon: User,
      desc: "Solo time-attack heat races in 270cc Sodi RT10 Pro karts with millisecond RaceFacer telemetry tracking.",
      badge: "SOLO RACERS"
    },
    {
      id: "group",
      title: "GROUP RACING",
      icon: Users,
      desc: "Multi-driver competitive heat races with friends & family, live sector timing, and podium photo ops.",
      badge: "FRIENDS & FAMILY"
    },
    {
      id: "birthday",
      title: "BIRTHDAY / CELEBRATION",
      icon: Cake,
      desc: "Birthday party Grand Prix packages featuring complimentary free bowling coupons, trophy ceremony, & paddock lounge.",
      badge: "PARTIES & EVENTS"
    },
    {
      id: "corporate",
      title: "CORPORATE / TEAM",
      icon: Building2,
      desc: "Exclusive circuit rentals, corporate championship leagues, custom trophies, and telemetry leaderboards.",
      badge: "CORPORATE LEAGUES"
    }
  ];

  const PACKAGES = [
    {
      id: "pro-kart",
      name: "PRO KART SINGLE SESSION",
      price: "₹550 / ₹650",
      priceNote: "Weekday / Weekend",
      duration: "6 MINUTES",
      included: [
        "270cc Sodi RT10 Pro Kart access",
        "DOT-certified helmet & balaclava",
        "Live RaceFacer telemetry tracking"
      ],
      conditions: "All taxes included. Non-transferable.",
      tag: "MOST POPULAR"
    },
    {
      id: "twin-kart",
      name: "TWIN KART (DUO / PARENT & CHILD)",
      price: "₹1,200",
      priceNote: "Per session (All Days)",
      duration: "6 MINUTES",
      included: [
        "500cc Twin dual-steering race kart",
        "Dual safety harnesses & protection",
        "Ideal for duo racers & parent/child"
      ],
      conditions: "All taxes included. Dual steering controls.",
      tag: "DUO EXPERIENCE"
    },
    {
      id: "cadet-kart",
      name: "CADET KART (JUNIOR PILOTS)",
      price: "₹450",
      priceNote: "Per session (All Days)",
      duration: "6 MINUTES",
      included: [
        "160cc calibrated junior chassis",
        "Speed limiter governor safety",
        "Junior helmet & rib protector"
      ],
      conditions: "All taxes included. Minimum height 4ft.",
      tag: "JUNIOR RACING"
    },
    {
      id: "5-session-bundle",
      name: "5-SESSION VALUE BUNDLE",
      price: "₹3,250 / ₹3,800",
      priceNote: "Weekday / Weekend",
      duration: "30 MINUTES (5 X 6-MIN)",
      included: [
        "5 Sodi RT10 Pro race sessions",
        "1 FREE Complimentary Bowling Coupon",
        "Shareable driver pass & telemetry app"
      ],
      conditions: "All sessions must be used on the day of purchase.",
      tag: "BEST VALUE"
    }
  ];

  const ELIGIBILITY = [
    {
      title: "ADULTS & TEENS",
      req: "Height 5ft+ (152cm+)",
      desc: "Eligible for 270cc Sodi RT10 Pro karts reaching speeds up to 70 km/h on the 720m asphalt circuit."
    },
    {
      title: "JUNIOR DRIVERS",
      req: "Height 4ft+ (122cm+)",
      desc: "Eligible for 160cc Cadet karts equipped with speed limiters and junior safety padding."
    },
    {
      title: "DUO DRIVERS",
      req: "Parent & Child or Duo Adults",
      desc: "Eligible for 500cc Twin dual-steering karts allowing joint track driving."
    },
    {
      title: "SAFETY REQUIREMENTS",
      req: "Flat Closed-Toe Shoes Required",
      desc: "Full safety helmets, sanitary balaclavas, and safety briefings provided free before every session."
    }
  ];

  const BOOKING_STEPS = [
    {
      step: "01",
      title: "CHOOSE YOUR RACE",
      desc: "Select your preferred karting session, duo experience, or multi-session bundle."
    },
    {
      step: "02",
      title: "SELECT YOUR TIME",
      desc: "Pick your date & arrival time slot via the 1-tap RaceFacer online kiosk."
    },
    {
      step: "03",
      title: "GET ON THE GRID",
      desc: "Arrive at Entertainland Mall, gear up at the paddock, and launch onto the 720m asphalt track!"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F47C20] selection:text-white relative overflow-x-hidden text-left">
      <ScrollProgress />
      <Cursor />

      {/* Navigation Header */}
      <Navbar
        activeSection="pricing"
        onNavigate={() => {}}
        onOpenSearch={() => {}}
        onOpenBooking={handleOpenBooking}
      />

      <main className="relative z-10 pt-24 sm:pt-32">
        {/* ============================================================
            01 — HERO
        ============================================================ */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5]/10 border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-[#F47C20]" /> // OFFICIAL RACING PACKAGES
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold text-white uppercase tracking-tight leading-none">
              CHOOSE YOUR <br />
              <span className="text-[#F47C20]">RACE.</span>
            </h1>

            <p className="text-lg sm:text-2xl font-sans text-gray-300 font-medium leading-relaxed">
              Pick your experience and get ready for the grid.
            </p>

            <div className="pt-4">
              <MagneticButton onClick={handleOpenBooking} className="py-4 px-10 text-xs font-bold">
                BOOK YOUR RACE &rarr;
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* ============================================================
            02 — RACING EXPERIENCES
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
          <div className="space-y-10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">02</span>
                <span className="text-white text-sm font-bold font-mono">/ RACING EXPERIENCES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">
                VERIFIED RACE <span className="text-[#F47C20]">CATEGORIES</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((cat) => {
                const IconComp = cat.icon;
                return (
                  <div key={cat.id} className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#F47C20] transition-colors space-y-4 group">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-sm bg-[#F47C20] text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                        {cat.badge}
                      </span>
                      <IconComp className="w-5 h-5 text-[#F47C20] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white uppercase">{cat.title}</h3>
                    <p className="text-xs font-sans text-gray-300 leading-relaxed">{cat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — PACKAGES
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-[2px] h-5 bg-[#F47C20]" />
                  <span className="text-[#F47C20] text-sm font-bold font-mono">03</span>
                  <span className="text-white text-sm font-bold font-mono">/ OFFICIAL PACKAGES</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase">
                  REAL KARTOMANIA <span className="text-[#F47C20]">PRICING</span>
                </h2>
              </div>
              <span className="text-xs font-mono text-gray-400">
                All prices inclusive of all taxes
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="p-6 rounded-2xl bg-[#141414] border-2 border-white/10 hover:border-[#F47C20] transition-all duration-300 flex flex-col justify-between text-left shadow-md group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-sm bg-[#F47C20] text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                        {pkg.tag}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 font-bold uppercase">
                        {pkg.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide group-hover:text-[#F47C20] transition-colors">
                      {pkg.name}
                    </h3>

                    <div className="py-2 border-y border-white/10">
                      <span className="text-[9px] font-mono text-gray-400 block uppercase">PACKAGE PRICE</span>
                      <div className="text-2xl font-display font-bold text-white">
                        {pkg.price}
                      </div>
                      <span className="text-[10px] font-sans text-gray-400">
                        {pkg.priceNote}
                      </span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] font-mono text-[#F47C20] font-bold uppercase block tracking-wider">
                        // WHAT'S INCLUDED
                      </span>
                      <div className="space-y-1.5">
                        {pkg.included.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs font-sans text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F47C20] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <span className="text-[9px] font-mono text-gray-400 uppercase block font-bold">CONDITIONS:</span>
                      <p className="text-[11px] font-sans text-gray-400 leading-snug">{pkg.conditions}</p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/10">
                    <MagneticButton
                      onClick={handleOpenBooking}
                      className="w-full py-2.5 px-4 text-xs font-bold justify-center"
                    >
                      BOOK NOW &rarr;
                    </MagneticButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            04 — WHO CAN RACE?
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">04</span>
                <span className="text-white text-sm font-bold font-mono">/ WHO CAN RACE?</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">
                ELIGIBILITY & <span className="text-[#F47C20]">REQUIREMENTS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ELIGIBILITY.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#F47C20] transition-colors space-y-3">
                  <span className="px-2 py-0.5 rounded-sm bg-[#F47C20] text-white font-mono text-[9px] font-bold uppercase">{item.req}</span>
                  <h3 className="text-lg font-display font-bold text-white uppercase">{item.title}</h3>
                  <p className="text-xs font-sans text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — HOW BOOKING WORKS
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">05</span>
                <span className="text-white text-sm font-bold font-mono">/ HOW BOOKING WORKS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">
                3 SIMPLE <span className="text-[#F47C20]">STEPS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
              {BOOKING_STEPS.map((step, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#F47C20] transition-colors space-y-4">
                  <span className="text-3xl font-display font-bold text-[#F47C20] block">{step.step}</span>
                  <h3 className="text-xl font-display font-bold text-white uppercase">{step.title}</h3>
                  <p className="text-xs font-sans text-gray-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            06 — FINAL CTA
        ============================================================ */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-6xl font-display font-bold text-white uppercase tracking-tight">
              YOUR RACE <span className="text-[#F47C20]">AWAITS.</span>
            </h2>
            <p className="text-base sm:text-xl font-sans text-gray-300">
              Select your session preferences and launch onto Northern India’s premier 720m outdoor circuit.
            </p>
            <div className="pt-4 flex justify-center">
              <MagneticButton onClick={handleOpenBooking} className="py-4 px-10 text-xs font-bold">
                BOOK NOW &rarr;
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

export default RacePage;
