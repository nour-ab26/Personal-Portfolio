import React from 'react';
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTensorflow, SiAdobephotoshop, SiAdobexd } from 'react-icons/si'; 
// Consider importing icons from a library like 'react-icons' later
// e.g., import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';

const skillsData = [
  {
    category: "Development Hub",
    icon: "💻", // Placeholder: replace with actual icon component later
    items: ["Python", "JavaScript (ES6+)", "Java", "React", "Node.js", "Express.js", "Flask", "PyQt5", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "AI & Data Hub",
    icon: "🧠",
    items: ["Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "NLP Concepts", "Deep Learning Concepts", "TensorFlow (Familiarity)", "Jupyter Notebook"],
  },
  {
    category: "Design & UX Hub",
    icon: "🎨",
    items: ["Figma", "UX/UI Design", "Prototyping", "Adobe Photoshop", "Adobe Illustrator", "Canva", "Visual Storytelling"],
  },
  {
    category: "Process & Systems Hub",
    icon: "⚙️",
    items: ["ERP Concepts", "Operations Management", "Process Analysis", "ISO 9001", "Project Management (Foundational)", "Agile (Familiarity)"],
  },
  {
    category: "Tools & DBs",
    icon: "🛠️",
    items: ["Git", "GitHub", "VS Code", "SQLite", "MongoDB", "REST APIs", "Docker (Familiarity)"],
  },
];

const Skills = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ // i is the custom prop for stagger index
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Stagger delay for each card
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const tagVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#8B5CF6", // violet-flask
      color: "#F8F9FA", // light-text
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="skills" // ID for navbar scrolling
      className="min-h-screen py-20 px-6 md:px-12 bg-deep-indigo text-light-text" // Use deep-indigo for contrast
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold text-violet-flask mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          My Creative & Technical Toolkit
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              className="bg-subtle-grey p-6 rounded-xl shadow-lg border border-violet-flask/30" // Card style
              custom={index} // Pass index for stagger delay
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{skillCategory.icon}</span> {/* Replace with React Icon later */}
                <h3 className="text-2xl font-heading font-semibold text-violet-flask">
                  {skillCategory.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item) => (
                  <motion.span
                    key={item}
                    className="bg-dark-bg text-light-text px-3 py-1 rounded-full text-sm cursor-default border border-transparent"
                    variants={tagVariants}
                    whileHover="hover"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;