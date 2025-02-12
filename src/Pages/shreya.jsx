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
        <p className={styles.role}>COO | PR & Management</p>
      </header>

      {/* About Me Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.text}>
        Hello! I'm Shreya Panda, a driven and creative individual currently pursuing a 
        B.Tech in Information Technology at Heritage Institute of Technology, Kolkata. 
        Passionate about organization and innovation, I specialize in PR handling, management, 
        and documentation at Paradox Innovator, where we work on pioneering solutions to enhance lives.
        </p>
        <p className={styles.text}>
        With a keen eye for detail and a strategic mindset, I thrive in structuring workflows, 
        fostering collaborations, and ensuring seamless execution of ideas. I strongly 
        believe that effective communication and meticulous planning are the backbone of 
        success, and I am committed to transforming innovative concepts into tangible, real-world impacts.
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
            <strong>Higher Secondary Education</strong> - Delhi Public School, Bokaro, Jharkhand
          </li>
          <li>
            <strong>Secondary Education</strong> - Army Public School, Ramgarh
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.list}>
          <li>👨🏻‍💻Public Relations & Communication</li>
          <li>📝Project Documentation</li>
          <li>📅Event Management</li>
          <li>🤝Team Collaboration</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.text}>
          📧 Email:{" "}
          <a href="mailto:shreya.panda@paradoxinnovator.com" className={styles.link}>
          shreya.panda@paradoxinnovator.com
          </a>
        </p>
        <p className={styles.text}>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/shreya-panda-05493b2a0/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              linkedin.com/in/shreya-panda-05493b2a0/
            </a>
          </p>
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
