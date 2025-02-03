import React from "react";
import styles from "./acievements.module.css";

const Achievements = () => {
  const achievements = [
    {
      title: "Hack Heritage 2024",
      description:
        "Winner among 250+ teams of Hack Heritage, an internal Hackathon for SIH24.",
      image: "https://i.ibb.co/TTQH56j/Whats-App-Image-2025-01-10-at-19-14-13.jpg",
    },
    {
      title: "NIRMITI 2024",
      description:
        "Winner among 60+ startups among the city, Tier 2 TRL 4 Service products.",
      image: "https://i.ibb.co/51h1MKq/Whats-App-Image-2025-01-10-at-19-14-13.jpg",
    },
    {
      title: "Joint winner - SIH 2024 (Hardware edition)",
      description:
        "Victory at SIH 2024 - MIT ADT university, Pune.",
      image: "https://i.ibb.co/M6txpxv/Whats-App-Image-2025-01-10-at-19-14-14.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.achievements}>
        <h1 className={styles.title}>Our Achievements</h1>
        <div className={styles.grid}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.card}>
              <img
                src={achievement.image}
                alt={achievement.title}
                className={styles.image}
              />
              <div className={styles.content}>
                <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                <p className={styles.description}>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievements;
