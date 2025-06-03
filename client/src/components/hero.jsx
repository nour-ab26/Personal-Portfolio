import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// import { FaChevronDown } from 'react-icons/fa'; // Alternative to SVG path

const Hero = () => {
  // ... (scrollToProjects and scrollToContact functions remain the same) ...
  const scrollToProjects = (e) => {
    e.preventDefault();
    const section = document.querySelector('#projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const section = document.querySelector('#contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <section
    id="hero"
    className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative overflow-hidden 
               bg-dark-bg" // Base dark background
  >
      {/* Subtle Particle/Generative Art Background - Placeholder idea */}
      {/* This would typically be a separate component or canvas animation */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        {/* <ParticleBackground /> Or your generative art component */}
        {/* For a simple effect now, a subtle gradient: */}
         <div className="absolute inset-0 z-0 opacity-5 animated-lines-bg"></div>
      </div>

      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-light-text-heading mb-4 tracking-tight"
          // Removed individual animation as parent div handles it
        >
          Nour Abid
        </motion.h1>

       <div className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 h-16 md:h-20
                      text-violet-flask" // Solid violet for animated text
      >
          <TypeAnimation
            sequence={[
              'Software Developer', 2000,
              'AI Enthusiast', 2000,
              'UX/UI Designer', 2000,
              'Industrial Systems Thinker', 2000,
              'Creative Problem-Solver', 2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            cursor={true}
            // className="bg-clip-text text-transparent bg-gradient-to-r from-violet-flask via-accent-pink to-accent-teal" // Apply gradient here
          />
        </div>

        <motion.p
          className="text-lg md:text-xl text-light-text-body max-w-2xl mx-auto mb-10">
          Weaving technology, design, and process to build innovative solutions.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <motion.button // Primary CTA
          // ...
           className="text-lg font-semibold py-3 px-8 rounded-md text-white
                    bg-gradient-to-r from-violet-flask via-accent-pink to-accent-teal 
                    shadow-lg hover:brightness-110 transition duration-300" >
            Explore My Work
          </motion.button>
          
          <motion.button // Secondary CTA
          // ...
          className="text-lg font-semibold py-3 px-8 rounded-md
             bg-transparent text-transparent bg-clip-text
             border-2 border-transparent
             bg-gradient-to-r from-violet-flask via-accent-pink to-accent-teal
             shadow-lg hover:brightness-110 transition duration-300"
  style={{
    borderImage: 'linear-gradient(to right, #8B5CF6, #14B8A6) 1',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  }}
  whileTap={{ scale: 0.17 }}
>
            Let's Connect
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Animated scroll down arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        onClick={(e) => scrollToSection(e, '#about')} // Make arrow clickable
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-violet-flask hover:text-accent-teal transition-colors">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
};

// If you want a more complex particle background, you'd create this component:
// const ParticleBackground = () => { /* ... your particle logic ... */ return <canvas className="absolute inset-0 w-full h-full"></canvas>; };


export default Hero;