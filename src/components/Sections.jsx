import React from 'react';
import { Flag, Trophy, Shield, Zap, MapPin, Gauge, Flame, Mail, Phone, Clock } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';
import MagneticButton from './MagneticButton';
import GameCanvas from './GameCanvas';
import TrackCircuitVisual from './TrackCircuitVisual';

export const TrackSection = ({ onOpenBooking }) => (
  <section id="track" className="py-14 sm:py-18 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
      <div className="space-y-4 lg:w-5/12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE3124]/10 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
          <MapPin className="w-3.5 h-3.5" /> CIRCUIT TELEMETRY
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-gray-950 leading-tight">
          THE MONACO OF <span className="text-[#EE3124]">OUTDOOR KARTING</span>
        </h2>
        <p className="text-gray-700 text-xs sm:text-sm font-sans leading-relaxed">
          Designed by championship racing engineers. Features a full 720-meter outdoor asphalt circuit with high-banked hairpin apexes, technical chicanes, and high-speed overtaking straights.
        </p>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-[10px] font-mono text-gray-500 uppercase">Surface</span>
            <div className="text-base font-display font-bold text-gray-900">Outdoor Polymer Asphalt</div>
          </div>
          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-[10px] font-mono text-gray-500 uppercase">Barrier System</span>
            <div className="text-base font-display font-bold text-gray-900">F1 Pro Safety Barrier</div>
          </div>
        </div>

        <div className="pt-2">
          <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" onClick={onOpenBooking} className="py-3 px-6 text-xs">
            Reserve Track Slot
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
  <section id="karts" className="py-14 sm:py-18 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
    <div className="text-center space-y-2 mb-8 sm:mb-10">
      <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// 4 KART FLEET CATEGORIES</span>
      <h2 className="text-2xl sm:text-4xl font-display font-bold text-gray-950 uppercase">HIGH-PERFORMANCE RACE FLEET</h2>
    </div>

    {/* Real Fleet Grid Staging Photo Banner */}
    <div className="mb-8 rounded-2xl overflow-hidden bg-black border border-gray-200 relative h-64 sm:h-80 group shadow-lg">
      <img
        src="/images/karts.webp"
        alt="Kartomania Real Fleet Lined Up on Staging Grid"
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 z-10">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-[#EE3124] text-white font-mono text-[9px] font-bold uppercase tracking-wider">
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

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { name: "SODI RT10 PRO", engine: "270cc Honda GX", hp: "13.0 HP", topSpeed: "75 KM/H", level: "PRO SERIES" },
        { name: "SUPER PRO TWIN", engine: "Twin-Engine 390cc", hp: "22.0 HP", topSpeed: "88 KM/H", level: "CHAMPIONSHIP" },
        { name: "LAMBO E-BOOSTER", engine: "Dual Electric Brushless", hp: "18.5 HP", topSpeed: "85 KM/H", level: "HYPER E-SERIES" },
        { name: "SODI LR5 JUNIOR", engine: "160cc Honda GX", hp: "6.5 HP", topSpeed: "45 KM/H", level: "CADET ACADEMY" }
      ].map((kart, idx) => (
        <div key={idx} className="bg-white border border-gray-200 hover:border-[#EE3124]/50 rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-xl group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#EE3124]/10 text-[#EE3124] font-bold uppercase">
                {kart.level}
              </span>
              <Zap className="w-4 h-4 text-gray-400 group-hover:text-[#EE3124] transition-colors" />
            </div>

            <h3 className="text-base sm:text-lg font-display font-bold text-gray-950 uppercase mb-3">{kart.name}</h3>

            <div className="space-y-1.5 font-mono text-xs text-gray-600 mb-2">
              <div className="flex justify-between border-b border-gray-100 pb-1">
                <span>ENGINE:</span>
                <span className="text-gray-900 font-bold">{kart.engine}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-1">
                <span>OUTPUT:</span>
                <span className="text-[#EE3124] font-bold">{kart.hp}</span>
              </div>
              <div className="flex justify-between">
                <span>MAX SPEED:</span>
                <span className="text-gray-900 font-bold">{kart.topSpeed}</span>
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
    <section id="leap-frog" className="py-14 sm:py-18 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
      <div className="space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/30 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> PROFESSIONAL MOTORSPORT DIVISION
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-gray-950 uppercase tracking-tight">
            LEAP FROG <span className="text-[#EE3124]">RACING</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#EE3124] tracking-wider uppercase font-bold">
            THE ONLY PROFESSIONAL RACING TEAM FROM THE NORTH
          </p>
        </div>

        {/* Narrative & Stats Dashboard Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// HERITAGE & TELEMETRY</span>
              <p className="text-gray-700 text-xs sm:text-sm font-sans leading-relaxed">
                Leap Frog Racing is a Professional Racing & Karting Team formed in the year <strong className="text-gray-950">2018</strong> taking part in the <strong className="text-gray-950">JK Tyre FMSCI National Racing Championship</strong>, <strong className="text-gray-950">MRF National Championship</strong> & <strong className="text-gray-950">Rotax Max National Karting Championship</strong>.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm font-sans leading-relaxed">
                Leap Frog Racing is owned by well experienced and successful Indian Racing Driver <strong className="text-[#EE3124]">Rohit Khanna</strong> who has been a core part of the Indian Motorsport fraternity for more than <strong className="text-gray-950">2 decades</strong>. The team boasts international-standard technical support, race engineers, and mechanics.
              </p>
            </div>

            {/* Stats Telemetry Badge */}
            <div className="grid grid-cols-2 gap-3 font-mono">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-center shadow-sm">
                <div className="text-xl font-display font-bold text-[#EE3124]">2018</div>
                <div className="text-[9px] text-gray-600 uppercase tracking-wider font-bold">ESTABLISHED</div>
              </div>
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-center shadow-sm">
                <div className="text-xl font-display font-bold text-gray-950">20+ YRS</div>
                <div className="text-[9px] text-gray-600 uppercase tracking-wider font-bold">DRIVER EXP.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-center col-span-2 shadow-sm">
                <div className="text-xs font-display font-bold text-gray-950 uppercase">FMSCI & ROTAX</div>
                <div className="text-[9px] text-[#EE3124] uppercase tracking-wider font-bold">NATIONAL CHAMPIONSHIPS</div>
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
              className="relative group rounded-2xl overflow-hidden cursor-pointer border border-gray-200 hover:border-[#EE3124]/70 transition-all duration-300 shadow-md hover:shadow-xl h-64 sm:h-72 bg-gray-900"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

              <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1">
                <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#EE3124] text-white uppercase font-bold tracking-widest">
                  {photo.tag}
                </span>
                <h3 className="text-base font-display font-bold text-white uppercase group-hover:text-[#FFD700] transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs font-mono text-gray-200 line-clamp-1 sm:line-clamp-2">{photo.desc}</p>
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
            <div className="relative max-w-4xl w-full bg-white border border-gray-300 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#EE3124] border border-white/20 transition-colors"
              >
                ✕
              </button>
              <img src={activeImage.src} alt={activeImage.title} className="w-full max-h-[75vh] object-contain bg-black" />
              <div className="p-6 bg-white border-t border-gray-200 flex items-center justify-between text-gray-900">
                <div>
                  <span className="text-[10px] font-mono text-[#EE3124] uppercase font-bold">{activeImage.tag}</span>
                  <h4 className="text-xl font-display font-bold text-gray-950 uppercase">{activeImage.title}</h4>
                  <p className="text-xs font-mono text-gray-600 mt-1">{activeImage.desc}</p>
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

  const bundleSessions = [
    { name: "5 SESSIONS STARTER BUNDLE", bonus: "+ 1 FREE Bowling Coupon", price: "₹3,250", desc: "Perfect for a duo or an intense personal sprint practice." },
    { name: "10 SESSIONS RACER PACK", bonus: "+ 1 FREE Session & 1 Bowling", price: "₹6,500", desc: "Our most popular package for group battles & telemetry lap records." },
    { name: "20 SESSIONS PRO CHAMPIONSHIP", bonus: "+ 3 FREE Sessions & 3 Bowling", price: "₹13,000", desc: "Ultimate group Grand Prix package for corporate & family events." }
  ];

  return (
    <section id="whats-new" className="py-14 sm:py-18 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
      <div className="text-center space-y-2 mb-8 sm:mb-10">
        <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// LATEST OFFERS & BUNDLE SESSIONS</span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-gray-950 uppercase tracking-tight">
          WHAT'S <span className="text-[#EE3124]">NEW</span>
        </h2>
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold uppercase tracking-wider">
          ★ ALL PRICES INCLUSIVE OF ALL TAXES
        </div>
      </div>

      {/* Featured Weekly Mega Banner (Monday BOGO / Wednesday Happy Hour / Friday Frenzy) */}
      <div className="mb-6 sm:mb-8">
        <div
          onClick={() => setActivePromo({
            id: 0,
            src: "/whats-new/weekly-offers.jpg",
            title: "WEEKLY MEGA RACING OFFERS",
            tag: "WEEKLY BONANZA",
            desc: "Monday BOGO 50% Off • Wednesday Happy Hour ₹500 • Friday Frenzy Buy 2 Get 1 Free!"
          })}
          className="relative group rounded-2xl overflow-hidden cursor-pointer border-2 border-[#EE3124]/40 hover:border-[#EE3124] transition-all duration-300 shadow-lg hover:shadow-xl bg-black"
        >
          <img
            src="/whats-new/weekly-offers.jpg"
            alt="Kartomania Weekly Offers - Monday BOGO, Wednesday Happy Hour, Friday Frenzy"
            className="w-full h-auto max-h-[460px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3">
              <div>
                <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-[#EE3124] text-white font-bold uppercase tracking-widest shadow-md">
                  CLICK TO VIEW FULL DETAILS
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase mt-1">
                  MONDAY BOGO &bull; WEDNESDAY HAPPY HOUR &bull; FRIDAY FRENZY
                </h3>
              </div>
              <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-2.5 px-5 text-xs">
                Claim Weekly Deals &rarr;
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Core 3 Daily Offers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
        {coreThreeOffers.map((offer) => (
          <div
            key={offer.id}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#EE3124]/60 shadow-md hover:shadow-lg transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EE3124]/10 text-[#EE3124] font-mono text-[9px] font-bold uppercase tracking-wider">
                  {offer.tag}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFD700]/20 text-amber-900 font-mono text-[9px] font-bold uppercase">
                  {offer.badge}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-gray-950 uppercase">{offer.title}</h3>
              <p className="text-xs font-sans text-gray-600 leading-relaxed">{offer.desc}</p>
            </div>
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <div className="text-base font-display font-black text-[#EE3124]">{offer.price}</div>
              <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-1.5 px-3.5 text-[10px]">
                Book Deal
              </MagneticButton>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Bundle Sessions Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#EE3124] uppercase tracking-wider">// MULTI-RACE VALUE PACKS</span>
            <h3 className="text-lg sm:text-xl font-display font-bold text-gray-950 uppercase">BUNDLE SESSIONS</h3>
          </div>
          <span className="text-[10px] font-mono text-gray-500 font-semibold uppercase">Inclusive of all taxes</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bundleSessions.map((bundle, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200 flex flex-col justify-between space-y-3 shadow-sm hover:border-[#EE3124]/40 transition-colors">
              <div className="space-y-1.5">
                <div className="text-xs font-display font-bold text-gray-950 uppercase">{bundle.name}</div>
                <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono text-[9px] font-bold uppercase tracking-wider">
                  🎁 {bundle.bonus}
                </span>
                <p className="text-[11px] font-sans text-gray-500">{bundle.desc}</p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                <div className="text-lg font-display font-black text-[#EE3124]">{bundle.price}</div>
                <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-1.5 px-3 text-[10px]">
                  Get Bundle
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePromo && (
        <div
          onClick={() => setActivePromo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
        >
          <div className="relative max-w-3xl w-full bg-white border border-gray-300 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActivePromo(null)}
              className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#EE3124] border border-white/20 transition-colors"
            >
              ✕
            </button>
            <img src={activePromo.src} alt={activePromo.title} className="w-full max-h-[75vh] object-contain bg-black" />
            <div className="p-5 bg-white border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-900">
              <div>
                <span className="text-[10px] font-mono text-[#EE3124] uppercase font-bold">{activePromo.tag}</span>
                <h4 className="text-lg font-display font-bold text-gray-950 uppercase">{activePromo.title}</h4>
                <p className="text-xs font-mono text-gray-600 mt-0.5">{activePromo.desc}</p>
              </div>
              <MagneticButton onClick={onOpenBooking} className="py-2.5 px-5 text-xs">
                Book Offer
              </MagneticButton>
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
    <section id="pricing" className="py-14 sm:py-18 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
      <div className="text-center space-y-2 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider">
          ★ ALL PRICES INCLUSIVE OF ALL TAXES
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-gray-950 uppercase tracking-tight">
          OFFICIAL <span className="text-[#EE3124]">PRICING & COMBOS</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-gray-600 max-w-2xl mx-auto">
          Exclusive multi-session packages featuring complimentary free bowling and bonus race sessions.
        </p>
      </div>

      {/* 1. Official Value Combo Packages (From Counter Tariff) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8">
        {/* Weekday Combos */}
        <div className="bg-white border-2 border-gray-200 hover:border-[#EE3124]/40 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all relative">
          <div className="flex flex-wrap items-start justify-between gap-3 pb-3 mb-3 border-b border-gray-200">
            <div className="space-y-0.5">
              <span className="text-[9px] font-mono font-bold text-[#EE3124] uppercase tracking-widest block">SUPER VALUE DEALS</span>
              <h3 className="text-xl font-display font-bold text-gray-950 uppercase tracking-wider">WEEKDAY COMBOS</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#EE3124]/10 text-[#EE3124] font-mono text-xs font-bold uppercase whitespace-nowrap">
              MON – THU
            </span>
          </div>

          <div className="space-y-3">
            {weekdayCombos.map((item, idx) => (
              <div key={idx} className="p-3 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-[#EE3124]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors">
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-display font-bold text-gray-900 uppercase">{item.package}</div>
                  <span className="inline-block px-2 py-0.5 rounded bg-[#EE3124]/10 text-[#EE3124] font-mono text-[9px] font-bold uppercase tracking-wider">
                    🎁 {item.bonus}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-display font-black text-[#EE3124]">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekend Combos */}
        <div className="bg-white border-2 border-[#EE3124]/50 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all relative">
          <div className="flex flex-wrap items-start justify-between gap-3 pb-3 mb-3 border-b border-gray-200">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono font-bold text-[#EE3124] uppercase tracking-widest block">PEAK RACING & ENTERTAINMENT</span>
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#EE3124] to-[#D32F2F] text-[8px] font-mono font-bold text-white uppercase tracking-wider shadow-sm">
                  ★ POPULAR
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-950 uppercase tracking-wider">WEEKEND COMBOS</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#EE3124]/15 text-[#EE3124] font-mono text-xs font-bold uppercase whitespace-nowrap">
              FRI – SUN & HOLIDAYS
            </span>
          </div>

          <div className="space-y-3">
            {weekendCombos.map((item, idx) => (
              <div key={idx} className="p-3 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-[#EE3124]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors">
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-display font-bold text-gray-900 uppercase">{item.package}</div>
                  <span className="inline-block px-2 py-0.5 rounded bg-[#EE3124]/10 text-[#EE3124] font-mono text-[9px] font-bold uppercase tracking-wider">
                    🔥 {item.bonus}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-display font-black text-[#EE3124]">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Standard Session Tariff Table */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-md mb-8">
        <div className="pb-3 mb-3 border-b border-gray-200">
          <h3 className="text-lg font-display font-bold text-gray-950 uppercase tracking-wider">
            STANDARD KARTING SESSIONS TARIFF
          </h3>
          <p className="text-xs font-mono text-gray-500">Pure track time rates without bowling additions (Taxes Included).</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs sm:text-sm">
            <thead className="bg-gray-100 text-[#EE3124] uppercase text-[11px]">
              <tr>
                <th className="py-2.5 px-3 sm:px-4 rounded-l-lg">SESSIONS</th>
                <th className="py-2.5 px-3 sm:px-4 text-center">WEEKDAY (MON – THU)</th>
                <th className="py-2.5 px-3 sm:px-4 text-right rounded-r-lg">WEEKEND (FRI – SUN)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-800">
              {standardRates.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="py-2.5 px-3 sm:px-4 font-bold text-gray-900">{row.sessions}</td>
                  <td className="py-2.5 px-3 sm:px-4 text-center font-display font-bold text-gray-900">{row.weekday}</td>
                  <td className="py-2.5 px-3 sm:px-4 text-right font-display font-bold text-[#EE3124] text-sm sm:text-base">{row.weekend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Terms and Conditions Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6 space-y-3">
        <h4 className="font-display font-bold text-xs sm:text-sm text-gray-950 uppercase tracking-wider text-[#EE3124]">
          TERMS AND CONDITIONS
        </h4>
        <ul className="space-y-1.5 text-xs font-mono text-gray-700 list-disc list-inside">
          <li>Each karting session lasts 6 minutes on the track.</li>
          <li><strong>All prices are inclusive of all taxes.</strong></li>
          <li>All sessions and free bowling coupons must be consumed on the day they are bought.</li>
          <li>Packages are non-transferable and non-refundable.</li>
        </ul>

        <div className="pt-2 flex justify-center">
          <MagneticButton onClick={onOpenBooking} className="py-3 px-8 text-xs font-bold shadow-lg">
            Book Your Race Now 🏁
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export const GallerySection = () => {
  const [activePhoto, setActivePhoto] = React.useState(null);

  const galleryItems = [
    {
      src: "/gallery/gallery-1.jpg",
      title: "Pitlane Staging Grid",
      tag: "GRID #05 & #06",
      desc: "Pro series karts lined up under the F1 orange canopy ready for pit exit.",
      span: "md:col-span-2 md:row-span-2",
      height: "h-64 sm:h-80"
    },
    {
      src: "/gallery/gallery-2.jpg",
      title: "Kartomania Sunset Apex",
      tag: "SUNSET RACE",
      desc: "Karts rounding the hairpin turn as dusk falls over the Kartomania main arena.",
      span: "md:col-span-1",
      height: "h-56 sm:h-64"
    },
    {
      src: "/gallery/gallery-3.jpg",
      title: "Hairpin Cornering Telemetry",
      tag: "TECHNICAL CHICANE",
      desc: "High-speed cornering along polymer barrier loops.",
      span: "md:col-span-1",
      height: "h-56 sm:h-64"
    },
    {
      src: "/gallery/gallery-4.jpg",
      title: "Podium Victory Celebration",
      tag: "CHAMPIONS",
      desc: "Drivers celebrating qualifying lap records in the paddock.",
      span: "md:col-span-1",
      height: "h-56 sm:h-64"
    },
    {
      src: "/gallery/gallery-5.jpg",
      title: "Pro Karts Fleet Lineup",
      tag: "ARENA FLEET",
      desc: "270cc high-torque race karts ready in pitlane.",
      span: "md:col-span-2",
      height: "h-56 sm:h-64"
    }
  ];

  return (
    <section id="gallery" className="py-14 sm:py-18 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
      <div className="text-center space-y-2 mb-8 sm:mb-10">
        <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// VISUAL SHOWCASE & GALLERY</span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-gray-950 uppercase tracking-tight">
          THE <span className="text-[#EE3124]">KARTOMANIA</span> EXPERIENCE
        </h2>
        <p className="text-xs sm:text-sm font-mono text-gray-600 max-w-xl mx-auto">
          Explore real track footage from India's premier 720m outdoor go-karting arena.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setActivePhoto(item)}
            className={`
              relative group rounded-2xl overflow-hidden cursor-pointer border border-gray-200 hover:border-[#EE3124]/70
              transition-all duration-300 shadow-md hover:shadow-xl
              ${item.span} ${item.height} bg-gray-900
            `}
          >
            {/* Background Image */}
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

            {/* Content Labels */}
            <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#EE3124] text-white font-mono text-[9px] font-bold uppercase tracking-widest shadow-md">
                {item.tag}
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-white uppercase group-hover:text-[#FFD700] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-gray-200 line-clamp-1 sm:line-clamp-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Fullscreen Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
        >
          <div className="relative max-w-4xl w-full bg-white border border-gray-300 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#EE3124] border border-white/20 transition-colors"
            >
              ✕
            </button>
            <img src={activePhoto.src} alt={activePhoto.title} className="w-full max-h-[75vh] object-contain bg-black" />
            <div className="p-5 bg-white border-t border-gray-200 flex items-center justify-between text-gray-900">
              <div>
                <span className="text-[10px] font-mono text-[#EE3124] uppercase font-bold">{activePhoto.tag}</span>
                <h4 className="text-lg font-display font-bold text-gray-950 uppercase">{activePhoto.title}</h4>
                <p className="text-xs font-mono text-gray-600 mt-0.5">{activePhoto.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export const FounderSection = () => {
  const achievements = [
    {
      title: "JK National Racing Championship",
      period: "2003 – PRESENT",
      desc: "Competing since 2003 with multiple wins & podiums. Finished Runners up in 2018.",
      badge: "RUNNERS UP 2018",
      icon: Trophy
    },
    {
      title: "Porsche India Certified Lead Instructor",
      period: "PORSCHE INDIA",
      desc: "Certified lead instructor for lead & follow track events at Buddh International Circuit (BIC). Instructor for Porsche off-road Drives.",
      badge: "PORSCHE BIC INSTRUCTOR",
      icon: Shield
    },
    {
      title: "TATA 50,000 KM World Record Holder",
      period: "2016 WORLD RECORD",
      desc: "Lead driver for the TATA world record of 50,000 kms non-stop run over 17 days at Ahmednagar for launch of Tiago, Zest & Bolt in 2016.",
      badge: "WORLD RECORD 50K KM",
      icon: Gauge
    },
    {
      title: "Mercedes-Benz Luxe Drive Instructor",
      period: "MERCEDES-BENZ",
      desc: "Lead Instructor with Mercedes Luxe Drive & Brand Tour across India.",
      badge: "LUXE DRIVE INSTRUCTOR",
      icon: Zap
    },
    {
      title: "Audi Q Drives & Mahindra Adventure",
      period: "NORTH INDIA",
      desc: "Instructor for Audi Q drives in North India, Mahindra Adventure & Purple Club off-road experiences.",
      badge: "OFF-ROAD INSTRUCTOR",
      icon: Flag
    },
    {
      title: "JK National Karting Championship",
      period: "2000 – 2003",
      desc: "Driver at JK National Karting Championship (2000-2003) with multiple wins & podiums. Lead driver of the team to win Amaron Karting Endurance Championship in 2011.",
      badge: "ENDURANCE CHAMPION 2011",
      icon: Flame
    }
  ];

  return (
    <section id="founder" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl my-8 bg-[#0B0F19] text-white border border-gray-800 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EE3124]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="space-y-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE3124]/15 border border-[#EE3124]/40 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> MOTORSPORT LEGEND & FOUNDER
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight">
            KNOW OUR FOUNDER — <span className="text-[#EE3124]">MR. ROHIT KHANNA</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gray-400 max-w-2xl mx-auto">
            2+ Decades of Indian Motorsport excellence, certified Porsche & Mercedes-Benz lead instructor, world record holder, and founder of Kartomania.
          </p>
        </div>

        {/* Founder Spotlight Card with Real Grid Photo */}
        <div className="rounded-2xl bg-[#111625] border border-gray-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px] bg-black">
            <img
              src="/founder-rohit-khanna.jpg"
              alt="Mr. Rohit Khanna on Formula Grid"
              className="w-full h-full object-cover object-center filter brightness-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#EE3124] text-white font-mono text-[9px] font-bold uppercase">
                FORMULA RACING GRID
              </span>
              <div className="text-white font-display font-bold text-lg sm:text-xl uppercase">
                MR. ROHIT KHANNA
              </div>
              <div className="text-gray-300 font-mono text-xs">
                Active National Racing Driver & Founder
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#FFD700] uppercase font-bold tracking-widest">// NATIONAL RACING PEDIGREE</span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase">
                "REAL RACERS RACE CLEAN — BUILT FROM DECADES ON THE NATIONAL GRID."
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed">
                Mr. Rohit Khanna has been a core pillar of the Indian Motorsport fraternity for over 20 years. Having competed in the JK Tyre National Racing Championship, MRF National Championship, and Rotax Max Karting Championship, he founded Kartomania to give racers an authentic, championship-grade motorsport platform in Gurugram.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 font-mono pt-2">
              <div className="p-3 rounded-xl bg-black/40 border border-gray-800 text-center">
                <div className="text-lg font-display font-bold text-[#EE3124]">20+ YRS</div>
                <div className="text-[8px] text-gray-400 uppercase font-semibold">MOTORSPORT EXP</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-gray-800 text-center">
                <div className="text-lg font-display font-bold text-[#FFD700]">50K KM</div>
                <div className="text-[8px] text-gray-400 uppercase font-semibold">WORLD RECORD</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-gray-800 text-center">
                <div className="text-lg font-display font-bold text-[#0066CC]">PORSCHE</div>
                <div className="text-[8px] text-gray-400 uppercase font-semibold">LEAD INSTRUCTOR</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {achievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#111625] border border-gray-800 hover:border-[#EE3124]/60 rounded-2xl p-5 space-y-3 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#EE3124]/10 text-[#EE3124] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#EE3124]/15 text-[#EE3124] font-mono text-[9px] font-bold uppercase tracking-widest border border-[#EE3124]/30">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-bold">{item.period}</span>
                  <h3 className="text-base font-display font-bold text-white uppercase group-hover:text-[#FFD700] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs font-sans text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9";

  return (
    <section id="contact" className="py-14 sm:py-18 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
      <div className="space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// ARENA LOCATION & NAVIGATION</span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-gray-950 uppercase tracking-tight">
            FIND THE <span className="text-[#EE3124]">ARENA</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gray-600 max-w-xl mx-auto">
            Located at Entertainland Mall, India's premier 720m outdoor pro karting circuit.
          </p>
        </div>

        {/* Location Info & CTAs */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-left font-mono">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#EE3124]">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// ARENA ADDRESS</span>
              </div>
              <div className="text-xs text-gray-900 font-sans font-semibold leading-relaxed">
                Entertainland Mall, Sector 83, Manesar, Gurgaon.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#EE3124]">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// OPEN ALL 7 DAYS</span>
              </div>
              <div className="text-xs text-gray-900 font-sans font-semibold space-y-0.5">
                <div>Mon – Fri: 2:00 PM – 11:00 PM</div>
                <div>Sat – Sun: 1:00 PM – 11:00 PM</div>
                <div className="text-[#25D366] font-bold">// We Open All Days</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#EE3124]">
                <Phone className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// CALL US / HOTLINE</span>
              </div>
              <div className="text-xs text-gray-900 font-sans font-semibold space-y-0.5">
                <a href="tel:+919717548897" className="block hover:text-[#EE3124] transition-colors font-bold">+91 97175 48897</a>
                <a href="tel:+919560492876" className="block hover:text-[#EE3124] transition-colors font-bold">+91 95604 92876</a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#EE3124]">
                <Mail className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// EMAIL ENQUIRIES</span>
              </div>
              <div className="text-xs text-gray-900 font-sans font-semibold space-y-0.5">
                <a href="mailto:kartomania.ggn@gmail.com" className="block hover:text-[#EE3124] transition-colors font-bold break-all">
                  kartomania.ggn@gmail.com
                </a>
                <div className="text-[10px] text-gray-500 font-mono">Corporate & Booking queries</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-center lg:justify-start">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#EE3124] text-xs font-mono tracking-wider uppercase text-gray-900 font-bold transition-all shadow-sm group"
              >
                <MapPin className="w-4 h-4 text-[#EE3124] group-hover:scale-110 transition-transform" />
                <span>GOOGLE MAPS</span>
              </a>

              <a
                href="https://www.facebook.com/kartomaniacsggn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#EE3124] text-xs font-mono tracking-wider uppercase text-gray-900 font-bold transition-all shadow-sm group"
              >
                <FacebookIcon className="w-4 h-4 text-[#EE3124] group-hover:scale-110 transition-transform" />
                <span>FACEBOOK</span>
              </a>

              <a
                href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#EE3124] text-xs font-mono tracking-wider uppercase text-gray-900 font-bold transition-all shadow-sm group"
              >
                <InstagramIcon className="w-4 h-4 text-[#EE3124] group-hover:scale-110 transition-transform" />
                <span>INSTAGRAM</span>
              </a>

              <a
                href="https://wa.me/919717548897?text=Hi%20Kartomania!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20racing%20session."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Hotline"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#25D366] text-xs font-mono tracking-wider uppercase text-gray-900 font-bold transition-all shadow-sm group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>WHATSAPP</span>
              </a>
            </div>

            <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3 px-6 text-xs whitespace-nowrap">
              Book Your Race
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GameSection = () => (
  <section id="game" className="py-14 sm:py-18 px-4 max-w-7xl mx-auto border-t border-gray-200/80 relative z-20 bg-white text-gray-900">
    <div className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/30 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
          <Trophy className="w-4 h-4" /> INTERACTIVE 2D KART RACER
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-gray-950 uppercase tracking-tight">
          PRO <span className="text-[#EE3124]">ARCADE</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-gray-600 max-w-xl mx-auto">
          Test your apex timing on our 16-bit retro arcade simulator before taking our 720M outdoor track!
        </p>
      </div>

      {/* Embedded 2D Game Canvas Component */}
      <GameCanvas />
    </div>
  </section>
);
