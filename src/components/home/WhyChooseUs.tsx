import { FiUsers } from "react-icons/fi";


const WhyChooseUs = () => {
  return (
    <>   {/* Third Section */}
      <div className="bg-blue-600 p-16 text-white">

        <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-10 ">
          {/* Image Content */}      
          <div className=" flex  gap-3 justify-center">
            <div className="flex-1">    <p className="text-lime-300
text-base
font-semibold">WHY CHOOSE US </p>
             <h2 className="text-neutral-50 text-4xl font-medium">
              Trusted Service With Affordable Price
            </h2>
</div>
          <div className="flex-1"> <div className="flex "> <div className="space-y-4">
                <h3 className="text-4xl font-bold">32+</h3>
                <p className="text-gray-200">Experienced Professionals</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-bold">2,649+</h3>
                <p className="text-gray-200">Satisfied Customers</p>
              </div></div></div>
              
            
          {/* <div className="w-60 h-60 bg-blue-300 rounded-lg"></div> */}
          </div>

          {/* Text Content */}
        <div className="flex  gap-3 justify-center">
  {/* Left Section */}
  <div className=" bg-blue-950  w-1/2 h-80 mr-40 rounded-lg">
  
    
   
  </div>

  {/* Right Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Card 1 */}
    <div className="flex flex-col items-start space-y-2">
    <FiUsers color="#BEF264" size={40}/>

      <h3 className="text-neutral-50
text-2xl
font-medium">Experienced</h3>
      <p className="text-slate-100
text-base
font-normal">
        Adipiscing turpis sed faucibus magna at sit tincidunt. Non.
      </p>
    </div>
    {/* Card 2 */}
    <div className="flex flex-col items-start space-y-2">
     <FiUsers color="#BEF264" size={40}/>
      <h3 className="text-neutral-50
text-2xl
font-medium">Reliable</h3>
      <p className="text-slate-100
text-base
font-normal">
        Adipiscing turpis sed faucibus magna at sit tincidunt. Non.
      </p>
    </div>
    {/* Card 3 */}
    <div className="flex flex-col items-start space-y-2">
      <FiUsers color="#BEF264" size={40}/>
      <h3 className="text-neutral-50
text-2xl
font-medium">Capable</h3>
      <p className="text-slate-100
text-base
font-normal">
        Adipiscing turpis sed faucibus magna at sit tincidunt. Non.
      </p>
    </div>
    {/* Card 4 */}
    <div className="flex flex-col items-start space-y-2">
   <FiUsers color="#BEF264" size={40}/>
      <h3 className="text-neutral-50
text-2xl
font-medium">Flexible</h3>
      <p className="text-slate-100
text-base
font-normal">
        Adipiscing turpis sed faucibus magna at sit tincidunt. Non.
      </p>
    </div>
    {/* Button */}
    <div className="col-span-full flex  mt-4">
      <button className="bg-lime-300 text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-400 transition">
        Get Started
      </button>
    </div>
  </div>
</div>

        </div>
      </div></>
  )
}

export default WhyChooseUs