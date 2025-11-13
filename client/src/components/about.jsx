import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/images/portrait.png';

const About = () => {
  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const textBlockVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const visualVariant = {
    hidden: { opacity: 0, scale: 0.7, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 100, delay: 0.4 },
    },
  };

  const highlightSpan = (text) => (
    <motion.span
      className="text-violet-flask font-semibold"
      whileHover={{
        scale: 1.05,
        textShadow: '0 0 8px #8B5CF6', // violet-flask neon glow
        transition: { duration: 0.2 },
      }}
    >
      {text}
    </motion.span>
  );

  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 md:px-12 flex items-center relative overflow-hidden"
      // bg-dark-bg is global
    >
      {/* Subtle background geometric pattern (optional) */}
      <div className="absolute inset-0 opacity-5 z-[-1]">
        {/* Replace with a more complex SVG pattern later if desired */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>


      <div className="container mx-auto grid md:grid-cols-5 gap-12 items-center z-10">
        {/* Text Content (Takes 3 columns on md+) */}
        <motion.div
          className="md:col-span-3"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-10 text-center
                     bg-clip-text text-transparent bg-gradient-to-r from-violet-flask via-accent-pink to-accent-teal"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
            About Me
          </motion.h2>
          <motion.p className="text-lg md:text-xl mb-6 text-light-text/90" variants={textBlockVariant}>
            I am currently an {highlightSpan ('Advanced Technologies Engineering student')} at {highlightSpan('ENSTAB')}, specializing in the {highlightSpan('Industrial Systems and Competitiveness')} option. This unique academic path fuels my core passions: applying intelligent technology to solve real-world industrial challenges.
          </motion.p>
          <motion.p className="text-lg md:text-xl mb-6 text-light-text/90" variants={textBlockVariant}>
            I am deeply passionate about {highlightSpan('Machine Learning')}, particularly in contexts like predictive maintenance and data-driven optimization. My coursework in {highlightSpan('Operations Management, ERP Concepts, and Process Analysis')} provides me with a strong framework for understanding and improving the complex systems where these AI models can create the most value.
          </motion.p>
          <motion.p className="text-lg md:text-xl text-light-text/90" variants={textBlockVariant}>
            My goal is to bridge the gap between advanced algorithms and practical industrial applications. I thrive on deconstructing complex processes and building efficient, data-informed solutions, whether through software development, AI modeling, or user-centric design.
          </motion.p>
        </motion.div>

        {/* Visual Element (Takes 2 columns on md+) */}
        <motion.div
  className="md:col-span-2 flex justify-center items-center h-full"
  variants={visualVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Larger Circular Frame */}
  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"> {/* Increased size */}
    {/* Animated border/frame */}
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-violet-flask/30 futuristic-glow-border"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    />

    {/* The Image Container with a background color */}
    <div className="absolute inset-2 overflow-hidden rounded-full bg-deep-indigo"> {/* Added bg color */}
        <motion.img
            src={profilePhoto}
            alt="Nour Abid"
            className="w-full h-full object-contain" // <<< CHANGED to object-contain
            initial={{ scale: 1.2, filter: "grayscale(70%)" }}
            whileInView={{ scale: 1.2, filter: "grayscale(0%)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
        />
    </div>

    {/* Optional: Add a subtle overlay or corner elements on the circular frame */}
    {/* These might need adjustment or removal depending on the new size and your preference */}
    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent-teal/70 rounded-tl-full"></div>
    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent-teal/70 rounded-br-full"></div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default About;