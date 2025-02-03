import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./servicecomponent.module.css";
import { 
  FaRobot, FaDatabase, FaTools, 
  FaRegLightbulb, FaLayerGroup, 
  FaLaptop, FaCube 
} from "react-icons/fa";

const services = [
  {
    title: "UAV Design & Manufacturing Services",
    description: "We specialize in delivering cutting-edge Unmanned Aerial Vehicle (UAV) design and manufacturing services.",
    icon: <FaRobot />,
    color: "#FF6B6B",
    path: "/uav-design",
  },
  {
    title: "PCB Designing Services",
    description: "We excel in delivering high-quality PCB design solutions tailored to meet the specific needs of industries, startups, and college students.",
    icon: <FaRegLightbulb />,
    color: "#4ECDC4",
    path: "/pcb-design",
  },
  {
    title: "IoT and Automation Services",
    description: "We specialize in delivering comprehensive IoT (Internet of Things) and Automation solutions that bridge the gap between innovation and efficiency.",
    icon: <FaTools />,
    color: "#45B7D1",
    path: "/iot-automation",
  },
  {
    title: "Innovative Research & Development (R&D)",
    description: "Our Research & Development (R&D) services are tailored to explore groundbreaking ideas, solve complex problems, and develop next-generation solutions.",
    icon: <FaDatabase />,
    color: "#FDCB6E",
    path: "/research-development",
  },
  {
    title: "Workshops",
    description: "We believe in empowering individuals and teams with the knowledge and skills they need to excel in today's rapidly evolving technological landscape.",
    icon: <FaLayerGroup />,
    color: "#6C5CE7",
    path: "/workshops",
  },
  {
    title: "Lab Setup Services",
    description: "Custom lab setups for academic and industrial purposes.",
    icon: <FaLaptop />,
    color: "#A8E6CF",
    path: "/lab-setup",
  },
  {
    title: "3D Design & Manufacturing",
    description: "Create stunning 3D models and designs for various applications.",
    icon: <FaCube />,
    color: "#FF8A5B",
    path: "/3d-design",
  },
];

const ServicesComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  
  const handleCardClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.heading}>Our Services</h2>
      <p className={styles.subHeading}>
        Explore our wide range of services designed to cater to your every need.
      </p>

      <div className={styles.servicesScrollContainer}>
        <div ref={scrollRef} className={styles.servicesInnerContainer}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard} ${styles[`animateDelay${index % 5}`]}`}
              style={{
                borderLeftColor: service.color,
                boxShadow:
                  activeIndex === index
                    ? `0 10px 20px rgba(0,0,0,0.1), 0 0 15px ${service.color}50`
                    : "none",
              }}
              onClick={() => {
                setActiveIndex(index);
                handleCardClick(service.path); // Call the redirection function
              }}
            >
              <div
                className={styles.serviceIcon}
                style={{ color: service.color }}
              >
                {service.icon}
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.navigationControls}>
        <button onClick={() => handleScroll("prev")} className={styles.navButton}>
          ← Previous
        </button>
        <button onClick={() => handleScroll("next")} className={styles.navButton}>
          Next →
        </button>
      </div>
      <button onClick={() => navigate("/services")} className={styles.exploreButton}>
        Explore All Services
      </button>
    </div>
  );
};

export default ServicesComponent;
