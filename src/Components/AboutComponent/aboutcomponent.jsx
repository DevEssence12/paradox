import React from "react";
import styles from "./aboutcomponent.module.css";


function goAbout(){
    window.location.href = '/about';
  }


const AboutComponent = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={`${styles.content} ${styles.fadeInLeft}`}>
        <h3 className={styles.subHeading}>ABOUT US</h3>
        <h2 className={styles.heading}>
          Let's Make a Better World <br /> With Technology
        </h2>
        <p className={styles.description}>
          At Paradox Innovator, we provide a comprehensive range of
          services tailored to your needs, including Home Automation, IoT and
          Automation, and College Project Assistance. Our expertise spans
          domains like PCB Design, Lab Setups, 3D Design, and Custom College
          Projects.
        </p>
        <p className={styles.description}>
          We specialize in delivering cutting-edge solutions that drive
          innovation and empower individuals and organizations to thrive in the
          digital era.
        </p>
        <button className={`${styles.readMoreButton} ${styles.scaleOnHover}`} onClick={goAbout}>
          Read More
        </button>
      </div>
      <div className={`${styles.imageContainer} ${styles.fadeInRight}`}>
        <img
          src="https://i.postimg.cc/Njm0bpqk/freepik-upload-95889.png"
          alt="About Us"
          className={`${styles.aboutImage}`}
        />
      </div>
    </div>
  );
};

export default AboutComponent;
