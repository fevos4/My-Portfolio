import React, { useEffect } from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
  
    const script = document.createElement('script');
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;

  
    document.body.appendChild(script);

    
    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  return (
    <div className="bg-[#090C11]" id="contact">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 grid grid-cols-2 pt-4">
          <div className="flex flex-col space-y-6 mb-6 px-5">
            <div className="flex items-center text-gray-400 font-bolder text-xs">
              <IoIosMail className="text-[#FFD600] mr-4 h-5 w-5" />
              <a href="mailto:fevatesfish@gmail.com" className="hover:text-[#FFD600]">
                fevatesfish@gmail.com
              </a>
            </div>
            <div className="flex items-center text-gray-400 font-bolder text-xs">
              <FaPhone className="text-[#FFD600] mr-4 h-5 w-5" />
              <a href="tel:+251920022650" className="hover:text-[#FFD600]">
                (+251) 92-002-2650
              </a>
            </div>
            <div className="flex items-center text-gray-400 font-bolder text-xs">
              <FaLinkedin className="text-[#FFD600] mr-4 h-5 w-5" />
              <a
                href="https://www.linkedin.com/in/feven-tesfaye-jale"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD600]"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center text-gray-400 font-bolder text-xs">
              <FaGithub className="text-[#FFD600] mr-4 h-5 w-5" />
              <a
                href="https://github.com/fevos4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD600]"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center text-gray-400 font-bolder text-xs">
              <FaTelegramPlane className="text-[#FFD600] mr-4 h-5 w-5" />
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
        <div
          className="visme_d"
          data-title="Untitled Project"
          data-url="n0e7xzgm-untitled-project"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="92152"
        ></div>
      </div>
    </div>
  );
};

export default Contact;
