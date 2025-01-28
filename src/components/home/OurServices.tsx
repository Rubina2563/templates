import React from "react";

const OurService: React.FC = () => {
  return (
    <div className=''>
      {/* Our Services Section */}
      <div className='mx-auto  px-6 lg:p-32 py-16 gap-10 space-y-12'>
        {/* Header */}
        <div className='flex flex-col sm:flex-row gap-5 sm:gap-0'>
          <div className='flex-1'>
            <p
              className='text-blue-600
text-lg
font-semibold'>
              Our Services
            </p>
            <h2
              className='text-neutral-900 text-3xl
sm:text-5xl
font-semibold'>
              Explore Our Wide Range of Services
            </h2>
          </div>
<div className="flex-1">  <p
            className='text-gray-700 text-lg  sm:ml-5 lg:ml-0 border-t-3 sm:border-t-0 pt-2 sm:pt-0 sm:border-l-3 border-blue-800 pl-4
font-medium'>
            Vitae lectus commodo bibendum sit nisi ullamcorper quis in. Vitae
            imperdiet sit viverra sit et imperdiet enim arcu senectus. Interdum
            tellus cursus nunc ipsum sed elit. Feugiat potenti feugiat dolor
            sit.
          </p></div>
        
        </div>

        {/* Services */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {/* Service Card */}
  {[1, 2, 3, 4].map((item) => (
    <div
      key={item}
      className="flex w-full justify-between gap-5 items-center bg-white  rounded-xl p-4 space-y-4 "
    >
      <div className="w-16 h-16 bg-blue-500 rounded-lg"></div>
      <div className="flex-2">
        <h3 className="text-neutral-900 text-2xl font-semibold mb-2">
          Light Tube Service
        </h3>
        <p className="text-neutral-600 text-lg font-medium mb-2">
          Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis
          pellentesque sem proin sed sagittis orci nullam in.
        </p>
        <button className="text-blue-600 text-sm font-medium hover:underline">
          Learn More
        </button>
      </div>
    </div>
  ))}
</div>

        {/* View More Button */}
        <div className='text-center'>
          <button className='px-6 py-3 bg-lime-300 text-black font-medium rounded-3xl hover:bg-lime-400'>
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurService;
