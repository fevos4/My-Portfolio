import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    { image: "/assets/port.jpeg", category: "websites" },
    { image: "/assets/port2.jpeg", category: "designs" },
    { image: "/assets/port3.jpeg", category: "websites" },
    { image: "/assets/port4.jpeg", category: "designs" },
    { image: "/assets/port5.jpeg", category: "websites" },
    { image: "/assets/port6.jpeg", category: "designs" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  // Carousel settings for smaller screens
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="md:min-h-screen bg-[#090C11] text-white p-10 md:p-24">
      <div className="mb-10">
        <h2 className="text-sm font-bolder text-yellow-500">My</h2>
        <h1 className="text-lg md:text-3xl text-white font-bolder mt-2 mb-4">Portfolio</h1>
      </div>
      <div className="flex justify-end mb-10">
        {["all", "websites", "designs"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`mx-2 text-gray-300 font-semi ${
              filter === cat ? "text-yellow-500" : "hover:text-yellow-500"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }} // Smooth exit animation
              transition={{ duration: 0.4, ease: "easeInOut" }} // Duration for smooth transitions
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="md:hidden">
        <Slider {...settings}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }} // Smooth exit animation
              transition={{ duration: 0.4, ease: "easeInOut" }} // Duration for smooth transitions
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
