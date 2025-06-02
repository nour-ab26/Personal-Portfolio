import React from 'react';
import { motion } from 'framer-motion';
import { playgroundItems } from '../data/playgroundData'; // Import your data
import PlaygroundCard from './PlaygroundCard'; // Import the card component

const Playground = () => {
  return (
    <section
      id="playground"
      className="min-h-screen py-20 px-6 md:px-12 bg-dark-bg text-light-text" // Or a slightly different bg if you want
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold  text-violet-flask mb-16 text-center" // Using accent-teal
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Beyond the Code: Creative Leadership & Design
        </motion.h2>

        {playgroundItems.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            // You can add container variants for staggering if desired
          >
            {playgroundItems.map((item, index) => (
              // Staggering handled by PlaygroundCard's whileInView
              <PlaygroundCard key={item.id || index} item={item} />
            ))}
          </motion.div>
        ) : (
          <motion.p
            className="text-lg md:text-xl text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay:0.2 }}
          >
            Details of my creative work and leadership at ACM Enstab coming soon!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Playground;