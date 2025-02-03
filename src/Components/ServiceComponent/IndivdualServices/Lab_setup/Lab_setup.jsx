import React from 'react';
import styles from './Lab_setup.module.css';
import Navbar from '../../../Navbar/navbar';
import Footer from '../../../Footer/footer';

const LabSetupPage = () => {
  return (
    <div>
      <Navbar />
    <div className={styles.pageContainer}>
      {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Lab Setup Services</h1>
        </section>
      <section className={styles.intro}>
        <p className={styles.description}>
          At Paradox Innovator, we provide comprehensive lab setup services for academic institutions to foster innovation and hands-on learning. Our labs are designed to empower students with the skills to work on cutting-edge technologies and develop real-world solutions. From IoT and automation to AI and renewable energy, we offer customized lab setups that align with your institution's vision and academic goals.
        </p>
      </section>

      <section className={styles.labServices}>
        <h2 className={styles.subheading}>Our Lab Setup Services</h2>
        <div className={styles.serviceList}>
          <div className={styles.service}>
            <h3>IoT & Automation Labs</h3>
            <ul>
              <li>Equip students with skills to design and develop IoT-enabled devices.</li>
              <li>Comprehensive lab infrastructure with microcontrollers, sensors, actuators, and cloud integration tools.</li>
              <li>Guided curriculum for hands-on IoT project development.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Robotics Labs</h3>
            <ul>
              <li>Provide cutting-edge equipment for designing and programming robots.</li>
              <li>Include robotic arms, mobile robots, and automation kits.</li>
              <li>Facilitate research and learning in AI-powered robotics and autonomous systems.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Embedded Systems Labs</h3>
            <ul>
              <li>Equip labs with tools like Arduino, ESP32, Raspberry Pi, and more.</li>
              <li>Focus on teaching interfacing of sensors, actuators, and communication modules.</li>
              <li>Provide modules for advanced topics like RTOS and embedded AI.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>PCB Design Labs</h3>
            <ul>
              <li>Setup high-quality PCB prototyping machines and design software like Altium, KiCAD, or Eagle.</li>
              <li>Comprehensive kits for schematic design, routing, and circuit analysis.</li>
              <li>Training materials to guide students in developing professional-grade PCBs.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>UAV Design & Manufacturing Labs</h3>
            <ul>
              <li>Enable students to learn drone technology and UAV manufacturing.</li>
              <li>Include simulation tools, drone kits, and assembly stations.</li>
              <li>Provide flight test environments and compliance training.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>AI & ML Labs</h3>
            <ul>
              <li>Develop labs focused on AI and Machine Learning.</li>
              <li>Equip systems with high-performance GPUs, AI frameworks, and datasets.</li>
              <li>Include tools like TensorFlow, PyTorch, and OpenCV for hands-on projects.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Renewable Energy Labs</h3>
            <ul>
              <li>Focus on solar, wind, and other renewable energy systems.</li>
              <li>Equip labs with solar panels, wind turbines, and energy storage systems.</li>
              <li>Facilitate learning in sustainable energy management and green technology.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.servicesInclude}>
        <h2 className={styles.subheading}>Our Services Include</h2>
        <ul>
          <li>Consultation & Planning: Align lab setups with academic and research goals.</li>
          <li>Procurement & Installation: Supply and set up equipment from trusted vendors.</li>
          <li>Training & Workshops: Provide hands-on training for faculty and students.</li>
          <li>Curriculum Integration: Develop lab exercises and project ideas for academic integration.</li>
          <li>Ongoing Support: Post-installation support for troubleshooting and updates.</li>
        </ul>
      </section>

      <section className={styles.whyChoose}>
        <h2 className={styles.subheading}>Why Choose Paradox Innovator for Lab Setup?</h2>
        <ul>
          <li>Comprehensive Solutions: From consultation to execution, we cover all aspects of lab setup.</li>
          <li>Cutting-Edge Equipment: Equip your institution with the latest tools and technologies.</li>
          <li>Student-Centric Approach: Our labs are designed to enhance student learning and innovation.</li>
          <li>Expert Guidance: Our team ensures a smooth and efficient setup process.</li>
          <li>Customized Setup: Tailored lab setups to meet your institution's specific needs.</li>
        </ul>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.subheading}>Get Started with Paradox Innovator</h2>
        <p>Transform your institution into a hub of innovation and practical learning. Contact us today to discuss your lab setup requirements.</p>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default LabSetupPage;
