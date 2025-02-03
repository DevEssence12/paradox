import React from 'react';
import styles from './3D_design.module.css'; // Corrected CSS file path
import Footer from '../../../Footer/footer';
import Navbar from '../../../Navbar/navbar';

const DDesignPage = () => {
  return (
    <div>
      <Navbar />
        
    <div className={styles.pageContainer}>
      {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>3D Design & Manufacturing</h1>
        </section>
      <section className={styles.intro}>
        <p className={styles.description}>
          At Paradox Innovator, we bring your ideas to life with our cutting-edge 3D Design and Manufacturing Services. From concept to creation, we offer a seamless process to transform your innovative ideas into tangible products. Whether you’re a student working on a project, a startup developing a prototype, or an industry professional in need of precision manufacturing, we’ve got you covered.
        </p>
      </section>
      <section className={styles.services}>
        <h1 className={styles.subheading}><u>Our Services</u></h1>
        <div className={styles.serviceList}>
          <div className={styles.service}>
            <h3>3D Modeling & CAD Design</h3>
            <ul>
              <li>Expertly designed 3D models tailored to your specifications.</li>
              <li>Use of industry-standard tools like SolidWorks, AutoCAD, Fusion 360, and Blender.</li>
              <li>Specialization in mechanical, architectural, and product design.</li>
              <li>Support for revisions and optimization to meet functional and aesthetic requirements.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Rapid Prototyping</h3>
            <ul>
              <li>Bring your designs to reality with fast and efficient prototyping.</li>
              <li>Ideal for testing, validation, and iterative improvements.</li>
              <li>Use of advanced 3D printing technologies to minimize time-to-market.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>3D Printing</h3>
            <ul>
              <li>High-quality 3D printing using FDM, SLA, or SLS technologies.</li>
              <li>Support for a variety of materials, including PLA, ABS, resin, and composites.</li>
              <li>Scalable solutions for small and large batch production.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>CNC Machining</h3>
            <ul>
              <li>Precision machining for complex designs.</li>
              <li>Materials include metals, plastics, and composites for robust manufacturing.</li>
              <li>Suitable for creating molds, industrial parts, and intricate components.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Design Optimization for Manufacturing</h3>
            <ul>
              <li>Optimize your designs for cost-effective and efficient manufacturing.</li>
              <li>Ensure structural integrity and material efficiency.</li>
              <li>Provide guidance for mass production readiness.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Consulting Services</h3>
            <ul>
              <li>Free consultancy for college students on 3D design and manufacturing projects.</li>
              <li>Expert advice on material selection, manufacturing techniques, and project feasibility.</li>
              <li>Guidance for academic projects, industry collaborations, and entrepreneurial endeavors.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.industries}>
        <h1 className={styles.subheading}><u>Industries We Serve</u></h1>
        <ul>
          <li>Education: Supporting students and educators in developing academic projects and prototypes.</li>
          <li>Healthcare: Designing custom prosthetics, implants, and medical devices.</li>
          <li>Aerospace: Manufacturing lightweight, durable components for UAVs and other applications.</li>
          <li>Automotive: Prototyping vehicle parts and optimizing designs for performance.</li>
          <li>Consumer Goods: Helping startups and entrepreneurs bring innovative products to market.</li>
        </ul>
      </section>

      <section className={styles.whyChoose}>
        <h1 className={styles.subheading}><u>Why Choose Paradox Innovator?</u>></h1>
        <ul>
          <li>Expertise in Design: Decades of combined experience in 3D modeling and manufacturing.</li>
          <li>State-of-the-Art Equipment: Advanced 3D printers, CNC machines, and software for precision output.</li>
          <li>Customization: Tailored solutions to fit your unique needs and project goals.</li>
          <li>Affordable for Students: Special pricing and free consultancy for college projects.</li>
          <li>Eco-Friendly Practices: Focus on sustainable materials and processes.</li>
        </ul>
      </section>

      <section className={styles.process}>
        <h1 className={styles.subheading}><u>Our Process</u></h1>
        <ol>
          <li>Consultation: Understand your requirements, budget, and timeline.</li>
          <li>Design: Create detailed 3D models based on your inputs.</li>
          <li>Prototype: Produce initial prototypes for review and testing.</li>
          <li>Manufacture: Deliver high-quality, finished products ready for use.</li>
          <li>Support: Provide guidance for implementation or further iterations.</li>
        </ol>
      </section>

      <section className={styles.studentSupport}>
        <h1 className={styles.subheading}><u>Student Support & Collaboration</u></h1>
        <p>
          We take pride in assisting college students with:
          <ul>
            <li>Academic projects involving 3D design and manufacturing.</li>
            <li>Free consultancy to ensure project success.</li>
            <li>Hands-on workshops to develop practical skills in 3D design and printing.</li>
          </ul>
        </p>
      </section>

      <section className={styles.successStories}>
        <h2 className={styles.subheading}>Success Stories</h2>
        <p>
          Discover how our 3D Design and Manufacturing Services have helped:
          <ul>
            <li>Startups launch innovative products in record time.</li>
            <li>Students win awards for academic projects.</li>
            <li>Professionals create efficient, high-performance prototypes.</li>
          </ul>
        </p>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.subheading}>Contact Us</h2>
        <p>
          Turn your ideas into reality with Paradox Innovator’s 3D Design & Manufacturing Services.
        </p>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default DDesignPage;
