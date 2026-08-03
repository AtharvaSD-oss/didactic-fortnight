import React from 'react';
import { Flag, Trophy, Shield, Zap, MapPin, Phone, Coffee, Star, CheckCircle, ArrowRight, Gauge, Flame } from 'lucide-react';
import MagneticButton from './MagneticButton';
import GameCanvas from './GameCanvas';

export const TrackSection = ({ onOpenBooking }) => (
  <section id="track" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="space-y-6 md:w-1/2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/15 text-[#FF4500] font-mono text-xs font-bold uppercase tracking-widest">
          <MapPin className="w-3.5 h-3.5" /> CIRCUIT TELEMETRY
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
          THE MONACO OF <span className="text-[#FF4500]">INDOOR KARTING</span>
        </h2>
        <p className="text-gray-400 text-sm font-sans leading-relaxed">
          Designed by former Formula 1 track engineers. Features a 550-meter multi-level asphalt surface with high-banked hairpin turns, elevation changes, and high-speed chicane straights.
        </p>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="p-3 bg-[#11111a] border border-white/10 rounded-xl">
            <span className="text-xs font-mono text-gray-500 uppercase">Surface</span>
            <div className="text-lg font-display font-bold text-white">Polymer Asphalt</div>
          </div>
          <div className="p-3 bg-[#11111a] border border-white/10 rounded-xl">
            <span className="text-xs font-mono text-gray-500 uppercase">Barrier System</span>
            <div className="text-lg font-display font-bold text-white">F1 Pro Barrier</div>
          </div>
        </div>

        <MagneticButton onClick={onOpenBooking}>Reserve Track Slot</MagneticButton>
      </div>

      <div className="md:w-1/2 w-full">
        <div className="relative rounded-2xl bg-[#0e0e17] border border-[#FF4500]/30 p-6 shadow-[0_0_40px_rgba(255,69,0,0.15)] overflow-hidden">
          <div className="absolute top-3 right-3 text-[10px] font-mono text-[#FF4500] uppercase">
            // 2D CIRCUIT SCHEMATIC
          </div>
          <div className="h-64 sm:h-80 rounded-xl bg-[#09090f] border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4500]/20 to-transparent opacity-50" />
            <div className="text-center p-6 space-y-3 z-10">
              <Gauge className="w-12 h-12 text-[#FF4500] mx-auto animate-pulse" />
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
  <section id="karts" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
    <div className="text-center space-y-4 mb-14">
      <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// THE FLEET</span>
      <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase">HIGH-PERFORMANCE RACE KARTS</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "SODI RT10 PRO", engine: "270cc Honda GX", hp: "13.0 HP", topSpeed: "75 KM/H", level: "PRO SERIES" },
        { name: "LAMBO E-BOOSTER", engine: "Dual Electric Brushless", hp: "18.5 HP", topSpeed: "85 KM/H", level: "HYPER E-SERIES" },
        { name: "SODI LR5 JUNIOR", engine: "160cc Honda GX", hp: "6.5 HP", topSpeed: "45 KM/H", level: "CADET ACADEMY" }
      ].map((kart, idx) => (
        <div key={idx} className="bg-[#0e0e17] border border-white/10 hover:border-[#FF4500]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,69,0,0.2)] group">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#FF4500]/20 text-[#FF4500] uppercase">
              {kart.level}
            </span>
            <Zap className="w-5 h-5 text-gray-500 group-hover:text-[#FF4500] transition-colors" />
          </div>

          <h3 className="text-xl font-display font-bold text-white uppercase mb-4">{kart.name}</h3>

          <div className="space-y-2 font-mono text-xs text-gray-400 mb-6">
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>ENGINE:</span>
              <span className="text-white">{kart.engine}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>OUTPUT:</span>
              <span className="text-[#FF4500]">{kart.hp}</span>
            </div>
            <div className="flex justify-between">
              <span>MAX VELOCITY:</span>
              <span className="text-white">{kart.topSpeed}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const LeapFrogSection = ({ onOpenBooking }) => {
  const [activeImage, setActiveImage] = React.useState(null);

  const teamPhotos = [
    {
      src: "/leap-frog/leap-frog-1.jpg",
      title: "Rotax Max Kart #71 Apex",
      tag: "NATIONAL KARTING",
      desc: "Rotax Max Championship race kart #71 taking the apex corner."
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
    <section id="leap-frog" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4500]/15 border border-[#FF4500]/40 text-[#FF4500] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> PROFESSIONAL MOTORSPORT DIVISION
          </div>
          <h2 className="text-3xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
            LEAP FROG <span className="text-[#FF4500]">RACING</span>
          </h2>
          <p className="text-sm font-mono text-[#FF4500] tracking-widest uppercase font-semibold">
            THE ONLY PROFESSIONAL RACING TEAM FROM THE NORTH
          </p>
        </div>

        {/* Narrative & Stats Dashboard Card */}
        <div className="bg-gradient-to-r from-[#0f0f1a] via-[#141424] to-[#0f0f1a] border border-[#FF4500]/40 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(255,69,0,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// HERITAGE & TELEMETRY</span>
              <p className="text-gray-300 text-sm sm:text-base font-sans leading-relaxed">
                Leap Frog Racing is a Professional Racing & Karting Team formed in the year <strong className="text-white">2018</strong> taking part in the <strong className="text-white">JK Tyre FMSCI National Racing Championship</strong>, <strong className="text-white">MRF National Championship</strong> & <strong className="text-white">Rotax Max National Karting Championship</strong>.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                Leap Frog Racing is owned by well experienced and successful Indian Racing Driver <strong className="text-[#FF4500]">Rohit Khanna</strong> who has been a core part of the Indian Motorsport fraternity for more than <strong className="text-white">2 decades</strong>. The team boasts international-standard technical support, race engineers, and mechanics.
              </p>
            </div>

            {/* Stats Telemetry Badge */}
            <div className="grid grid-cols-2 gap-4 font-mono">
              <div className="p-4 rounded-2xl bg-[#09090f] border border-white/10 text-center">
                <div className="text-2xl font-display font-bold text-[#FF4500]">2018</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">ESTABLISHED</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#09090f] border border-white/10 text-center">
                <div className="text-2xl font-display font-bold text-white">20+ YRS</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">DRIVER EXP.</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#09090f] border border-white/10 text-center col-span-2">
                <div className="text-sm font-display font-bold text-white uppercase">FMSCI & ROTAX</div>
                <div className="text-[10px] text-[#FF4500] uppercase tracking-wider">NATIONAL CHAMPIONSHIPS</div>
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
              className="relative group rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#FF4500]/70 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(255,69,0,0.3)] h-80 bg-[#08080c]"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07070a]/60 via-transparent to-[#07070a]/60" />

              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#FF4500] text-white uppercase font-bold tracking-widest">
                  {photo.tag}
                </span>
                <h3 className="text-lg font-display font-bold text-white uppercase group-hover:text-[#FF4500] transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs font-mono text-gray-300 line-clamp-2">{photo.desc}</p>
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
            <div className="relative max-w-4xl w-full bg-[#0c0c14] border border-[#FF4500]/60 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(255,69,0,0.4)]">
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/60 text-white hover:text-[#FF4500] border border-white/20 transition-colors"
              >
                ✕
              </button>
              <img src={activeImage.src} alt={activeImage.title} className="w-full max-h-[75vh] object-contain bg-black" />
              <div className="p-6 bg-[#09090f] border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#FF4500] uppercase font-bold">{activeImage.tag}</span>
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

export const WhatsNewSection = ({ onOpenBooking }) => {
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
    <section id="whats-new" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center space-y-3 mb-14">
        <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// LATEST OFFERS & ANNOUNCEMENTS</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">
          WHAT'S <span className="text-[#FF4500]">NEW</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 max-w-xl mx-auto">
          Exclusive summer specials, private track passes, and daily racing bonanzas at Kartomania.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promos.map((promo) => (
          <div
            key={promo.id}
            onClick={() => setActivePromo(promo)}
            className={`
              relative group rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#FF4500]/70
              transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(255,69,0,0.35)]
              ${promo.span} h-80 sm:h-96 bg-[#08080c] flex flex-col justify-end
            `}
          >
            {/* Background Image with Dark Seamless Gradient Blend */}
            <img
              src={promo.src}
              alt={promo.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
            />

            {/* Vignette & Seamless Background Overlays matching #07070a theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/50 to-transparent opacity-95 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07070a]/70 via-transparent to-[#07070a]/70" />
            <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF1E00] text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-md">
                {promo.badge}
              </span>
            </div>

            {/* Content info */}
            <div className="relative z-20 p-6 space-y-2">
              <span className="text-[10px] font-mono text-[#FF4500] uppercase font-bold tracking-wider">
                {promo.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase group-hover:text-[#FF4500] transition-colors">
                {promo.title}
              </h3>
              <p className="text-xs font-mono text-gray-300">
                {promo.desc}
              </p>

              <div className="pt-2">
                <MagneticButton onClick={onOpenBooking} className="text-[11px] py-2 px-4">
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
          <div className="relative max-w-3xl w-full bg-[#0c0c14] border border-[#FF4500]/60 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(255,69,0,0.4)]">
            <button
              onClick={() => setActivePromo(null)}
              className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/60 text-white hover:text-[#FF4500] border border-white/20 transition-colors"
            >
              ✕
            </button>
            <img src={activePromo.src} alt={activePromo.title} className="w-full max-h-[75vh] object-contain bg-black" />
            <div className="p-6 bg-[#09090f] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-[#FF4500] uppercase font-bold">{activePromo.tag}</span>
                <h4 className="text-xl font-display font-bold text-white uppercase">{activePromo.title}</h4>
                <p className="text-xs font-mono text-gray-300 mt-1">{activePromo.desc}</p>
              </div>
              <MagneticButton onClick={onOpenBooking}>
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
  const weekdayData = [
    { sessions: 1, price: '₹550' },
    { sessions: 5, price: '₹2750' },
    { sessions: 10, price: '₹5200' },
    { sessions: 15, price: '₹7500' },
    { sessions: 20, price: '₹9570' },
  ];

  const weekendData = [
    { sessions: 1, price: '₹650' },
    { sessions: 5, price: '₹3250' },
    { sessions: 10, price: '₹6175' },
    { sessions: 15, price: '₹8850' },
    { sessions: 20, price: '₹11,400' },
  ];

  return (
    <section id="pricing" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center space-y-3 mb-12">
        <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// RACE PACKAGES & RATES</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">PRICING</h2>
        <p className="text-sm font-mono text-gray-400">Come back regularly to check out the current deals!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Weekdays Table Card */}
        <div className="bg-[#0e0e17] border border-white/10 hover:border-[#FF4500]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">WEEKDAYS</h3>
            <span className="px-3 py-1 rounded-full bg-[#FF4500]/15 text-[#FF4500] font-mono text-xs font-semibold uppercase">
              MON – THU
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-sm">
              <thead className="bg-[#141422] text-[#FF4500] uppercase text-xs">
                <tr>
                  <th className="py-3 px-4 rounded-l-lg">SESSIONS</th>
                  <th className="py-3 px-4 rounded-r-lg text-right">PRICE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-200">
                {weekdayData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.04] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">
                      {row.sessions} {row.sessions === 1 ? 'Session' : 'Sessions'}
                    </td>
                    <td className="py-3.5 px-4 text-right font-display font-bold text-[#FF4500] text-base">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Weekend Table Card */}
        <div className="bg-gradient-to-b from-[#121220] to-[#0c0c14] border-2 border-[#FF4500]/60 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(255,69,0,0.25)] transition-all relative">
          <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF1E00] text-[10px] font-mono font-bold text-white uppercase tracking-widest shadow-md">
            PEAK RACING
          </span>

          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">WEEKEND</h3>
            <span className="px-3 py-1 rounded-full bg-[#FF4500]/20 text-[#FF4500] font-mono text-xs font-semibold uppercase">
              FRI – SUN & HOLIDAYS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-sm">
              <thead className="bg-[#18182b] text-[#FF4500] uppercase text-xs">
                <tr>
                  <th className="py-3 px-4 rounded-l-lg">SESSIONS</th>
                  <th className="py-3 px-4 rounded-r-lg text-right">PRICE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-200">
                {weekendData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.04] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">
                      {row.sessions} {row.sessions === 1 ? 'Session' : 'Sessions'}
                    </td>
                    <td className="py-3.5 px-4 text-right font-display font-bold text-[#FF4500] text-base">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Card */}
      <div className="bg-[#0e0e17] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
        <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider text-[#FF4500]">
          TERMS AND CONDITIONS
        </h4>
        <ul className="space-y-2 text-xs font-mono text-gray-300 list-disc list-inside">
          <li>Each session lasts 6 minutes</li>
          <li>All prices are exclusive of 18% GST</li>
          <li>All sessions must be consumed on the day they are bought</li>
        </ul>

        <div className="pt-4 flex justify-center">
          <MagneticButton onClick={onOpenBooking}>Book Your Race</MagneticButton>
        </div>
      </div>
    </section>
  );
};

export const LeaderboardSection = () => (
  <section id="leaderboard" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
    <div className="text-center space-y-4 mb-14">
      <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// TELEMETRY RECORDS</span>
      <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase">HALL OF SPEED</h2>
    </div>

    <div className="bg-[#0e0e17] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-xs">
          <thead className="bg-[#141422] text-[#FF4500] uppercase border-b border-white/10">
            <tr>
              <th className="py-4 px-6">POS</th>
              <th className="py-4 px-6">DRIVER</th>
              <th className="py-4 px-6">BEST LAP</th>
              <th className="py-4 px-6">KART #</th>
              <th className="py-4 px-6">DATE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-gray-300">
            {[
              { pos: '01', driver: 'Karan Sharma', lap: '27.421s', kart: 'SODI-07', date: '2026-07-28' },
              { pos: '02', driver: 'Vikramaditya R.', lap: '27.658s', kart: 'LAMBO-03', date: '2026-07-30' },
              { pos: '03', driver: 'Aanya Verma', lap: '27.890s', kart: 'SODI-12', date: '2026-07-31' },
              { pos: '04', driver: 'Rohan Mehta', lap: '28.012s', kart: 'SODI-01', date: '2026-07-25' },
              { pos: '05', driver: 'Siddharth Nair', lap: '28.145s', kart: 'LAMBO-09', date: '2026-07-29' },
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                <td className="py-4 px-6 font-bold text-[#FF4500]">{row.pos}</td>
                <td className="py-4 px-6 font-sans font-semibold text-white">{row.driver}</td>
                <td className="py-4 px-6 text-white font-bold">{row.lap}</td>
                <td className="py-4 px-6 text-gray-400">{row.kart}</td>
                <td className="py-4 px-6 text-gray-500">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

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
    <section id="gallery" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center space-y-4 mb-14">
        <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// VISUAL SHOWCASE & GALLERY</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">
          THE <span className="text-[#FF4500]">KARTOMANIA</span> EXPERIENCE
        </h2>
        <p className="text-sm font-mono text-gray-400 max-w-xl mx-auto">
          Explore real track footage from India's premier indoor go-karting arena.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setActivePhoto(item)}
            className={`
              relative group rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#FF4500]/70
              transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(255,69,0,0.3)]
              ${item.span} ${item.height} bg-[#08080c]
            `}
          >
            {/* Background Image with Dark Seamless Gradient Blend */}
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
            />

            {/* Vignette & Ambient Darkness Overlay matching #07070a page background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07070a]/60 via-transparent to-[#07070a]/60" />

            {/* Inner Glowing Border Accent */}
            <div className="absolute inset-0 border border-[#FF4500]/0 group-hover:border-[#FF4500]/50 rounded-2xl transition-colors duration-500 pointer-events-none" />

            {/* Content Labels */}
            <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#FF4500] text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-md">
                {item.tag}
              </div>
              <h3 className="text-xl font-display font-bold text-white uppercase group-hover:text-[#FF4500] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-gray-300 line-clamp-2">
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
          <div className="relative max-w-4xl w-full bg-[#0c0c14] border border-[#FF4500]/60 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(255,69,0,0.4)]">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/60 text-white hover:text-[#FF4500] border border-white/20 transition-colors"
            >
              ✕
            </button>
            <img src={activePhoto.src} alt={activePhoto.title} className="w-full max-h-[75vh] object-contain bg-black" />
            <div className="p-6 bg-[#09090f] border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#FF4500] uppercase">{activePhoto.tag}</span>
                <h4 className="text-xl font-display font-bold text-white uppercase">{activePhoto.title}</h4>
                <p className="text-xs font-mono text-gray-400 mt-1">{activePhoto.desc}</p>
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
    <section id="founder" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4500]/15 border border-[#FF4500]/40 text-[#FF4500] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> MOTORSPORT LEGEND & FOUNDER
          </div>
          <h2 className="text-3xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
            KNOW OUR FOUNDER — <span className="text-[#FF4500]">MR. ROHIT KHANNA</span>
          </h2>
          <p className="text-sm font-mono text-gray-400 max-w-2xl mx-auto">
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
                className="bg-[#0e0e17] border border-white/10 hover:border-[#FF4500]/60 rounded-2xl p-6 sm:p-8 space-y-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,69,0,0.25)] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#FF4500]/15 text-[#FF4500] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#FF4500]/20 text-[#FF4500] font-mono text-[10px] font-bold uppercase tracking-widest">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{item.period}</span>
                  <h3 className="text-lg font-display font-bold text-white uppercase group-hover:text-[#FF4500] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs font-mono text-gray-300 leading-relaxed">
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

export const ContactSection = ({ onOpenBooking }) => {
  const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9";

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// ARENA LOCATION & NAVIGATION</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">
            FIND THE <span className="text-[#FF4500]">ARENA</span>
          </h2>
          <p className="text-sm font-mono text-gray-400 max-w-xl mx-auto">
            Located at Entertainland Mall, India's premier indoor pro karting circuit.
          </p>
        </div>

        {/* Location Info & CTAs */}
        <div className="bg-gradient-to-r from-[#0f0f1a] via-[#141424] to-[#0f0f1a] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left font-mono">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-[10px] text-[#FF4500] uppercase font-bold tracking-wider">// ARENA ADDRESS</span>
              <div className="text-xs text-white font-sans font-semibold leading-relaxed">
                Entertainland Mall, Sector 83, Manesar, Gurgaon.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-[10px] text-[#FF4500] uppercase font-bold tracking-wider">// BUSINESS HOURS</span>
              <div className="text-xs text-white font-sans font-semibold space-y-1">
                <div>Weekdays: 3:00 PM – 10:00 PM</div>
                <div>Weekends: 11:30 AM – 10:00 PM</div>
                <div className="text-[#FF4500] font-bold">// Tuesdays Closed</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-[10px] text-[#FF4500] uppercase font-bold tracking-wider">// CALL US / HOTLINE</span>
              <div className="text-xs text-white font-sans font-semibold space-y-1">
                <a href="tel:+919717548897" className="block hover:text-[#FF4500] transition-colors">+91 97175 48897</a>
                <a href="tel:+919560492876" className="block hover:text-[#FF4500] transition-colors">+91 95604 92876</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#FF4500] text-xs font-mono tracking-widest uppercase text-white transition-all group"
            >
              <MapPin className="w-4 h-4 text-[#FF4500] group-hover:scale-110 transition-transform" />
              <span>GET DIRECTIONS ON GOOGLE MAPS</span>
            </a>

            <MagneticButton onClick={onOpenBooking}>Book Your Race</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GameSection = () => (
  <section id="game" className="py-28 px-4 max-w-7xl mx-auto border-t border-white/10 relative z-20">
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4500]/15 border border-[#FF4500]/40 text-[#FF4500] font-mono text-xs font-bold uppercase tracking-widest">
          <Trophy className="w-4 h-4" /> INTERACTIVE 2D KART RACER
        </div>
        <h2 className="text-3xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
          PRO <span className="text-[#FF4500]">ARCADE</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 max-w-xl mx-auto">
          Test your apex timing on our 16-bit retro arcade simulator before taking the real track!
        </p>
      </div>

      {/* Embedded 2D Game Canvas Component */}
      <GameCanvas />
    </div>
  </section>
);
