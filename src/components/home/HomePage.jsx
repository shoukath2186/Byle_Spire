"use client";

import VideoPart from './VideoPart';
import OurImpact from './OurImpact';
import OurService from './OurService';
import WyChoose from './WyChoose';
import OurProcess from './OurProcess';
import OurTechnologies from './OurTechnologies';
import OutClientsSay from './OutClientsSay';
import OurFAQ from './OurFAQ';
import FinalCTA from './FinalCTA';
import BlogSection from './BlogSection';

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero */}
      <VideoPart />

      {/* 2. Trust Bar / Stats */}
      <OurImpact />

      {/* 3. Services */}
      <OurService />

      {/* 4. Why Choose */}
      <WyChoose />

      {/* 5. Process */}
      <OurProcess />

      {/* 6. Technologies */}
      <OurTechnologies />

      {/* 7. Testimonials */}
      <OutClientsSay />

      {/* 8. FAQ */}
      <OurFAQ />

      {/* 9. Blog */}
      <BlogSection />

      {/* 10. Final CTA */}
      <FinalCTA />
    </div>
  );
}

export default HomePage;
