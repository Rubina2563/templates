
import React from "react";


const OurService: React.FC = () => {
  return (
    <div className="bg-blue-50">
      {/* Our Services Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-16 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Our Wide Range of Services
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum commodo blandit ornare. Lorem amet vel interdum
            pharetra quam. Vulputate enim nisl neque sit. Fringilla suspendisse
            et in sapien.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center items-center gap-8">
          {/* Service Card */}
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex flex-col items-start bg-white shadow-lg rounded-xl p-6 space-y-4 w-full max-w-sm"
            >
              <div className="w-16 h-16 bg-blue-300 rounded-lg"></div>
              <h3 className="text-lg font-medium text-gray-900">
                Light Tube Service
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                nisl euismod ullamcorper purus elit.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="px-6 py-3 bg-lime-300 text-black font-medium rounded-lg hover:bg-lime-400">
            View All Services
          </button>
        </div>
      </div>

 
    </div>
  );
};

export default OurService;
