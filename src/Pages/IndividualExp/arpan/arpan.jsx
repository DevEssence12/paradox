import React from "react";
import styles from "./arpan.module.css";
import Navbar from "../../../Components/Navbar/navbar";
import Footer from "../../../Components/Footer/footer";

const Arpan = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {/* Header Section */}
        <header className={styles.header}>
          <img
            src="https://i.postimg.cc/1fP8rFKN/arpan.jpg"
            alt="Arpan Baul"
            className={styles.profileImage}
          />
          <h1 className={styles.name}>Arpan Baul</h1>
          <p className={styles.role}>Robotics Engineer | IoT Innovator | Full Stack Developer</p>
        </header>

        {/* About Me Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.text}>
            Hello, I am Arpan Baul, currently pursuing a B.Tech in Robotics & Automation Engineering
            at The Neotia University. My passion lies in creating intelligent robotic systems, IoT
            solutions, and full-stack development for both web and robotic systems.
          </p>
          <p className={styles.text}>
            I specialize in building end-to-end solutions, including API integration, database
            management, cloud handling, and real-time control systems. I enjoy working on innovative
            projects, integrating cutting-edge technologies, and exploring the endless possibilities
            of automation.
          </p>
        </section>

        {/* Academic Background Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Academic Background</h2>
          <ul className={styles.list}>
            <li>
              <strong>B.Tech in Robotics & Automation Engineering</strong> - The Neotia University,
              West Bengal
            </li>
            <li>
              <strong>Higher Secondary Education</strong> - Howrah Vivekananda Institution
            </li>
          </ul>
        </section>

        {/* Skills & Interests Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills & Interests</h2>
          <ul className={styles.list}>
            <li>Robotics System Design</li>
            <li>IoT Development</li>
            <li>Full Stack Development</li>
            <li>Cloud Handling and Server Deployment</li>
            <li>Robot Operating System (ROS2)</li>
            <li>Encryption & Security Management</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Me</h2>
          <p className={styles.text}>
            📧 Email:{" "}
            <a href="mailto:arpan.baul.paradox@gmail.com" className={styles.link}>
              arpan.baul.paradox@gmail.com
            </a>
          </p>
          <p className={styles.text}>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/arpan-baul2003/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              linkedin.com/in/arpan-baul2003/
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Arpan;
