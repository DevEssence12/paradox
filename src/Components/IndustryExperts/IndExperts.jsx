import React from 'react';
import styles from './IndExperts.module.css';

const IndustryExperts = () => {
  const experts = [
    {
      name: 'Arpan Baul',
      role: 'Robotics Engineer | IoT Innovator | Full Stack Developer',
      profileLink: '/arpan-baul',
      image: 'https://i.postimg.cc/1fP8rFKN/arpan.jpg',
    },
    {
      name: 'Dr. Samiul Alam',
      role: 'Assistant Professor',
      profileLink: '/samiul-alam',
      image: 'https://i.postimg.cc/Xp8pHv21/samiulll.jpg',
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Industry Experts</h1>
        <p className={styles.mainText}>
          We are proud to collaborate with leading industry experts who guide and mentor us in our mission to innovate and transform.
        </p>
        <p className={styles.secondaryText}>
          Our experts bring years of experience in various fields such as AI, sustainability, electronics, and business strategy. With their mentorship, we aim to achieve excellence in every project we undertake.
        </p>
      </section>

      {/* Experts Section */}
      <section className={styles.experts}>
        <h2 className={styles.expertsHeading}>Meet Our Industry Experts</h2>
        <div className={styles.expertsGrid}>
          {experts.map((expert, index) => (
            <div key={index} className={styles.expertCard}>
              <img src={expert.image} alt={expert.name} className={styles.expertImage} />
              <div className={styles.expertContent}>
                <h3 className={styles.expertName}>{expert.name}</h3>
                <p className={styles.expertRole}>{expert.role}</p>
              </div>
              <div className={styles.hoverOverlay}>
                <a href={expert.profileLink} className={styles.profileLink}>
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustryExperts;
