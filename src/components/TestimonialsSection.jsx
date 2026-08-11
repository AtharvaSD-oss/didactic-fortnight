import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Star, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: "Rohan Verma",
    role: "Rotax Max Competitor",
    review: "The track layout at Kartomania is insane! The multi-level elevation changes and Sodi RT10 karts deliver pure F1 style thrills. Best outdoor karting in India.",
    rating: 5,
    tag: "PRO DRIVER"
  },
  {
    name: "Aditi Sharma",
    role: "Weekend Enthusiast",
    review: "Had my birthday race with friends here. The safety briefing was top notch, staff was super friendly, and the live telemetry timing added so much competition!",
    rating: 5,
    tag: "GROUP EVENT"
  },
  {
    name: "Sameer Malhotra",
    role: "Corporate Team Lead",
    review: "Organized our corporate Grand Prix event here. Seamless kiosk booking, podium celebrations, and championship trophies. Everyone had an absolute blast!",
    rating: 5,
    tag: "CORPORATE CUP"
  },
  {
    name: "Vikram Sengupta",
    role: "Amateur Racer",
    review: "Rohit Khanna's motorsport experience truly reflects in track grip and kart maintenance. The corners test your throttle control like a real national circuit.",
    rating: 5,
    tag: "TRACK DAYS"
  },
  {
    name: "Ananya Iyer",
    role: "First-time Driver",
    review: "I was nervous initially, but the safety gear and marshals made me feel very safe. Loved every second of the 6-minute rush! Coming back next weekend.",
    rating: 5,
    tag: "FIRST TIMER"
  },
  {
    name: "Kabir Mehta",
    role: "Karting Fanatic",
    review: "The 270cc 4-stroke engines pull hard out of apexes. The best asphalt outdoor track in NCR without a doubt. The weekday offers are super value for money.",
    rating: 5,
    tag: "REGULAR RACER"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 max-w-7xl mx-auto border-t border-gray-800 relative z-20 text-white">
      <div className="text-center space-y-2 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 font-mono text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> RACER VERIFIED REVIEWS
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
          DRIVER <span className="text-[#00d9ff]">EXPERIENCES</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-gray-400 max-w-xl mx-auto">
          Hear what drivers, amateur racers, and corporate event teams say about Kartomania.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 1.8,
            slideShadows: false,
          }}
          className="py-6"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className="max-w-md w-full">
              {({ isActive }) => (
                <div
                  className={`
                    p-6 sm:p-7 rounded-3xl transition-all duration-500 border text-left flex flex-col justify-between h-72
                    ${
                      isActive
                        ? 'floating-card border-[#00d9ff]/60 shadow-[0_20px_60px_rgba(0,217,255,0.25)] scale-100'
                        : 'bg-[#0a0e27]/60 border-gray-800/80 opacity-50 scale-95'
                    }
                  `}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#d4af37]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 font-mono text-[9px] font-bold uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-sans text-gray-200 leading-relaxed italic line-clamp-4">
                      "{item.review}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <div>
                      <h4 className="text-sm font-display font-bold text-white uppercase">{item.name}</h4>
                      <p className="text-[10px] font-mono text-gray-400">{item.role}</p>
                    </div>
                    <Quote className="w-6 h-6 text-[#00d9ff]/40" />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
