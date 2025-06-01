import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; // We'll install this next

const Hero = () => {
  const roles = [
    'Software Developer',
    2000, // wait 2s
    'AI Enthusiast',
    2000,
    'UX/UI Designer',
    2000,
    'Industrial Systems Thinker',
    2000,
    'Creative Problem-Solver',
    2000,
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-dark-bg text-light-text relative overflow-hidden" // Added relative and overflow-hidden for potential background effects
    >
      {/* Optional: Subtle Animated Background (Example idea - more complex to implement fully) */}
      {/* <motion.div
        className="absolute inset-0 z-0"
        // Add particle animation or generative art here
      /> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10" // Ensure content is above background
      >
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
          Nour Abid
        </h1>
        <div className="text-2xl md:text-4xl font-heading text-violet-flask mb-6 h-16 md:h-20"> {/* Fixed height for type animation stability */}
          <TypeAnimation
            sequence={roles}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={50}
            deletionSpeed={70}
          />
        </div>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-sans">
          Weaving technology, design, and process to build innovative solutions.
        </p>
        <div className="space-x-4">
          <motion.a
            href="#projects" // Link to projects section
            className="bg-violet-flask text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="#contact" // Link to contact section
            className="border-2 border-violet-flask text-violet-flask font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-violet-flask hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </div>
      </motion.div>

      {/* Social Links (can be a separate component later) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex space-x-6"
      >
        <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className="text-light-text hover:text-violet-flask transition-colors duration-300">
          {/* Replace with actual LinkedIn Icon (e.g., from react-icons) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" className="text-light-text hover:text-violet-flask transition-colors duration-300">
          {/* Replace with actual GitHub Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;