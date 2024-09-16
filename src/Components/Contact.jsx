import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { FaPhone, FaLinkedin, FaGithub, FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-[#090C11]" id="contact">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 px-5 py-4">
        <div className="flex items-center text-gray-400 font-bolder text-xs space-x-4">
          <IoIosMail className="text-[#FFD600] h-5 w-5" />
          <a href="mailto:fevatesfish@gmail.com" className="hover:text-[#FFD600]">
            fevatesfish@gmail.com
          </a>
        </div>
        <div className="flex items-center text-gray-400 font-bolder text-xs space-x-4">
          <FaPhone className="text-[#FFD600] h-5 w-5" />
          <a href="tel:+251920022650" className="hover:text-[#FFD600]">
            (+251) 92-002-2650
          </a>
        </div>
        <div className="flex items-center text-gray-400 font-bolder text-xs space-x-4">
          <FaLinkedin className="text-[#FFD600] h-5 w-5" />
          <a
            href="https://www.linkedin.com/in/feven-tesfaye-jale"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD600]"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center text-gray-400 font-bolder text-xs space-x-4">
          <FaGithub className="text-[#FFD600] h-5 w-5" />
          <a
            href="https://github.com/fevos4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD600]"
          >
            GitHub
          </a>
        </div>
        <div className="flex items-center text-gray-400 font-bolder text-xs space-x-4">
          <FaTelegramPlane className="text-[#FFD600] h-5 w-5" />
          <a
            href="https://t.me/fevos4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD600]"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
