import React from 'react';
import styles from './About.module.css';
import nourPhoto from '../assets/nour-photo.jpg'; // Adjust path to your photo
import useScrollAnimation from '../hooks/useScrollAnimation'; // Import the hook

const About = () => {
  // Animation for the entire section
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  // Animation for individual elements (optional, can add stagger)
  const [textRef, isTextVisible] = useScrollAnimation({ threshold: 0.3, delay: 200 });
  const [imageRef, isImageVisible] = useScrollAnimation({ threshold: 0.3, delay: 400 });


  return (
    <section id="about" ref={sectionRef} className={`${styles.aboutSection} ${isSectionVisible ? styles.isVisible : ''}`}>
      <div className={`${styles.aboutContainer} container`}>
        <div ref={imageRef} className={`${styles.imageWrapper} ${isImageVisible ? styles.slideInLeft : ''}`}>
          <img src={nourPhoto} alt="Nour Abid" className={styles.profileImage} />
          {/* Optional: Add abstract violet shapes/lines around or behind the image */}
          <div className={styles.decorativeShape1}></div>
          <div className={styles.decorativeShape2}></div>
        </div>
        <div ref={textRef} className={`${styles.textWrapper} ${isTextVisible ? styles.slideInRight : ''}`}>
          <h2>My Philosophy</h2>
          <p>
            As an engineering student deeply immersed in Advanced Technologies and specializing in Industrial Systems, I'm driven by the challenge of architecting intelligent solutions and crafting intuitive user experiences. My journey is about connecting the dots between robust software development, the potential of AI, and the strategic optimization of processes.
          </p>
          <p>
            I believe in a holistic approach: understanding the core problem, designing with empathy, and building with precision. My passion lies in transforming complex requirements into elegant, effective technology that truly serves its purpose and makes a tangible difference. This includes a keen interest in how systems like ERPs can streamline operations and empower businesses.
          </p>
          <p>
            Always learning, always exploring – I'm excited to contribute to projects that push boundaries and foster innovation.
          </p>
          {/* Optional: Interactive graphic for skills combination */}
        </div>
      </div>
    </section>
  );
};

export default About;