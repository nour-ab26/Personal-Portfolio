import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPaintBrush, FaTimes } from 'react-icons/fa'; // Added FaTimes

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3, delay: 0.2 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, type: "spring", stiffness: 100, damping: 15, delay: 0.1 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence mode="wait"> {/* mode="wait" ensures exit animation completes first */}
      {project && ( // Ensure project exists before rendering
        <motion.div
          key="backdrop" // Key for AnimatePresence
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex justify-center items-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            key="modal" // Key for AnimatePresence
            className="bg-deep-indigo/80 backdrop-blur-lg text-light-text p-6 md:p-8 rounded-2xl shadow-2xl 
                       w-full max-w-3xl max-h-[90vh] overflow-y-auto relative 
                       border-2 border-violet-flask/50" // Glassmorphism for modal
            variants={modalVariants}
            // layoutId={`card-container-${project.id}`} // Keep for shared layout animation experiments
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-light-text/70 hover:text-violet-flask text-3xl z-10"
              aria-label="Close modal"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>

            <motion.h2
              // layoutId={`title-${project.id}`}
              className="text-3xl md:text-4xl font-heading font-bold 
                         bg-clip-text text-transparent bg-gradient-to-r from-violet-flask via-accent-pink to-accent-teal 
                         mb-6 pr-10" // Gradient text & padding for close button
            >
              {project.title}
            </motion.h2>

            <div className="w-full aspect-video bg-dark-bg rounded-lg mb-6 overflow-hidden"> {/* aspect-video for responsive image */}
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p>{project.imagePlaceholder || 'Project Visual'}</p>
                </div>
              )}
            </div>

            {/* Details Sections with animated reveal */}
            {[
              { title: "The Challenge", content: project.details.challenge },
              { title: "My Approach & Solution", content: project.details.solution },
              { title: "My Role & Contributions", content: project.details.myRole, isList: true },
              { title: "Key Technologies", content: project.tags, isTags: true },
              { title: "Learnings", content: project.details.learnings },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <h4 className="text-xl font-semibold text-violet-flask mb-2">{section.title}:</h4>
                {section.isList ? (
                  <ul className="list-disc list-inside ml-4 space-y-1 text-light-text/90">
                    {section.content.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                ) : section.isTags ? (
                  <div className="flex flex-wrap gap-2">
                    {section.content.map((tag) => (
                      <span key={tag} className="bg-dark-bg text-violet-flask px-3 py-1 rounded-md text-sm font-medium border border-violet-flask/50">{tag}</span>
                    ))}
                  </div>
                ) : (
                  <p className="text-light-text/90">{section.content}</p>
                )}
              </motion.div>
            ))}

            <div className="flex flex-wrap gap-4 mt-8 border-t border-violet-flask/30 pt-6">
              {project.githubLink && (
                <motion.a href={project.githubLink} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-gradient-to-r from-violet-flask to-purple-600 text-white py-2.5 px-5 rounded-lg hover:shadow-lg hover:shadow-violet-flask/50 transition-all duration-200">
                  <FaGithub className="mr-2" /> GitHub
                </motion.a>
              )}
              {project.liveDemoLink && (
                <motion.a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-gradient-to-r from-accent-teal to-green-500 text-dark-bg py-2.5 px-5 rounded-lg hover:shadow-lg hover:shadow-accent-teal/50 transition-all duration-200">
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </motion.a>
              )}
              {project.figmaLink && (
                <motion.a href={project.figmaLink} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-gradient-to-r from-accent-pink to-red-500 text-white py-2.5 px-5 rounded-lg hover:shadow-lg hover:shadow-accent-pink/50 transition-all duration-200">
                  <FaPaintBrush className="mr-2" /> Figma Design
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;