import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const faqs = [
  {
    question: "What are the session durations and karting rates?",
    answer: "Each racing session lasts 6 minutes on the track. Weekday combo packages start from ₹3,250 and weekend packages from ₹3,800 with free bonus bowling vouchers. All rates are fully inclusive of all taxes."
  },
  {
    question: "Are safety helmets and suits provided at the venue?",
    answer: "Yes! All racers receive DOT-certified full-face race helmets, sanitary balaclavas, and neck collars. Our professional marshals conduct mandatory safety briefings before every grid launch."
  },
  {
    question: "What are the business operating hours at Entertainland Mall?",
    answer: "We are OPEN ALL DAYS (7 Days a Week)! Monday – Friday: 2:00 PM – 11:00 PM | Saturday – Sunday & Holidays: 1:00 PM – 11:00 PM."
  },
  {
    question: "Is Kartomania an indoor or outdoor racing track?",
    answer: "Kartomania features an authentic 720-meter Outdoor Grand Prix asphalt circuit with 14 technical corners, high-speed straights, and international-standard F1 safety barrier systems."
  },
  {
    question: "Is prior booking required or can we walk in?",
    answer: "Both walk-ins and direct online kiosk bookings are available. We recommend reserving online during weekends to guarantee your preferred track slot."
  },
  {
    question: "What is the minimum age or height requirement for drivers?",
    answer: "For adult Sodi RT10 pro karts, drivers must be at least 140 cm (4ft 7in) tall. Cadet junior karts are available for younger racers."
  }
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto border-t border-white/10 relative z-20 bg-[#0B0D0F] text-[#F4F1EA]">
      <div className="text-center space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A45C]/15 border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-widest">
          <HelpCircle className="w-4 h-4" /> KNOWLEDGE BASE
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
          FREQUENTLY ASKED <span className="text-[#C9A45C]">QUESTIONS</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-[#B8B1A5] max-w-lg mx-auto">
          Everything you need to know about track rules, gear, timing, and rates.
        </p>
      </div>

      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <AnimatedCard key={idx} className="p-0 overflow-hidden rounded-2xl bg-[#15181C] border border-white/10 hover:border-[#C9A45C]/50 transition-colors">
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display text-sm sm:text-base font-bold text-[#F4F1EA] uppercase hover:text-[#C9A45C] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-1.5 rounded-full bg-[#0B0D0F] text-[#C9A45C] shrink-0 border border-white/10"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm font-sans text-[#B8B1A5] border-t border-white/10 leading-relaxed text-left">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedCard>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
