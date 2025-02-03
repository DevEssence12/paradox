import React from 'react';
import styles from './PCB.module.css';
import Footer from '../../../Footer/footer';
import Navbar from '../../../Navbar/navbar';

const PCBPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.pageContainer}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>PCB Designing Services</h1>
        </section>
      <section className={styles.intro}>
        <p className={styles.description}>
          At Paradox Innovator, we excel in delivering high-quality PCB design solutions tailored to meet the specific needs of industries, startups, and college students. From simple single-layer designs to complex multi-layered PCBs with intricate routing, our expertise ensures your electronic circuits are optimized for performance, cost, and manufacturability.
          <br />
          Whether you're developing a cutting-edge device or need help with complex routing for your academic project, we are here to assist you every step of the way.
        </p>
      </section>

      <section className={styles.services}>
        <h2 className={styles.subheading}>Our PCB Design Services</h2>
        <div className={styles.serviceList}>
          <div className={styles.service}>
            <h3>Schematic Design</h3>
            <ul>
              <li>Translating your circuit ideas into detailed, professional-grade schematics.</li>
              <li>Ensuring component compatibility and functional reliability.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Layout Design</h3>
            <ul>
              <li>Designing layouts optimized for space, performance, and manufacturability.</li>
              <li>Support for various PCB types, including single-layer, double-layer, and multi-layer boards.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Complex Routing Assistance</h3>
            <ul>
              <li>Expertise in high-speed routing for advanced circuits.</li>
              <li>Addressing challenges like impedance matching, signal integrity, and power distribution.</li>
              <li>Solutions for PCBs with dense component placement and intricate connections.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Design Validation</h3>
            <ul>
              <li>Thorough design checks to ensure compliance with industry standards.</li>
              <li>Signal integrity and thermal management analysis.</li>
              <li>File preparation for error-free manufacturing (Gerber, BOM, and drill files).</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Student Project Support</h3>
            <ul>
              <li>Free Consultancy: Guidance for college students to design and develop PCBs for academic projects.</li>
              <li>Routing Expertise: Assisting students with complex PCB routing and optimization.</li>
              <li>Workshops & Training: Practical sessions to help students master PCB design software and techniques.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.whyChoose}>
        <h2 className={styles.subheading}>Why Choose Paradox Innovator?</h2>
        <ul>
          <li>Expert Guidance: A team of professionals skilled in advanced PCB design techniques.</li>
          <li>Student-Centric Support: Dedicated assistance to help college students achieve academic excellence.</li>
          <li>State-of-the-Art Tools: Utilization of industry-leading PCB design software like Altium Designer, KiCAD, and Eagle.</li>
          <li>Quick Turnaround: Fast and efficient delivery of design files, ensuring you meet your deadlines.</li>
          <li>Commitment to Quality: Every design is meticulously crafted to ensure reliability and efficiency.</li>
        </ul>
      </section>

      <section className={styles.applications}>
        <h2 className={styles.subheading}>Applications of Our PCB Design Services</h2>
        <ul>
          <li>Consumer Electronics: Smart devices, wearables, and IoT solutions.</li>
          <li>Industrial Applications: Power supplies, motor controllers, and automation systems.</li>
          <li>Academic Projects: Custom PCBs for engineering and research purposes.</li>
        </ul>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.subheading}>Get in Touch</h2>
        <p>If you're looking for professional PCB design services, get in touch with us to discuss your project needs.</p>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default PCBPage;
