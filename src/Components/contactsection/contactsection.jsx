import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./contactsection.module.css";

const ConnectSection = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate("/contact"); // Adjust the route to match your contact page
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>
        Ready For Awesome Project With Us?
      </h1>
      <p className={styles.subHeading}>
        Let's Talk About Your Project.
      </p>
      <button className={styles.connectButton} onClick={handleConnectClick}>
        Contact Us
      </button>
    </section>
  );
};

export default ConnectSection;
