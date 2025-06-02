import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects as allProjects } from '../data/projectsData'; // Import your project data
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeFilter, setActiveFilter] = useState('All');

  // Get all unique categories for filter buttons
  const categories = ['All', ...new Set(allProjects.flatMap(p => p.category))];

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(p => p.category.includes(category)));
    }
  };

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);


  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 md:px-12 bg-dark-bg text-light-text"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold text-violet-flask mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 border-2
                ${activeFilter === category
                  ? 'bg-violet-flask text-white border-violet-flask'
                  : 'bg-transparent text-violet-flask border-violet-flask hover:bg-violet-flask/20'
                }`}
              whileHover={{ scale: activeFilter === category ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          // Variants for staggering cards can be added here if needed
          // initial="hidden"
          // animate="visible"
          // variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            // Staggering is handled by ProjectCard's whileInView for individual appearance
            <ProjectCard
              key={project.id || index} // Use project.id if available and unique
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;