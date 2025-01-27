
const WhyChooseUs = () => {
  return (
    <>   {/* Third Section */}
      <div className="bg-blue-600 py-16 text-white">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Image Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-60 h-60 bg-blue-300 rounded-lg"></div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">
              Trusted Service With Affordable Price
            </h2>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-16 space-y-6 lg:space-y-0">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold">32+</h3>
                <p className="text-gray-200">Experienced Professionals</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-bold">2,649+</h3>
                <p className="text-gray-200">Satisfied Customers</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-lime-300 text-black font-medium rounded-lg hover:bg-lime-400">
              Get Started
            </button>
          </div>
        </div>
      </div></>
  )
}

export default WhyChooseUs