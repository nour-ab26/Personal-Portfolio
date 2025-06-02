import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPaintBrush } from 'react-icons/fa'; // Example icons

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: "-50vh", opacity: 0, scale: 0.7 },
    visible: {
      y: "0",
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 120, damping: 15 },
    },
    exit: {
      y: "50vh",
      opacity: 0,
      scale: 0.7,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence> {/* Required for exit animations */}
      <motion.div
        className="fixed inset-0 bg-black/70 z-[60] flex justify-center items-center p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose} // Close modal on backdrop click
      >
        <motion.div
          className="bg-deep-indigo text-light-text p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative border-2 border-violet-flask"
          variants={modalVariants}
          // layoutId={`card-container-${project.id}`} // For shared layout animation
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-light-text hover:text-violet-flask text-2xl"
            aria-label="Close modal"
          >
            ×
          </button>

          <motion.h2
            // layoutId={`title-${project.id}`} // For shared layout animation
            className="text-3xl md:text-4xl font-heading font-bold text-violet-flask mb-6"
          >
            {project.title}
          </motion.h2>

          {/* Optional: Image/Video for Modal */}
          <div className="w-full h-64 bg-dark-bg rounded-lg mb-6 flex items-center justify-center">
             {project.image ? (
              <img src={project.image} alt={project.title} className="max-w-full max-h-full object-contain rounded-lg" />
            ) : (
              <p>{project.imagePlaceholder || 'Project Visual'}</p>
            )}
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-xl font-semibold text-violet-flask/80 mb-1">The Challenge:</h4>
              <p>{project.details.challenge}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-violet-flask/80 mb-1">My Approach & Solution:</h4>
              <p>{project.details.solution}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-violet-flask/80 mb-1">My Role & Contributions:</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                {project.details.myRole.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
             <div>
              <h4 className="text-xl font-semibold text-violet-flask/80 mb-1">Key Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-dark-bg text-violet-flask px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-violet-flask/80 mb-1">Learnings:</h4>
              <p>{project.details.learnings}</p>
            </div>
          </div>


          <div className="flex flex-wrap gap-4 mt-6 border-t border-violet-flask/30 pt-6">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-violet-flask text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                <FaGithub className="mr-2" /> GitHub Repo
              </a>
            )}
            {project.liveDemoLink && (
              <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-accent-teal text-dark-bg py-2 px-4 rounded-lg hover:opacity-80 transition-opacity duration-200">
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
            )}
            {project.figmaLink && (
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-accent-pink text-white py-2 px-4 rounded-lg hover:opacity-80 transition-opacity duration-200">
                <FaPaintBrush className="mr-2" /> Figma Design
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;