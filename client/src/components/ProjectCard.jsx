import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      scale: 1.03,
      boxShadow: '0px 10px 20px rgba(139, 92, 246, 0.3)', // violet-flask shadow
      transition: { duration: 0.2 },
    }
  };

  return (
    <motion.div
      className="bg-subtle-grey rounded-xl overflow-hidden shadow-lg cursor-pointer border border-violet-flask/20"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      onClick={onClick} // Trigger modal open
      layoutId={`card-container-${project.id}`} // For potential shared layout animation with modal
    >
      {/* Replace with actual image later */}
      <div className="w-full h-48 bg-dark-bg flex items-center justify-center text-light-text">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <p>{project.imagePlaceholder || 'Project Image'}</p>
        )}
      </div>

      <div className="p-6">
        <motion.h3
          layoutId={`title-${project.id}`} // For shared layout animation
          className="text-2xl font-heading font-semibold text-violet-flask mb-2"
        >
          {project.title}
        </motion.h3>
        <p className="text-light-text text-sm mb-4 h-16 overflow-hidden"> {/* Fixed height for description */}
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => ( // Show max 4 tags on card
            <span
              key={tag}
              className="bg-dark-bg text-violet-flask px-2 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <motion.button
          className="text-violet-flask font-semibold hover:underline"
          // onClick prop is on the parent div, but you could also have a specific button
        >
          View Details →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;