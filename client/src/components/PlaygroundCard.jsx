import React from 'react';
import { motion } from 'framer-motion';
import { FiLink, FiAward, FiUsers, FiCpu } from 'react-icons/fi'; // More diverse icons

const PlaygroundCard = ({ item }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 60, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }, // Smoother ease
    },
    // hover is now handled by group-hover on parent for more complex effects
  };

  // Helper to pick an icon based on tags or title
  const getIcon = () => {
    if (item.tags.includes('Leadership')) return <FiUsers size={20} />;
    if (item.tags.includes('Algorithms')) return <FiCpu size={20} />;
    if (item.tags.includes('Branding') || item.tags.includes('Logo Design')) return <FiAward size={20} />; // Re-using FiAward, could be more specific
    return <FiLink size={20}/>;
  };

  return (
    <motion.div
    className="group bg-medium-grey/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl 
               border border-subtle-grey/50 relative flex flex-col justify-between min-h-[450px]
               hover:border-violet-flask transition-colors duration-300" // Simpler hover border
    // Removed futuristic-glow-border for a cleaner look, can be added back if desired
    variants={cardVariants} // Make sure variants don't use overly bright glows
    whileHover={{ // Refined hover variant
        scale: 1.02,
        boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.3)', // Darker, more subtle shadow
    }}
    // ...
  >
      {/* Image Area */}
      <div className="relative w-full h-56 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:filter group-hover:brightness-75"
          />
        ) : (
          <div className="w-full h-full bg-dark-bg/50 flex flex-col items-center justify-center text-light-text/70 p-4">
            <span className="text-5xl text-accent-teal/60 mb-2">{getIcon()}</span>
            <p className="text-sm text-center">{item.imagePlaceholder || 'Creative Work'}</p>
          </div>
        )}
        {/* Title overlay appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      flex flex-col justify-end p-5">
            <h3 className="text-2xl font-heading font-bold text-white mb-1 
                           transform translate-y-4 group-hover:translate-y-0 
                           transition-all duration-300 delay-100">
                {item.title}
            </h3>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-light-text/80 text-sm mb-4 flex-grow line-clamp-5">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 mt-auto"> {/* mt-auto pushes tags and link to bottom */}
          {item.tags.slice(0, 3).map((tag) => ( // Show fewer tags
            <span
              key={tag}
              className="bg-dark-bg text-violet-flask/90 px-3 py-1 rounded-md text-xs font-semibold border border-violet-flask/40"
          >
              {tag}
            </span>
          ))}
        </div>
        {item.link && (
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent-teal font-bold 
                       hover:text-white hover:bg-gradient-to-r hover:from-accent-teal hover:to-violet-flask 
                       px-3 py-1.5 rounded-md transition-all duration-300 self-start" // self-start to align left
            whileHover={{ x: 3, letterSpacing: "0.025em" }}
          >
            View More <FiLink className="ml-2" />
          </motion.a>
        )}
        {item.details && Array.isArray(item.details) && ( // For competitive programming details
            <div className="mt-3 text-xs text-light-text/60">
                {item.details.slice(0,2).join(' • ')} {item.details.length > 2 ? '...' : ''}
            </div>
        )}
      </div>
    </motion.div>
  );
};

export default PlaygroundCard;