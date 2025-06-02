import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Playground', href: '#playground' }, // Assuming you'll have this section
    { title: 'Contact', href: '#contact' },
  ];

  // Effect to handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after 50px scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for Framer Motion
  const navItemVariants = {
    hover: {
      scale: 1.1,
      color: '#8B5CF6', // violet-flask
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }} // Initial position (off-screen top)
      animate={{ y: 0 }}     // Animate to position 0 (on-screen)
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-[#1E1B4B] shadow-lg' : 'bg-transparent' // Deep Indigo/Dark Blue
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <motion.a
          href="#"
          onClick={(e) => scrollToSection(e, '#hero')} // Scroll to top/hero
          className="text-2xl font-heading font-bold text-light-text" // Use light-text
          whileHover={{ scale: 1.05, color: '#8B5CF6' }}
          whileTap={{ scale: 0.95 }}
        >
          Nour Abid
        </motion.a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <motion.li key={link.title}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-light-text hover:text-violet-flask transition-colors duration-200 font-medium" // Use light-text
                // Framer Motion variants applied here
                // variants={navItemVariants}
                // whileHover="hover"
                // whileTap="tap"
              >
                {link.title}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button (Placeholder - implement functionality later if needed) */}
        <div className="md:hidden">
          <button className="text-light-text focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;