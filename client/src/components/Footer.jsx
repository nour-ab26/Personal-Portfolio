import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconVariants = {
    hover: {
      y: -3,
      scale: 1.2,
      color: '#8B5CF6', // violet-flask
      textShadow: '0 0 8px #8B5CF6',
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <footer className="bg-dark-bg text-light-text/70 py-10 px-6 md:px-12 relative border-t-2 border-transparent">
      {/* Subtle line animation or glow at the top border */}
      <div className="absolute top-[-2px] left-0 right-0 h-[2px] 
                    bg-gradient-to-r from-accent-teal via-violet-flask to-accent-pink
                    animate-pulse" /* Simple pulse or use a custom animation */
    ></div>

      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-6">
          {[
            { href: "YOUR_LINKEDIN_URL", icon: FaLinkedin, label: "LinkedIn" },
            { href: "YOUR_GITHUB_URL", icon: FaGithub, label: "GitHub" },
            { href: "mailto:noure.abid@enstab.ucar.tn", icon: FaEnvelope, label: "Email" },
          ].map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="transition-colors"
              aria-label={link.label}
              variants={iconVariants}
              whileHover="hover"
            >
              <link.icon size={26} />
            </motion.a>
          ))}
        </div>
        <motion.p
          className="text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          © {currentYear} Nour Abid. All rights reserved.
        </motion.p>
        <motion.p
          className="text-xs mt-2 font-mono opacity-70" // Monospace for tech credit
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Crafted with <span className="text-accent-pink">♥</span> & code using React, Tailwind, Framer Motion.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;