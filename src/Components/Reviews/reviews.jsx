import React, { useState, useEffect, useCallback } from "react";
import styles from "./reviews.module.css";

const initialReviews = [
  {
    id: 1,
    name: "Shivam Tiwari",
    image:
      "https://i.postimg.cc/76RMB3TT/Whats-App-Image-2025-02-04-at-23-04-17.jpg",
    text: "Paradox Innovator’s earthing monitoring system is a game-changer for safety!",
    rating: 5,
  },
  {
    id: 2,
    name: "Arohi Mishra",
    image: "https://i.postimg.cc/HnQcQX0m/IMG-20250204-225104.jpg",
    text: "Their Sanchar Sathi application is a breakthrough in power monitoring.",
    rating: 4,
  },
  {
    id: 3,
    name: "Suvansh Singh",
    image:
      "https://i.postimg.cc/yxvJQBGp/Whats-App-Image-2025-02-04-at-23-04-16-2.jpg",
    text: "A perfect blend of creativity and technical excellence!",
    rating: 5,
  },
  {
    id: 4,
    name: "Utarksh",
    image:
      "https://i.postimg.cc/yxvJQBGp/Whats-App-Image-2025-02-04-at-23-04-16-2.jpg",
    text: "Paradox Innovator provides futuristic solutions for real-world challenges.",
    rating: 4,
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : initialReviews;
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newReview, setNewReview] = useState({
    name: "",
    image: "",
    text: "",
    rating: 5,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track submission status

  // Update localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  // Optimized nextReview function
  const nextReview = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    const interval = setInterval(nextReview, 3000);
    return () => clearInterval(interval);
  }, [nextReview]);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewReview((prevReview) => ({
          ...prevReview,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to add a new review
  const addReview = () => {
    if (newReview.name.trim() && newReview.text.trim()) {
      const updatedReviews = [
        ...reviews,
        { ...newReview, id: reviews.length + 1 },
      ];
      setReviews(updatedReviews);
      setNewReview({ name: "", image: "", text: "", rating: 5 });
      setSubmitted(true); // Show success message

      setTimeout(() => {
        setSubmitted(false);
        setShowPopup(false); // Close popup after delay
      }, 2000); // 2-second delay
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>People Love Us ❤️</h2>

      <div className={styles.carousel}>
        <button
          className={styles.arrow}
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? reviews.length - 1 : prev - 1
            )
          }
        >
          ⬅
        </button>

        <div className={styles.reviewCard}>
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className={styles.reviewImage}
          />
          <div className={styles.reviewRating}>
            {"⭐".repeat(reviews[currentIndex].rating)}
          </div>
          <div className={styles.reviewName}>{reviews[currentIndex].name}</div>
          <div className={styles.reviewText}>{reviews[currentIndex].text}</div>
        </div>

        <button className={styles.arrow} onClick={nextReview}>
          ➡
        </button>
      </div>

      <button
        className={styles.addReviewButton}
        onClick={() => setShowPopup(true)}
      >
        Add Review
      </button>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            {submitted ? (
              <div className={styles.successMessage}>
                <img
                  src="https://i.ibb.co/27Pq1d2r/green-double-circle-check-mark.png"
                  alt="Success"
                  className={styles.tickImage}
                />
                <p>Submitted Successfully!</p>
                <button
                  className={styles.closeButton}
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3>Add Your Review</h3>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={styles.inputField}
                  value={newReview.name}
                  required
                  onChange={(e) =>
                    setNewReview({ ...newReview, name: e.target.value })
                  }
                />

                <textarea
                  placeholder="Your Review"
                  className={styles.textareaField}
                  value={newReview.text}
                  required
                  onChange={(e) =>
                    setNewReview({ ...newReview, text: e.target.value })
                  }
                />
                <select
                  className={styles.selectField}
                  value={newReview.rating}
                  onChange={(e) =>
                    setNewReview({
                      ...newReview,
                      rating: Number(e.target.value),
                    })
                  }
                >
                  {[5, 4, 3, 2, 1].map((num) => (
                    <option key={num} value={num}>
                      {num} Stars
                    </option>
                  ))}
                </select>
                <input
                  type="file"
                  accept="image/*"
                  required
                  className={styles.inputField}
                  onChange={handleImageUpload}
                />
                {newReview.image && (
                  <img
                    src={newReview.image}
                    alt="Preview"
                    className={styles.previewImage}
                  />
                )}
                <br />
                <div className={styles.buttons}>
                  <button
                    className={styles.submitButton}
                    onClick={addReview}
                  >
                    Submit Review
                  </button>
                  <button
                    className={styles.closeButton}
                    onClick={() => setShowPopup(false)}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
