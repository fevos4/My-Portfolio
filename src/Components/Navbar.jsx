import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setClick(false);
  };

  return (
    <div className="w-full h-[90px] md:bg-transparent fixed top-0 left-0 z-50">
      <div className="max-w-[1140px] h-full mx-auto flex justify-between items-center">
        <div onClick={() => scrollToSection('home')} className="cursor-pointer">
          <img src="/assets/logo.png" alt="logo" className='w-24' />
        </div>
        <ul
          className={`flex flex-col lg:flex-row justify-center items-center w-full lg:w-auto lg:static transition-all duration-300 ease-in-out ${
            click ? 'fixed top-[90px] left-0 bg-black border' : 'left-[100%] lg:h-auto'
          }`}
        >
          <li className={`p-4 cursor-pointer text-sm font-bolder ${click ? 'block' : 'hidden lg:block'}`}>
            <a className="text-white hover:text-[#FFD600]" onClick={() => scrollToSection('home')}>
              Home
            </a>
          </li>
          <li className={`p-4 cursor-pointer text-sm font-bolder ${click ? 'block' : 'hidden lg:block'}`}>
            <a className="text-white hover:text-[#FFD600]" onClick={() => scrollToSection('about')}>
              About
            </a>
          </li>
          <li className={`p-4 cursor-pointer text-sm font-bolder ${click ? 'block' : 'hidden lg:block'}`}>
            <a className="text-white hover:text-[#FFD600]" onClick={() => scrollToSection('skills')}>
              Skills
            </a>
          </li>
          <li className={`p-4 cursor-pointer text-sm font-bolder ${click ? 'block' : 'hidden lg:block'}`}>
            <a className="text-white hover:text-[#FFD600]" onClick={() => scrollToSection('portfolio')}>
              Portfolio
            </a>
          </li>
          <li className={`p-4 cursor-pointer text-sm font-bolder ${click ? 'block' : 'hidden lg:block'}`}>
            <a className="text-white hover:text-[#FFD600]" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </li>
          
          <li className={`p-4 cursor-pointer text-sm font-bolder ${click ? 'block' : 'hidden lg:block'}`}>
           
          </li>
        </ul>
        <div
          onClick={handleClick}
          className="block lg:hidden mr-4 cursor-pointer"
        >
          {click ? (
            <AiOutlineClose className="text-white text-2xl" />
          ) : (
            <AiOutlineMenu className="text-white text-2xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

