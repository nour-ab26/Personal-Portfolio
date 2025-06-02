import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants for text blocks
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about" // ID for navbar scrolling
      className="min-h-screen py-20 px-6 md:px-12 bg-dark-bg text-light-text flex items-center" // Use dark-bg
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible" // Animate when in view
          viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% is visible
          variants={{
            visible: { transition: { staggerChildren: 0.3 } } // Stagger children animations
          }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-bold text-violet-flask mb-8"
            variants={textVariant}
          >
            My Philosophy
          </motion.h2>
          <motion.p className="text-lg md:text-xl mb-6" variants={textVariant}>
            As a dynamic engineering student specializing in Advanced Technologies and Industrial Systems,
            I'm driven by the power of technology to solve complex problems and enhance human experiences.
            My journey is about weaving together diverse threads – software development, artificial intelligence,
            user-centric design, and process optimization – to architect innovative and effective solutions.
          </motion.p>
          <motion.p className="text-lg md:text-xl mb-6" variants={textVariant}>
            I believe in a holistic approach, understanding not just the 'how' of technology, but the 'why' –
            the user needs, the business context, and the potential for real-world impact. This is particularly
            true for my interest in ERP systems and optimizing industrial processes.
          </motion.p>
          <motion.p className="text-lg md:text-xl" variants={textVariant}>
            Constantly learning and exploring, I aim to contribute to projects that are not only technically
            challenging but also meaningful and forward-thinking.
          </motion.p>
        </motion.div>

        {/* Right Column: Placeholder for Image/Visual Element */}
        <motion.div
          className="hidden md:flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <div className="w-80 h-80 lg:w-96 lg:h-96 bg-subtle-grey rounded-full flex items-center justify-center shadow-xl border-4 border-violet-flask">
            <p className="text-2xl font-heading text-light-text text-center p-4">
              {/* Replace with your image or a more creative visual later */}
              Visual Placeholder
            </p>
          </div>
          {/*
            Later you can add:
            <img src="/path/to/your-photo.jpg" alt="Nour Abid" className="rounded-lg shadow-xl" />
            or a more complex SVG animation / Framer Motion graphic
          */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;