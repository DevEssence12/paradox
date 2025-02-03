// UAVPage.jsx
import React from "react";
import styles from "./UAVPage.module.css";
import Navbar from "../../../Navbar/navbar";
import Footer from "../../../Footer/footer";

const UAVPage = () => {
  return (
    <div>
      <Navbar />

     

      
    <div className={styles.pageContainer}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>UAV Design & Manufacturing Services</h1>
        </section>
{/*       <h1 className={styles.heading}>UAV Design & Manufacturing Services</h1> */}
      <p className={styles.intro}>
        At Paradox Innovator, we specialize in delivering cutting-edge Unmanned
        Aerial Vehicle (UAV) design and manufacturing services. Whether you're
        a business looking for custom drones to enhance operational efficiency,
        a hobbyist with a vision for innovation, or a college student working
        on a major project, our team is here to bring your ideas to life with
        precision, reliability, and expertise.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subHeading}>Why Choose Our UAV Solutions?</h2>
        <ul className={styles.list}>
          <li><strong>Customized Designs:</strong> From fixed-wing UAVs to multi-rotor drones, we tailor our designs to meet your specific requirements.</li>
          <li><strong>High-Quality Manufacturing:</strong> Using state-of-the-art materials and processes, we ensure robust, lightweight, and efficient UAVs.</li>
          <li><strong>Advanced Technology Integration:</strong> Our drones are equipped with the latest in AI, GPS, imaging systems, and sensors to meet diverse application needs.</li>
          <li><strong>Support for College Projects:</strong> Empowering students by providing free consultancy and expert guidance for their drone-based major projects.</li>
          <li><strong>Sustainability:</strong> We prioritize eco-friendly designs to align with global sustainability goals.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeading}>Our Offerings</h2>
        <div className={styles.offeringsGrid}>
          <div className={styles.offeringCard}>
            <h3>UAV Design Services</h3>
            <p>Concept development, aerodynamics optimization, payload customization, and prototyping.</p>
          </div>
          <div className={styles.offeringCard}>
            <h3>UAV Manufacturing</h3>
            <p>Precision assembly, high-quality materials, and rigorous quality assurance.</p>
          </div>
          <div className={styles.offeringCard}>
            <h3>Software Integration</h3>
            <p>Navigation systems, real-time data processing, and tailored applications.</p>
          </div>
          <div className={styles.offeringCard}>
            <h3>Maintenance and Support</h3>
            <p>Comprehensive after-sales support, routine maintenance, and upgrade services.</p>
          </div>
          <div className={styles.offeringCard}>
            <h3>Student Project Support</h3>
            <p>Free consultancy, one-on-one guidance, and project assistance for college students.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeading}>Applications of Our UAVs</h2>
        <ul className={styles.list}>
          <li>Agriculture: Precision farming, crop health monitoring, and pesticide application.</li>
          <li>Defense & Security: Surveillance, reconnaissance, and emergency response.</li>
          <li>Industrial Inspection: Infrastructure monitoring, oil and gas pipeline inspections, and powerline checks.</li>
          <li>Delivery Services: Efficient and reliable logistics for medical supplies, e-commerce, and more.</li>
          <li>Environmental Monitoring: Wildlife tracking, pollution monitoring, and disaster management.</li>
          <li>Academic Projects: Customized drones for research, innovation, and college-level competitions.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeading}>Why Work With Paradox Innovator?</h2>
        <p className={styles.text}>
          Our multidisciplinary team, client-centric approach, and commitment to
          innovation make us the ideal partner for your UAV needs. We empower
          businesses and students alike to achieve their goals with cutting-edge
          solutions.
        </p>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default UAVPage;
