import React from 'react';
import styles from './footer.module.css';
import { FaGithub, FaYoutube, FaEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#vision' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Home Automation' },
      { name: 'Research Projects'},
      { name: 'IOT and Automations'},
      { name: 'Help in college Projects'},
    ],
    connect: [
      { name: 'LinkedIn', href: '#linkedin', icon: '󰌻' },
      { name: 'Twitter', href: '#twitter', icon: '󰕊' },
      { name: 'GitHub', href: '#github', icon: '󰊤' },
      { name: 'Email', href: 'mailto:contact@example.com', icon: '󰇮' }
    ]
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo and Description Section */}
        <div className={styles.brandSection}>
          <div className={styles.logoContainer}>
            <img
              src="https://i.ibb.co/PhpPbZH/building-future-2-Photoroom.png"
              alt="Paradox Innovator"
              className={styles.logo}
            />
          </div>
          <p className={styles.brandDescription}>
            Building innovative solutions for tomorrow's challenges. We combine cutting-edge 
            technology with forward-thinking approaches to create lasting impact.
          </p>
        </div>

        {/* Links Sections */}
        <div className={styles.linksContainer}>
          {/* Company Links */}
          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>Company</h3>
            <ul className={styles.linkList}>
                <li >
                  <a href="/about" className={styles.link}>About Us
                  </a>
                </li>                
                <li >
                  <a href="/services" className={styles.link}>Services
                  </a>
                </li>
                <li >
                  <a href="/careers" className={styles.link}>Careers
                  </a>
                </li>
                <li >
                  <a href="/contact" className={styles.link}>Contact
                  </a>
                </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>Services</h3>
            <ul className={styles.linkList}>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>Connect</h3>
            <ul className={styles.socialLinks}>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/paradox-innovator/"
                    className={styles.socialLink}
                  >
                    <span className={styles.icon}>    <FaLinkedinIn /> 
                    </span>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://youtube.com/@paradoxinnovator?si=6n7EEN_guo3QBTPz"
                    className={styles.socialLink}
                  >
                    <span className={styles.icon}>    <FaYoutube /> 
                    </span>
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/paradoxinnovator?igsh=MTRveTg2ZmR4N2VwMg=="
                    className={styles.socialLink}
                  >
                    <span className={styles.icon}>    <FaInstagram /> 
                    </span>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.github.com/Paradox-Innovator-Group"
                    className={styles.socialLink}
                  >
                    <span className={styles.icon}>    <FaGithub /> 
                    </span>
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info.paradoxinnovator@gmail.com"
                    className={styles.socialLink}
                  >
                    <span className={styles.icon}>    <FaEnvelope /> 
                    </span>
                    <span>Gmail</span>
                  </a>
                </li>

            </ul>
          </div>
        </div>
        
      </div>
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
            © {currentYear} Paradox Innovator. All rights reserved.
            <br />
            <a className={styles.privacy} href="/privacy">Privacy Policy</a>
        </p>
      </div>


      {/* Bottom Bar */}
      {/* <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            © {currentYear} Paradox Innovator. All rights reserved.
          </p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;