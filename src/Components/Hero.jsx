import React, { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to handle mouse movement and update blob position
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Add event listener for mouse movement
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Define the scrollToSection function to scroll to the specified section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className="w-full h-screen flex flex-col justify-between pt-28 px-4 md:px-24 bg-[#090C11] relative"
      id="home"
    >
      {/* Blob SVG Background - Top Blob */}
      <div 
        className="absolute z-0 hidden md:block"
        style={{
          top: `calc(${mousePosition.y * 0.1}px + 10vh)`,
          left: `calc(${mousePosition.x * 0.1}px + 10vw)`,
          transform: 'translate(-70%, -80%)',
          transition: 'transform 0.1s ease-out',
          width: '30vw',  // Adjust blob size with viewport width
          height: '20vw', // Maintain aspect ratio
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F2F4F8"
            d="M25.2,-34.4C32.3,-24.2,37.3,-15.8,45.6,-2.9C54,9.9,65.7,27.3,62.1,38.1C58.6,48.8,39.6,52.8,21.8,59C3.9,65.2,-12.9,73.5,-22.1,67.3C-31.3,61.1,-32.8,40.5,-42.7,24.2C-52.7,7.9,-71.1,-3.9,-74.7,-18.3C-78.3,-32.7,-67,-49.5,-52.1,-58.3C-37.1,-67.2,-18.6,-68,-4.7,-62.3C9.1,-56.7,18.2,-44.6,25.2,-34.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Blob SVG Background - Bottom Blob */}
      <div 
        className="absolute z-0 hidden md:block"
        style={{
          bottom: '10%', // Position it at the bottom
          left: `calc(${mousePosition.x * 0.1}px + 5vw)`,
          transform: 'translate(-50%, 70%)',
          transition: 'transform 0.1s ease-out',
          width: '15vw',  // Adjust blob size with viewport width
          height: '15vw', // Maintain aspect ratio
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F2F4F8"
            d="M44.4,-72.4C56.9,-69.7,66,-56.5,67.7,-42.7C69.5,-28.9,63.9,-14.4,59.6,-2.5C55.3,9.5,52.4,19,49.9,31.7C47.5,44.3,45.7,60.1,37.4,71.9C29.2,83.8,14.6,91.8,-1,93.5C-16.6,95.3,-33.3,90.9,-41.1,78.8C-48.9,66.6,-47.9,46.9,-49.5,32.4C-51.2,18,-55.4,9,-61,-3.2C-66.5,-15.4,-73.3,-30.8,-70.3,-42.9C-67.4,-55,-54.6,-63.7,-41.2,-65.9C-27.9,-68,-13.9,-63.7,1,-65.4C16,-67.2,31.9,-75,44.4,-72.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div 
        className="absolute z-0 hidden md:block"
        style={{
          bottom: '10%', // Position it at the bottom
          left: `calc(${mousePosition.x * 0.1}px - 10vw)`,
          transform: 'translate(450%, 40%)',
          transition: 'transform 0.1s ease-out',
          width: '15vw',  // Adjust blob size with viewport width
          height: '15vw', // Maintain aspect ratio
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F2F4F8"
            d="M42,-73C56.1,-64.7,70.1,-56.7,69.7,-44.5C69.3,-32.4,54.4,-16.2,54.3,0C54.3,16.2,69.1,32.3,65.9,38.1C62.7,43.9,41.3,39.3,27.3,43.7C13.3,48.2,6.7,61.7,-1.2,63.7C-9,65.8,-18.1,56.4,-31.7,51.7C-45.2,47,-63.3,47,-68.9,39.2C-74.6,31.3,-67.8,15.7,-61.5,3.6C-55.3,-8.4,-49.6,-16.9,-43,-23.1C-36.4,-29.3,-29,-33.3,-21.7,-45.5C-14.4,-57.7,-7.2,-78,3.4,-83.9C14,-89.8,28,-81.3,42,-73Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div 
        className="absolute z-0 hidden md:block"
        style={{
          bottom: '10%', // Position it at the bottom
          left: `calc(${mousePosition.x * 0.1}px - 15vw)`,
          transform: 'translate(700%, -200%)',
          transition: 'transform 0.1s ease-out',
          width: '12vw',  // Adjust blob size with viewport width
          height: '12vw', // Maintain aspect ratio
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F2F4F8"
            d="M30.2,-52.3C41.3,-45.9,54,-42.2,63.7,-33.9C73.3,-25.7,79.9,-12.8,82,1.2C84.1,15.2,81.6,30.4,73.1,40.7C64.6,51,50.1,56.3,36.9,57.4C23.7,58.5,11.9,55.4,-0.5,56.3C-12.9,57.2,-25.8,62.2,-39.3,61.3C-52.9,60.4,-67,53.6,-71,42.4C-75.1,31.2,-69.1,15.6,-67.5,0.9C-65.9,-13.8,-68.7,-27.5,-62.2,-34.4C-55.6,-41.3,-39.8,-41.4,-27.9,-47.3C-16,-53.2,-8,-65,0.8,-66.3C9.5,-67.7,19.1,-58.6,30.2,-52.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Content Section */}
      <div className="z-10 items-center text-center relative px-4 md:px-0">
        <div className="flex flex-col justify-center md:items-center w-full px-2 py-8">
          <p className="text-4xl md:text-6xl font-bolder text-center text-white">
            I am <span className="text-[#FFD600]">Feven Tesfaye</span>
          </p>
          <p className="text-3xl md:text-5xl font-bolder text-white">
            Front-end Developer <br /> & <br /> Web-designer
          </p>
          <p className="py-3 md:mb-5 text-sm md:text-base font-regu text-gray-300 text-center">
            Welcome to my portfolio, where I showcase my journey of constant growth in coding and software development,
            and also as a UI designer.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection("about")}  
              className="hover:bg-[#ae9410] rounded-md bg-[#FFD600] px-6 py-3 text-black font-bolder text-lg mt-4"
            >
              Know me more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
