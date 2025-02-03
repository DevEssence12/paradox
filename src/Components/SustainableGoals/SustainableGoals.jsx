import React from 'react';
import styles from './SustainableGoals.module.css';

const SustainableGoals = () => {

    function gosdgpage () {
        window.location.href = "/sdgpage";
    }


  return (
    <section className={styles.sustainableGoalsSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>Sustainable Development Goals</h2>
        <p className={styles.para}>We are committed to establish a sustainable society</p>
        <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">
          <button className={styles.ctaButton} onClick={gosdgpage}>See Sustainable Development Goals</button>
        </a>
      </div>
    </section>
  );
};

export default SustainableGoals;
