import React from 'react';
import { motion } from 'framer-motion';

const Playground = () => {
  return (
    <section
      id="playground"
      className="min-h-screen py-20 px-6 md:px-12 bg-dark-bg text-light-text flex flex-col items-center justify-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-heading font-bold text-violet-flask mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Creative Playground
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay:0.2 }}
      >
        This section will showcase my creative work from ACM Enstab (visuals, marketing campaigns, etc.). Content coming soon!
      </motion.p>
    </section>
  );
};

export default Playground;