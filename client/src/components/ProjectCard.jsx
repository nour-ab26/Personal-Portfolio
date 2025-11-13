import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ProjectCard = ({ project, onClick }) => {
  const cardVariants = { /* ... (same as before) ... */ };

  return (
    <motion.div
      className="group bg-subtle-grey/60 backdrop-blur-md rounded-xl overflow-hidden shadow-xl cursor-pointer 
                 border border-violet-flask/30 relative flex flex-col justify-between min-h-[450px]"
      variants={cardVariants}
      whileHover="hover"
      onClick={onClick}
      layoutId={`card-container-${project.id}`}
    >
      {/* <<< CORRECTED VISUALS SECTION FOR CARD >>> */}
      <div className="relative w-full h-52 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-dark-bg flex items-center justify-center text-light-text">
            <p>{project.imagePlaceholder || 'Project Image'}</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        flex flex-col justify-end p-4">
            <h3 className="text-2xl font-heading font-semibold text-white mb-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                {project.title}
            </h3>
        </div>
      </div>
      {/* <<< END CORRECTED VISUALS SECTION FOR CARD >>> */}


      {/* ... (rest of the card content: description, tags, "View Case Study" link as before) ... */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-light-text/90 text-sm mb-4 h-16 overflow-hidden line-clamp-3">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-dark-bg text-violet-flask px-2.5 py-1 rounded-md text-xs font-medium border border-violet-flask/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-auto flex items-center text-violet-flask font-semibold group-hover:text-accent-teal transition-colors duration-300"
        >
          View Case Study
          <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </motion.div>
      </div>

    </motion.div>
  );
};

export default ProjectCard;