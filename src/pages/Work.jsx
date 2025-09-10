import React from 'react';
import { motion } from "framer-motion";
import Image1 from "../assets/Projects 1.png";
import Image2 from "../assets/Projects 2.png";
import Image3 from "../assets/Projects 3.png";
import Image4 from "../assets/Projects 1.png"; // Use same temporarily
import Image5 from "../assets/Projects 2.png";
import Image6 from "../assets/Projects 3.png";

const Work = () => {
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
    },
    {
      image: Image4,
      title: "E-Commerce Platform",
      subtitle: "A scalable online marketplace enabling users to buy and sell products with secure payment integrations."
    },
    {
      image: Image5,
      title: "Fitness Tracker",
      subtitle: "A mobile-friendly app to track workouts, diet, and health metrics with personalized recommendations."
    },
    {
      image: Image6,
      title: "Education Portal",
      subtitle: "An interactive platform offering courses, quizzes, and learning resources for students and professionals."
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

      {/* Work Section */}
      <motion.section
        className="max-w-3xl mx-auto mb-12 text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-5xl sm:text-4xl font-extrabold text-[#BE5204] mb-4">
          My Work
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I have worked on a variety of projects that showcase my skills in Data Analysis and Full Stack Web Development. My data analysis projects focus on extracting actionable insights from complex datasets, using tools like Python, SQL, Power BI, and data visualization libraries to solve real-world problems.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          In parallel, my full stack projects involve designing and building scalable, user-friendly web applications using technologies such as React.js, Node.js, Express.js, and MongoDB, combined with RESTful APIs and modern UI frameworks. Each project reflects my problem-solving approach, attention to detail, and commitment to delivering impactful solutions.
        </p>
      </motion.section>

      {/* Internship Experience Section */}
      <motion.section
        className="max-w-3xl mx-auto mb-12 text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-5xl sm:text-4xl font-extrabold text-[#BE5204] mb-6">
          Internship Experience
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-2xl font-bold text-white mb-2">Python Development Intern</h2>
          <p className="text-gray-300 mb-4">Coderscave | July 2024 - August 2024</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Assisted in developing Python scripts for automation and data processing.</li>
            <li>Conducted testing, debugging, and troubleshooting tasks to ensure software quality.</li>
            <li>Collaborated with the development team to implement features and fix bugs.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl sm:text-2xl font-bold text-white mb-2">Data Analyst Intern</h2>
          <p className="text-gray-300 mb-4">Nullclass | May 2025 - June 2025</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Analyzed datasets using Python and Power BI to provide actionable business insights.</li>
            <li>Created dashboards and reports to visualize customer trends and improve decision-making.</li>
            <li>Worked with cross-functional teams to gather requirements and present findings.</li>
          </ul>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="max-w-4xl mx-auto text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-8">
          <h2 className="text-4xl sm:text-4xl font-extrabold text-[#BE5204] mb-4 sm:mb-0">Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-[#BE5204]/50 transition-shadow"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 * index }}
            >
              <div className="w-full h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default Work;
