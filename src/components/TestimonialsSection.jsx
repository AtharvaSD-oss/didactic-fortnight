import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Amateur Track Driver",
    rating: 5,
    comment: "The speed and handling of the SODI RT10 karts at Kartomania are unreal! Felt like driving a real Formula 4 car on the chicane turns.",
    avatar: "🏎️"
  },
  {
    name: "Rohan Varma",
    role: "Pro Series Racer",
    rating: 5,
    comment: "Best indoor karting track in North India hands down. The telemetry sensors and lap timing are millisecond accurate!",
    avatar: "🏁"
  },
  {
    name: "Priya Malhotra",
    role: "Weekend Enthusiast",
    rating: 5,
    comment: "Brought my team for the Private Level 1 Session. Absolute blast! World-class safety equipment and super helpful pit crew.",
    avatar: "⚡"
  },
  {
    name: "Karan Singhania",
    role: "National Rotax Driver",
    rating: 5,
    comment: "Rohit Khanna sir's mentorship and the Leap Frog Racing setup here are world standard. A true gem for Indian motorsport!",
    avatar: "🏆"
  },
  {
    name: "Ananya Deshmukh",
    role: "Corporate Event Host",
    rating: 5,
    comment: "Hosted our annual corporate racing championship at Entertainland Mall. Incredible venue atmosphere and podium ceremony!",
    avatar: "👑"
  },
  {
    name: "Vikramaditya Rao",
    role: "Karting Academy Cadet",
    rating: 5,
    comment: "The SODI LR5 Junior karts are super fast and responsive. The 680m multi-level track apexes are great for practicing race lines.",
    avatar: "🚀"
  },
  {
    name: "Simran Kaur",
    role: "Speed Enthusiast",
    rating: 5,
    comment: "Monday Bonanza 50% off offer was total value for money! Completed 4 sessions back-to-back with zero exhaustion.",
    avatar: "🔥"
  },
  {
    name: "Kabir Mehta",
    role: "F1 Fan & Track Driver",
    rating: 5,
    comment: "The polymer asphalt grip levels are phenomenal. You can carry serious momentum into Turn 3 and 7!",
    avatar: "🎯"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-28 px-4 max-w-7xl mx-auto border-t border-white/10 relative z-20">
      <div className="text-center space-y-3 mb-16">
        <span className="font-mono text-xs text-[#FFD700] uppercase tracking-widest">// PILOT TESTIMONIALS & REVIEWS</span>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
          RACER <span className="text-[#EE3124]">EXPERIENCES</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 max-w-xl mx-auto">
          Hear what drivers, amateur racers, and corporate event teams say about Kartomania.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          speed={1200}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 140,
            modifier: 2.2,
            slideShadows: false,
          }}
          className="py-12"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className="max-w-md w-full">
              {({ isActive }) => (
                <div
                  className={`
                    p-8 rounded-3xl transition-all duration-500 border text-left flex flex-col justify-between h-72
                    ${
                      isActive
                        ? 'bg-[#0f0f1d]/95 border-[#EE3124]/70 shadow-[0_0_50px_rgba(238,49,36,0.35)] scale-105 backdrop-blur-xl'
                        : 'bg-[#08080f]/70 border-white/10 opacity-60 scale-95'
                    }
                  `}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-[#FFD700]/40" />
                    </div>
                    <p className="text-sm font-sans text-gray-200 leading-relaxed font-light italic">
                      "{item.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#EE3124]/20 border border-[#EE3124]/40 flex items-center justify-center text-lg">
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-white uppercase">{item.name}</h4>
                      <span className="text-[10px] font-mono text-[#FFD700] uppercase font-bold">{item.role}</span>
                    </div>
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
