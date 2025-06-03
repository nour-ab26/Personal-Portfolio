import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects as allProjects } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(allProjects.flatMap(p => p.category || []))]; // Added || [] for safety

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(p => p.category && p.category.includes(category))); // Added check for p.category
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const containerVariants = { // For staggering the cards if preferred
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 md:px-12 bg-dark-bg text-light-text relative overflow-hidden"
    >
      {/* Optional: Futuristic background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 z-[-1]">
        {/* e.g., subtle animated grid lines or a plexus effect */}
      </div>

      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-10 text-center
                     bg-clip-text text-transparent bg-gradient-to-r from-violet-flask via-accent-pink to-accent-teal"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Featured Innovations
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ease-out border-2
                ${activeFilter === category
                  ? 'bg-gradient-to-r from-violet-flask to-accent-pink text-white border-transparent shadow-lg shadow-violet-flask/30'
                  : 'bg-subtle-grey/30 text-light-text/80 border-violet-flask/30 hover:border-violet-flask hover:text-violet-flask'
                }`}
              whileHover={{ y: -2, scale: activeFilter === category ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animate container when it comes into view
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the container is visible
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id} // Ensure unique key
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal - AnimatePresence is now inside ProjectModal */}
      <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;