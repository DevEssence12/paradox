import React from 'react';
import styles from './IOT.module.css';
import Navbar from '../../../Navbar/navbar';
import Footer from '../../../Footer/footer';

const IOTPage = () => {
  return (
    <div>
      <Navbar />
    <div className={styles.pageContainer}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>IoT & Automation Services</h1>
        </section>
      <section className={styles.intro}>
        <p className={styles.description}>
          At Paradox Innovator, we specialize in delivering comprehensive IoT (Internet of Things) and Automation solutions that bridge the gap between innovation and efficiency. From smart home systems to industrial automation, our services are designed to help you unlock the true potential of connected devices and intelligent control systems.
          <br />
          We also extend our expertise to college students, offering free consultancy and guidance to help them build IoT-based academic projects and gain hands-on experience in the world of connected technologies.
        </p>
      </section>

      <section className={styles.services}>
        <h2 className={styles.subheading}>Our Services</h2>
        <div className={styles.serviceList}>
          <div className={styles.service}>
            <h3>IoT System Development</h3>
            <ul>
              <li>Custom IoT Solutions: Tailored IoT systems for applications like smart homes, healthcare, agriculture, and logistics.</li>
              <li>Device Integration: Seamlessly connecting sensors, actuators, and devices for real-time monitoring and control.</li>
              <li>Cloud Connectivity: Setting up secure and scalable cloud platforms to store and analyze data from IoT devices.</li>
              <li>Mobile App Development: Creating user-friendly apps to manage and monitor IoT systems remotely.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Industrial Automation</h3>
            <ul>
              <li>Process Automation: Enhancing efficiency through automated workflows in manufacturing and production.</li>
              <li>SCADA Systems: Supervisory control and data acquisition solutions for large-scale operations.</li>
              <li>IoT-Enabled Industrial Solutions: Combining IoT and automation for predictive maintenance, asset tracking, and operational insights.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Home and Building Automation</h3>
            <ul>
              <li>Smart Homes: Automation of lighting, HVAC, security, and entertainment systems for a connected living experience.</li>
              <li>Energy Efficiency: IoT-based solutions for optimizing energy consumption and reducing costs.</li>
              <li>Remote Monitoring: Access and control home systems from anywhere through smartphones or voice assistants.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Student Project Support</h3>
            <ul>
              <li>Free Consultancy: Assisting students in developing IoT-based projects for academic purposes.</li>
              <li>Hands-On Training: Workshops on IoT platforms like Arduino, ESP32, Raspberry Pi, and cloud services such as AWS IoT, Google Cloud, and Firebase.</li>
              <li>Prototype Development: Guidance on building and deploying functional IoT prototypes.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.technologies}>
        <h2 className={styles.subheading}>Technologies We Work With</h2>
        <ul>
          <li>Hardware Platforms: Arduino, ESP32, Raspberry Pi, STM32, and NRF modules.</li>
          <li>Communication Protocols: MQTT, HTTP, LoRa, Zigbee, Bluetooth, and Wi-Fi.</li>
          <li>Cloud Services: AWS IoT, Microsoft Azure, Google Cloud, and Firebase.</li>
          <li>Automation Tools: Node-RED, PLCs, SCADA systems, and Python-based frameworks.</li>
        </ul>
      </section>

      <section className={styles.applications}>
        <h2 className={styles.subheading}>Applications of Our Solutions</h2>
        <ul>
          <li>Smart Agriculture: IoT-enabled soil monitoring, weather forecasting, and automated irrigation.</li>
          <li>Healthcare: Remote patient monitoring and smart medical devices.</li>
          <li>Retail: Inventory tracking, smart vending machines, and customer analytics.</li>
          <li>Manufacturing: Automated production lines and predictive maintenance.</li>
          <li>Smart Cities: Traffic management, waste management, and public safety systems.</li>
          <li>Academic Projects: Real-world IoT solutions for college students and researchers.</li>
        </ul>
      </section>

      <section className={styles.whyChoose}>
        <h2 className={styles.subheading}>Why Choose Paradox Innovator?</h2>
        <ul>
          <li>Expertise in IoT and Automation: Years of experience in designing, developing, and deploying innovative solutions.</li>
          <li>Student-Friendly Services: Free consultancy and workshops to support academic excellence.</li>
          <li>End-to-End Solutions: From conceptualization to deployment, we handle every aspect of IoT and automation projects.</li>
          <li>Innovation-Focused: Leveraging the latest technologies to deliver scalable and sustainable solutions.</li>
          <li>Customizable Services: Tailored to meet the unique needs of businesses, startups, and academic projects.</li>
        </ul>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.subheading}>Get in Touch</h2>
        <p>For inquiries, registrations, or collaborations, feel free to contact us!</p>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default IOTPage;
