// import React from 'react';
// import styles from "./privacy.module.css";
// import Footer from "../../Components/Footer/footer";
// import Navbar from "../../Components/Navbar/navbar";
// const PrivacyPolicy = () => {
//     return (
//          <div>
//         < Navbar />
//         <div className={styles.pageContainer}>
//         {/* Hero Section */}
//         <section className={styles.hero}>
//           <h1 className={styles.title}>About US</h1>
//         </section>
//         <div style={{ background: 'transparent' }}>
//             <h1 style={{ fontFamily: 'Arial', fontSize: '26px', color: '#000000' }}>PRIVACY POLICY</h1>
//             <div style={{ color: '#7F7F7F', fontSize: '15px' }}>
//                 <strong>Last updated January 23, 2025</strong>
//             </div>
//             <div style={{ lineHeight: '1.5', color: '#595959', fontSize: '15px' }}>
//                 <p>
//                     This Privacy Notice for <strong>Paradox Innovator</strong> ('we', 'us', or 'our'),
//                     describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you:
//                 </p>
//                 <ul>
//                     <li>
//                         Visit our website at <a href="https://paradox-innovator.vercel.app/" target="_blank" style={{ color: '#003AF1' }}>https://paradox-innovator.vercel.app/</a>, or any website of ours that links to this Privacy Notice.
//                     </li>
//                 </ul>
//                 <p>
//                     Engage with us in other related ways, including any sales, marketing, or events.
//                 </p>
//                 <p>
//                     <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info.paradoxinnovator@gmail.com.
//                 </p>
//             </div>
//             <h2 style={{ fontFamily: 'Arial', fontSize: '19px', color: '#000000' }}>SUMMARY OF KEY POINTS</h2>
//             <p style={{ lineHeight: '1.5', color: '#595959', fontSize: '15px' }}>
//                 This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our
//                 <a href="#toc" style={{ color: '#003AF1' }}><strong><em> table of contents</em></strong></a> below to find the section you are looking for.
//             </p>
//             {/* Additional content can be added here */}
//             <Footer />
//         </div>  // ← This is closing only the inner div but not the outermost div
//         </div>  // ← This is closing the outer div
//         </div>  // ← Extra closing div (causing syntax error)
//         );
// };

// export default PrivacyPolicy;

import React from "react";
import styles from "./privacy.module.css";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.pageContainer}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>About Us</h1>
        </section>
        <div style={{ background: "transparent" }}>
          <h1
            style={{ fontFamily: "Arial", fontSize: "26px", color: "#000000" }}
          >
            PRIVACY POLICY
          </h1>
          <div style={{ color: "#7F7F7F", fontSize: "15px" }}>
            <strong>Last updated January 23, 2025</strong>
          </div>
          <div
            style={{ lineHeight: "1.5", color: "#595959", fontSize: "15px" }}
          >
            <p>
              This Privacy Notice for <strong>Paradox Innovator</strong> ('we',
              'us', or 'our'), describes how and why we might access, collect,
              store, use, and/or share ('process') your personal information
              when you use our services ('Services'), including when you:
            </p>
            <ul>
              <li>
                Visit our website at
                <a
                  href="https://paradox-innovator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#003AF1" }}
                >
                  https://paradox-innovator.vercel.app/
                </a>
                or any website of ours that links to this Privacy Notice.
              </li>
            </ul>
            <p>
              Engage with us in other related ways, including any sales,
              marketing, or events.
            </p>
            <p>
              <strong>Questions or concerns?</strong> Reading this Privacy
              Notice will help you understand your privacy rights and choices.
              If you do not agree with our policies and practices, please do not
              use our Services. If you still have any questions or concerns,
              please contact us at info.paradoxinnovator@gmail.com.
            </p>
          </div>
          <h2
            style={{ fontFamily: "Arial", fontSize: "19px", color: "#000000" }}
          >
            SUMMARY OF KEY POINTS
          </h2>
          <p style={{ lineHeight: "1.5", color: "#595959", fontSize: "15px" }}>
            This summary provides key points from our Privacy Notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our
            <a href="#toc" style={{ color: "#003AF1" }}>
              <strong>
                <em> table of contents</em>
              </strong>
            </a>
            below to find the section you are looking for.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
