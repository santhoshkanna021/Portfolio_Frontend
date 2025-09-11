import React from 'react';
import { MdOutlineMyLocation } from "react-icons/md";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-black p-6 py-20 text-white">

      {/* Header Section */}
      <motion.header
        className="mb-12 max-w-3xl mx-auto text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-3xl sm:text-6xl font-extrabold text-[#BE5204] mb-4">
          Santhoshkanna
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
          <h2 className="text-xl text-[#BE5204]">Data Enthusiast & Web Developer</h2>
          <h2 className="text-xl flex items-center gap-2">
            <MdOutlineMyLocation size={24} /> Coimbatore
          </h2>
        </div>
      </motion.header>

      {/* Bio Section */}
      <motion.section
        className="max-w-3xl mx-auto mb-12 text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delay: 0.3 }}
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a recent Computer Science graduate passionate about <span className="text-[#BE5204]">Data Analysis</span> and <span className="text-[#BE5204]">Full Stack Development</span>. 
          I specialize in transforming raw data into actionable insights and building scalable, user-friendly web applications. 
          With hands-on experience in Python, React.js, Node.js, SQL, and data visualization tools, 
          I enjoy solving real-world problems and delivering impactful solutions. 
          I’m eager to contribute to innovative projects, learn continuously, and make a meaningful impact in the tech industry.
        </p>
      </motion.section>

      {/* Latest Projects Section */}
      <motion.section
        className="max-w-4xl mx-auto text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-8">
          <h2 className="text-4xl font-extrabold text-[#BE5204] mb-4 sm:mb-0">Latest Projects</h2>
          <button className="text-gray-400 border border-white px-4 py-2 rounded hover:bg-[#BE5204] transition-colors">
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project, index) => (
            <motion.div
              key={index}
              className=" bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-[#BE5204] transition-shadow"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 * index }}
            >
              <div className="w-full h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default Homepage;
