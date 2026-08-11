import React from 'react';
import { Trophy, Zap, MapPin, Mail, Phone, Clock, Sparkles } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';
import MagneticButton from './MagneticButton';
import GameCanvas from './GameCanvas';
import TrackCircuitVisual from './TrackCircuitVisual';

export const TrackSection = ({ onOpenBooking }) => (
  <section id="track" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-gray-800 text-white relative z-20">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
      <div className="space-y-4 lg:w-5/12 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 font-mono text-xs font-bold uppercase tracking-widest">
          <MapPin className="w-3.5 h-3.5" /> CIRCUIT TELEMETRY
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight">
          THE MONACO OF <span className="text-[#00d9ff]">OUTDOOR KARTING</span>
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed">
          Designed by championship racing engineers. Features a full 720-meter outdoor asphalt circuit with high-banked hairpin apexes, technical chicanes, and high-speed overtaking straights.
        </p>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="p-4 bg-black/40 border border-gray-800 rounded-2xl">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Surface</span>
            <div className="text-base font-display font-bold text-white">Outdoor Polymer Asphalt</div>
          </div>
          <div className="p-4 bg-black/40 border border-gray-800 rounded-2xl">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Barrier System</span>
            <div className="text-base font-display font-bold text-[#00d9ff]">F1 Pro Safety Barrier</div>
          </div>
        </div>

        <div className="pt-2">
          <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" onClick={onOpenBooking} className="py-3 px-8 text-xs font-bold shadow-[0_0_20px_rgba(0,217,255,0.3)]">
            Reserve Track Slot ⚡
          </MagneticButton>
        </div>
      </div>

      <div className="lg:w-7/12 w-full">
        {/* High-End 2D Schematic Circuit Telemetry Visual Model */}
        <TrackCircuitVisual />
      </div>
    </div>
  </section>
);

