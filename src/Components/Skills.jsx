import React from 'react';
import Carousel from './Carousel';

const logos = [
  { image: '/assets/html3d.webp', name: 'HTML5' },
  { image: '/assets/css3d.webp', name: 'CSS3' },
  { image: '/assets/js3d.webp', name: 'JavaScript' },
  { image: '/assets/react 3d.webp', name: 'React' },
  { image: '/assets/tail3d.webp', name: 'Tailwind CSS' },
  { image: '/assets/node3d.webp', name: 'Node JS' },
  { image: '/assets/figma3d.webp', name: 'Figma' }
];

const Skills = () => {
  return (
    <section className="py-12 bg-[#090C11]" id='skills'>
      <div className="w-full px-6 md:px-24 text-lg">
      <h2 className="text-sm font-bolder text-yellow-500">Area of</h2>
      <h1 className="text-lg md:text-3xl text-white font-bolder mt-2 mb-4">Skills</h1>
      </div>

      <div className="w-full flex justify-center">
        <Carousel arrows={true}>
          {logos.map((icons, index) => (
            <div
              key={index}
              className="flex flex-col items-center snap-start"
              style={{ minWidth: '200px' }} // Adjust minWidth to fit your design
            >
              <img className="w-24 h-24 mb-6" src={icons.image} alt={icons.name} />
              <h3 className="text-white text-xl font-bolder">{icons.name}</h3>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
