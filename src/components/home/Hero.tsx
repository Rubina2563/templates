import React from "react";
import GetService from "./GetService";
import WhyChooseUs from "./WhyChooseUs";
import OurService from "./OurServices";
import QuesAns from "./QuesAns";
import Testimonial from "./Testimonial";

const HeroSection: React.FC = () => {
  return (
    <div className='bg-blue-50 px-20 '>
      {/* First Section */}
      <div className='max-w-screen-xl mx-auto px-4 py-20 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 gap-16'>
        {/* Text Content */}
        <div className='flex-1 '>
          <p className="text-blue-600
text-lg
font-semibold">Best Home Electrician Service</p>
          <h1 className='text-4xl font-bold text-gray-900'>
            Dentist near me in USA
          </h1>
          <p className='text-gray-700 text-lg leading-relaxed'>
            Looking for a reliable dentist near me in USA? Our top-rated dental
            services prioritize your convenience and accessibility. With expert
            care and state-of-the-art technology, we ensure your dental health
            is in great hands. Experience personalized treatments and a warm
            environment, all tailored to meet your unique needs. Visit us today!
          </p>
          <div className='mt-10 w-md h-40 bg-blue-600 rounded-lg'></div>
        </div>

        {/* Image Content */}
        <div className="flex-1">   <div className="h-96 w-2/3 mx-3 bg-blue-600 rounded-lg">
    {/* Content Here */}
  </div></div>
      
       
      </div>

      <GetService />
      <WhyChooseUs />
      <OurService />
      <QuesAns />
      <Testimonial />
    </div>
  );
};

export default HeroSection;
