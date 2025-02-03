import React from "react";
import styles from "./SDGPage.module.css";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";

const sdgData = [
  {
    title: "Quality Education",
    description: "Promoting inclusive and equitable quality education.",
    color: "#f4a261",
    image: "https://i.ibb.co/c34w51z/education-sciences-concept-books-teacher-desk-auditorium-chalkboard-background-627494-1123.webp",
  },
  {
    title: "Gender Equality",
    description: "Achieving gender equality and empowering women.",
    color: "#e76f51",
    image: "https://i.ibb.co/BNTDXYv/gender-equality.webp",
  },
  {
    title: "Decent Work",
    description: "Promoting sustained, inclusive economic growth.",
    color: "#2a9d8f",
    image: "https://i.ibb.co/PCcYpCr/18194-decent-work-workshop-28022023-182022.webp",
  },
  {
    title: "Industry Innovation",
    description: "Fostering innovation and sustainable industrialization.",
    color: "#264653",
    image: "https://i.ibb.co/txSwyLn/svgz-portfoliomomentum-ex2-v2.webp",
  },
  {
    title: "Strong Institutions",
    description: "Building effective, accountable institutions.",
    color: "#e9c46a",
    image: "https://i.ibb.co/Njk3Mg8/financial-district.webp",
  },
];

const SDGPage = () => {
  return (
    <div> 
    <Navbar />
    <div className={styles.container}>
      <h1 className={styles.title}>Sustainable Development Goals</h1>
      <div className={styles.cardContainer}>
        {sdgData.map((sdg, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundColor: sdg.color }}
          >
            <img src={sdg.image} alt={sdg.title} className={styles.cardImage} />
            <h2>{sdg.title}</h2>
            <p>{sdg.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SDGPage;
