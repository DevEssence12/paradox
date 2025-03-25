import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import './NotFound.css';
import { div } from 'framer-motion/client';
import Navbar from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';

const NotFound = () => {
  return (
    <div>
        <Navbar />
    <div className="not-found-container">
      <div className="content-wrapper">
        <div className="number-container">
          <h1 className="number">4</h1>
          <div className="circle"></div>
          <h1 className="number">4</h1>
        </div>
        
        <h2 className="message">
          The page you are looking for
        </h2>
        <p className="message">
          can not be found
        </p>

        <Link to="/" className="home-button">
          <Home className="home-icon" />
          Return to Homepage
        </Link>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default NotFound;