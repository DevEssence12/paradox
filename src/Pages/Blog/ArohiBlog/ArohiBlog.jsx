import React from "react";
import styles from "./ArohiBlog.module.css";

const ArohiBlog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Future of 3D Printing</h1>
      <p className={styles.date}>February 07, 2025</p>
      <p className={styles.date}>Author: Arohi Mishra</p>

      <img 
        src="https://i.ibb.co/KSR11dL/1738996285217239-0.jpg" 
        alt="3D Printing Illustration" 
        className={styles.image} 
      />

      <p className={styles.paragraph}>
        Technology is changing the way we think about production, design, and manufacturing in today's rapidly evolving environment. One of the most fascinating and inventive new technologies is 3D printing, sometimes referred to as additive manufacturing. Numerous industries, including healthcare, automotive, aerospace, and even food production, could undergo a revolution as a result of this process. We shall examine 3D printing's definition, operation, uses, advantages, and prospects in this blog.
      </p>
      
      <h2 className={styles.heading}>What is 3D Printing?</h2>
      <p className={styles.paragraph}>
        Fundamentally, 3D printing is the technique of layering materials according to a digital model to produce three-dimensional objects. 3D printing creates things layer by layer, in contrast to conventional manufacturing techniques like injection molding and subtractive manufacturing, which remove material from a block. Complex shapes and structures that would be difficult or impossible to create using traditional approaches can now be created because of this "additive" process. Usually, a 3D printer is used for 3D printing. It takes a digital 3D model of the thing to be made and prints it using materials like plastic, resin, metal, or even biological material. Everything from tiny prototypes to huge, useful items can be made using this extremely accurate technology.
      </p>
      
      <h2 className={styles.heading}>How Does 3D Printing Work?</h2>
      <ol className={styles.list}>
        <li>The first step is to create a digital model using specialized computer-aided design (CAD) software.</li>
        <li>The digital design is "sliced" into thin layers using slicing software.</li>
        <li>The 3D printer follows the slicing program to heat and deposit material in precise patterns.</li>
        <li>Post-processing may be needed, including sanding, painting, curing, or removing support structures.</li>
      </ol>

      <h2 className={styles.heading}>Types of 3D Printing</h2>
      <ul className={styles.list}>
        <li><strong>FDM (Fused Deposition Modeling)</strong> - A popular and affordable method using melted plastic.</li>
        <li><strong>SLA (Stereolithography)</strong> - Uses lasers to cure liquid resin for high-detail prints.</li>
        <li><strong>SLS (Selective Laser Sintering)</strong> - Uses a laser to fuse powdered material into solid structures.</li>
        <li><strong>DMLS (Direct Metal Laser Sintering)</strong> - A variation of SLS for metal printing.</li>
        <li><strong>MJF (Multi Jet Fusion)</strong> - Uses inkjet technology to apply binding agents to powders.</li>
      </ul>
      
      <h2 className={styles.heading}>Industries Benefiting from 3D Printing</h2>
      <ul className={styles.list}>
        <li><strong>Healthcare</strong> - Custom prosthetics, implants, and bioprinting of tissues.</li>
        <li><strong>Aerospace</strong> - Lightweight, complex parts for spacecraft and airplanes.</li>
        <li><strong>Automotive</strong> - Prototyping, functional part creation, and vehicle customization.</li>
        <li><strong>Architecture and Construction</strong> - Printing entire buildings and complex architectural designs.</li>
        <li><strong>Food Industry</strong> - Printing customized and intricate food designs.</li>
      </ul>
      
      <h2 className={styles.heading}>Advantages of 3D Printing</h2>
      <ul className={styles.list}>
        <li><strong>Customization</strong> - Enables the manufacture of personalized products.</li>
        <li><strong>Cost-efficient prototyping</strong> - Reduces development costs and time.</li>
        <li><strong>Reduced waste</strong> - An additive process that minimizes material waste.</li>
        <li><strong>Complex designs at no extra cost</strong> - Enables the creation of intricate geometries.</li>
        <li><strong>On-demand production</strong> - Reduces inventory costs and enables just-in-time manufacturing.</li>
      </ul>
      
      <h2 className={styles.heading}>The Future of 3D Printing</h2>
      <ol className={styles.list}>
        <li>Advancements in bioprinting, enabling the fabrication of functional tissues and organs.</li>
        <li>Smarter, more efficient printers that can print faster and on a wider range of materials.</li>
        <li>Mass adoption in manufacturing, with 3D printing becoming the standard for creating low-cost, custom items.</li>
        <li>Improvements in sustainability with more environmentally friendly materials and techniques.</li>
      </ol>
      
      <p className={styles.paragraph}>
        3D printing is transforming industries and challenging traditional manufacturing processes. With its ability to create custom, intricate designs with minimal waste, it holds the promise of reshaping how products are designed, made, and distributed. As the technology continues to evolve, we can expect even more groundbreaking applications, making it an exciting time to watch this technology evolve. The future of manufacturing, healthcare, and design looks promising, with 3D printing at the helm, shaping a new era of innovation.
      </p>
    </div>
  );
};

export default ArohiBlog;