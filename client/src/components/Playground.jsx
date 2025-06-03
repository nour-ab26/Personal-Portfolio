import React from 'react';
import { motion } from 'framer-motion';
import { playgroundItems } from '../data/playgroundData';
import PlaygroundCard from './PlaygroundCard';

const Playground = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <section
    id="playground"
    className="py-24 px-6 md:px-12 text-light-text relative overflow-hidden min-h-screen
               section-bg-alt" // Use the alternative dark background (e.g., deep-indigo)
  >
    <div className="absolute inset-0 z-0 opacity-10 animated-lines-bg"></div>
      <div className="container mx-auto relative z-10"> {/* z-10 to be above background */}
        <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-10 text-center
                     bg-clip-text text-transparent bg-gradient-to-r from-violet-flask via-accent-pink to-accent-teal"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Creative Sandbox & Leadership
        </motion.h2>

        {playgroundItems.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }} // Trigger earlier for container
          >
            {playgroundItems.map((item) => (
              <PlaygroundCard key={item.id} item={item} />
            ))}
          </motion.div>
        ) : (
          <motion.p /* ... (fallback message as before) ... */ >
            Details of my creative work and leadership at ACM Enstab coming soon!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Playground;