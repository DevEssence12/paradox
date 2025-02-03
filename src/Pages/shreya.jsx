import React from "react";
import styles from "./Anshu/anshu.module.css";
import Footer from "../Components/Footer/footer";
import Navbar from "../Components/Navbar/navbar";

const Shreya = () => {
  return (
    <div>
        < Navbar />
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <img
          src="https://i.ibb.co/VpYxxCG/Shreya-Panda.jpg"  // Replace this with a relevant image for Shreya
          alt="Shreya Panda"
          className={styles.profileImage}
        />
        <h1 className={styles.name}>Shreya Panda</h1>
        <p className={styles.role}>PR & Management Specialist</p>
      </header>

      {/* About Me Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.text}>
          Hello! I’m Shreya Panda, an ambitious and creative individual currently pursuing B.Tech in Information Technology at Heritage Institute of Technology, Kolkata. With a passion for organization and innovation, I bring my expertise in PR handling, management, and documentation to Paradox Innovator, where we develop groundbreaking solutions to improve lives.
        </p>
        <p className={styles.text}>
          I believe in empowering ideas through meticulous execution and effective communication.
        </p>
      </section>

      {/* Education Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <ul className={styles.list}>
          <li>
            <strong>B.Tech in Information Technology</strong> - Heritage Institute of Technology, Kolkata
          </li>
          <li>
            <strong>Class 12</strong> - Delhi Public School, Bokaro
          </li>
          <li>
            <strong>Class 10</strong> - Army Public School, Ramgarh
          </li>
          <li><strong>Hometown</strong> - Ramgarh, Jharkhand</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.list}>
          <li>Public Relations & Communication</li>
          <li>Project Documentation</li>
          <li>Event Management</li>
          <li>Team Collaboration</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.text}>
          📍 Kalikapur, Kolkata 700099
        </p>
        <p className={styles.text}>
          📧 Email:{" "}
          <a href="mailto:shreya.panda.paradox@gmail.com" className={styles.link}>
            shreya.panda.paradox@gmail.com
          </a>
        </p>
        <p className={styles.text}>📱 Phone: 7667492418</p>
        <p className={styles.footerText}>
          Let’s innovate and build a brighter future together!
        </p>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default Shreya;
