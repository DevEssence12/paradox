import React from "react";
import styles from "./Anshu/anshu.module.css";
import Footer from "../Components/Footer/footer";
import Navbar from "../Components/Navbar/navbar";

const Ankit = () => {
  return (
    <div>
        <Navbar />
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <img
          src="https://i.ibb.co/xXHxPM2/Ankit-Pandit.jpg"
          alt="Ankit Pandit"
          className={styles.profileImage}
        />
        <h1 className={styles.name}>Ankit Pandit</h1>
        <p className={styles.role}>
          CMO | Content Creator | E-Commerce
        </p>
      </header>

      {/* About Me Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.text}>
          I am Ankit Pandit, currently pursuing B.Tech in Applied Electronics and Instrumentation Engineering 
          at Heritage Institute of Technology, Kolkata.</p>
          <p> With a deep passion for development, 
          I specialize in content creation and enjoy working to create blogs for our Company. Parallely I handle all the 
          E-Commerce and Marketing Section.
          </p>
      </section>

      {/* Education Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <ul className={styles.list}>
        <li>
            <strong>Undergraduation</strong> -  Bachelor of Technology on Applied Electronics and Instrumentation Engineering from Heritage Institute of Technology,
            Kolkata, West Bengal
          </li>
          <li>
            <strong>Higher Secondary Education</strong> - Little Sky High School, Howrah, West Bengal
          </li>
        </ul>
      </section>

      {/* Expertise Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Expertise</h2>
        <ul className={styles.list}>
          <li>📢Marketing</li>
          <li>🎬Content Creator</li>
          <li>👨‍💼Business Handling</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.text}>
          📧 Email:{" "}
          <a href="mailto:ankit.pandit@paradoxinnovator.com" className={styles.link}>
          ankit.pandit@paradoxinnovator.com
          </a>
        </p>
        <p className={styles.text}>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/ankit-pandit-2915822b6/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              linkedin.com/in/ankit-pandit-2915822b6
            </a>
          </p>
        <p className={styles.footerText}>
          Let's collaborate and make things happen with precision and
          innovation!
        </p>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default Ankit;
