import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram,FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const handleNavigation = (path: string) => {
     navigate(path);
      setIsMenuOpen(false); // Close menu when navigating
  };

  
  return (
    <header className="bg-blue-600 text-white">
      <div className=" bg-white px-4 py-2">
      <div className=" mx-10 flex justify-between items-center space-x-4">
  {/* First div */}
  <div className="w-1/2 text-neutral-900 flex justify-between flex-wrap
text-base
font-normal">
    <span >123 Anywhere Street, NY</span> 
    <span> hi@electema.com</span> 
    <span> +1 (333) 000-0000</span>
  </div>
  
  {/* Second div */}
  <div className="flex gap-10 flex-wrap">
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
   {/* Desktop Navigation (Hidden for small screens) */}
        <ul className="hidden lg:flex items-center space-x-6 pr-16">
          <li><button onClick={() => handleNavigation('/')} className="text-neutral-50 text-base font-medium">Home</button></li>
          <li><button onClick={() => handleNavigation('/aboutus')} className="text-neutral-50 text-base font-medium hover:text-gray-300">About Us</button></li>
          <li><button onClick={() => handleNavigation('/services')} className="text-neutral-50 text-base font-medium hover:text-gray-300">Services</button></li>
          <li><button onClick={() => handleNavigation('/contactus')} className="text-neutral-50 text-base font-medium hover:text-gray-300">Page</button></li>
          <li><button onClick={() => handleNavigation('/contactus')} className="text-neutral-50 text-base font-medium hover:text-gray-300">Contact Us</button></li>
          <li>
            <button className="bg-lime-300 text-black px-4 py-2 rounded-2xl font-medium hover:bg-lime-500">
              Get Started
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle (Visible for md and below) */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>


      </nav>

      {/* Mobile Menu (Hidden by default) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-blue-600 text-white shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li><button onClick={() => handleNavigation('/')} className="text-white text-lg">Home</button></li>
            <li><button onClick={() => handleNavigation('/aboutus')} className="text-white text-lg">About Us</button></li>
            <li><button onClick={() => handleNavigation('/services')} className="text-white text-lg">Services</button></li>
            <li><button onClick={() => handleNavigation('/contactus')} className="text-white text-lg">Page</button></li>
            <li><button onClick={() => handleNavigation('/contactus')} className="text-white text-lg">Contact Us</button></li>
            <li>
              <button className="bg-lime-300 text-black px-6 py-2 rounded-2xl font-medium hover:bg-lime-500">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
};

export default Header;
