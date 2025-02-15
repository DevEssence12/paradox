import React from 'react';
import styles from './R_D.module.css';
import Navbar from '../../../Navbar/navbar';
import Footer from '../../../Footer/footer';
import { FaThLarge,FaHome, FaPaintBrush , FaUserGraduate, FaLightbulb, FaDraftingCompass, FaIndustry} from "react-icons/fa";

const RDPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.pageContainer}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Innovative Research & Development</h1>
        </section>

        <section className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img 
              src="https://i.ibb.co/yn85RkR3/8671078-removebg-preview.png" 
              alt="R&D Services" 
              className={styles.image}
            />
          </div>
          <div className={styles.imageContent}>
            <h2 className={styles.subheading}>Advanced R&D Solutions</h2>
            <p className={styles.description}>
              At Paradox Innovator, innovation drives everything we do. Our Research & Development (R&D) services are tailored to empower businesses, startups, and academic institutions to explore groundbreaking ideas, solve complex problems, and develop next-generation solutions.
            </p>
            <img 
              src="https://i.ibb.co/RGSH7Cyn/ed-removebg-preview.png" 
              alt="R&D Services" 
              className={styles.bg}
            />
          </div>
          
        </section>
        <img 
              src="https://i.ibb.co/5X3MyzFy/ex-removebg-preview.png" 
              alt="R&D Services" 
              className={styles.bg}
            />
            
        <section className={styles.intro}>
          <p className={styles.description}>
            From conceptualization to prototyping, our team is dedicated to pushing the boundaries of technology and transforming innovative concepts into reality. We also extend our expertise to college students, offering free consultancy and guidance to help them excel in their R&D projects.
          </p>
        </section>
        <img 
              src="https://i.ibb.co/RGSH7Cyn/ed-removebg-preview.png" 
              alt="R&D Services" 
              className={styles.bg}
            />

        <section className={styles.focusAreas}>
          <h2 className={styles.subheading}>Our R&D Focus Areas</h2>
          <div className={styles.areaList}>
            <div className={styles.area}>
              <FaLightbulb style={{ fontSize: "50px", color: "#17e383" }} />
                          
              <h3>Product Innovation</h3>
              <ul>
                <li>Developing new products from the ground up, tailored to industry-specific needs.</li>
                <li>Enhancing existing products with advanced features and capabilities.</li>
                <li>Integrating cutting-edge technologies like AI, IoT, robotics, and more.</li>
              </ul>
            </div>
            <div className={styles.area}>
            <FaDraftingCompass style={{ fontSize: "50px", color: "#e34517" }} />
            
              <h3>Prototyping & Proof of Concept (PoC)</h3>
              <ul>
                <li>Translating ideas into functional prototypes to test feasibility and performance.</li>
                <li>Offering rapid prototyping solutions for quicker iterations and validation.</li>
                <li>Creating PoCs to demonstrate innovative concepts for investors and stakeholders.</li>
              </ul>
            </div>
            <div className={styles.area}>
            <FaIndustry style ={{ fontSize: "50px", color: "#7b4a3b" }} />
            
              <h3>Industry-Specific Solutions</h3>
              <ul>
                <li>Healthcare: Developing smart medical devices and remote monitoring solutions.</li>
                <li>Agriculture: IoT-enabled monitoring systems and automation for precision farming.</li>
                <li>Energy: Smart grid systems, renewable energy integration, and efficiency optimization.</li>
                <li>Education: Interactive learning tools and platforms powered by cutting-edge technologies.</li>
              </ul>
            </div>
            <div className={styles.area}>
            <FaUserGraduate style={{ fontSize: "50px", color: "#7b3b6f" }} />
            
              <h3>Support for Academic R&D</h3>
              <ul>
                <li>Student Consultancy: Free guidance for college students to help them excel in R&D-based academic projects.</li>
                <li>Workshops & Training: Practical sessions to develop skills in emerging technologies.</li>
                <li>Collaboration: Partnering with academic institutions for research and innovation initiatives.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className={styles.technologies}>
          <h2 className={styles.subheading}>Technologies We Specialize In</h2>
          <ul>
            <li>Artificial Intelligence & Machine Learning: AI-driven solutions for intelligent automation and decision-making.</li>
            <li>IoT & Automation: Connected devices and smart systems for industrial and personal applications.</li>
            <li>Robotics: Designing robots for manufacturing, healthcare, and education.</li>
            <li>Embedded Systems: Hardware and software integration for custom solutions.</li>
            <li>Sustainable Technologies: Green energy solutions and eco-friendly product designs.</li>
          </ul>
        </section>
        <img 
              src="https://i.ibb.co/RGSH7Cyn/ed-removebg-preview.png" 
              alt="R&D Services" 
              className={styles.bg}
            />

        <section className={styles.whyChoose}>
          <h2 className={styles.subheading}>Why Choose Paradox Innovator for R&D?</h2>
          <ul>
            <li>Innovation-Centric Approach: Focusing on creating value through cutting-edge research and creative problem-solving.</li>
            <li>Expert Team: A multidisciplinary team with expertise in engineering, technology, and innovation.</li>
            <li>Tailored Solutions: Customizable R&D services to meet the specific needs of businesses and academic institutions.</li>
            <li>Student-Friendly Support: Free consultancy and workshops for students to foster a culture of innovation.</li>
            <li>Rapid Execution: Accelerating the development process with state-of-the-art tools and methodologies.</li>
          </ul>
        </section>

        <section className={styles.process}>
          <h2 className={styles.subheading}>Our Process</h2>
          <ul>
            <li>Ideation: Collaborating to explore and refine innovative ideas.</li>
            <li>Research: Conducting in-depth research to identify challenges and opportunities.</li>
            <li>Development: Designing and prototyping solutions using the latest tools and technologies.</li>
            <li>Validation: Testing and validating prototypes to ensure reliability and performance.</li>
            <li>Implementation: Assisting with deployment and scaling for market or academic success.</li>
          </ul>
        </section>

        <section className={styles.contact}>
          <h2 className={styles.subheading}>Get Involved with Paradox Innovator</h2>
          <p>Ready to innovate and bring your ideas to life? Whether you're a business looking to revolutionize your industry or a student working on your next big project, Paradox Innovator is here to support you.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default RDPage;