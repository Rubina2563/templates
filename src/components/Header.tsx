import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white">
      <div className=" bg-white px-4 py-2">
      <div className=" mx-10 flex justify-between items-center space-x-4">
  {/* First div */}
  <div className="w-1/2 text-neutral-900 flex justify-between
text-base
font-normal">
    <span >123 Anywhere Street, NY</span> 
    <span> hi@electema.com</span> 
    <span> +1 (333) 000-0000</span>
  </div>
  
  {/* Second div */}
  <div className="flex gap-10">
    <FaTwitter size={20} className="text-blue-500 hover:text-gray-300" />
    <FaFacebook size={20} className="text-blue-500 hover:text-gray-300" />
    <FaInstagram size={20} className="text-blue-500 hover:text-gray-300" />
  </div>
</div>

     
      </div>




      <nav className="flex mx-10 justify-between items-center px-4 py-4">
        <div className="flex  items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-neutral-50 text-[40px] font-medium text-xl">electema</span>
        </div>
        <ul className="flex items-center space-x-6 pr-16">
          <li><a href="#" className=" text-neutral-50 text-base font-medium ">Home</a></li>
          <li><a href="#" className="text-neutral-50 text-base font-medium hover:text-gray-300">About Us</a></li>
          <li><a href="#" className="text-neutral-50 text-base font-medium hover:text-gray-300">Services</a></li>
          <li><a href="#" className="text-neutral-50 text-base font-medium hover:text-gray-300">Page</a></li>
          <li><a href="#" className="text-neutral-50 text-base font-medium hover:text-gray-300">Contact Us</a></li>
          <li>  <button className="bg-lime-300 text-black px-4 py-2 rounded-2xl font-medium hover:bg-lime-500">
          Get Started
        </button></li>
        </ul>
      
      </nav>
    </header>
  );
};

export default Header;
