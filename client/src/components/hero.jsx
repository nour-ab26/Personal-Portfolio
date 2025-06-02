import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css'; // Import CSS Module

const roles = [
  "Software Developer",
  "AI Enthusiast",
  "UX/UI Designer",
  "Industrial Systems Thinker",
  "Creative Problem-Solver"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // ms

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[currentRoleIndex];
      if (isDeleting) {
        // Deleting
        setDisplayedRole(fullRole.substring(0, displayedRole.length - 1));
        setTypingSpeed(75);
      } else {
        // Typing
        setDisplayedRole(fullRole.substring(0, displayedRole.length + 1));
        setTypingSpeed(150);
      }

      // Switch to deleting or next role
      if (!isDeleting && displayedRole === fullRole) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && displayedRole === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedRole, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`${styles.heroContent} container`}> {/* Added .container for centering */}
        <h1>Nour Abid</h1>
        <h2 className={styles.subHeadline}>
          <span className={styles.roleText}>{displayedRole}</span>
          <span className={styles.cursor}>|</span>
        </h2>
        <p className={styles.pitch}>
          Weaving technology, design, and process to build innovative solutions.
        </p>
        <div className={styles.ctaContainer}>
          <a href="#projects" className={styles.ctaButton}>Explore My Work</a>
          <a href="#contact" className={styles.ctaButtonSecondary}>Let's Connect</a>
        </div>
        {/* Optional: Social links here */}
      </div>
      {/* Optional: Particle animation or generative art background could be added here later */}
    </section>
  );
};

export default Hero;