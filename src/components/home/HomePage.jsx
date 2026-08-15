"use client";

import HeroBanner from './HeroBanner';
import AboutUs from './AboutUs';
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
      {/* 1. Hero Banner with 3-image column panels & floating stats widget */}
      <HeroBanner />

      {/* 2. About Us */}
      <AboutUs />

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

      {/* 8. Final CTA */}
      <FinalCTA />

      {/* 9. FAQ */}
      <OurFAQ />

      {/* 10. Blog */}
      {/* <BlogSection /> */}


    </div>
  );
}

export default HomePage;
