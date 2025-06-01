// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    // { to: 'playground', label: 'Playground' }, // Add later
    { to: 'contact', label: 'Contact' },
  ];

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -70, // Adjust as needed for sticky navbar height
    duration: 500,
    className: "cursor-pointer hover:text-violet-flask transition-colors duration-300",
    activeClass: "text-violet-flask font-semibold", // Active link style
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-dark-bg shadow-lg py-4' : 'bg-transparent py-6'
      } px-6 md:px-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <ScrollLink to="hero" {...linkProps} offset={0} className="text-2xl font-heading font-bold cursor-pointer">
          Nour Abid
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <ScrollLink key={link.to} to={link.to} {...linkProps}>
              {link.label}
            </ScrollLink>
          ))}
           <a
            href="/path-to-your-cv.pdf" // Replace with actual path or link
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-violet-flask text-violet-flask font-semibold py-2 px-4 rounded-md hover:bg-violet-flask hover:text-white transition-colors duration-300 text-sm"
           >
            My CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-light-text focus:outline-none">
            {/* Simple Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-dark-bg pb-4"
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                {...linkProps}
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
              >
                {link.label}
              </ScrollLink>
            ))}
            <a
              href="/path-to-your-cv.pdf" // Replace with actual path or link
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-violet-flask text-violet-flask font-semibold py-2 px-4 rounded-md hover:bg-violet-flask hover:text-white transition-colors duration-300 text-sm w-3/4 text-center"
            >
              My CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;