import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Re-using icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-light-text/70 py-8 px-6 md:px-12 border-t border-subtle-grey/50">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="YOUR_LINKEDIN_URL" // Replace
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-flask transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="YOUR_GITHUB_URL" // Replace
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-flask transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:noure.abid@enstab.ucar.tn"
            className="hover:text-violet-flask transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm">
          © {currentYear} Nour Abid.
        </p>
        <p className="text-xs mt-1">
          Designed & Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;