import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const faqs = [
  {
    question: "What are the session durations and karting rates?",
    answer: "Each racing session lasts 6 minutes on the track. Mon–Thu Weekday rates start at ₹550 for 1 session up to ₹9,570 for 20 sessions. Fri–Sun Weekend rates start at ₹650 for 1 session up to ₹11,400 for 20 sessions (exclusive of 18% GST)."
  },
  {
    question: "Are safety helmets and suits provided at the venue?",
    answer: "Yes! All racers receive DOT-certified full-face race helmets, sanitary balaclavas, and neck collars. Our safety crew conducts mandatory briefings prior to every grid launch."
  },
  {
    question: "What are the business operating hours at Entertainland Mall?",
    answer: "Weekdays (Mon–Thu): 3:00 PM – 10:00 PM | Weekends (Fri–Sun & Holidays): 11:30 AM – 10:00 PM | Tuesdays Closed."
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
    <section id="faq" className="py-28 px-4 max-w-4xl mx-auto border-t border-white/10 relative z-20">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/40 text-[#FFD700] font-mono text-xs font-bold uppercase tracking-widest">
          <HelpCircle className="w-4 h-4" /> KNOWLEDGE BASE
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
          FREQUENTLY ASKED <span className="text-[#EE3124]">QUESTIONS</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 max-w-lg mx-auto">
          Everything you need to know about track rules, gear, timing, and rates.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <AnimatedCard key={idx} className="p-0 overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg font-bold text-white uppercase hover:text-[#FFD700] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-[#FFD700]"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 font-sans text-sm text-gray-300 font-normal leading-relaxed border-t border-white/5 mt-2">
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
