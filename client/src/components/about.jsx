import React from 'react';
import { motion } from 'framer-motion';
// You could use react-icons for a more abstract "brain" or "network" icon
// import { GiAbstract020, GiArtificialIntelligence } from 'react-icons/gi';

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
            Deconstructing Complexity,
            <br />
            Architecting Innovation.
          </motion.h2>
          <motion.p className="text-lg md:text-xl mb-6 text-light-text/90" variants={textBlockVariant}>
            As a dynamic engineering student (Advanced Tech, Industrial Systems), I'm driven by technology's power to solve complex problems and elevate user experiences. My journey is about weaving {highlightSpan('diverse threads')} – software development, AI, user-centric design, and process optimization – into impactful solutions.
          </motion.p>
          <motion.p className="text-lg md:text-xl mb-6 text-light-text/90" variants={textBlockVariant}>
            I believe in a holistic approach, understanding not just the 'how' but the 'why'. This perspective is key to my interest in {highlightSpan('ERP systems')} and optimizing industrial processes for tangible real-world impact.
          </motion.p>
          <motion.p className="text-lg md:text-xl text-light-text/90" variants={textBlockVariant}>
            Constantly learning and exploring, I aim to contribute to projects that are both technically challenging and {highlightSpan('meaningfully forward-thinking')}.
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
          {/* Futuristic Orb / Network Graphic - Placeholder */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-violet-flask/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-accent-teal/50"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-2/3 h-2/3 bg-gradient-to-br from-violet-flask/30 via-deep-indigo/50 to-accent-pink/30 rounded-full shadow-2xl backdrop-blur-sm flex items-center justify-center"
                whileHover={{ scale: 1.1, boxShadow: "0 0 25px #8B5CF6" }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="w-64 h-64 rounded-full overflow-hidden">
                     <img
                        src="src/assets/nour-photo.jpg"
                        alt="Nour's Photo"
                        loading="lazy"
                        className="w-full h-full object-cover object-center scale-125"
                        />
                      </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;