export const KartsSection = () => (
  <section id="karts" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-gray-800 text-white relative z-20">
    <div className="text-center space-y-2 mb-8 sm:mb-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 font-mono text-xs font-bold uppercase tracking-wider">
        <Sparkles className="w-3.5 h-3.5" /> 4 KART FLEET CATEGORIES
      </div>
      <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase">HIGH-PERFORMANCE RACE FLEET</h2>
    </div>

    {/* Real Fleet Grid Staging Photo Banner */}
    <div className="mb-8 rounded-3xl overflow-hidden bg-black border border-gray-800 relative h-64 sm:h-80 group shadow-2xl">
      <img
        src="/images/karts.webp"
        alt="Kartomania Real Fleet Lined Up on Staging Grid"
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-black/30 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 z-10 text-left">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-[#00d9ff] text-black font-mono text-[9px] font-black uppercase tracking-wider shadow-md">
            STAGING GRID READY
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase mt-1">
            OFFICIAL KARTOMANIA FLEET
          </h3>
          <p className="text-xs font-mono text-gray-300">
            Maintained and calibrated daily by championship motorsport mechanics.
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {[
        { name: "SODI RT10 PRO", engine: "270cc Honda GX", hp: "13.0 HP", topSpeed: "75 KM/H", level: "PRO SERIES" },
        { name: "SUPER PRO TWIN", engine: "Twin-Engine 390cc", hp: "22.0 HP", topSpeed: "88 KM/H", level: "CHAMPIONSHIP" },
        { name: "LAMBO E-BOOSTER", engine: "Dual Electric Brushless", hp: "18.5 HP", topSpeed: "85 KM/H", level: "HYPER E-SERIES" },
        { name: "SODI LR5 JUNIOR", engine: "160cc Honda GX", hp: "6.5 HP", topSpeed: "45 KM/H", level: "CADET ACADEMY" }
      ].map((kart, idx) => (
        <div key={idx} className="floating-card rounded-3xl p-5 sm:p-6 transition-all duration-300 group flex flex-col justify-between text-left">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 font-bold uppercase">
                {kart.level}
              </span>
              <Zap className="w-4 h-4 text-gray-400 group-hover:text-[#00d9ff] transition-colors" />
            </div>

            <h3 className="text-base sm:text-lg font-display font-bold text-white uppercase mb-3">{kart.name}</h3>

            <div className="space-y-1.5 font-mono text-xs text-gray-300 mb-2">
              <div className="flex justify-between border-b border-gray-800 pb-1">
                <span className="text-gray-400">ENGINE:</span>
                <span className="text-white font-bold">{kart.engine}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-1">
                <span className="text-gray-400">OUTPUT:</span>
                <span className="text-[#00d9ff] font-bold">{kart.hp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">MAX SPEED:</span>
                <span className="text-[#d4af37] font-bold">{kart.topSpeed}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const LeapFrogSection = () => {
  const [activeImage, setActiveImage] = React.useState(null);

  const teamPhotos = [
    {
      src: "/gallery/rotax-max-kart-71.jpg",
      title: "Rotax Max Kart #71 Apex",
      tag: "NATIONAL KARTING",
      desc: "Starting grid lineup of Tony Kart / Leap Frog Racing Kart #71 at the National Karting Championship."
    },
    {
      src: "/leap-frog/leap-frog-2.jpg",
      title: "High-Speed Motion Telemetry",
      tag: "CHICANE SPEED",
      desc: "Full throttle velocity along the national circuit barrier loops."
    },
    {
      src: "/leap-frog/leap-frog-3.jpg",
      title: "Rotax Max Classes 2023 Champions",
      tag: "PODIUM VICTORY",
      desc: "Leap Frog Racing driver on 1st place podium trophy ceremony."
    },
    {
      src: "/leap-frog/leap-frog-4.jpg",
      title: "Race Engineers & Pit Crew",
      tag: "TECHNICAL SUPPORT",
      desc: "Highly experienced international standard mechanics and engineers."
    }
  ];

  return (
    <section id="leap-frog" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-gray-800 text-white relative z-20">
      <div className="space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00d9ff]/15 border border-[#00d9ff]/30 text-[#00d9ff] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> PROFESSIONAL MOTORSPORT DIVISION
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight">
            LEAP FROG <span className="text-[#00d9ff]">RACING</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#d4af37] tracking-wider uppercase font-bold">
            THE ONLY PROFESSIONAL RACING TEAM FROM THE NORTH
          </p>
        </div>

        {/* Narrative & Stats Dashboard Card */}
        <div className="floating-card rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 space-y-3 text-left">
              <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-widest font-bold">// HERITAGE & TELEMETRY</span>
              <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed">
                Leap Frog Racing is a Professional Racing & Karting Team formed in the year <strong className="text-white">2018</strong> taking part in the <strong className="text-white">JK Tyre FMSCI National Racing Championship</strong>, <strong className="text-white">MRF National Championship</strong> & <strong className="text-white">Rotax Max National Karting Championship</strong>.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                Leap Frog Racing is owned by well experienced and successful Indian Racing Driver <strong className="text-[#00d9ff]">Rohit Khanna</strong> who has been a core part of the Indian Motorsport fraternity for more than <strong className="text-white">2 decades</strong>. The team boasts international-standard technical support, race engineers, and mechanics.
              </p>
            </div>

            {/* Stats Telemetry Badge */}
            <div className="grid grid-cols-2 gap-3 font-mono">
              <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-800 text-center shadow-sm">
                <div className="text-xl font-display font-bold text-[#00d9ff]">2018</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">ESTABLISHED</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-800 text-center shadow-sm">
                <div className="text-xl font-display font-bold text-white">20+ YRS</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">DRIVER EXP.</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-800 text-center col-span-2 shadow-sm">
                <div className="text-xs font-display font-bold text-white uppercase">FMSCI & ROTAX</div>
                <div className="text-[9px] text-[#d4af37] uppercase tracking-wider font-bold">NATIONAL CHAMPIONSHIPS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Team Images Gallery Grid (2x2 Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {teamPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(photo)}
              className="relative group rounded-3xl overflow-hidden cursor-pointer border border-gray-800 hover:border-[#00d9ff]/70 transition-all duration-300 shadow-xl h-64 sm:h-72 bg-gray-900"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

              <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1 text-left">
                <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#00d9ff] text-black uppercase font-black tracking-widest">
                  {photo.tag}
                </span>
                <h3 className="text-base font-display font-bold text-white uppercase group-hover:text-[#d4af37] transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs font-mono text-gray-300 line-clamp-1 sm:line-clamp-2">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
          >
            <div className="relative max-w-4xl w-full bg-[#0a0e27] border border-[#00d9ff]/30 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#00d9ff] border border-white/20 transition-colors cursor-pointer"
              >
                ✕
              </button>
              <img src={activeImage.src} alt={activeImage.title} className="w-full max-h-[75vh] object-contain bg-black" />
              <div className="p-6 bg-[#0a0e27] border-t border-gray-800 flex items-center justify-between text-white text-left">
                <div>
                  <span className="text-[10px] font-mono text-[#00d9ff] uppercase font-bold">{activeImage.tag}</span>
                  <h4 className="text-xl font-display font-bold text-white uppercase">{activeImage.title}</h4>
                  <p className="text-xs font-mono text-gray-400 mt-1">{activeImage.desc}</p>
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
  const [activePromo, setActivePromo] = React.useState(null);

  const coreThreeOffers = [
    {
      id: 1,
      title: "MONDAY BONANZA",
      badge: "50% OFF",
      desc: "Buy 1 Session and Get Another Session at 50% Off every Monday!",
      price: "BOGO 50% OFF",
      tag: "WEEKDAY DEALS"
    },
    {
      id: 2,
      title: "HAPPY HOURS WEDNESDAY",
      badge: "₹500 SPECIAL",
      desc: "Kart your heart out! Buy an authentic racing session @ ₹500/- Only on Wednesdays.",
      price: "₹500 FLAT",
      tag: "HAPPY HOUR"
    },
    {
      id: 3,
      title: "FRIDAY FRENZY",
      badge: "BUY 2 GET 1 FREE",
      desc: "Buy 2 Sessions & the 3rd Session is completely FREE! Start, Kart, Repeat!",
      price: "3RD SESSION FREE",
      tag: "WEEKEND PREVIEW"
    }
  ];

  return (
    <section id="whats-new" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-gray-800 text-white relative z-20">
      <div className="text-center space-y-2 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 font-mono text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> LATEST OFFERS & SPECIAL PROMOTIONS
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
          WHAT'S <span className="text-[#00d9ff]">NEW</span>
        </h2>
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
          ★ ALL PRICES INCLUSIVE OF ALL TAXES
        </div>
      </div>

      {/* Featured Weekly Mega Banner */}
      <div className="mb-6 sm:mb-8">
        <div
          onClick={() => setActivePromo({
            id: 0,
            src: "/whats-new/weekly-offers.jpg",
            title: "WEEKLY MEGA RACING OFFERS",
            tag: "WEEKLY BONANZA",
            desc: "Monday BOGO 50% Off • Wednesday Happy Hour ₹500 • Friday Frenzy Buy 2 Get 1 Free!"
          })}
          className="relative group rounded-3xl overflow-hidden cursor-pointer border-2 border-[#00d9ff]/30 hover:border-[#00d9ff] transition-all duration-300 shadow-2xl bg-black"
        >
          <img
            src="/whats-new/weekly-offers.jpg"
            alt="Kartomania Weekly Offers - Monday BOGO, Wednesday Happy Hour, Friday Frenzy"
            className="w-full h-auto max-h-[460px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 text-left">
              <div>
                <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-[#00d9ff] text-black font-bold uppercase tracking-widest shadow-md">
                  CLICK TO VIEW FULL DETAILS
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase mt-1">
                  MONDAY BOGO &bull; WEDNESDAY HAPPY HOUR &bull; FRIDAY FRENZY
                </h3>
              </div>
              <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-2.5 px-5 text-xs shadow-[0_0_15px_rgba(0,217,255,0.4)]">
                Claim Weekly Deals &rarr;
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Core 3 Daily Offers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
        {coreThreeOffers.map((offer) => (
          <div
            key={offer.id}
            className="floating-card rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-3 text-left"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 font-mono text-[9px] font-bold uppercase tracking-wider">
                  {offer.tag}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 font-mono text-[9px] font-bold uppercase">
                  {offer.badge}
                </span>
              </div>
              <h3 className="text-lg font-display font-bold text-white uppercase">{offer.title}</h3>
              <p className="text-xs font-sans text-gray-300 leading-relaxed">{offer.desc}</p>
            </div>

            <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#d4af37]">{offer.price}</span>
              <span className="text-[10px] font-mono text-[#00d9ff] font-bold">VIEW &rarr;</span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Weekly Promo Lightbox Modal */}
      {activePromo && (
        <div
          onClick={() => setActivePromo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
        >
          <div className="relative max-w-4xl w-full bg-[#0a0e27] border border-[#00d9ff]/30 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActivePromo(null)}
              className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#00d9ff] border border-white/20 transition-colors cursor-pointer"
            >
              ✕
            </button>
            <img src={activePromo.src} alt={activePromo.title} className="w-full max-h-[75vh] object-contain bg-black" />
            <div className="p-6 bg-[#0a0e27] border-t border-gray-800 flex items-center justify-between text-white text-left">
              <div>
                <span className="text-[10px] font-mono text-[#00d9ff] uppercase font-bold">{activePromo.tag}</span>
                <h4 className="text-xl font-display font-bold text-white uppercase">{activePromo.title}</h4>
                <p className="text-xs font-mono text-gray-400 mt-1">{activePromo.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
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
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-800 text-white relative z-20">
      <div className="text-center space-y-3 mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
          ★ ALL PRICES INCLUSIVE OF ALL TAXES
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight">
          OFFICIAL <span className="text-[#00d9ff]">PRICING & COMBOS</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-gray-400 max-w-2xl mx-auto">
          Exclusive multi-session packages featuring complimentary free bowling and bonus race sessions.
        </p>
      </div>

      {/* 1. Official Value Combo Packages (From Counter Tariff) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
        {/* Weekday Combos */}
        <div className="floating-card rounded-3xl p-6 sm:p-7 shadow-2xl relative">
          <div className="flex flex-wrap items-start justify-between gap-3 pb-3 mb-3 border-b border-gray-800">
            <div className="space-y-0.5 text-left">
              <span className="text-[9px] font-mono font-bold text-[#00d9ff] uppercase tracking-widest block">SUPER VALUE DEALS</span>
              <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">WEEKDAY COMBOS</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#00d9ff]/15 text-[#00d9ff] font-mono text-xs font-bold uppercase whitespace-nowrap border border-[#00d9ff]/30">
              MON – THU
            </span>
          </div>

          <div className="space-y-3">
            {weekdayCombos.map((item, idx) => (
              <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-black/40 border border-gray-800 hover:border-[#00d9ff]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors text-left">
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-display font-bold text-white uppercase">{item.package}</div>
                  <span className="inline-block px-2 py-0.5 rounded bg-[#00d9ff]/15 text-[#00d9ff] font-mono text-[9px] font-bold uppercase tracking-wider border border-[#00d9ff]/30">
                    🎁 {item.bonus}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-lg font-display font-black text-[#d4af37]">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekend Combos */}
        <div className="floating-card rounded-3xl p-6 sm:p-7 shadow-2xl border-[#d4af37]/40 relative">
          <div className="flex flex-wrap items-start justify-between gap-3 pb-3 mb-3 border-b border-gray-800">
            <div className="space-y-0.5 text-left">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono font-bold text-[#d4af37] uppercase tracking-widest block">PEAK RACING & ENTERTAINMENT</span>
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#EE3124] text-[8px] font-mono font-bold text-black uppercase tracking-wider shadow-sm">
                  ★ POPULAR
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">WEEKEND COMBOS</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] font-mono text-xs font-bold uppercase whitespace-nowrap border border-[#d4af37]/30">
              FRI – SUN & HOLIDAYS
            </span>
          </div>

          <div className="space-y-3">
            {weekendCombos.map((item, idx) => (
              <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-black/40 border border-gray-800 hover:border-[#d4af37]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors text-left">
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-display font-bold text-white uppercase">{item.package}</div>
                  <span className="inline-block px-2 py-0.5 rounded bg-[#d4af37]/15 text-[#d4af37] font-mono text-[9px] font-bold uppercase tracking-wider border border-[#d4af37]/30">
                    🔥 {item.bonus}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-lg font-display font-black text-[#d4af37]">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Standard Session Tariff Table */}
      <div className="floating-card rounded-3xl p-6 sm:p-7 shadow-2xl mb-8">
        <div className="pb-3 mb-3 border-b border-gray-800 text-left">
          <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
            STANDARD KARTING SESSIONS TARIFF
          </h3>
          <p className="text-xs font-mono text-gray-400">Pure track time rates without bowling additions (All Taxes Included).</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs sm:text-sm">
            <thead className="bg-black/60 text-[#00d9ff] uppercase text-[11px]">
              <tr>
                <th className="py-3 px-4 rounded-l-xl">SESSIONS</th>
                <th className="py-3 px-4 text-center">WEEKDAY (MON – THU)</th>
                <th className="py-3 px-4 text-right rounded-r-xl">WEEKEND (FRI – SUN)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-200">
              {standardRates.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#00d9ff]/5 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">{row.sessions}</td>
                  <td className="py-3 px-4 text-center font-display font-bold text-gray-300">{row.weekday}</td>
                  <td className="py-3 px-4 text-right font-display font-bold text-[#d4af37] text-sm sm:text-base">{row.weekend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Terms and Conditions Card */}
      <div className="floating-card rounded-3xl p-6 sm:p-7 space-y-3 text-left">
        <h4 className="font-display font-bold text-xs sm:text-sm text-[#00d9ff] uppercase tracking-wider">
          TERMS AND CONDITIONS
        </h4>
        <ul className="space-y-1.5 text-xs font-mono text-gray-300 list-disc list-inside">
          <li>Each karting session lasts 6 minutes of continuous pro racing on the track.</li>
          <li><strong>All prices are inclusive of all taxes.</strong></li>
          <li>All sessions and free bowling coupons must be consumed on the day they are bought.</li>
          <li>Packages are non-transferable and non-refundable.</li>
        </ul>

        <div className="pt-3 flex justify-center">
          <MagneticButton onClick={onOpenBooking} className="py-3.5 px-9 text-xs font-bold shadow-[0_0_30px_rgba(0,217,255,0.3)]">
            Book Your Race Now ⚡
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9";

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-gray-800 text-white relative z-20">
      <div className="space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00d9ff]/15 border border-[#00d9ff]/30 text-[#00d9ff] font-mono text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" /> ARENA LOCATION & NAVIGATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">
            FIND THE <span className="text-[#00d9ff]">ARENA</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gray-400 max-w-xl mx-auto">
            Located at Entertainland Mall, India's premier 720m outdoor pro karting circuit.
          </p>
        </div>

        {/* Location Info & CTAs */}
        <div className="floating-card rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-left font-mono">
            <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#00d9ff]">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// ARENA ADDRESS</span>
              </div>
              <div className="text-xs text-white font-sans font-semibold leading-relaxed">
                Entertainland Mall, Sector 83, Manesar, Gurugram.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#00d9ff]">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// OPEN ALL 7 DAYS</span>
              </div>
              <div className="text-xs text-white font-sans font-semibold space-y-0.5">
                <div>Mon – Fri: 2:00 PM – 11:00 PM</div>
                <div>Sat – Sun: 1:00 PM – 11:00 PM</div>
                <div className="text-emerald-400 font-bold">// Open All Days</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#00d9ff]">
                <Phone className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// CALL US / HOTLINE</span>
              </div>
              <div className="text-xs text-white font-sans font-semibold space-y-0.5">
                <a href="tel:+919717548897" className="block hover:text-[#00d9ff] transition-colors font-bold">+91 97175 48897</a>
                <a href="tel:+919560492876" className="block hover:text-[#00d9ff] transition-colors font-bold">+91 95604 92876</a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#00d9ff]">
                <Mail className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// EMAIL ENQUIRIES</span>
              </div>
              <div className="text-xs text-white font-sans font-semibold space-y-0.5">
                <a href="mailto:kartomania.ggn@gmail.com" className="block hover:text-[#00d9ff] transition-colors font-bold break-all">
                  kartomania.ggn@gmail.com
                </a>
                <div className="text-[10px] text-gray-400 font-mono">Corporate & Booking queries</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-800">
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-center lg:justify-start">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0e1430] hover:bg-[#00d9ff] border border-gray-800 hover:border-[#00d9ff] text-xs font-mono tracking-wider uppercase text-gray-200 hover:text-black font-bold transition-all shadow-sm group"
              >
                <MapPin className="w-4 h-4 text-[#00d9ff] group-hover:text-black group-hover:scale-110 transition-transform" />
                <span>GOOGLE MAPS</span>
              </a>

              <a
                href="https://www.facebook.com/kartomaniacsggn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0e1430] hover:bg-[#00d9ff] border border-gray-800 hover:border-[#00d9ff] text-xs font-mono tracking-wider uppercase text-gray-200 hover:text-black font-bold transition-all shadow-sm group"
              >
                <FacebookIcon className="w-4 h-4 text-[#00d9ff] group-hover:text-black group-hover:scale-110 transition-transform" />
                <span>FACEBOOK</span>
              </a>

              <a
                href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0e1430] hover:bg-[#00d9ff] border border-gray-800 hover:border-[#00d9ff] text-xs font-mono tracking-wider uppercase text-gray-200 hover:text-black font-bold transition-all shadow-sm group"
              >
                <InstagramIcon className="w-4 h-4 text-[#00d9ff] group-hover:text-black group-hover:scale-110 transition-transform" />
                <span>INSTAGRAM</span>
              </a>

              <a
                href="https://wa.me/919717548897?text=Hi%20Kartomania!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20racing%20session."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Hotline"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0e1430] hover:bg-[#25D366] border border-gray-800 hover:border-[#25D366] text-xs font-mono tracking-wider uppercase text-gray-200 hover:text-black font-bold transition-all shadow-sm group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-black group-hover:scale-110 transition-transform" />
                <span>WHATSAPP</span>
              </a>
            </div>

            <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3 px-8 text-xs font-bold whitespace-nowrap shadow-[0_0_20px_rgba(0,217,255,0.3)]">
              Book Your Race ⚡
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GameSection = () => (
  <section id="game" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-gray-800 relative z-20 text-white">
    <div className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00d9ff]/15 border border-[#00d9ff]/30 text-[#00d9ff] font-mono text-xs font-bold uppercase tracking-widest">
          <Trophy className="w-4 h-4" /> INTERACTIVE 2D KART RACER
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight">
          PRO <span className="text-[#00d9ff]">ARCADE</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-gray-400 max-w-xl mx-auto">
          Test your apex timing on our retro arcade simulator before taking our 720M outdoor track!
        </p>
      </div>

      {/* Embedded 2D Game Canvas Component */}
      <GameCanvas />
    </div>
  </section>
);
