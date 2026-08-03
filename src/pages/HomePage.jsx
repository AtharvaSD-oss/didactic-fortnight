import React from 'react';
import Hero from '../components/Hero';
import WhoWeAreSection from '../components/WhoWeAreSection';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Timeline from '../components/Timeline';
import { 
  LeapFrogSection,
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
      <WhatsNewSection onOpenBooking={onOpenBooking} />
      <PricingSection onOpenBooking={onOpenBooking} />
      <GameSection />
      <Testimonials />
      <ContactSection onOpenBooking={onOpenBooking} />
    </>
  );
};

export default HomePage;
