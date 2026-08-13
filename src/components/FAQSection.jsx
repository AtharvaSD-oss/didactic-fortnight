import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
    <section id="faq" className="py-20 sm:py-28 px-4 max-w-4xl mx-auto border-t border-[#EAEAEA] relative z-20 bg-white text-[#111111]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-6 mb-12 text-left">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-[2px] h-5 bg-[#F47C20]" />
            <span className="text-[#F47C20] text-sm font-bold font-mono">05</span>
            <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ FAQ</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest mb-2 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#F47C20]" /> // KNOWLEDGE BASE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
            FREQUENTLY ASKED <span className="text-[#F47C20]">QUESTIONS</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-[#666666] max-w-xs">
          Everything you need to know about track rules, gear, timing, and rates.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="overflow-hidden rounded-xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-sm">
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display text-sm sm:text-base font-bold text-[#0A0A0A] uppercase hover:text-[#F47C20] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-1.5 rounded-full border transition-colors shrink-0 ${
                    isOpen ? 'bg-[#F47C20] border-[#F47C20] text-white shadow-sm' : 'bg-white border-[#E5E5E5] text-[#0A0A0A]'
                  }`}
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
                    <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm font-sans text-[#555555] border-t border-[#EAEAEA] leading-relaxed text-left">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
