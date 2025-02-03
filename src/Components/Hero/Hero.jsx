import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';


const Hero = () => {
  const [successRate, setSuccessRate] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);

  // Function to animate number increase
  const animateNumber = (target, setter) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setter(count);
      if (count >= target) clearInterval(interval);
    }, 50); // Adjust the speed by changing the interval time
  };

  useEffect(() => {
    animateNumber(98, setSuccessRate); // Animate from 0 to 98
    animateNumber(50, setProjectsCompleted); // Animate from 0 to 50
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Text Content */}
        <div className={styles.contentContainer}> 
            <h1 className={styles.towards}>
          towards new
            </h1>
          <h1 className={styles.syn}>
          .: Synergies
          </h1>
             <h1 className={styles.paraName}>
          Paradox Innovator
          </h1>
          
          <p className={styles.description}>
            Building innovative solutions for tomorrow's challenges. We combine cutting-edge 
            technology with forward-thinking approaches to create lasting impact.
          </p>
          
          

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{successRate}%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{projectsCompleted}+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className={styles.imageContainer}>
          <div className={styles.mainImageWrapper}>
            <img
              src="https://i.postimg.cc/QCk1Wh8v/Call-center-pana.png"
              alt="AI Technology"
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.bgGradient}></div>
      <div className={styles.bgPattern}></div>
    </section>
  );
};

export default Hero;
