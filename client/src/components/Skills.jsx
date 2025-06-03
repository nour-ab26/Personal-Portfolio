import React from 'react';
import { motion } from 'framer-motion';
// Import specific icons from react-icons
import { FaReact, FaPython, FaNodeJs, FaFigma, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiTensorflow, SiJavascript, SiHtml5, SiCss3, SiFlask, SiPytorch, SiMongodb, SiSqlite, SiAdobephotoshop, SiAdobeillustrator, SiCanva } from 'react-icons/si';
import { AiOutlineDotChart, AiOutlineRobot } from 'react-icons/ai'; // For AI/Data & Process
import { VscServerProcess } from 'react-icons/vsc'; // For Process

const skillsData = [
  {
    category: "Development",
    icon: <FaReact size={28} className="text-accent-teal" />,
    items: ["Python", "JavaScript (ES6+)", "Java (Basics)", "React", "Node.js", "Express.js", "Flask", "PyQt5", "HTML5", "CSS3"],
  },
  {
    category: "AI & Data Science",
    icon: <AiOutlineRobot size={28} className="text-accent-pink" />,
    items: ["Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "NLP Concepts", "Deep Learning Concepts", "TensorFlow", "PyTorch", "Jupyter"],
  },
  {
    category: "Design & UX",
    icon: <FaFigma size={28} className="text-violet-flask" />,
    items: ["Figma", "UX/UI Design", "Prototyping", "Photoshop", "Illustrator", "Canva", "Visual Storytelling"],
  },
  {
    category: "Process & Systems",
    icon: <VscServerProcess size={28} className="text-accent-teal" />,
    items: ["ERP Concepts", "Operations Mgt.", "Process Analysis", "ISO 9001", "Project Mgt. (Foundational)", "Agile"],
  },
  {
    category: "Tools & Databases",
    icon: <FaGitAlt size={28} className="text-accent-pink" />,
    items: ["Git & GitHub", "VS Code", "SQLite", "MongoDB", "REST APIs", "Docker (Familiarity)"],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }, // Stagger cards within the container
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      scale: 1.03,
      boxShadow: '0px 0px 25px rgba(139, 92, 246, 0.4)', // Brighter violet glow
      borderColor: 'rgba(139, 92, 246, 0.7)', // Brighter border on hover
      transition: { duration: 0.2 },
    }
  };

  const tagVariants = {
    initial: { scale: 1, opacity: 0.9 },
    hover: {
      scale: 1.15,
      opacity: 1,
      backgroundColor: "#8B5CF6", // violet-flask
      color: "#111827", // dark-bg for contrast
      boxShadow: '0px 0px 10px #8B5CF6',
      transition: { duration: 0.15, type: 'spring', stiffness: 300 },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6 md:px-12 bg-dark-bg text-light-text relative overflow-hidden"
    >
       {/* Optional: Subtle background lines / plexus effect */}
      <div className="absolute inset-0 opacity-10 z-[-1]">
        {/* Placeholder for a more complex animated background if desired */}
      </div>

      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-16 text-center 
                     bg-clip-text text-transparent bg-gradient-to-r from-violet-flask via-accent-pink to-accent-teal"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          My Creative & Technical Toolkit
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              className="bg-subtle-grey/50 backdrop-blur-sm p-6 rounded-xl shadow-xl 
                         border border-violet-flask/30 transition-all duration-300" // Glassmorphism
              variants={cardVariants}
              // whileInView and initial handled by parent for staggering
              whileHover="hover"
            >
              <div className="flex items-center mb-6">
                <span className="mr-4 p-2 bg-violet-flask/20 rounded-lg">{skillCategory.icon}</span>
                <h3 className="text-2xl font-heading font-semibold text-light-text">
                  {skillCategory.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item) => (
                  <motion.span
                    key={item}
                    className="bg-dark-bg text-light-text/80 px-3 py-1.5 rounded-md text-sm cursor-pointer 
                               border border-transparent hover:border-violet-flask"
                    variants={tagVariants}
                    initial="initial" // Using a defined initial state for tags
                    whileHover="hover"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;