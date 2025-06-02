import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; // For typing effect

const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const section = document.querySelector('#projects'); // Ensure #projects ID exists
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const section = document.querySelector('#contact'); // Ensure #contact ID exists
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero" // ID for navbar scrolling
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-dark-bg relative overflow-hidden" // Use dark-bg
    >
      {/* Optional: Subtle Particle Background (Implement later if desired) */}
      {/* <div className="absolute inset-0 z-0"> Your particle animation component </div> */}

      <motion.div
        className="z-10" // Ensure content is above any background animation
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-light-text mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 100 }}
        >
          Nour Abid
        </motion.h1>

        <div className="text-2xl md:text-3xl lg:text-4xl text-violet-flask font-medium mb-8 h-16 md:h-20"> {/* Fixed height for type animation */}
          <TypeAnimation
            sequence={[
              'Software Developer',
              2000,
              'AI Enthusiast',
              2000,
              'UX/UI Designer',
              2000,
              'Industrial Systems Thinker',
              2000,
              'Creative Problem-Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </div>

        <motion.p
          className="text-lg md:text-xl text-light-text max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Weaving technology, design, and process to build innovative solutions.
        </motion.p>

        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="bg-violet-flask text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 text-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(139,92,246)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            className="bg-transparent border-2 border-violet-flask text-violet-flask font-semibold py-3 px-8 rounded-lg hover:bg-violet-flask hover:text-white transition duration-300 text-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(139,92,246)" }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Optional: Animated scroll down arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-violet-flask">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;