"use client";

import VideoPart from './homePageComponents/VideoPart';
import OurImpact from './homePageComponents/OurImpact';
import OurService from './homePageComponents/OurService';
// import OurPortfolio from './homePageComponents/OurPortfolio'
import OurProcess from './homePageComponents/OurProcess';
import OurTechnologies from './homePageComponents/OurTechnologies';
import WyChoose from './homePageComponents/WyChoose';
import OutClientsSay from './homePageComponents/OutClientsSay'
import OurFAQ from './homePageComponents/OurFAQ';

function HomePage() {

  return (
    <div className="bg-black text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <VideoPart />


      {/* Stats Section */}
      <OurImpact />

      {/* Services Section */}
      <OurService />

      {/* Portfolio Section */}
      {/* <OurPortfolio/> */}


      {/* Process Section */}
      <OurProcess />


      {/* Technologies Section */}
      <OurTechnologies />


      {/* Why Choose Us Section */}
      <WyChoose />

      {/* Testimonials Section */}
       <OutClientsSay/>

      {/* FAQ Section */}
      <OurFAQ/>
    </div>
  );
}

export default HomePage;