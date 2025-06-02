import React from 'react';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa'; // Example icon

const PlaygroundCard = ({ item }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      scale: 1.03,
      boxShadow: '0px 10px 20px rgba(52, 211, 153, 0.3)', // accent-teal shadow
      transition: { duration: 0.2 },
    }
  };

  return (
    <motion.div
      className="bg-subtle-grey rounded-xl overflow-hidden shadow-lg border border-accent-teal/20" // Using accent-teal for a different feel
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full h-48 bg-dark-bg flex items-center justify-center text-light-text">
        {item.image ? (
          <img src={item.image} alt={item.title} className="w-full h-full object-contain p-2" /> // object-contain might be better here
        ) : (
          <p className="p-4 text-center">{item.imagePlaceholder || 'Creative Work'}</p>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold  text-violet-flask mb-2">
          {item.title}
        </h3>
        <p className="text-light-text text-sm mb-4 h-20 overflow-y-auto"> {/* Allow more text & scroll if needed */}
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="bg-dark-bg text-violet-flask px-2 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-violet-flask font-semibold hover:underline"
          >
            View More <FaLink className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default PlaygroundCard;