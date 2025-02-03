import React, { useState, useEffect } from "react";
import styles from "./reviews.module.css";

const reviews = [
  {
    text: "This system has greatly improved our safety standards!",
    author: "Adarsh Singh",
  },
  {
    text: "I love the real-time monitoring features!",
    author: "Priya Sharma",
  },
  {
    text: "A user-friendly interface that makes monitoring easy.",
    author: "Ravi Kumar",
  },
  {
    text: "The automation features have saved us so much time and effort!",
    author: "Neha Verma",
  },
  {
    text: "Seamless integration and top-notch performance. Highly recommend!",
    author: "Aman Gupta",
  },
  {
    text: "An innovative solution that truly understands modern needs.",
    author: "Shruti Patel",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 2000); // 2 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.heading}>Customer's Reviews</h2>
      <div className={styles.carousel}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`${styles.reviewCard} ${
              index === currentIndex ? styles.active : styles.inactive
            }`}
          >
            <p className={styles.text}>{`"${review.text}"`}</p>
            <h3 className={styles.name}>{`- ${review.author}`}</h3>
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? reviews.length - 1 : currentIndex - 1
            )
          }
        >
          &#8592;
        </button>
        <button
          className={styles.arrow}
          onClick={() =>
            setCurrentIndex((currentIndex + 1) % reviews.length)
          }
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Reviews;
