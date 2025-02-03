import React from "react";
import styles from "./Anshu/anshu.module.css";
import Footer from "../Components/Footer/footer";
import Navbar from "../Components/Navbar/navbar";

const Swayam = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {/* Header Section */}
        <header className={styles.header}>
          <img
            src="https://i.ibb.co/XbbrsX8/Swayam-Mishra.jpg"// Replace this with a relevant image for Swayam
            alt="Swayam Mishra"
            className={styles.profileImage}
          />
          <h1 className={styles.name}>Swayam Mishra</h1>
          <p className={styles.role}>Business Management Enthusiast | Tech Problem Solver</p>
        </header>

        {/* About Me Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.text}>
            Hello, I am Swayam Mishra, currently pursuing B.Tech at Heritage Institute of Technology. My passion lies at the intersection of technology and business, with a strong focus on software management and hardware innovation.
          </p>
          <p className={styles.text}>
            I thrive on tackling complex challenges, bridging the gap between technical solutions and strategic business growth.
          </p>
        </section>

        {/* Education Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Academic Background</h2>
          <ul className={styles.list}>
            <li>
              <strong>B.Tech in AEIE</strong> - Heritage Institute of Technology
            </li>
            <li>
              <strong>Higher Secondary Education</strong> - Abhinav Bharati High School
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills & Interests</h2>
          <ul className={styles.list}>
            <li>Software, Business Management</li>
            <li>Innovative Problem Solving</li>
            <li>Software Development</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Me</h2>
          <p className={styles.text}>
            📧 Email:{" "}
            <a href="mailto:swayam.mishra.paradox@gmail.com" className={styles.link}>
              swayam.mishra.paradox@gmail.com
            </a>
          </p>
          <p className={styles.footerText}>
            Together, let’s transform ideas into impactful solutions for a better future!
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Swayam;
