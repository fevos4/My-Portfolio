import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [showMore, setShowMore] = useState(false);

  const projects = [
    { image: "/assets/coffee.jpeg", category: "websites", link: "https://coffee-website-murex-pi.vercel.app/" },
    { image: "/assets/health.png", category: "designs", link: "https://www.figma.com/proto/8dpQoMKdZdpupjFwD6uFVW/Health_Knock_Design_0?page-id=0%3A1&node-id=25-17&node-type=frame&viewport=362%2C512%2C0.16&t=AyfFGuBA1tbgnNMo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=25%3A17" },
    { image: "/assets/michu.jpeg", category: "websites", link: "https://michu-website.vercel.app/" },
    { image: "/assets/michudd.png", category: "designs", link: "https://www.figma.com/proto/0OhLeJC9uhytAimhX6y5lz/Michu-Tech?page-id=0%3A1&node-id=92-4&viewport=-100%2C1046%2C0.21&t=9nOtvb5mRNI7Tmiv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=92%3A4" },
    { image: "/assets/michu2.jpeg", category: "websites", link: "https://michu-tech-web.vercel.app/" },
    { image: "/assets/bankk.png", category: "designs", link: "https://www.figma.com/proto/4I61Sj8CM8KLTPafXSpfQS/Untitled?page-id=0%3A1&node-id=1-2&viewport=310%2C217%2C0.09&t=mDkYIwY4kNy6FNO0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2" },
    { image: "/assets/bank.jpeg", category: "websites", link: "https://bank-infos.vercel.app/" },
    { image: "/assets/portt.jpeg", category: "websites", link: "https://my-portfolio-beta-nine-99.vercel.app/" },
    { image: "/assets/coffeed.png", category: "designs", link: "https://www.figma.com/proto/bpSKQ0AwWl49G7xm4BEWJj/Untitled?page-id=0%3A1&node-id=1-3&node-type=frame&viewport=645%2C379%2C0.19&t=BCCavcSmosQNkclk-1&scaling=scale-down&content-scaling=fixed" },
    { image: "/assets/defi.jpeg", category: "websites", link: "https://de-fi-project.vercel.app/" },
    { image: "/assets/winey.png", category: "designs", link: "/projects/project4" },
    
    { image: "/assets/wineyb.png", category: "designs", link: "/projects/project6" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  // Calculate the initial and additional projects to show
  const initialProjects = filteredProjects.slice(0, 6); // Show 6 projects initially
  const additionalProjects = filteredProjects.slice(6);

  // Carousel settings for smaller screens
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" bg-[#090C11] text-white p-10 md:p-24" id="portfolio">
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
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <AnimatePresence>
          {(showMore ? filteredProjects : initialProjects).map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }} // Smooth exit animation
              transition={{ duration: 0.4, ease: "easeInOut" }} // Duration for smooth transitions
              onClick={() => window.open(project.link, '_blank')}
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
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-bolder hidden md:block"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className="md:hidden">
        <Slider {...settings}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }} // Smooth exit animation
              transition={{ duration: 0.4, ease: "easeInOut" }} // Duration for smooth transitions
              onClick={() => window.open(project.link, '_blank')}
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
