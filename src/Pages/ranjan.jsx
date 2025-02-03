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
          <p className={styles.role}>Problem Solver | Mathematical Calculation | Hardware Enthusiast</p>
        </header>

        {/* About Me Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.text}>
            I am Ranjan Kumar Gupta, currently pursuing B.Tech in AEIE at *Heritage Institute of Technology*, Kolkata. With a deep passion for solving complex problems, I specialize in mathematical numerical theory and enjoy working on the hardware aspect of projects.
          </p>
          <p className={styles.text}>
            I am always driven to find innovative solutions and bring technical expertise to hardware development.
          </p>
        </section>

        {/* Education Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <ul className={styles.list}>
            <li>
              <strong>B.Tech in AEIE</strong> - Heritage Institute of Technology, Kolkata
            </li>
            <li>
              <strong>Class 12</strong> - Sunrise Dwarika School, Deoghar
            </li>
          </ul>
        </section>

        {/* Expertise Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expertise</h2>
          <ul className={styles.list}>
            <li>Problem Solving</li>
            <li>Mathematical Numerical Theory</li>
            <li>Hardware Development</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <p className={styles.text}>
            📍 Kalikapur Kolkata-700078
          </p>
          <p className={styles.text}>
            📧 Email:{" "}
            <a href="mailto:ranjan.kumargupta.paradox@gmail.com" className={styles.link}>
              ranjan.kumargupta.paradox@gmail.com
            </a>
          </p>
          <p className={styles.text}>📱 Phone: +91 97092 87187</p>
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
