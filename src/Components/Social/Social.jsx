import React from 'react';
import styles from './Social.module.css';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const SocialIcons = () => {
  const handleWhatsappClick = () => {
    window.open('https://wa.me/7667492418', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:7667492418'; // Corrected string
  };

  return (
    <div className={styles.iconContainer}>
      <div className={styles.socialIcons}>
        <button className={styles.whatsappIcon} onClick={handleWhatsappClick}>
          <FaWhatsapp size={24} />
        </button>
        <button className={styles.phoneIcon} onClick={handlePhoneClick}>
          <FaPhone size={24} />
        </button>
      </div>
    </div>
  );
};

export default SocialIcons;
