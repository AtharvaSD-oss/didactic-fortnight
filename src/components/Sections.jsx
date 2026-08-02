import React from 'react';
import { Flag, Trophy, Shield, Zap, MapPin, Phone, Coffee, Star, CheckCircle, ArrowRight, Gauge } from 'lucide-react';
import MagneticButton from './MagneticButton';

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

export const GallerySection = () => (
  <section id="gallery" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
    <div className="text-center space-y-4 mb-14">
      <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// VISUAL SHOWCASE</span>
      <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase">THE RACE ATMOSPHERE</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "Night Apex Cornering", tag: "F1 LIGHTING" },
        { title: "Podium Celebrations", tag: "CHAMPIONS" },
        { title: "Pitlane Telemetry Hub", tag: "RACE CONTROL" }
      ].map((item, idx) => (
        <div key={idx} className="relative group h-64 rounded-2xl bg-[#12121c] border border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          <div className="absolute bottom-6 left-6 z-20 space-y-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF4500] text-white uppercase">
              {item.tag}
            </span>
            <h3 className="text-lg font-display font-bold text-white uppercase">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const CafeSection = () => (
  <section id="cafe" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/15 text-[#FF4500] font-mono text-xs uppercase font-bold">
          <Coffee className="w-4 h-4" /> PITSTOP LOUNGE
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase">
          FUEL UP AT THE <span className="text-[#FF4500]">APEX CAFE</span>
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Relax in our luxury air-conditioned F1 paddock lounge overlooking the main straightaway. Enjoy artisan coffees, gourmet wood-fired pizzas, and energy elixirs while monitoring live track telemetries.
        </p>
      </div>

      <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-[#0e0e17] border border-white/10">
          <span className="text-xs font-mono text-[#FF4500] uppercase">// DRINKS</span>
          <h4 className="font-display font-bold text-white text-base mt-2">NITRO BREW COFFEE</h4>
          <p className="text-xs text-gray-400 mt-1">Triple espresso with chocolate bitters</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0e0e17] border border-white/10">
          <span className="text-xs font-mono text-[#FF4500] uppercase">// FOOD</span>
          <h4 className="font-display font-bold text-white text-base mt-2">CHEQUERED FLAG PIZZA</h4>
          <p className="text-xs text-gray-400 mt-1">Artisan pepperoni & truffle drizzle</p>
        </div>
      </div>
    </div>
  </section>
);

export const ContactSection = ({ onOpenBooking }) => (
  <section id="contact" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
    <div className="bg-gradient-to-r from-[#0f0f1a] via-[#141424] to-[#0f0f1a] border border-[#FF4500]/40 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(255,69,0,0.2)]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 md:w-2/3">
          <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// ARENA LOCATION & CONTACT</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase">
            READY TO SET YOUR QUALIFYING LAP?
          </h2>
          <p className="text-gray-300 text-sm">
            Kartomania Arena, Sector 62 Cyber Speed Park, Gurgaon, Delhi NCR, India.
            <br />
            Open Daily: 11:00 AM – 11:00 PM | Phone: +91 98765 43210
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <MagneticButton onClick={onOpenBooking}>Book Your Race</MagneticButton>
        </div>
      </div>
    </div>
  </section>
);
