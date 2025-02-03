import React from "react";
import styles from "./anshu.module.css";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";

const Anshu = () => {
  return (
    <div>
        <Navbar />
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <img
          src="https://i.ibb.co/GvzQX4H/Anshu-Raj.jpg"
          alt="Anshu Raj"
          className={styles.profileImage}
        />
        <h1 className={styles.name}>Anshu Raj</h1>
        <p className={styles.role}>Founder | Hardware Engineer</p>
      </header>

      {/* About Me Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.text}>
          Hello, I am Anshu Raj, a Robotics Enthusiasts. My passion lies in creating and implementing innovative
          ideas, with a strong focus on hardware creation and Research and Development.
        </p>
        <p className={styles.text}>
          With 4+ years of experience in Robotics and Electronics,
          I thrive on tackling complex challenges, bridging the gap between
          technical solutions and strategic business growth.
        </p>
      </section>

      {/* Academic Background Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Academic Background</h2>
        <ul className={styles.list}>
          <li>
            <strong>Undergraduation</strong> -  Bachelor of Technology on Applied Electronics and Instrumentation Engineering from Heritage Institute of Technology,
            Kolkata, West Bengal
          </li>
          <li>
            <strong>Higher Secondary Education</strong> - Chinmaya Vidyalaya, Bokaro, Jharkhand
          </li>
        </ul>
      </section>

      {/* Skills & Interests Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills & Interests</h2>
        <ul className={styles.list}>
          <li>💡Hardware Development</li>
          <li>🎗️Innovative Problem Solving</li>
          <li>⚙️Research and Development</li>
          <li>💻Micro-Controller Expert</li>
          <li>📀PCB Designer</li>
          <li>📦3D Modelling</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Me</h2>
        <p className={styles.text}>
          📧 Email:{" "}
          <a href="mailto:anshu.raj.paradox@gmail.com" className={styles.link}>
            anshu.raj.paradox@gmail.com
          </a>
        </p>
        <p className={styles.footerText}>
          Together, let’s transform ideas into impactful solutions for a better
          future!
        </p>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default Anshu;
