import React from "react";
import GetService from "./GetService";
import WhyChooseUs from "./WhyChooseUs";
import OurService from "./OurServices";
import QuesAns from "./QuesAns";
import Testimonial from "./Testimonial";
import sampleImage from "../../uploads/sample.png";
const HeroSection: React.FC = () => {
  return (
    <div >
      {/* First Section */}
      <div className='max-w-screen-xl  px-6 lg:p-32 py-20 flex flex-col md:flex-row space-y-10 lg:space-y-0 md:gap-5 lg:gap-16'>
        {/* Text Content */}
        <div className='md:flex-1  '>
          <p className="text-blue-600
text-lg
font-semibold">Best Home Electrician Service</p>
          <h1 className='text-4xl font-bold text-gray-900 mt-3'>
            Dentist near me in USA
          </h1>
          <p className='text-gray-700 text-lg leading-relaxed mt-3'>
            Looking for a reliable dentist near me in USA? Our top-rated dental
            services prioritize your convenience and accessibility. With expert
            care and state-of-the-art technology, we ensure your dental health
            is in great hands. Experience personalized treatments and a warm
            environment, all tailored to meet your unique needs. Visit us today!
          </p>
          <div className='mt-3 sm:w-full md:w-md h-40  bg-blue-600 rounded-lg bg-cover bg-center' style={{ backgroundImage: `url(${sampleImage})` }} ></div>
        </div>

        {/* Image Content */}
    <div className="hidden md:block md:flex-1">   
 <div
  className="h-96 sm:w-full bg-blue-600 rounded-lg bg-cover bg-center"
style={{ backgroundImage: `url(${sampleImage})` }} 
>
  {/* Content Here */}
</div>
</div>
      
       
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
