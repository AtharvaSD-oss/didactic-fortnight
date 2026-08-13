import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Star, Quote, MessageSquare } from 'lucide-react';

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
  },
  {
    name: "Pooja Deshmukh",
    role: "Family Weekend Outing",
    review: "Great setup at Entertainland Mall! We took the combo package with bowling included, and it made for a complete afternoon of fun for our whole group.",
    rating: 5,
    tag: "FAMILY FUN"
  },
  {
    name: "Arjun Narang",
    role: "Sim Racer & Track Pilot",
    review: "The telemetry lap time printout at the finish line was millisecond-accurate. Excellent grip on the polymer surface and razor-sharp steering feedback.",
    rating: 5,
    tag: "TELEMETRY PRO"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 px-4 max-w-7xl mx-auto border-t border-[#EAEAEA] relative z-20 bg-[#F9F9F9] text-[#111111]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E5E5] pb-6 mb-12 text-left">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-[2px] h-5 bg-[#F47C20]" />
            <span className="text-[#F47C20] text-sm font-bold font-mono">06</span>
            <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ REVIEWS</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest mb-2 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#F47C20]" /> // PILOT TESTIMONIALS & REVIEWS
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
            RACER <span className="text-[#F47C20]">EXPERIENCES</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-[#666666] max-w-sm">
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
          speed={900}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1.5,
            slideShadows: false,
          }}
          className="py-4"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className="max-w-md w-full">
              {({ isActive }) => (
                <div
                  className={`
                    p-7 rounded-2xl transition-all duration-300 border text-left flex flex-col justify-between h-64
                    ${
                      isActive
                        ? 'bg-white border-2 border-[#F47C20] shadow-xl scale-100'
                        : 'bg-[#F5F5F5] border-[#E5E5E5] opacity-60 scale-95'
                    }
                  `}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#F47C20]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#F47C20] text-[#F47C20]" />
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-sm bg-[#FFF0E5] text-[#F47C20] font-mono text-[9px] font-bold uppercase tracking-wider border border-[#F47C20]/20">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-sans text-[#444444] leading-relaxed italic line-clamp-3">
                      "{item.review}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#F0F0F0]">
                    <div>
                      <h4 className="text-sm font-display font-bold text-[#0A0A0A] uppercase">{item.name}</h4>
                      <p className="text-[10px] font-mono text-[#666666]">{item.role}</p>
                    </div>
                    <Quote className="w-5 h-5 text-[#F47C20]/30" />
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
