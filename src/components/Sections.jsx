import React from 'react';
import { Trophy, MapPin, Mail, Phone, Clock } from 'lucide-react';
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
            <div className="text-sm font-display font-bold text-[#080808]">OUTDOOR ASPHALT</div>
            <span className="text-[11px] font-sans text-[#666666]">High-grip polymer blend</span>
          </div>

          <div className="p-5 bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl text-left space-y-1">
            <span className="text-[10px] font-mono text-[#888888] uppercase tracking-widest block font-bold">04 // SAFETY</span>
            <div className="text-sm font-display font-bold text-[#080808]">F1 PRO BARRIER</div>
            <span className="text-[11px] font-sans text-[#666666]">High-impact shock absorption</span>
          </div>
        </div>

        <div className="pt-2">
          <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" onClick={onOpenBooking} className="py-3 px-7 text-xs">
            RESERVE TRACK SLOT
          </MagneticButton>
        </div>
      </div>

      {/* Right Circuit Schematic Telemetry Visual */}
      <div className="lg:w-7/12 w-full">
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
    <section id="leap-frog" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#080808] text-white relative z-20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Full-width Black Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#888888] uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5 text-white" /> // MOTORSPORT DIVISION
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight leading-none">
              LEAP FROG <span className="text-[#888888]">RACING</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#888888] uppercase tracking-widest max-w-sm">
            THE ONLY PROFESSIONAL RACING TEAM FROM THE NORTH
          </p>
        </div>

        {/* Narrative & Stats Dashboard Card */}
        <div className="bg-[#111111] border border-white/10 rounded-xl p-8 shadow-2xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">// HERITAGE & TELEMETRY</span>
              <p className="text-[#CCCCCC] text-sm sm:text-base font-sans leading-relaxed">
                Leap Frog Racing is a Professional Racing & Karting Team formed in the year <strong className="text-white font-bold">2018</strong> taking part in the <strong className="text-white font-bold">JK Tyre FMSCI National Racing Championship</strong>, <strong className="text-white font-bold">MRF National Championship</strong> & <strong className="text-white font-bold">Rotax Max National Karting Championship</strong>.
              </p>
              <p className="text-[#888888] text-xs sm:text-sm font-sans leading-relaxed">
                Leap Frog Racing is owned by well experienced and successful Indian Racing Driver <strong className="text-white font-bold">Rohit Khanna</strong> who has been a core part of the Indian Motorsport fraternity for more than <strong className="text-white font-bold">2 decades</strong>. The team boasts international-standard technical support, race engineers, and mechanics.
              </p>
            </div>

            {/* Stats Telemetry Badge */}
            <div className="grid grid-cols-2 gap-4 font-mono">
              <div className="p-5 rounded-lg bg-black border border-white/10 text-center">
                <div className="text-3xl font-display font-bold text-white">2018</div>
                <div className="text-[9px] text-[#888888] uppercase tracking-wider font-bold mt-1">ESTABLISHED</div>
              </div>
              <div className="p-5 rounded-lg bg-black border border-white/10 text-center">
                <div className="text-3xl font-display font-bold text-white">20+ YRS</div>
                <div className="text-[9px] text-[#888888] uppercase tracking-wider font-bold mt-1">DRIVER EXP.</div>
              </div>
              <div className="p-5 rounded-lg bg-black border border-white/10 text-center col-span-2">
                <div className="text-xs font-display font-bold text-white uppercase">FMSCI & ROTAX</div>
                <div className="text-[9px] text-[#888888] uppercase tracking-wider font-bold mt-1">NATIONAL CHAMPIONSHIPS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Team Images Gallery Grid (2x2 Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(photo)}
              className="relative group rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/40 transition-all duration-300 shadow-md h-72 sm:h-80 bg-black"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1.5 text-left">
                <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-sm bg-white text-[#080808] uppercase font-bold tracking-widest">
                  {photo.tag}
                </span>
                <h3 className="text-lg font-display font-bold text-white uppercase">
                  {photo.title}
                </h3>
                <p className="text-xs font-mono text-[#AAAAAA] line-clamp-1 sm:line-clamp-2">{photo.desc}</p>
              </div>
            </div>
          ))}
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
  const [activePromo, setActivePromo] = React.useState(null);

  const coreThreeOffers = [
    {
      id: 1,
      title: "MONDAY BONANZA",
      image: "/whats-new/monday-bonanza.jpg",
      badge: "50% OFF",
      desc: "Buy 1 Session and Get Another Session at 50% Off every Monday!",
      price: "BOGO 50% OFF",
      tag: "WEEKDAY DEALS"
    },
    {
      id: 2,
      title: "HAPPY HOURS WEDNESDAY",
      image: "/whats-new/happy-hour-wednesday.jpg",
      badge: "₹500 SPECIAL",
      desc: "Kart your heart out! Buy an authentic racing session @ ₹500/- Only on Wednesdays.",
      price: "₹500 FLAT",
      tag: "HAPPY HOUR"
    },
    {
      id: 3,
      title: "FRIDAY FRENZY",
      image: "/whats-new/friday-frenzy.jpg",
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
    <section id="whats-new" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-[#F9F9F9] text-[#111111]">
      <div className="space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E5E5] pb-6 text-left">
          <div>
            <span className="font-mono text-xs text-[#666666] uppercase tracking-widest font-semibold block mb-2">
              // LATEST OFFERS & BUNDLE SESSIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#080808] uppercase tracking-tight">
              WHAT'S <span className="text-[#666666]">NEW</span>
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-[#E5E5E5] text-[#111111] font-mono text-[10px] font-bold uppercase tracking-wider">
            ★ ALL PRICES INCLUSIVE OF ALL TAXES
          </div>
        </div>

        {/* 1. Core 3 Daily Offers Cards with High-Res Promotional Posters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreThreeOffers.map((offer) => (
            <div
              key={offer.id}
              className="rounded-xl bg-white border border-[#E5E5E5] hover:border-[#080808] shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden text-left group"
            >
              {/* Poster Image Container with Zoom & Click-to-Expand */}
              <div
                onClick={() => setActivePromo({
                  id: offer.id,
                  src: offer.image,
                  title: offer.title,
                  tag: offer.tag,
                  desc: offer.desc
                })}
                className="relative aspect-[4/3] bg-black overflow-hidden cursor-pointer"
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Tag Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-sm bg-black/80 backdrop-blur-md text-white font-mono text-[9px] font-bold uppercase tracking-wider border border-white/20">
                    {offer.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-sm bg-white text-[#080808] font-mono text-[9px] font-black uppercase shadow-md">
                    {offer.badge}
                  </span>
                </div>

                {/* Hover Overlay Prompt */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-sm bg-white text-[#080808] font-mono text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    CLICK TO EXPAND 🔍
                  </span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-[#111111] uppercase tracking-tight">
                    {offer.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#666666] leading-relaxed">
                    {offer.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between">
                  <div className="text-base sm:text-lg font-display font-bold text-[#080808]">
                    {offer.price}
                  </div>
                  <MagneticButton
                    href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                    className="py-1.5 px-4 text-[10px]"
                  >
                    BOOK DEAL
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Featured Weekly Mega Banner */}
        <div>
          <div
            onClick={() => setActivePromo({
              id: 0,
              src: "/whats-new/weekly-offers.jpg",
              title: "WEEKLY MEGA RACING OFFERS",
              tag: "WEEKLY BONANZA",
              desc: "Monday BOGO 50% Off • Wednesday Happy Hour ₹500 • Friday Frenzy Buy 2 Get 1 Free!"
            })}
            className="relative group rounded-xl overflow-hidden cursor-pointer border border-[#E5E5E5] hover:border-[#080808] transition-all duration-300 shadow-sm bg-black"
          >
            <img
              src="/whats-new/weekly-offers.jpg"
              alt="Kartomania Weekly Offers"
              className="w-full h-auto max-h-[440px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex items-end p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 text-left">
                <div>
                  <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-sm bg-white text-[#080808] font-bold uppercase tracking-widest shadow-md">
                    CLICK TO VIEW FULL DETAILS
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase mt-1">
                    MONDAY BOGO &bull; WEDNESDAY HAPPY HOUR &bull; FRIDAY FRENZY
                  </h3>
                </div>
                <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-2.5 px-5 text-xs">
                  CLAIM WEEKLY DEALS &rarr;
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bundle Sessions Section */}
        <div className="bg-white border border-[#E5E5E5] rounded-xl p-8 space-y-6 text-left shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#EAEAEA] pb-4">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#666666] uppercase tracking-wider">// MULTI-RACE VALUE PACKS</span>
              <h3 className="text-xl font-display font-bold text-[#080808] uppercase">BUNDLE SESSIONS</h3>
            </div>
            <span className="text-[10px] font-mono text-[#888888] font-semibold uppercase">Inclusive of all taxes</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {bundleSessions.map((bundle, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] flex flex-col justify-between space-y-4 shadow-sm hover:border-[#080808] transition-colors">
                <div className="space-y-2">
                  <div className="text-xs sm:text-sm font-display font-bold text-[#111111] uppercase">{bundle.name}</div>
                  <span className="inline-block px-2 py-0.5 rounded-sm bg-white border border-[#E5E5E5] text-[#111111] font-mono text-[9px] font-bold uppercase tracking-wider">
                    🎁 {bundle.bonus}
                  </span>
                  <p className="text-xs font-sans text-[#666666]">{bundle.desc}</p>
                </div>
                <div className="pt-3 flex items-center justify-between border-t border-[#EAEAEA]">
                  <div className="text-lg font-display font-bold text-[#080808]">{bundle.price}</div>
                  <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-1.5 px-3 text-[10px]">
                    GET BUNDLE
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActivePromo(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 text-white hover:text-[#AAAAAA] transition-colors cursor-pointer"
              >
                ✕
              </button>
              <img src={activePromo.src} alt={activePromo.title} className="w-full max-h-[75vh] object-contain bg-black" />
              <div className="p-6 bg-white border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-3 text-[#111111] text-left">
                <div>
                  <span className="text-[10px] font-mono text-[#666666] uppercase font-bold">{activePromo.tag}</span>
                  <h4 className="text-lg font-display font-bold text-[#080808] uppercase">{activePromo.title}</h4>
                  <p className="text-xs font-mono text-[#666666] mt-0.5">{activePromo.desc}</p>
                </div>
                <MagneticButton
                  href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                  className="py-2.5 px-6 text-xs"
                >
                  BOOK THIS DEAL
                </MagneticButton>
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
