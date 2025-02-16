import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './shop_page.module.css';

// Custom Arrow Components using module CSS
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${styles.customArrow}`}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${styles.customArrow}`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const ShopPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Create an array of slides, each with an image and a corresponding redirect URL
  const slides = [
    {
      image: 'https://i.ibb.co/rGV8fxXm/Untitled-design-1.png',
      link: 'https://paradoxinnovator.com/shop',
    },
    {
      image: 'https://i.ibb.co/WN1Rx083/Explore-Our-Shop-Page-for-all-you-Electronics-Needs.png',
      link: 'https://paradoxinnovator.com/shop',
    },
    {
      image: 'https://i.ibb.co/3yyw9WQx/Explore-Our-Shop-Page-for-all-you-Electronics-Needs-1.png',
      link: 'https://paradoxinnovator.com//earthing/enquiryhtml.html',
    },
    // Add more slides as needed
  ];

  // A function that redirects the user to the given URL
  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <div style={{ maxHeight: '400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '50px' }}>Our Shop</h1>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slideContainer}>
            <img 
              src={slide.image} 
              alt={`Shop Slide ${index + 1}`} 
              className={styles.slideImage}
              onClick={() => redirectTo(slide.link)}
              style={{ cursor: 'pointer' }} // optional: shows pointer on hover
            />
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShopPage;
