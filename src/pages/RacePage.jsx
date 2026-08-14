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
      conditions: "All taxes included. Valid for specified sessions.",
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
      conditions: "All taxes included. Valid for specified sessions.",
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
        "Shareable driver pass & telemetry app"
      ],
      conditions: "All taxes included. Valid for specified sessions.",
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
      conditions: "All taxes included. Valid for specified sessions.",
      tag: "MEGA COMBO"
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
              <Trophy className="w-3.5 h-3.5 text-[#F47C20]" /> // OFFICIAL RACING PACKAGES
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
              CHOOSE YOUR <br />
              <span className="text-[#F47C20]">RACE.</span>
            </h1>

            <p className="text-lg sm:text-2xl font-sans text-[#555555] font-medium leading-relaxed">
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
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">02</span>
                <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ RACING EXPERIENCES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                VERIFIED RACE <span className="text-[#F47C20]">CATEGORIES</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((cat) => {
                const IconComp = cat.icon;
                return (
                  <div key={cat.id} className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-4 group shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-sm bg-[#0A0A0A] text-white font-mono text-[9px] font-bold uppercase tracking-wider group-hover:bg-[#F47C20] transition-colors">
                        {cat.badge}
                      </span>
                      <IconComp className="w-5 h-5 text-[#F47C20] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#0A0A0A] uppercase">{cat.title}</h3>
                    <p className="text-xs font-sans text-[#555555] leading-relaxed">{cat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — PACKAGES
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-[2px] h-5 bg-[#F47C20]" />
                  <span className="text-[#F47C20] text-sm font-bold font-mono">03</span>
                  <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ OFFICIAL PACKAGES</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase">
                  REAL KARTOMANIA <span className="text-[#F47C20]">PRICING</span>
                </h2>
              </div>
              <span className="text-xs font-mono text-[#666666]">
                All prices inclusive of all taxes
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="p-6 rounded-2xl bg-[#F9F9F9] border-2 border-[#E5E5E5] hover:border-[#F47C20] transition-all duration-300 flex flex-col justify-between text-left shadow-sm hover:shadow-md group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-sm bg-[#0A0A0A] text-white font-mono text-[9px] font-bold uppercase tracking-wider group-hover:bg-[#F47C20] transition-colors">
                        {pkg.tag}
                      </span>
                      <span className="text-[10px] font-mono text-[#888888] font-bold uppercase">
                        {pkg.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-[#0A0A0A] uppercase tracking-wide group-hover:text-[#F47C20] transition-colors">
                      {pkg.name}
                    </h3>

                    <div className="py-2 border-y border-[#EAEAEA]">
                      <span className="text-[9px] font-mono text-[#888888] block uppercase">PACKAGE PRICE</span>
                      <div className="text-2xl font-display font-bold text-[#0A0A0A]">
                        {pkg.price}
                      </div>
                      <span className="text-[10px] font-sans text-[#666666]">
                        {pkg.priceNote}
                      </span>
                    </div>

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

                    <div className="pt-2 border-t border-[#EAEAEA]">
                      <span className="text-[9px] font-mono text-[#888888] uppercase block font-bold">CONDITIONS:</span>
                      <p className="text-[11px] font-sans text-[#666666] leading-snug">{pkg.conditions}</p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#EAEAEA]">
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
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">04</span>
                <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ WHO CAN RACE?</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                ELIGIBILITY & <span className="text-[#F47C20]">REQUIREMENTS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ELIGIBILITY.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-3 shadow-sm">
                  <span className="px-2 py-0.5 rounded-sm bg-[#0A0A0A] text-white font-mono text-[9px] font-bold uppercase">{item.req}</span>
                  <h3 className="text-lg font-display font-bold text-[#0A0A0A] uppercase">{item.title}</h3>
                  <p className="text-xs font-sans text-[#555555] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — HOW BOOKING WORKS
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">05</span>
                <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ HOW BOOKING WORKS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                3 SIMPLE <span className="text-[#F47C20]">STEPS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
              {BOOKING_STEPS.map((step, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-4 shadow-sm">
                  <span className="text-3xl font-display font-bold text-[#F47C20] block">{step.step}</span>
                  <h3 className="text-xl font-display font-bold text-[#0A0A0A] uppercase">{step.title}</h3>
                  <p className="text-xs font-sans text-[#555555] leading-relaxed">{step.desc}</p>
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
            <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
              YOUR RACE <span className="text-[#F47C20]">AWAITS.</span>
            </h2>
            <p className="text-base sm:text-xl font-sans text-[#555555]">
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
