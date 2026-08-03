import React from 'react';
import Hero from '../components/Hero';
import WhoWeAreSection from '../components/WhoWeAreSection';
import RacingTimeline from '../components/RacingTimeline';
import FAQSection from '../components/FAQSection';
import Testimonials from '../components/Testimonials';
import { 
  WhatsNewSection,
  PricingSection, 
  ContactSection,
  GameSection
} from '../components/Sections';

const HomePage = ({ onOpenBooking, onNavigate }) => {
  return (
    <>
      <Hero onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      <WhoWeAreSection onOpenBooking={onOpenBooking} />
      <RacingTimeline />
      <WhatsNewSection onOpenBooking={onOpenBooking} />
      <PricingSection onOpenBooking={onOpenBooking} />
      <GameSection />
      <Testimonials />
      <FAQSection />
      <ContactSection onOpenBooking={onOpenBooking} />
    </>
  );
};

export default HomePage;
