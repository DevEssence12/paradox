import React from "react";
import styles from "./location.module.css"; // Make sure to create the corresponding CSS file
import { FaMapMarkerAlt } from "react-icons/fa"; // Using map marker icon from react-icons

import ContactForm from '../../Components/ContactForm/ContactForm'

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
      <ContactForm />
      {/* Title and Description Section */}
      <div className={styles.locationInfo}>
        <h2 className={styles.locationTitle}>
          <FaMapMarkerAlt className={styles.icon} /> Location
        </h2>
        <p className={styles.locationDescription}>
          Located at 8/8 Kalitala Link Road Kalikapur, West Bengal - 700078.
        </p>
        <p className={styles.additionalInfo}>
          Visit us to explore our innovative solutions and collaborations.
        </p>
      </div>

      {/* Map Section */}
      <div className={styles.mapContainer}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.6595266050366!2d88.39703903228674!3d22.507230809085783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271572ac20f19%3A0xd006bf2100e5b881!2s8%2F8%2C%20North%20Purbachal%2C%20Haltu%2C%20Kolkata%2C%20West%20Bengal%20700078!5e0!3m2!1sen!2sin!4v1739785775502!5m2!1sen!2sin"
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
