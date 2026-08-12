import React from 'react';
import { Trophy, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';
import MagneticButton from './MagneticButton';
import GameCanvas from './GameCanvas';
import TrackCircuitVisual from './TrackCircuitVisual';

export const TrackSection = ({ onOpenBooking }) => (
  <section id="track" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 bg-[#0B0D0F] text-[#F4F1EA]">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
      <div className="space-y-4 lg:w-5/12 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A45C]/15 border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-widest">
          <MapPin className="w-3.5 h-3.5" /> CIRCUIT TELEMETRY
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-[#F4F1EA] leading-tight">
          THE MONACO OF <span className="text-[#C9A45C]">OUTDOOR KARTING</span>
        </h2>
        <p className="text-[#B8B1A5] text-xs sm:text-sm font-sans leading-relaxed">
          Designed by championship racing engineers. Features a full 720-meter outdoor asphalt circuit with high-banked hairpin apexes, technical chicanes, and high-speed overtaking straights.
        </p>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="p-4 bg-[#15181C] border border-white/10 rounded-xl">
            <span className="text-[10px] font-mono text-[#837D73] uppercase tracking-wider block">Surface</span>
            <div className="text-sm sm:text-base font-display font-bold text-[#F4F1EA] mt-0.5">Outdoor Polymer Asphalt</div>
          </div>
          <div className="p-4 bg-[#15181C] border border-white/10 rounded-xl">
            <span className="text-[10px] font-mono text-[#837D73] uppercase tracking-wider block">Barrier System</span>
            <div className="text-sm sm:text-base font-display font-bold text-[#F4F1EA] mt-0.5">F1 Pro Safety Barrier</div>
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
    <section id="leap-frog" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 bg-[#0B0D0F] text-[#F4F1EA]">
      <div className="space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A45C]/15 border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> PROFESSIONAL MOTORSPORT DIVISION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
            LEAP FROG <span className="text-[#C9A45C]">RACING</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#C9A45C] tracking-wider uppercase font-bold">
            THE ONLY PROFESSIONAL RACING TEAM FROM THE NORTH
          </p>
        </div>

        {/* Narrative & Stats Dashboard Card */}
        <div className="bg-[#15181C] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="font-mono text-xs text-[#C9A45C] uppercase tracking-widest font-bold">// HERITAGE & TELEMETRY</span>
              <p className="text-[#B8B1A5] text-xs sm:text-sm font-sans leading-relaxed">
                Leap Frog Racing is a Professional Racing & Karting Team formed in the year <strong className="text-[#F4F1EA]">2018</strong> taking part in the <strong className="text-[#F4F1EA]">JK Tyre FMSCI National Racing Championship</strong>, <strong className="text-[#F4F1EA]">MRF National Championship</strong> & <strong className="text-[#F4F1EA]">Rotax Max National Karting Championship</strong>.
              </p>
              <p className="text-[#837D73] text-xs sm:text-sm font-sans leading-relaxed">
                Leap Frog Racing is owned by well experienced and successful Indian Racing Driver <strong className="text-[#C9A45C]">Rohit Khanna</strong> who has been a core part of the Indian Motorsport fraternity for more than <strong className="text-[#F4F1EA]">2 decades</strong>. The team boasts international-standard technical support, race engineers, and mechanics.
              </p>
            </div>

            {/* Stats Telemetry Badge */}
            <div className="grid grid-cols-2 gap-3 font-mono">
              <div className="p-4 rounded-xl bg-[#0B0D0F] border border-white/10 text-center shadow-sm">
                <div className="text-2xl font-display font-bold text-[#C9A45C]">2018</div>
                <div className="text-[9px] text-[#B8B1A5] uppercase tracking-wider font-bold mt-0.5">ESTABLISHED</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0B0D0F] border border-white/10 text-center shadow-sm">
                <div className="text-2xl font-display font-bold text-[#F4F1EA]">20+ YRS</div>
                <div className="text-[9px] text-[#B8B1A5] uppercase tracking-wider font-bold mt-0.5">DRIVER EXP.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0B0D0F] border border-white/10 text-center col-span-2 shadow-sm">
                <div className="text-xs font-display font-bold text-[#F4F1EA] uppercase">FMSCI & ROTAX</div>
                <div className="text-[9px] text-[#C9A45C] uppercase tracking-wider font-bold mt-0.5">NATIONAL CHAMPIONSHIPS</div>
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
              className="relative group rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#C9A45C]/70 transition-all duration-300 shadow-md hover:shadow-2xl h-64 sm:h-72 bg-[#0B0D0F]"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

              <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1 text-left">
                <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#C9A45C] text-[#0B0D0F] uppercase font-bold tracking-widest">
                  {photo.tag}
                </span>
                <h3 className="text-base font-display font-bold text-white uppercase group-hover:text-[#C9A45C] transition-colors">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
          >
            <div className="relative max-w-4xl w-full bg-[#15181C] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#C9A45C] border border-white/20 transition-colors cursor-pointer"
              >
                ✕
              </button>
              <img src={activeImage.src} alt={activeImage.title} className="w-full max-h-[75vh] object-contain bg-black" />
              <div className="p-6 bg-[#15181C] border-t border-white/10 flex items-center justify-between text-[#F4F1EA] text-left">
                <div>
                  <span className="text-[10px] font-mono text-[#C9A45C] uppercase font-bold">{activeImage.tag}</span>
                  <h4 className="text-xl font-display font-bold text-white uppercase">{activeImage.title}</h4>
                  <p className="text-xs font-mono text-[#B8B1A5] mt-1">{activeImage.desc}</p>
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
    <section id="whats-new" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 bg-[#0B0D0F] text-[#F4F1EA]">
      <div className="text-center space-y-3 mb-10 sm:mb-14">
        <span className="font-mono text-xs text-[#C9A45C] uppercase tracking-widest font-bold">// LATEST OFFERS & BUNDLE SESSIONS</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
          WHAT'S <span className="text-[#C9A45C]">NEW</span>
        </h2>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15181C] border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-[10px] font-bold uppercase tracking-wider">
          ★ ALL PRICES INCLUSIVE OF ALL TAXES
        </div>
      </div>

      {/* Featured Weekly Mega Banner */}
      <div className="mb-8">
        <div
          onClick={() => setActivePromo({
            id: 0,
            src: "/whats-new/weekly-offers.jpg",
            title: "WEEKLY MEGA RACING OFFERS",
            tag: "WEEKLY BONANZA",
            desc: "Monday BOGO 50% Off • Wednesday Happy Hour ₹500 • Friday Frenzy Buy 2 Get 1 Free!"
          })}
          className="relative group rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#C9A45C] transition-all duration-300 shadow-xl bg-black"
        >
          <img
            src="/whats-new/weekly-offers.jpg"
            alt="Kartomania Weekly Offers - Monday BOGO, Wednesday Happy Hour, Friday Frenzy"
            className="w-full h-auto max-h-[460px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex items-end p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 text-left">
              <div>
                <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-[#C9A45C] text-[#0B0D0F] font-bold uppercase tracking-widest shadow-md">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
        {coreThreeOffers.map((offer) => (
          <div
            key={offer.id}
            className="p-6 rounded-2xl bg-[#15181C] border border-white/10 hover:border-[#C9A45C]/60 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between space-y-4 text-left"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0B0D0F] text-[#C9A45C] font-mono text-[9px] font-bold uppercase tracking-wider border border-white/10">
                  {offer.tag}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#C9A45C]/20 text-[#C9A45C] font-mono text-[9px] font-bold uppercase">
                  {offer.badge}
                </span>
              </div>
              <h3 className="text-lg font-display font-bold text-[#F4F1EA] uppercase">{offer.title}</h3>
              <p className="text-xs sm:text-sm font-sans text-[#B8B1A5] leading-relaxed">{offer.desc}</p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="text-lg font-display font-black text-[#C9A45C]">{offer.price}</div>
              <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-1.5 px-3.5 text-[10px]">
                Book Deal
              </MagneticButton>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Bundle Sessions Section */}
      <div className="bg-[#15181C] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 text-left shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#C9A45C] uppercase tracking-wider">// MULTI-RACE VALUE PACKS</span>
            <h3 className="text-xl font-display font-bold text-[#F4F1EA] uppercase">BUNDLE SESSIONS</h3>
          </div>
          <span className="text-[10px] font-mono text-[#837D73] font-semibold uppercase">Inclusive of all taxes</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {bundleSessions.map((bundle, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#0B0D0F] border border-white/10 flex flex-col justify-between space-y-4 shadow-sm hover:border-[#C9A45C]/50 transition-colors">
              <div className="space-y-2">
                <div className="text-xs sm:text-sm font-display font-bold text-[#F4F1EA] uppercase">{bundle.name}</div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#C9A45C]/15 text-[#C9A45C] font-mono text-[9px] font-bold uppercase tracking-wider">
                  🎁 {bundle.bonus}
                </span>
                <p className="text-xs font-sans text-[#B8B1A5]">{bundle.desc}</p>
              </div>
              <div className="pt-3 flex items-center justify-between border-t border-white/10">
                <div className="text-lg font-display font-black text-[#C9A45C]">{bundle.price}</div>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
        >
          <div className="relative max-w-3xl w-full bg-[#15181C] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActivePromo(null)}
              className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#C9A45C] border border-white/20 transition-colors cursor-pointer"
            >
              ✕
            </button>
            <img src={activePromo.src} alt={activePromo.title} className="w-full max-h-[75vh] object-contain bg-black" />
            <div className="p-5 bg-[#15181C] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#F4F1EA] text-left">
              <div>
                <span className="text-[10px] font-mono text-[#C9A45C] uppercase font-bold">{activePromo.tag}</span>
                <h4 className="text-lg font-display font-bold text-white uppercase">{activePromo.title}</h4>
                <p className="text-xs font-mono text-[#B8B1A5] mt-0.5">{activePromo.desc}</p>
              </div>
              <MagneticButton onClick={() => setActivePromo(null)} className="py-2.5 px-5 text-xs">
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
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 bg-[#0B0D0F] text-[#F4F1EA]">
      <div className="text-center space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15181C] border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-wider">
          ★ ALL PRICES INCLUSIVE OF ALL TAXES
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
          OFFICIAL <span className="text-[#C9A45C]">PRICING & COMBOS</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-[#B8B1A5] max-w-2xl mx-auto">
          Exclusive multi-session packages featuring complimentary free bowling and bonus race sessions.
        </p>
      </div>

      {/* 1. Official Value Combo Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
        {/* Weekday Combos */}
        <div className="bg-[#15181C] border border-white/10 hover:border-[#C9A45C]/50 rounded-2xl p-6 sm:p-7 shadow-xl transition-all relative text-left">
          <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-4 border-b border-white/10">
            <div className="space-y-0.5">
              <span className="text-[9px] font-mono font-bold text-[#C9A45C] uppercase tracking-widest block">SUPER VALUE DEALS</span>
              <h3 className="text-xl font-display font-bold text-[#F4F1EA] uppercase tracking-wider">WEEKDAY COMBOS</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#0B0D0F] border border-white/10 text-[#C9A45C] font-mono text-xs font-bold uppercase whitespace-nowrap">
              MON – THU
            </span>
          </div>

          <div className="space-y-3">
            {weekdayCombos.map((item, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-[#0B0D0F] border border-white/5 hover:border-[#C9A45C]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors">
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-display font-bold text-[#F4F1EA] uppercase">{item.package}</div>
                  <span className="inline-block px-2 py-0.5 rounded bg-[#C9A45C]/15 text-[#C9A45C] font-mono text-[9px] font-bold uppercase tracking-wider">
                    🎁 {item.bonus}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-display font-black text-[#C9A45C]">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekend Combos */}
        <div className="bg-[#15181C] border border-[#C9A45C]/40 rounded-2xl p-6 sm:p-7 shadow-2xl transition-all relative text-left">
          <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-4 border-b border-white/10">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono font-bold text-[#C9A45C] uppercase tracking-widest block">PEAK RACING & ENTERTAINMENT</span>
                <span className="px-2 py-0.5 rounded-full bg-[#C9A45C] text-[8px] font-mono font-bold text-[#0B0D0F] uppercase tracking-wider shadow-sm">
                  ★ POPULAR
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-[#F4F1EA] uppercase tracking-wider">WEEKEND COMBOS</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#0B0D0F] border border-white/10 text-[#C9A45C] font-mono text-xs font-bold uppercase whitespace-nowrap">
              FRI – SUN & HOLIDAYS
            </span>
          </div>

          <div className="space-y-3">
            {weekendCombos.map((item, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-[#0B0D0F] border border-white/5 hover:border-[#C9A45C]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors">
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-display font-bold text-[#F4F1EA] uppercase">{item.package}</div>
                  <span className="inline-block px-2 py-0.5 rounded bg-[#C9A45C]/15 text-[#C9A45C] font-mono text-[9px] font-bold uppercase tracking-wider">
                    🔥 {item.bonus}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-display font-black text-[#C9A45C]">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Standard Session Tariff Table */}
      <div className="bg-[#15181C] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl mb-10 text-left">
        <div className="pb-4 mb-4 border-b border-white/10">
          <h3 className="text-lg font-display font-bold text-[#F4F1EA] uppercase tracking-wider">
            STANDARD KARTING SESSIONS TARIFF
          </h3>
          <p className="text-xs font-mono text-[#837D73]">Pure track time rates without bowling additions (Taxes Included).</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs sm:text-sm">
            <thead className="bg-[#0B0D0F] text-[#C9A45C] uppercase text-[11px] border border-white/5">
              <tr>
                <th className="py-3 px-4 rounded-l-lg">SESSIONS</th>
                <th className="py-3 px-4 text-center">WEEKDAY (MON – THU)</th>
                <th className="py-3 px-4 text-right rounded-r-lg">WEEKEND (FRI – SUN)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-[#F4F1EA]">
              {standardRates.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#1E232B] transition-colors">
                  <td className="py-3 px-4 font-bold text-[#F4F1EA]">{row.sessions}</td>
                  <td className="py-3 px-4 text-center font-display font-bold text-[#B8B1A5]">{row.weekday}</td>
                  <td className="py-3 px-4 text-right font-display font-bold text-[#C9A45C] text-sm sm:text-base">{row.weekend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Terms and Conditions Card */}
      <div className="bg-[#15181C] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 text-left shadow-lg">
        <h4 className="font-display font-bold text-xs sm:text-sm text-[#C9A45C] uppercase tracking-wider">
          TERMS AND CONDITIONS
        </h4>
        <ul className="space-y-2 text-xs font-mono text-[#B8B1A5] list-disc list-inside">
          <li>Each karting session lasts 6 minutes on the track.</li>
          <li><strong>All prices are inclusive of all taxes.</strong></li>
          <li>All sessions and free bowling coupons must be consumed on the day they are bought.</li>
          <li>Packages are non-transferable and non-refundable.</li>
        </ul>

        <div className="pt-3 flex justify-center">
          <MagneticButton onClick={onOpenBooking} className="py-3.5 px-9 text-xs font-bold shadow-xl">
            Book Your Race Now 🏁
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9";

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 bg-[#0B0D0F] text-[#F4F1EA]">
      <div className="space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-[#C9A45C] uppercase tracking-widest font-bold">// ARENA LOCATION & NAVIGATION</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F4F1EA] uppercase tracking-tight">
            FIND THE <span className="text-[#C9A45C]">ARENA</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#B8B1A5] max-w-xl mx-auto">
            Located at Entertainland Mall, India's premier 720m outdoor pro karting circuit.
          </p>
        </div>

        {/* Location Info & CTAs */}
        <div className="bg-[#15181C] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 text-left font-mono">
            <div className="p-4 sm:p-5 rounded-xl bg-[#0B0D0F] border border-white/10 space-y-2 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#C9A45C]">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// ARENA ADDRESS</span>
              </div>
              <div className="text-xs text-[#F4F1EA] font-sans font-semibold leading-relaxed">
                Entertainland Mall, Sector 83, Manesar, Gurgaon.
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#0B0D0F] border border-white/10 space-y-2 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#C9A45C]">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// OPEN ALL 7 DAYS</span>
              </div>
              <div className="text-xs text-[#F4F1EA] font-sans font-semibold space-y-0.5">
                <div>Mon – Fri: 2:00 PM – 11:00 PM</div>
                <div>Sat – Sun: 1:00 PM – 11:00 PM</div>
                <div className="text-emerald-400 font-bold">// We Open All Days</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#0B0D0F] border border-white/10 space-y-2 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#C9A45C]">
                <Phone className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// CALL US / HOTLINE</span>
              </div>
              <div className="text-xs text-[#F4F1EA] font-sans font-semibold space-y-0.5">
                <a href="tel:+919717548897" className="block hover:text-[#C9A45C] transition-colors font-bold">+91 97175 48897</a>
                <a href="tel:+919560492876" className="block hover:text-[#C9A45C] transition-colors font-bold">+91 95604 92876</a>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#0B0D0F] border border-white/10 space-y-2 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#C9A45C]">
                <Mail className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">// EMAIL ENQUIRIES</span>
              </div>
              <div className="text-xs text-[#F4F1EA] font-sans font-semibold space-y-0.5">
                <a href="mailto:kartomania.ggn@gmail.com" className="block hover:text-[#C9A45C] transition-colors font-bold break-all">
                  kartomania.ggn@gmail.com
                </a>
                <div className="text-[10px] text-[#837D73] font-mono">Corporate & Booking queries</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-center lg:justify-start">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B0D0F] hover:bg-[#1E232B] border border-white/10 hover:border-[#C9A45C] text-xs font-mono tracking-wider uppercase text-[#F4F1EA] font-bold transition-all shadow-sm group"
              >
                <MapPin className="w-4 h-4 text-[#C9A45C] group-hover:scale-110 transition-transform" />
                <span>GOOGLE MAPS</span>
              </a>

              <a
                href="https://www.facebook.com/kartomaniacsggn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B0D0F] hover:bg-[#1E232B] border border-white/10 hover:border-[#C9A45C] text-xs font-mono tracking-wider uppercase text-[#F4F1EA] font-bold transition-all shadow-sm group"
              >
                <FacebookIcon className="w-4 h-4 text-[#C9A45C] group-hover:scale-110 transition-transform" />
                <span>FACEBOOK</span>
              </a>

              <a
                href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B0D0F] hover:bg-[#1E232B] border border-white/10 hover:border-[#C9A45C] text-xs font-mono tracking-wider uppercase text-[#F4F1EA] font-bold transition-all shadow-sm group"
              >
                <InstagramIcon className="w-4 h-4 text-[#C9A45C] group-hover:scale-110 transition-transform" />
                <span>INSTAGRAM</span>
              </a>

              <a
                href="https://wa.me/919717548897?text=Hi%20Kartomania!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20racing%20session."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Hotline"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B0D0F] hover:bg-[#1E232B] border border-white/10 hover:border-[#25D366] text-xs font-mono tracking-wider uppercase text-[#F4F1EA] font-bold transition-all shadow-sm group"
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
  <section id="game" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative z-20 bg-[#0B0D0F] text-[#F4F1EA]">
    <div className="space-y-8 sm:space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A45C]/15 border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-widest">
          <Trophy className="w-4 h-4" /> INTERACTIVE 2D KART RACER
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
          PRO <span className="text-[#C9A45C]">ARCADE</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-[#B8B1A5] max-w-xl mx-auto">
          Test your apex timing on our 16-bit retro arcade simulator before taking our 720M outdoor track!
        </p>
      </div>

      {/* Embedded 2D Game Canvas Component */}
      <GameCanvas />
    </div>
  </section>
);
