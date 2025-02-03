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
          Developer | Content Creator | Video Editor
        </p>
      </header>

      {/* About Me Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.text}>
          I am Ankit Pandit, currently pursuing B.Tech in AEIE at Heritage
          Institute of Technology, Kolkata. With a deep passion for development, 
          I specialize in content creation and enjoy working to create blogs for our team.
        </p>
      </section>

      {/* Education Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <ul className={styles.list}>
          <li>
            <strong>B.Tech in AEIE</strong> - Heritage Institute of Technology,
            Kolkata
          </li>
          <li>
            <strong>Class 12</strong> - Little Star High School, Howrah
          </li>
        </ul>
      </section>

      {/* Expertise Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Expertise</h2>
        <ul className={styles.list}>
          <li>Developer</li>
          <li>Content Creator</li>
          <li>Video Editor</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.text}>
          📍 279 Dhanajay Bhattacharya Sarani, Near Ram Mandir, Nischinda,
          Howrah-711227
        </p>
        <p className={styles.text}>
          📧 Email:{" "}
          <a href="mailto:ankit.pandit.paradox@gmail.com" className={styles.link}>
            ankit.pandit.paradox@gmail.com
          </a>
        </p>
        <p className={styles.text}>📱 Phone: 8274831841</p>
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
