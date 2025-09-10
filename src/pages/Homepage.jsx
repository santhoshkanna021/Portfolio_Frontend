import React from 'react';
import { MdOutlineMyLocation } from "react-icons/md";
import Image1 from "../assets/Projects 1.png";
import Image2 from "../assets/Projects 2.png";
import Image3 from "../assets/Projects 3.png";

const Homepage = () => {
  const data = [
    {
      image: Image1,
      title: "Movie App",
      subtitle: "A full-stack web application to browse and search movies with user ratings and reviews."
    },
    {
      image: Image2,
      title: "Agency AI",
      subtitle: "An AI-powered platform for automating marketing tasks and enhancing client engagement."
    },
    {
      image: Image3,
      title: "Travel",
      subtitle: "A responsive travel booking app to explore destinations, plan trips, and manage itineraries."
    }
  ];
  
  return (
    <div className="min-h-screen bg-black p-6 py-20">

      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-4xl sm:text-4xl md:text-4xl  font-extrabold text-[#BE5204] mb-2">
          Santhoshkanna
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 mb-4 justify-between text-white
         ">
          <h2 className="text-xl text-[#BE5204]">Data Enthusiast & Web Developer</h2>
          <h2 className="text-xl flex items-center gap-2">
            <MdOutlineMyLocation /> Coimbatore
          </h2>
        </div>
      </header>

      {/* Bio Section */}
      <p className="text-white leading-relaxed max-w-3xl mb-20">
        I’m a recent Computer Science graduate passionate about Data Analysis and Full Stack Development. 
        I specialize in transforming raw data into actionable insights and building scalable, user-friendly web applications. 
        With hands-on experience in Python, React.js, Node.js, SQL, and data visualization tools, 
        I enjoy solving real-world problems and delivering impactful solutions. 
        I’m eager to contribute to innovative projects, learn continuously, and make a meaningful impact in the tech industry.
      </p>

      {/* Latest Projects */}
      <div className="flex flex-col w-full h-full">

        {/* Title and Button */}
        <div className="flex items-center justify-between w-full px-4 mb-8 ">
          <h1 className="text-[30px] font-extrabold  mb-2 text-[#BE5204]">
            Latest Projects
          </h1>
          <button className="text-gray-400 border border-white px-4 py-2 rounded hover:bg-[#BE5204] transition">
            View all
          </button>
        </div>

        {/* Project List */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
  {data.map((project, index) => (
    <div key={index} className=" rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      {/* Make image cover the card */}
      <div className="w-full h-30 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400">{project.subtitle}</p>
      </div>
    </div>
  ))}
</div>


      </div>

    </div>
  );
};

export default Homepage;
