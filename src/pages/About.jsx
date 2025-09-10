import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen p-6 py-20 bg-black text-white">
      
      {/* About Me Section */}
      <section className="mb-12">
        <h1 className="text-5xl sm:text-4xl font-extrabold mb-4 text-[#BE5204]">
          About Me
        </h1>
        <p className="text-gray-300 leading-relaxed max-w-3xl text-lg">
          I am <strong>Santhoshkanna R</strong>, a passionate Computer Science graduate with a strong focus on 
          <span className="text-[#BE5204]"> Data Analysis</span> and <span className="text-[#BE5204]">Full Stack Development</span>. 
          I thrive on transforming complex datasets into actionable insights and building scalable, user-friendly web applications.  
          I am driven by curiosity, problem-solving, and creating impactful solutions through technology.
        </p>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h1 className="text-5xl sm:text-4xl font-extrabold mb-4 text-[#BE5204]">
          Education
        </h1>
        <div className="text-gray-300 max-w-3xl space-y-2 text-lg">
          <p><strong>Bachelor of Engineering (B.E.) – Computer Science and Engineering</strong></p>
          <p>Info Institute of Engineering, Coimbatore (Anna University)</p>
          <p>Batch: 2021 – 2025 | CGPA: 7.8</p>
          <p className="mt-2">
            During my academic journey, I focused on software development, data structures, algorithms, and data analysis projects. 
            I consistently engaged in practical projects and hands-on experience to complement my theoretical knowledge.
          </p>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="mb-12">
        <h1 className="text-5xl sm:text-4xl font-extrabold mb-4 text-[#BE5204]">
          Skills & Expertise
        </h1>
        <ul className="text-gray-300 list-disc list-inside space-y-3 max-w-3xl text-lg">
          <li><strong>Programming Languages:</strong> Python, JavaScript</li>
          <li><strong>Web Development:</strong> React.js, Node.js, Express.js, HTML, CSS, Tailwind CSS</li>
          <li><strong>Database Management:</strong> SQL, MySQL, MongoDB</li>
          <li><strong>Data Analysis & Visualization:</strong> Power BI, Matplotlib, Pandas, NumPy</li>
          <li><strong>Tools & Practices:</strong> Git, REST APIs, Agile, Debugging, Data Cleaning</li>
        </ul>
      </section>

      {/* Certifications & Training */}
      <section>
        <h1 className="text-5xl sm:text-4xl font-extrabold mb-4 text-[#BE5204]">
          Certifications & Training
        </h1>
        <ul className="text-gray-300 list-disc list-inside space-y-3 max-w-3xl text-lg">
          <li><strong>Python for Data Science, AI & Development</strong> – IBM</li>
          <li><strong>Data Visualization: Empowering Business with Effective Insights</strong> – Tata</li>
          <li><strong>Data Analytics & Visualization Job Simulation</strong> – Accenture</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
