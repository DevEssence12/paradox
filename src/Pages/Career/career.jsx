import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './career.module.css';
import Footer from '../../Components/Footer/footer';
import Navbar from '../../Components/Navbar/navbar';

const roleDetails = {
  'Hardware Engineer': [
    'Bachelors degree in Electrical or Electronics Engineering.',
    'Experience with PCB design and embedded systems.',
    'Strong problem-solving skills and attention to detail.',
  ],
  'Software Developer': [
    'Proficiency in JavaScript, React, or similar frameworks.',
    'Experience with RESTful APIs and microservices.',
    'Knowledge of software development best practices.',
  ],
  'Project Manager': [
    'Experience managing cross-functional teams.',
    'Excellent communication and leadership skills.',
    'Ability to manage timelines and budgets effectively.',
  ],
  'Marketing Specialist': [
    'Experience in public relations, social media, or marketing.',
    'Strong written and verbal communication skills.',
    'Creative mindset with the ability to work under pressure.',
  ],
  'Freelance Image Processing Specialist': [
    'Role Type: Freelance',
    'Location: Remote',
    'Job Description: Paradox Innovator is looking for a skilled Image Processing Specialist to develop a robust algorithm for determining the diameter of jute fibers from magnified images. This role involves leveraging machine learning and computer vision techniques to create an accurate and efficient measurement solution.',
    'Key Responsibilities: Design and implement an algorithm for precise diameter estimation of jute fibers. Utilize Python and machine learning techniques for image analysis. Apply computer vision and image processing methodologies to improve measurement accuracy. Optimize and validate the algorithm for real-world application.',
    'Skills & Qualifications: Proficiency in Python and related libraries (OpenCV, NumPy, Scikit-learn, TensorFlow/PyTorch). Strong background in machine learning and computer vision. Hands-on experience in image processing techniques and feature extraction. Ability to optimize algorithms for speed and accuracy.',
    'Why Join Us: Work on an innovative real-world problem with a direct impact. Flexible freelance role with the freedom to work remotely. Opportunity to collaborate with a team passionate about technology and innovation.'
  ],
};

const CareersPage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Position: '',
    Resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

const roles = ['Freelance Image Processing Specialist',];

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append('Name', formData.Name);
    data.append('Email', formData.Email);
    data.append('Position', formData.Position);
    data.append('Resume', formData.Resume);

    try {
      const response = await fetch('https://formspree.io/f/xjkgpoeo', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Submitted successfully. We will update you for upcoming or relevant roles.');
        window.location.href = 'https://paradoxinnovator.com/';
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <section className={styles.heading}>
          <div className={styles.heroContent}>
            <img src="https://i.ibb.co/Cp37HKcb/vc.png" alt="Paradox Innovator" className={styles.heroImage} />
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
              At<strong> Paradox Innovator</strong> , we don’t just create technology—we engineer solutions that redefine industries. Our team thrives on curiosity, creativity, and a relentless drive to solve real-world challenges. Whether it’s pioneering groundbreaking hardware innovations or delivering robust software solutions, we are committed to shaping a smarter, safer, and more efficient industrial future. When you join us, you become part of a dynamic ecosystem where your ideas are valued, your skills are nurtured, and your contributions have a tangible impact. If you have the passion to innovate and the determination to make a difference, Paradox Innovator is the place for you. Come, be a part of a legacy in the making—where innovation knows no bounds.
              </p>
            </div>
          </div>
        </section>

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
                        <ul>
                          {roleDetails[role].map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <div className={styles.dropdownContent}>
                    <p>{roleDetails[role]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Join Paradox Innovator?</h2>
          <div className={styles.grid}>
            {[{
              title: 'Innovation & Impact',
              desc: 'Work on groundbreaking industrial projects that make a difference.',
            }, {
              title: 'Collaborative Team',
              desc: 'Join a team that values creativity, teamwork, and problem-solving.',
            }, {
              title: 'Growth Opportunities',
              desc: 'Opportunities for learning, growth, and industry exposure.',
            }].map((item) => (
              <div key={item.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Can't find the role that perfectly matches your skills?</h2>
          <h3 style={{textAlign:"center"}}>No worries! Upload your resume, and our team will review it for future opportunities.</h3>
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
              <input
                type="text"
                id="Name"
                placeholder="Full Name"
                className={styles.input}
                value={formData.Name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                id="Email"
                placeholder="Email Address"
                className={styles.input}
                value={formData.Email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                id="Position"
                placeholder="Position Applying For"
                className={styles.input}
                value={formData.Position}
                onChange={handleInputChange}
                required
              />
              <input
                type="file"
                id="Resume"
                className={styles.input}
                accept=".pdf,.doc,.docx"
                onChange={handleInputChange}
                required
              />
              <button type="submit" className={styles.button} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default CareersPage;
