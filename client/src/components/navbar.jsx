import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.navContainer} container`}>
        <a href="#hero" className={styles.navLogo}>Nour Abid</a>
        <ul className={styles.navMenu}>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#skills" className={styles.navLink}>Skills</a></li>
          <li><a href="#projects" className={styles.navLink}>Projects</a></li>
          <li><a href="#playground" className={styles.navLink}>Playground</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;