import React from 'react';
import styles from './ArohiBlog.module.css';

const ArohiBlog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>3D Printing Blog Post</h1>
      <div className={styles.iframeContainer}>
        <iframe
          className={styles.iframe}
          src="https://arohimishra1502.blogspot.com/2025/02/3d-printing.html"
          title="3D Printing Blog Post"
        />
      </div>
    </div>
  );
};

export default ArohiBlog;
