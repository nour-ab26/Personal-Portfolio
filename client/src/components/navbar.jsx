import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile menu

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Playground', href: '#playground' },
    { title: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu on link click
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const logoVariants = {
    hover: {
      // textShadow: '0 0 8px #8B5CF6', // Using Tailwind's text-shadow utility
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  }

  const linkItemVariants = {
    hover: {
      color: '#8B5CF6', // violet-flask
      scale: 1.1,
      originX: 0, // For the underline effect to grow from left
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };


  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
        ${isScrolled
          ? 'py-3 bg-deep-indigo/80 backdrop-blur-md shadow-xl border-b border-violet-flask/20' // Glassmorphism
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-0">
        <motion.a
          href="#"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="text-3xl font-heading font-bold text-light-text hover:text-shadow-neon-violet" // Applied text-shadow utility
          variants={logoVariants}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          Nour Abid
        </motion.a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link) => (
            <motion.li key={link.title} variants={linkItemVariants} whileHover="hover" whileTap="tap">
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-light-text/90 font-medium relative group" // For underline effect
              >
                {link.title}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-violet-flask to-accent-teal group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-light-text focus:outline-none z-[60] relative" // Ensure button is above overlay
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 bg-deep-indigo/95 backdrop-blur-lg z-[55] flex flex-col items-center justify-center space-y-8 pt-20"
            // Added pt-20 to account for navbar height
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.title}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-3xl font-heading text-light-text hover:text-violet-flask"
                variants={mobileLinkVariants}
              >
                {link.title}
              </motion.a>
            ))}
          </motion.div>
        )}
    </motion.nav>
  );
};

export default Navbar;