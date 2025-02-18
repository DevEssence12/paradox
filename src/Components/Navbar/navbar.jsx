import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setIsOpen(false);
    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdownOpen((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      dropdown: [
        { title: "UAV Design & Manufacturing Services", path: "/uav-design" },
        { title: "PCB Designing Services", path: "/pcb-design" },
        { title: "IoT and Automation Services", path: "/iot-automation" },
        { title: "Innovative Research & Development (R&D)", path: "/research-development" },
        { title: "Workshops", path: "/workshops" },
        { title: "Lab Setup Services", path: "/lab-setup" },
        { title: "3D Design & Manufacturing", path: "/3d-design" },
      ],
    },
    { name: 'Blogs', path: '/Blog' },
    
    { 
      name: 'Projects', 
      dropdown:[
        {title: "Earthing Monitoring System", path: "/earthing/final.html" },
        {title: "DIY Washing Machine", path: "/earth" },
        {title: "Rescuer", path: "/earth" },
        {title: "Transport Guards", path: "/earth" },
        {title: "PID Line Follower", path: "/earth" },
        {title: "Smart Toilets", path: "/earth" },
        {title: "Non-invasive Moisture Meter", path: "/earth" },
        {title: "Smart Locker", path: "/earth" },
      ]
    },
    { name: 'SHOP', path: '/shop'    },
    { name: 'Contact', path: '/contact' },
  ];

  function goHome() {
    window.location.href = '/';
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navContainer">
        <div className="logoContainer">
          <img
            onClick={goHome}
            src="https://i.ibb.co/x3x4byM/logo-removebg-preview.png"
            alt="Paradox Innovator"
            className="logo"
          />
        </div>

        <div className="navLinks">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="navDropdown"
                onMouseEnter={() => setMobileDropdownOpen(item.name)}
                onMouseLeave={() => setMobileDropdownOpen(null)}
              >
                <span className="navLink">
                  {item.name}
                  <span className="dropdownIcon">▼</span>
                </span>
                <div
                  className={`dropdownMenu ${
                    mobileDropdownOpen === item.name ? 'dropdownOpen' : ''
                  }`}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.path}
                      className="dropdownItem"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.name} href={item.path} className="navLink">
                {item.name}
              </a>
            )
          )}
        </div>

        <button
          className={`menuButton ${isOpen ? 'menuOpen' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="menuIcon"></span>
        </button>

        <div
          className={`mobileMenu ${isOpen ? 'mobileMenuOpen' : ''}`}
          aria-hidden={!isOpen}
        >
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  className="mobileNavLink"
                  onClick={() => toggleMobileDropdown(item.name)}
                >
                  {item.name}
                  <span className="dropdownIcon">▼</span>
                </button>
                {mobileDropdownOpen === item.name && (
                  <div className="mobileDropdown">
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.path}
                        className="mobileNavLink"
                        onClick={handleMobileNavClick}
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.path}
                className="mobileNavLink"
                onClick={handleMobileNavClick}
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
  
};


export default Navbar;