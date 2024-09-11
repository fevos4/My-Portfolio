import React,{useState} from "react";

const AboutMe = () => {
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
    <div className="flex  md:flex-row items-center justify-between md:min-h-screen bg-[#090C11] text-white p-10 md:p-24" id="about">
      <div className="text-left md:w-2/3">
        <h2 className="text-sm font-bolder text-yellow-500">Know</h2>
        <h1 className="text-lg md:text-3xl font-bolder mt-2">About me</h1>
        <p className="mt-4 text-sm md:text-base font-regu">
          I am a passionate Computer Science student with hands-on experience in front-end development and web design.
          With a solid foundation in HTML, CSS, JavaScript, Tailwind CSS, and ReactJS, I bring creativity and technical expertise to every project. 
          I have a keen eye for detail and thrive in crafting visually appealing, responsive, and user-friendly websites.
        </p>
        <p className="mt-4 text-sm md:text-base font-regu">
          Let’s build something great together!
        </p>
        <div className="flex mt-8 gap-4">
          <button className="hover:bg-black rounded-md border border-[#FFD600] px-6 py-2 text-white font-bolder text-sm md:text-lg" onClick={()=>scrollToSection("contact")}>
            Contact me
          </button>
          <button 
  className="hover:bg-[#ae9410] rounded-md bg-[#FFD600] px-6 py-2 text-black font-bolder text-sm md:text-lg"
>
  <a 
    href="/assets/cv.pdf" 
    target="_blank" 
    rel="noopener noreferrer" 
    download
  >
    Download CV
  </a>
</button>

        </div>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
        <img
          src="/assets/fev.png" // Replace with your image path
          alt="Your Name"
          className="h-64 md:h-auto object-cover rounded-full hidden md:block"
        />
      </div>
    </div>
  );
};

export default AboutMe;