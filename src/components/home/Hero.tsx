
import React from "react";
import GetService from "./GetService";
import WhyChooseUs from "./WhyChooseUs";
import OurService from "./OurServices";
import QuesAns from "./QuesAns";
import Testimonial from "./Testimonial";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-blue-50">
      {/* First Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Dentist near me in USA
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Felis sed
            ullamcorper aliquet sapien. Egestas sit sit ut lobortis. Egestas
            nunc nunc quis facilisis fermentum id egestas sed.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>

        {/* Image Content */}
        <div className="flex-1 flex flex-col items-center space-y-6">
          <div className="w-60 h-60 bg-blue-300 rounded-lg"></div>
          <div className="w-40 h-40 bg-blue-300 rounded-lg"></div>
        </div>
      </div>

          <GetService/>
          <WhyChooseUs />
          <OurService />
          <QuesAns /> 
            <Testimonial />

   
    </div>
  );
};

export default HeroSection;
