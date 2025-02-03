import React, { useState, useRef } from "react";
import styles from "./services.module.css";
import { 
  FaRobot, FaDatabase, FaTools, 
  FaRegLightbulb, FaLayerGroup, 
  FaLaptop, FaCube 
} from "react-icons/fa";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";

const services = [
  {
    title: "UAV Design & Manufacturing",
    description: "Innovative UAV solutions pushing technological boundaries.",
    icon: <FaRobot />,
    color: "#FF6B6B",
    path: "/uav-design",
  },
  {
    title: "PCB Designing",
    description: "Precision engineering for cutting-edge electronic solutions.",
    icon: <FaRegLightbulb />,
    color: "#4ECDC4",
    path: "/pcb-design",
  },
  {
    title: "IoT & Automation",
    description: "Transforming complexity into seamless, intelligent systems.",
    icon: <FaTools />,
    color: "#45B7D1",
    path: "/iot-automation",
  },
  {
    title: "Research & Development",
    description: "Pioneering innovation through strategic technological exploration.",
    icon: <FaDatabase />,
    color: "#FDCB6E",
    path: "/research-development",
  },
  {
    title: "Workshops & Training",
    description: "Empowering minds through hands-on technological education.",
    icon: <FaLayerGroup />,
    color: "#6C5CE7",
    path: "/workshops",
  },
  {
    title: "Lab Setup Services",
    description: "Custom environments for breakthrough technological research.",
    icon: <FaLaptop />,
    color: "#A8E6CF",
    path: "/lab-setup",
  },
  {
    title: "3D Design & Manufacturing",
    description: "Transforming imagination into tangible technological realities.",
    icon: <FaCube />,
    color: "#FF8A5B",
    path: "/3d-design",
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Width of service card + margin
      scrollRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.servicesPage}>
      <Navbar />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Our Services</h1>
          <p>Paradox Innovator - Pioneering Tomorrow's Technology, Today</p>
        </header>

        <div className={styles.servicesContainer}>
          <div 
            ref={scrollRef} 
            className={styles.servicesScrollContainer}
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className={styles.serviceCard}
                style={{ 
                  borderLeftColor: service.color,
                  boxShadow: activeIndex === index 
                    ? `0 10px 20px rgba(0,0,0,0.1), 0 0 15px ${service.color}50` 
                    : 'none'
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div 
                  className={styles.serviceIcon} 
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.path} className={styles.learnMore}>
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.navigationControls}>
            <button 
              onClick={() => handleScroll('prev')}
              className={styles.navButton}
            >
              ← Previous
            </button>
            <button 
              onClick={() => handleScroll('next')}
              className={styles.navButton}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;