import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className='bg-blue-600 text-white'>
      <div className='px-14 py-8'>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-14'>
          {/* First div */}
          <div>
            <div className='mb-6 flex items-center space-x-2'>
              <img src='/logo.png' alt='Logo' className='h-8 w-8' />
              <span className='text-neutral-50 text-[40px] font-medium text-xl'>
                electema
              </span>
            </div>
            <p className='mb-4 w-72 text-neutral-50 text-lg font-medium '>
              Tempus congue tellus semper sapien urna. Tellus posuere ut.
            </p>
            <div className='flex gap-10 mt-2'>
              <FaTwitter
                size={20}
                className='text-gray-50 hover:text-gray-300'
              />
              <FaFacebook
                size={20}
                className='text-gray-50 hover:text-gray-300'
              />
              <FaInstagram
                size={20}
                className='text-gray-50 hover:text-gray-300'
              />
            </div>
          </div>

          {/* Second div */}
          <div className="grid grid-cols-2 gap-2">   <div className='grid grid-cols-2 gap-2'>
            <div>
              <h3 className='font-semibold mb-2'>Company</h3>
              <ul className='text-sm space-y-1'>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Our Services
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Our Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold mb-2'>Resources</h3>
              <ul className='text-sm space-y-1'>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Electrical Safety
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Energy Efficiency
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    YouTube Channel
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Third div */}
          <div>
            <h3
              className='text-neutral-50 text-lg font-medium mb-4'>
              Subscribe
            </h3>
            <form className='flex flex-col space-y-2'>
              <input
                type='email'
                placeholder='Your email'
                className='px-4 py-2  w-56 rounded-3xl text-black bg-neutral-50 placeholder:text-neutral-500'
              />
              <button
                type='submit'
                className='bg-lime-300 w-fit text-sm font-medium text-black px-4 py-3 rounded-3xl hover:bg-lime-500'>
                Send Message
              </button>
            </form>
          </div></div>
       
        </div>
        <div className='mt-8 border-t border-gray-300 pt-4 text-sm flex justify-between items-center'>
          <div className="flex justify-between gap-5"><p>Copyright © 2023 Electema</p>
           <p> Design by Tokotema</p></div>
            
          <div className='space-x-4 pr-10'>
            <a href='#' className='hover:text-gray-300'>
              Term of Use
            </a>
            <a href='#' className='hover:text-gray-300'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-gray-300'>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
