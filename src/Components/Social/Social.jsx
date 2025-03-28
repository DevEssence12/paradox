import React from 'react';
import styles from './Social.module.css';

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
          {/* <FaWhatsapp size={24} /> */}

          <img src="https://i.postimg.cc/sDy17fWj/whatsapp-logo-7-removebg-preview.png" width="50px" class="wpftbtn" alt="Whatsapp"></img>
        </button>
        <button className={styles.phoneIcon} onClick={handlePhoneClick}>
          {/* <FaPhone size={24} /> */}
          <img src="https://i.ibb.co/FqqXrf95/phone-call.png" width="50px" class="wpftbtn" alt="Whatsapp"></img>
        
        </button>
      </div>
    </div>
  );
};

export default SocialIcons;
