import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ExperienceModal = ({ experience, onClose }) => {
  if (!experience) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 20 } },
    exit: { scale: 0.8, opacity: 0, transition: { ease: 'easeIn' } },
  };

  return (
    <AnimatePresence mode="wait">
      {experience && (
        <motion.div
          key="exp-backdrop"
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex justify-center items-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            key="exp-modal"
            className="bg-deep-indigo text-light-text p-4 sm:p-6 rounded-2xl shadow-2xl w-full max-w-4xl relative border-2 border-violet-flask/50"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={onClose}
              className="absolute top-3 right-3 text-light-text/70 hover:text-violet-flask text-3xl z-10"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>
            
            <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-violet-flask">
                    Demo: {experience.role}
                </h2>
            </div>
            
            <div className="w-full aspect-video bg-dark-bg rounded-lg overflow-hidden">
              {experience.videoUrl ? (
                <video
                  src={experience.videoUrl}
                  className="w-full h-full object-contain" // object-contain to see the whole screen
                  autoPlay
                  controls // Important to allow user to play/pause/fullscreen
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p>No video demo available for this experience.</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExperienceModal;