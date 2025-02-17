import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './career.module.css';
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";

// Helper functions to render key requirements for each role
const renderHardwareEngineerDetails = () => {
  return (
    <div>
      <p>
        <strong>Key Requirements:</strong>
      </p>
      <ul>
        <li>Bachelor's degree in Electrical or Electronics Engineering.</li>
        <li>Experience with PCB design and embedded systems.</li>
        <li>Strong problem-solving skills and attention to detail.</li>
      </ul>
    </div>
  );
};

const renderSoftwareDeveloperDetails = () => {
  return (
    <div>
      <p>
        <strong>Key Requirements:</strong>
      </p>
      <ul>
        <li>Proficiency in JavaScript, React, or similar frameworks.</li>
        <li>Experience with RESTful APIs and microservices.</li>
        <li>Knowledge of software development best practices.</li>
      </ul>
    </div>
  );
};

const renderProjectManagerDetails = () => {
  return (
    <div>
      <p>
        <strong>Key Requirements:</strong>
      </p>
      <ul>
        <li>Experience managing cross-functional teams.</li>
        <li>Excellent communication and leadership skills.</li>
        <li>Ability to manage timelines and budgets effectively.</li>
      </ul>
    </div>
  );
};

const renderPRMarketingSpecialistDetails = () => {
  return (
    <div>
      <p>
        <strong>Key Requirements:</strong>
      </p>
      <ul>
        <li>Experience in public relations, social media, or marketing.</li>
        <li>Strong written and verbal communication skills.</li>
        <li>Creative mindset with the ability to work under pressure.</li>
      </ul>
    </div>
  );
};

const renderNoPositionDetails = () => {
  return (
    <div>
      <p>
        <strong>
          We're all set for now, but the future is full of possibilities—stay tuned for upcoming opportunities!
        </strong>
      </p>
    </div>
  );
};

// A function to return the details component based on the role
const renderRoleDetails = (role) => {
  switch (role) {
    case 'Hardware Engineer':
      return renderHardwareEngineerDetails();
    case 'Software Developer':
      return renderSoftwareDeveloperDetails();
    case 'Project Manager':
      return renderProjectManagerDetails();
    case 'Marketing Specialist':
      return renderPRMarketingSpecialistDetails();
    case 'No Position':
      return renderNoPositionDetails();
    default:
      return null;
  }
};

const CareersPage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const roles = [
    // Uncomment and add roles as needed
    // 'Hardware Engineer',
    // 'Software Developer',
    // 'Project Manager',
    // 'Marketing Specialist',
    'No Position'
  ];

  // Toggle dropdown only if the role is not "No Position"
  const toggleDropdown = (index) => {
    if (roles[index] !== 'No Position') {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  return (
    <div>
      <Navbar />
      <section className={styles.hero}>
        <h1 className={styles.title}>Career</h1>
      </section>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heading}>
          <div className={styles.heroContent}>
            <img
              src="https://i.ibb.co/Cp37HKcb/vc.png"
              alt="Paradox Innovator"
              className={styles.heroImage}
            />
            <div className={styles.textContainer}>
              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Join Paradox Innovator
              </motion.h1>
              <p className={styles.heroSubtitle}>
                <strong>
                  At Paradox Innovator, we don’t just create technology—we engineer solutions that redefine industries.
                </strong>
                Our team thrives on curiosity, creativity, and a relentless drive to solve real-world challenges. Whether it’s pioneering groundbreaking hardware innovations or delivering robust software solutions, we are committed to shaping a smarter, safer, and more efficient industrial future. When you join us, you become part of a dynamic ecosystem where your ideas are valued, your skills are nurtured, and your contributions have a tangible impact. If you have the passion to innovate and the determination to make a difference, Paradox Innovator is the place for you. Come, be a part of a legacy in the making—where innovation knows no bounds.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Open Positions</h2>
          <div className={styles.grid}>
            {roles.map((role, index) => (
              <div key={role} className={styles.dropdownContainer}>
                {role !== 'No Position' ? (
                  <>
                    <button
                      className={styles.dropdownButton}
                      onClick={() => toggleDropdown(index)}
                    >
                      {role}
                    </button>
                    {activeDropdown === index && (
                      <div className={styles.dropdownContent}>
                        <p className={styles.cardDescription}>
                          We are looking for a talented {role} to join our innovative team. If you have a passion for technology and problem-solving, apply now!
                        </p>
                        {renderRoleDetails(role)}
                        <button className={styles.button}>Apply Now</button>
                      </div>
                    )}
                  </>
                ) : (
                  // If "No Position", simply show the details text
                  <div className={styles.dropdownContent}>
                    {renderRoleDetails(role)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Why Join Us */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Join Paradox Innovator?</h2>
          <div className={styles.grid}>
            {[
              {
                title: 'Innovation & Impact',
                desc: 'Work on groundbreaking industrial projects that make a difference.',
              },
              {
                title: 'Collaborative Team',
                desc: 'Join a team that values creativity, teamwork, and problem-solving.',
              },
              {
                title: 'Growth Opportunities',
                desc: 'Opportunities for learning, growth, and industry exposure.',
              },
            ].map((item) => (
              <div key={item.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Can't find the role that perfectly matches your skills?</h2>
          <h3 style={{textAlign:"center"}}>No worries! Upload your resume, and our team will review it for future opportunities.</h3>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <input type="text" placeholder="Full Name" className={styles.input} />
              <input type="email" placeholder="Email Address" className={styles.input} />
              <input type="text" placeholder="Position Applying For" className={styles.input} />
              <textarea placeholder="Tell us about yourself" className={styles.textarea}></textarea>
              <button className={styles.button}>Submit Application</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default CareersPage;
