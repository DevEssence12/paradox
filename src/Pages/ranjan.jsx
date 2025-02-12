import React from "react";
import styles from "./Anshu/anshu.module.css";
import Footer from "../Components/Footer/footer";
import Navbar from "../Components/Navbar/navbar";

const Ranjan = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {/* Header Section */}
        <header className={styles.header}>
          <img
            src="https://i.ibb.co/qBVn2kB/Whats-App-Image-2025-01-10-at-19-14-13-1.jpg" // Replace this with a relevant image for Ranjan
            alt="Ranjan Kumar Gupta"
            className={styles.profileImage}
          />
          <h1 className={styles.name}>Ranjan Kumar Gupta</h1>
          <p className={styles.role}>CTO  | R&D Engineer | Data Analyst</p>
        </header>

        {/* About Me Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.text}>
          I am Ranjan Kumar Gupta, currently pursuing a B.Tech in Applied Electronics and 
          Instrumentation Engineering at Heritage Institute of Technology, Kolkata. 
          </p>
          <p className={styles.text}>
            I am always driven to find innovative solutions and bring technical expertise to
             hardware development.Passionate
           about solving complex problems, I specialize in mathematical numerical theory and 
           have a keen interest in hardware development. My expertise lies in designing and 
           optimizing electronic systems, integrating theoretical knowledge with practical 
           applications to develop innovative solutions. With experience in industrial-level 
           projects and robotics, I thrive in tackling real-world challenges that demand precision 
           and analytical thinking. I am always eager to explore new technologies, collaborate on 
           interdisciplinary projects, and push the boundaries of engineering innovation.
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
            <strong>Higher Secondary Education</strong> - Sunrise Dwarika Academy, Deoghar, Jharkhand
          </li>
          </ul>
        </section>

        {/* Expertise Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expertise</h2>
          <ul className={styles.list}>
            <li>🔎R&D and Innovation</li>
            <li>📐Mathematical Numerical Theory</li>
            <li>💡Hardware Development</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <p className={styles.text}>
            📧 Email:{" "}
            <a href="mailto:ranjan.kumargupta@paradoxinnovator.com" className={styles.link}>
            ranjan.kumargupta@paradoxinnovator.com
            </a>
          </p>
          <p className={styles.text}>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/ranjan-kumar-gupta-821820275/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              linkedin.com/in/ranjan-kumar-gupta-821820275/
            </a>
          </p>
          <p className={styles.footerText}>
            Let's collaborate and make things happen with precision and innovation!
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Ranjan;
