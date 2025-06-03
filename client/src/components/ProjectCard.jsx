import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ProjectCard = ({ project, onClick }) => {
  const cardVariants = { // Simplified, as hover is mostly CSS now via .unified-card
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <motion.div
      className="group unified-card overflow-hidden cursor-pointer 
                 relative flex flex-col justify-between min-h-[420px]" // Applied unified style
      variants={cardVariants}
      onClick={onClick}
      layoutId={`card-container-${project.id}`} // For shared layout animation
      // whileHover (from Framer) can be removed if CSS hover is sufficient
    >
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-dark-bg flex items-center justify-center text-light-text-body">
            <p>{project.imagePlaceholder || 'Project Image'}</p>
          </div>
        )}
        {/* Title on Image Hover (More subtle) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        flex flex-col justify-end p-4">
            <h3 className="text-xl font-semibold text-white mb-0.5 
                               transform translate-y-3 group-hover:translate-y-0 
                               transition-all duration-300 delay-100">
                {project.title}
            </h3>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-light-text-body text-sm mb-3 h-16 line-clamp-3"> {/* Consistent text color */}
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-dark-bg text-violet-flask/90 px-2.5 py-0.5 rounded text-xs font-medium border border-border-lines"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center text-violet-flask font-semibold group-hover:text-accent-teal transition-colors duration-200 text-sm">
          View Case Study
          <FiArrowRight className="ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;