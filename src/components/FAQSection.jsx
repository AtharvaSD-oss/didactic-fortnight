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
    <section id="faq" className="py-14 sm:py-18 px-4 max-w-4xl mx-auto border-t border-gray-200/80 relative z-20 bg-white text-gray-900">
      <div className="text-center space-y-2 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/30 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
          <HelpCircle className="w-4 h-4" /> KNOWLEDGE BASE
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-black text-[#0B0F19] uppercase tracking-tight">
          FREQUENTLY ASKED <span className="text-[#EE3124]">QUESTIONS</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-gray-600 max-w-lg mx-auto">
          Everything you need to know about track rules, gear, timing, and rates.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <AnimatedCard key={idx} className="p-0 overflow-hidden rounded-2xl">
              <button
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display text-sm sm:text-base font-bold text-gray-950 uppercase hover:text-[#EE3124] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-1 rounded-full bg-gray-100 text-[#EE3124] shrink-0"
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
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm font-sans text-gray-600 border-t border-gray-100 leading-relaxed">
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
