import React from 'react';
import styles from './WorkshopPage.module.css';
import Navbar from '../../../Navbar/navbar';
import Footer from '../../../Footer/footer';

const WorkshopsPage = () => {
  return (
    <div>
      <Navbar />
    <div className={styles.pageContainer}>
      {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Workshops</h1>
        </section>
      <section className={styles.intro}>
        <p className={styles.description}>
          At Paradox Innovator, we believe in empowering individuals and teams with the knowledge and skills they need to excel in today’s rapidly evolving technological landscape. Our workshops are designed to provide hands-on learning experiences, combining theoretical knowledge with practical applications. Whether you’re an engineering student or a tech enthusiast, our workshops cater to diverse audiences, helping them explore cutting-edge technologies and foster innovation.
        </p>
      </section>

      <section className={styles.workshopOfferings}>
        <h2 className={styles.subheading}>Our Workshop Offerings</h2>
        <div className={styles.workshopList}>
          <div className={styles.workshop}>
            <h3>IoT and Automation</h3>
            <ul>
              <li>Learn the fundamentals of IoT and build your own connected devices.</li>
              <li>Practical sessions on using platforms like Arduino, ESP32, and Raspberry Pi.</li>
              <li>Insights into cloud integration, data monitoring, and remote control systems.</li>
            </ul>
          </div>
          <div className={styles.workshop}>
            <h3>UAV Design and Manufacturing</h3>
            <ul>
              <li>Basics of UAV technology, including design, components, and flight mechanics.</li>
              <li>Hands-on training in building and assembling drones.</li>
              <li>Guidance on regulatory compliance and safety protocols.</li>
            </ul>
          </div>
          <div className={styles.workshop}>
            <h3>PCB Designing and Complex Routing</h3>
            <ul>
              <li>Introduction to PCB design tools like KiCAD, Altium, or Eagle.</li>
              <li>Master the art of schematic design and routing techniques.</li>
              <li>Tips for creating compact and efficient PCB layouts for advanced projects.</li>
            </ul>
          </div>
          <div className={styles.workshop}>
            <h3>Embedded Systems Development</h3>
            <ul>
              <li>Learn to program microcontrollers for real-world applications.</li>
              <li>Hands-on sessions on interfacing sensors, actuators, and communication modules.</li>
              <li>Explore protocols like UART, SPI, I2C, and CAN.</li>
            </ul>
          </div>
          <div className={styles.workshop}>
            <h3>Robotics and Mechatronics</h3>
            <ul>
              <li>Understand the fundamentals of robotics and mechatronic systems.</li>
              <li>Build and program robots for specific tasks like navigation and object handling.</li>
              <li>Explore sensors, actuators, and motor control systems.</li>
            </ul>
          </div>
          <div className={styles.workshop}>
            <h3>Artificial Intelligence and Machine Learning</h3>
            <ul>
              <li>Get introduced to AI concepts and machine learning algorithms.</li>
              <li>Practical projects using Python libraries like TensorFlow and Scikit-learn.</li>
              <li>Build your own AI models for real-world applications.</li>
            </ul>
          </div>
          <div className={styles.workshop}>
            <h3>Sustainable Technology Development</h3>
            <ul>
              <li>Workshops on renewable energy systems like solar and wind.</li>
              <li>Smart energy management and eco-friendly innovations.</li>
              <li>Design and implementation of green technology solutions.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.studentApproach}>
        <h2 className={styles.subheading}>Student-Centric Approach</h2>
        <ul>
          <li>Affordable Learning: Discounted or free workshops for students.</li>
          <li>Project Support: Aligning workshops with the latest industry trends for academic projects.</li>
          <li>Certification: Receive a certificate of participation to boost your credentials.</li>
        </ul>
      </section>

      <section className={styles.whyAttend}>
        <h2 className={styles.subheading}>Why Attend Our Workshops?</h2>
        <ul>
          <li>Practical Learning: Hands-on experience with the latest tools and technologies.</li>
          <li>Expert Guidance: Learn from industry professionals and experienced mentors.</li>
          <li>Tailored Content: Workshops for beginners, intermediates, and advanced learners.</li>
          <li>Real-World Projects: Work on live projects to apply your knowledge.</li>
          <li>Networking: Connect with like-minded individuals and professionals.</li>
        </ul>
      </section>

      <section className={styles.upcomingWorkshops}>
        <h2 className={styles.subheading}>Upcoming Workshops</h2>
        <p>Stay tuned for our schedule of upcoming workshops! To register or inquire, reach out to us.</p>
      </section>

      <section className={styles.hostWorkshop}>
        <h2 className={styles.subheading}>Host a Workshop with Us</h2>
        <p>Want to bring a Paradox Innovator workshop to your institution or organization? We offer customizable programs designed to meet your specific needs.</p>
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

export default WorkshopsPage;
