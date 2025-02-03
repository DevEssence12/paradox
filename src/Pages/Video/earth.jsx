import React from "react";
import styles from "./earth.module.css";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";

const VideoDisplay = ({ videoSrc }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.videoContainer}>
        <video
          className={styles.videoElement}
          autoPlay
          loop
          muted
          src="https://media-hosting.imagekit.io//32145c29cee04d40/working%20on%20it.mp4?Expires=1832239711&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jPmfxaIVQJZN~D3us~Hgic0lpp2cFH-Qdf21TN6Oz1tzhi0SqppaL4t5L91e2AD4nnw1Ya~duv~pOz2H9dyLD-tFiVKrmLLgd2G-sxu4Z3ztPTYSWOd2ESlyjcyXnuZsYApj4D9EK7xncGGqIdQdBMqJ6LfXc~W-SxBK9iqd4IghUKwg8zXbPJY22l0FeIIcQCDa~cP7JxuPBpaFZ9Xfn-LE73PLKKt2EfeZ0qTTQQKqVD~rdTfQutGRW7vZExjS~5-EX8zqPudDeabqzMQYSiyRoXhI1Ad3YoIr1pOXti7uuiwJOl~oODnPPpmOPCmJpWnz5PEvILIMNcpGonEOEQ__"
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <Footer />
    </div>
  );
};

export default VideoDisplay;
