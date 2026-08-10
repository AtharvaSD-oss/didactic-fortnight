import React from 'react';
import { Flag, Trophy, Shield, Zap, MapPin, Gauge, Flame } from 'lucide-react';
import MagneticButton from './MagneticButton';
import GameCanvas from './GameCanvas';

export const TrackSection = ({ onOpenBooking }) => (
  <section id="track" className="py-24 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="space-y-6 md:w-1/2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE3124]/10 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
          <MapPin className="w-3.5 h-3.5" /> CIRCUIT TELEMETRY
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-gray-950 leading-tight">
          THE MONACO OF <span className="text-[#EE3124]">INDOOR KARTING</span>
        </h2>
        <p className="text-gray-700 text-sm font-sans leading-relaxed">
          Designed by former Formula 1 track engineers. Features a 550-meter multi-level asphalt surface with high-banked hairpin turns, elevation changes, and high-speed chicane straights.
        </p>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl">
            <span className="text-xs font-mono text-gray-500 uppercase">Surface</span>
            <div className="text-lg font-display font-bold text-gray-900">Polymer Asphalt</div>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl">
            <span className="text-xs font-mono text-gray-500 uppercase">Barrier System</span>
            <div className="text-lg font-display font-bold text-gray-900">F1 Pro Barrier</div>
          </div>
        </div>

        <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" onClick={onOpenBooking}>Reserve Track Slot</MagneticButton>
      </div>

      <div className="md:w-1/2 w-full">
        <div className="relative rounded-2xl bg-gray-900 border border-gray-800 p-6 shadow-xl overflow-hidden">
          <div className="absolute top-3 right-3 text-[10px] font-mono text-[#EE3124] uppercase">
            // 2D CIRCUIT SCHEMATIC
          </div>
          <div className="h-64 sm:h-80 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EE3124]/20 to-transparent opacity-50" />
            <div className="text-center p-6 space-y-3 z-10">
              <Gauge className="w-12 h-12 text-[#EE3124] mx-auto animate-pulse" />
              <div className="font-display font-bold text-xl text-white">KARTOMANIA INTERNATIONAL ARENA</div>
              <div className="font-mono text-xs text-gray-400">550 METERS // 14 TURNS // FLYOVER SECTION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const KartsSection = () => (
  <section id="karts" className="py-24 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
    <div className="text-center space-y-4 mb-14">
      <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// THE FLEET</span>
      <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-950 uppercase">HIGH-PERFORMANCE RACE KARTS</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "SODI RT10 PRO", engine: "270cc Honda GX", hp: "13.0 HP", topSpeed: "75 KM/H", level: "PRO SERIES" },
        { name: "LAMBO E-BOOSTER", engine: "Dual Electric Brushless", hp: "18.5 HP", topSpeed: "85 KM/H", level: "HYPER E-SERIES" },
        { name: "SODI LR5 JUNIOR", engine: "160cc Honda GX", hp: "6.5 HP", topSpeed: "45 KM/H", level: "CADET ACADEMY" }
      ].map((kart, idx) => (
        <div key={idx} className="bg-white border border-gray-200 hover:border-[#EE3124]/50 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-xl group">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#EE3124]/10 text-[#EE3124] font-bold uppercase">
              {kart.level}
            </span>
            <Zap className="w-5 h-5 text-gray-400 group-hover:text-[#EE3124] transition-colors" />
          </div>

          <h3 className="text-xl font-display font-bold text-gray-950 uppercase mb-4">{kart.name}</h3>

          <div className="space-y-2 font-mono text-xs text-gray-600 mb-6">
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span>ENGINE:</span>
              <span className="text-gray-900 font-bold">{kart.engine}</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span>OUTPUT:</span>
              <span className="text-[#EE3124] font-bold">{kart.hp}</span>
            </div>
            <div className="flex justify-between">
              <span>MAX VELOCITY:</span>
              <span className="text-gray-900 font-bold">{kart.topSpeed}</span>
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
    <section id="leap-frog" className="py-24 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/30 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> PROFESSIONAL MOTORSPORT DIVISION
          </div>
          <h2 className="text-3xl sm:text-6xl font-display font-black text-gray-950 uppercase tracking-tight">
            LEAP FROG <span className="text-[#EE3124]">RACING</span>
          </h2>
          <p className="text-sm font-mono text-[#EE3124] tracking-widest uppercase font-bold">
            THE ONLY PROFESSIONAL RACING TEAM FROM THE NORTH
          </p>
        </div>

        {/* Narrative & Stats Dashboard Card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// HERITAGE & TELEMETRY</span>
              <p className="text-gray-700 text-sm sm:text-base font-sans leading-relaxed">
                Leap Frog Racing is a Professional Racing & Karting Team formed in the year <strong className="text-gray-950">2018</strong> taking part in the <strong className="text-gray-950">JK Tyre FMSCI National Racing Championship</strong>, <strong className="text-gray-950">MRF National Championship</strong> & <strong className="text-gray-950">Rotax Max National Karting Championship</strong>.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm font-sans leading-relaxed">
                Leap Frog Racing is owned by well experienced and successful Indian Racing Driver <strong className="text-[#EE3124]">Rohit Khanna</strong> who has been a core part of the Indian Motorsport fraternity for more than <strong className="text-gray-950">2 decades</strong>. The team boasts international-standard technical support, race engineers, and mechanics.
              </p>
            </div>

            {/* Stats Telemetry Badge */}
            <div className="grid grid-cols-2 gap-4 font-mono">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-center shadow-sm">
                <div className="text-2xl font-display font-bold text-[#EE3124]">2018</div>
                <div className="text-[10px] text-gray-600 uppercase tracking-wider font-bold">ESTABLISHED</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-center shadow-sm">
                <div className="text-2xl font-display font-bold text-gray-950">20+ YRS</div>
                <div className="text-[10px] text-gray-600 uppercase tracking-wider font-bold">DRIVER EXP.</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-center col-span-2 shadow-sm">
                <div className="text-sm font-display font-bold text-gray-950 uppercase">FMSCI & ROTAX</div>
                <div className="text-[10px] text-[#EE3124] uppercase tracking-wider font-bold">NATIONAL CHAMPIONSHIPS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Team Images Gallery Grid (2x2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(photo)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer border border-gray-200 hover:border-[#EE3124]/70 transition-all duration-500 shadow-md hover:shadow-xl h-80 bg-gray-900"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#EE3124] text-white uppercase font-bold tracking-widest">
                  {photo.tag}
                </span>
                <h3 className="text-lg font-display font-bold text-white uppercase group-hover:text-[#FFD700] transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs font-mono text-gray-200 line-clamp-2">{photo.desc}</p>
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

  const promos = [
    {
      id: 1,
      src: "/whats-new/promo-1.jpg",
      title: "PRO KART PRICING - LIMITED OFFER",
      badge: "LIMITED OFFER",
      desc: "1st Session @ ₹750 | 2nd Session @ ₹695 | 3rd @ ₹625 | 4th Onwards @ ₹575",
      tag: "PRO SERIES",
      span: "md:col-span-2",
      featured: true
    },
    {
      id: 2,
      src: "/whats-new/promo-2.jpg",
      title: "LEVEL 1 PRIVATE SESSION",
      badge: "PRIVATE TRACK",
      desc: "Book exclusive Level 1 Private Track Session for ₹4,999/- Only",
      tag: "VIP EXCLUSIVE",
      span: "md:col-span-1",
      featured: false
    },
    {
      id: 3,
      src: "/whats-new/promo-3.jpg",
      title: "MONDAY BONANZA",
      badge: "50% OFF",
      desc: "Buy 1 Session and Get Another at 50% Off every Monday!",
      tag: "WEEKDAY DEALS",
      span: "md:col-span-1",
      featured: false
    },
    {
      id: 4,
      src: "/whats-new/promo-4.jpg",
      title: "HAPPY HOURS WEDNESDAY",
      badge: "SUMMER SPECIAL",
      desc: "Kart your heart out! Buy a session @ ₹500/- Only on Wednesdays",
      tag: "HAPPY HOUR",
      span: "md:col-span-1",
      featured: false
    },
    {
      id: 5,
      src: "/whats-new/promo-5.jpg",
      title: "FRIDAY FRENZY",
      badge: "BUY 2 GET 1 FREE",
      desc: "Buy 2 Sessions & the 3rd is FREE! Start, Kart, Repeat!",
      tag: "WEEKEND PREVIEW",
      span: "md:col-span-1",
      featured: false
    }
  ];

  return (
    <section id="whats-new" className="py-24 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
      <div className="text-center space-y-3 mb-14">
        <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// LATEST OFFERS & ANNOUNCEMENTS</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-950 uppercase tracking-tight">
          WHAT'S <span className="text-[#EE3124]">NEW</span>
        </h2>
        <p className="text-sm font-mono text-gray-600 max-w-xl mx-auto">
          Exclusive summer specials, private track passes, and daily racing bonanzas at Kartomania.
        </p>
      </div>

      {/* Featured Weekly Mega Banner (Monday BOGO / Wednesday Happy Hour / Friday Frenzy) */}
      <div className="mb-12">
        <div
          onClick={() => setActivePromo({
            id: 0,
            src: "/whats-new/weekly-offers.jpg",
            title: "WEEKLY MEGA RACING OFFERS",
            tag: "WEEKLY BONANZA",
            desc: "Monday BOGO 50% Off • Wednesday Happy Hour ₹500 • Friday Frenzy Buy 2 Get 1 Free!"
          })}
          className="relative group rounded-3xl overflow-hidden cursor-pointer border-2 border-[#EE3124]/40 hover:border-[#EE3124] transition-all duration-500 shadow-xl hover:shadow-2xl bg-black"
        >
          <img
            src="/whats-new/weekly-offers.jpg"
            alt="Kartomania Weekly Offers - Monday BOGO, Wednesday Happy Hour, Friday Frenzy"
            className="w-full h-auto max-h-[520px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
              <div>
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#EE3124] text-white font-bold uppercase tracking-widest shadow-md">
                  CLICK TO VIEW FULL DETAILS
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase mt-2">
                  MONDAY BOGO &bull; WEDNESDAY HAPPY HOUR &bull; FRIDAY FRENZY
                </h3>
              </div>
              <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3 px-6 text-xs">
                Claim Weekly Deals &rarr;
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promos.map((promo) => (
          <div
            key={promo.id}
            onClick={() => setActivePromo(promo)}
            className={`
              relative group rounded-2xl overflow-hidden cursor-pointer border border-gray-200 hover:border-[#EE3124]/70
              transition-all duration-500 shadow-md hover:shadow-xl
              ${promo.span} h-80 sm:h-96 bg-gray-900 flex flex-col justify-end
            `}
          >
            {/* Background Image with Dark Gradient Blend */}
            <img
              src={promo.src}
              alt={promo.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-95"
            />

            {/* Vignette & Contrast Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-95 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#EE3124] to-[#D32F2F] text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-md">
                {promo.badge}
              </span>
            </div>

            {/* Content info */}
            <div className="relative z-20 p-6 space-y-2">
              <span className="text-[10px] font-mono text-[#FFD700] uppercase font-bold tracking-wider">
                {promo.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase group-hover:text-[#FFD700] transition-colors">
                {promo.title}
              </h3>
              <p className="text-xs font-mono text-gray-200">
                {promo.desc}
              </p>

              <div className="pt-2">
                <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="text-[11px] py-2 px-4">
                  Claim Offer &rarr;
                </MagneticButton>
              </div>
            </div>
          </div>
        ))}
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
            <div className="p-6 bg-white border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-900">
              <div>
                <span className="text-[10px] font-mono text-[#EE3124] uppercase font-bold">{activePromo.tag}</span>
                <h4 className="text-xl font-display font-bold text-gray-950 uppercase">{activePromo.title}</h4>
                <p className="text-xs font-mono text-gray-600 mt-1">{activePromo.desc}</p>
              </div>
              <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall">
                Book Offer
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export const PricingSection = () => {
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
    <section id="pricing" className="py-24 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
      <div className="text-center space-y-3 mb-14">
        <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// RACE PACKAGES & COMBO DEALS</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-950 uppercase tracking-tight">
          OFFICIAL <span className="text-[#EE3124]">PRICING & COMBOS</span>
        </h2>
        <p className="text-sm font-mono text-gray-600 max-w-2xl mx-auto">
          Exclusive karting multi-session packages featuring complimentary free bowling and bonus race sessions!
        </p>
      </div>

      {/* 1. Official Value Combo Packages (From Counter Tariff) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Weekday Combos */}
        <div className="bg-white border-2 border-gray-200 hover:border-[#EE3124]/40 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#EE3124] uppercase tracking-widest block">SUPER VALUE DEALS</span>
              <h3 className="text-2xl font-display font-bold text-gray-950 uppercase tracking-wider">WEEKDAY COMBOS</h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-[#EE3124]/10 text-[#EE3124] font-mono text-xs font-bold uppercase">
              MON – THU
            </span>
          </div>

          <div className="space-y-4">
            {weekdayCombos.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-[#EE3124]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors">
                <div className="space-y-1">
                  <div className="text-sm font-display font-bold text-gray-900 uppercase">{item.package}</div>
                  <span className="inline-block px-2 py-0.5 rounded bg-[#FFD700]/20 text-amber-800 font-mono text-[10px] font-bold uppercase tracking-wider">
                    🎁 {item.bonus}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xl font-display font-black text-[#EE3124]">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekend Combos */}
        <div className="bg-white border-2 border-[#EE3124]/50 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
          <span className="absolute -top-3 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#EE3124] to-[#D32F2F] text-[10px] font-mono font-bold text-white uppercase tracking-widest shadow-md">
            POPULAR COMBOS
          </span>

          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#EE3124] uppercase tracking-widest block">PEAK RACING & ENTERTAINMENT</span>
              <h3 className="text-2xl font-display font-bold text-gray-950 uppercase tracking-wider">WEEKEND COMBOS</h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-[#EE3124]/15 text-[#EE3124] font-mono text-xs font-bold uppercase">
              FRI – SUN & HOLIDAYS
            </span>
          </div>

          <div className="space-y-4">
            {weekendCombos.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-[#EE3124]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors">
                <div className="space-y-1">
                  <div className="text-sm font-display font-bold text-gray-900 uppercase">{item.package}</div>
                  <span className="inline-block px-2 py-0.5 rounded bg-[#EE3124]/10 text-[#EE3124] font-mono text-[10px] font-bold uppercase tracking-wider">
                    🔥 {item.bonus}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xl font-display font-black text-[#EE3124]">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Standard Session Tariff Table */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-md mb-10">
        <div className="pb-4 mb-4 border-b border-gray-200">
          <h3 className="text-xl font-display font-bold text-gray-950 uppercase tracking-wider">
            STANDARD KARTING SESSIONS TARIFF
          </h3>
          <p className="text-xs font-mono text-gray-500">Pure track time rates without bowling additions.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-sm">
            <thead className="bg-gray-100 text-[#EE3124] uppercase text-xs">
              <tr>
                <th className="py-3.5 px-4 rounded-l-xl">SESSIONS</th>
                <th className="py-3.5 px-4 text-center">WEEKDAY (MON – THU)</th>
                <th className="py-3.5 px-4 text-right rounded-r-xl">WEEKEND (FRI – SUN & HOLIDAYS)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-800">
              {standardRates.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">{row.sessions}</td>
                  <td className="py-3.5 px-4 text-center font-display font-bold text-gray-900">{row.weekday}</td>
                  <td className="py-3.5 px-4 text-right font-display font-bold text-[#EE3124] text-base">{row.weekend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Terms and Conditions Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h4 className="font-display font-bold text-sm text-gray-950 uppercase tracking-wider text-[#EE3124]">
          TERMS AND CONDITIONS
        </h4>
        <ul className="space-y-2 text-xs font-mono text-gray-700 list-disc list-inside">
          <li>Each karting session lasts 6 minutes on the track.</li>
          <li>All prices are exclusive of 18% GST.</li>
          <li>All sessions and free bowling coupons must be consumed on the day they are bought.</li>
          <li>Packages are non-transferable and non-refundable.</li>
        </ul>

        <div className="pt-4 flex justify-center">
          <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall">Book Your Race</MagneticButton>
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
      height: "h-96 md:h-full"
    },
    {
      src: "/gallery/gallery-2.jpg",
      title: "Kartomania Sunset Apex",
      tag: "SUNSET RACE",
      desc: "Karts rounding the hairpin turn as dusk falls over the Kartomania main arena.",
      span: "md:col-span-1",
      height: "h-64 md:h-80"
    },
    {
      src: "/gallery/gallery-3.jpg",
      title: "Hairpin Cornering Telemetry",
      tag: "TECHNICAL CHICANE",
      desc: "High-speed cornering along polymer barrier loops.",
      span: "md:col-span-1",
      height: "h-64 md:h-80"
    },
    {
      src: "/gallery/gallery-4.jpg",
      title: "Podium Victory Celebration",
      tag: "CHAMPIONS",
      desc: "Drivers celebrating qualifying lap records in the paddock.",
      span: "md:col-span-1",
      height: "h-64 md:h-80"
    },
    {
      src: "/gallery/gallery-5.jpg",
      title: "Pro Karts Fleet Lineup",
      tag: "ARENA FLEET",
      desc: "270cc high-torque race karts ready in pitlane.",
      span: "md:col-span-2",
      height: "h-64 md:h-80"
    }
  ];

  return (
    <section id="gallery" className="py-24 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
      <div className="text-center space-y-4 mb-14">
        <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// VISUAL SHOWCASE & GALLERY</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-950 uppercase tracking-tight">
          THE <span className="text-[#EE3124]">KARTOMANIA</span> EXPERIENCE
        </h2>
        <p className="text-sm font-mono text-gray-600 max-w-xl mx-auto">
          Explore real track footage from India's premier indoor go-karting arena.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setActivePhoto(item)}
            className={`
              relative group rounded-2xl overflow-hidden cursor-pointer border border-gray-200 hover:border-[#EE3124]/70
              transition-all duration-500 shadow-md hover:shadow-xl
              ${item.span} ${item.height} bg-gray-900
            `}
          >
            {/* Background Image */}
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

            {/* Content Labels */}
            <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#EE3124] text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-md">
                {item.tag}
              </div>
              <h3 className="text-xl font-display font-bold text-white uppercase group-hover:text-[#FFD700] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-gray-200 line-clamp-2">
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
            <div className="p-6 bg-white border-t border-gray-200 flex items-center justify-between text-gray-900">
              <div>
                <span className="text-[10px] font-mono text-[#EE3124] uppercase font-bold">{activePhoto.tag}</span>
                <h4 className="text-xl font-display font-bold text-gray-950 uppercase">{activePhoto.title}</h4>
                <p className="text-xs font-mono text-gray-600 mt-1">{activePhoto.desc}</p>
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
    <section id="founder" className="py-24 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/30 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> MOTORSPORT LEGEND & FOUNDER
          </div>
          <h2 className="text-3xl sm:text-6xl font-display font-black text-gray-950 uppercase tracking-tight">
            KNOW OUR FOUNDER — <span className="text-[#EE3124]">MR. ROHIT KHANNA</span>
          </h2>
          <p className="text-sm font-mono text-gray-600 max-w-2xl mx-auto">
            2+ Decades of Indian Motorsport excellence, certified Porsche & Mercedes-Benz lead instructor, world record holder, and founder of Kartomania.
          </p>
        </div>

        {/* Founder Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 hover:border-[#EE3124]/60 rounded-2xl p-6 sm:p-8 space-y-4 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#EE3124]/10 text-[#EE3124] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#EE3124]/10 text-[#EE3124] font-mono text-[10px] font-bold uppercase tracking-widest">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">{item.period}</span>
                  <h3 className="text-lg font-display font-bold text-gray-950 uppercase group-hover:text-[#EE3124] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs font-sans text-gray-600 leading-relaxed">
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
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// ARENA LOCATION & NAVIGATION</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-950 uppercase tracking-tight">
            FIND THE <span className="text-[#EE3124]">ARENA</span>
          </h2>
          <p className="text-sm font-mono text-gray-600 max-w-xl mx-auto">
            Located at Entertainland Mall, India's premier indoor pro karting circuit.
          </p>
        </div>

        {/* Location Info & CTAs */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left font-mono">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
              <span className="text-[10px] text-[#EE3124] uppercase font-bold tracking-wider">// ARENA ADDRESS</span>
              <div className="text-xs text-gray-900 font-sans font-semibold leading-relaxed">
                Entertainland Mall, Sector 83, Manesar, Gurgaon.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
              <span className="text-[10px] text-[#EE3124] uppercase font-bold tracking-wider">// BUSINESS HOURS</span>
              <div className="text-xs text-gray-900 font-sans font-semibold space-y-1">
                <div>Weekdays: 3:00 PM – 10:00 PM</div>
                <div>Weekends: 11:30 AM – 10:00 PM</div>
                <div className="text-[#EE3124] font-bold">// Tuesdays Closed</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
              <span className="text-[10px] text-[#EE3124] uppercase font-bold tracking-wider">// CALL US / HOTLINE</span>
              <div className="text-xs text-gray-900 font-sans font-semibold space-y-1">
                <a href="tel:+919717548897" className="block hover:text-[#EE3124] transition-colors font-bold">+91 97175 48897</a>
                <a href="tel:+919560492876" className="block hover:text-[#EE3124] transition-colors font-bold">+91 95604 92876</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#EE3124] text-xs font-mono tracking-widest uppercase text-gray-900 font-bold transition-all shadow-md group"
            >
              <MapPin className="w-4 h-4 text-[#EE3124] group-hover:scale-110 transition-transform" />
              <span>GET DIRECTIONS ON GOOGLE MAPS</span>
            </a>

            <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall">Book Your Race</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GameSection = () => (
  <section id="game" className="py-28 px-4 max-w-7xl mx-auto border-t border-gray-200/80 relative z-20 bg-white text-gray-900">
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/30 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
          <Trophy className="w-4 h-4" /> INTERACTIVE 2D KART RACER
        </div>
        <h2 className="text-3xl sm:text-6xl font-display font-black text-gray-950 uppercase tracking-tight">
          PRO <span className="text-[#EE3124]">ARCADE</span>
        </h2>
        <p className="text-sm font-mono text-gray-600 max-w-xl mx-auto">
          Test your apex timing on our 16-bit retro arcade simulator before taking the real track!
        </p>
      </div>

      {/* Embedded 2D Game Canvas Component */}
      <GameCanvas />
    </div>
  </section>
);
