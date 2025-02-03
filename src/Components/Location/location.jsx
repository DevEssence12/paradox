import React from "react";
import styles from "./location.module.css"; // Make sure to create the corresponding CSS file
import { FaMapMarkerAlt } from "react-icons/fa"; // Using map marker icon from react-icons

const Location = () => {
  return (
    <div className={styles.locationContainer}>
      {/* Header with Banner Image */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Contact Us</h1>
        <p className={styles.headerSubtitle}>
          We're here to help! Find our location below.
        </p>
      </header>

      {/* Title and Description Section */}
      <div className={styles.locationInfo}>
        <h2 className={styles.locationTitle}>
          <FaMapMarkerAlt className={styles.icon} /> Location
        </h2>
        <p className={styles.locationDescription}>
          Located at Room No. 602, Heritage Institute of Technology, Kolkata.
        </p>
        <p className={styles.additionalInfo}>
          Visit us to explore our innovative solutions and collaborations.
        </p>
      </div>

      {/* Map Section */}
      <div className={styles.mapContainer}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.24450288334!2d88.4187955!3d22.5172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f58b9feec5%3A0x30f8067b73c45d8!2sHeritage+Institute+of+Technology%2C+Kolkata!5e0!3m2!1sen!2sin!4v1675492033344!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
