import React from "react";
import styles from "./HomePage.module.css";

const Jumbutron = ({ children }) => {
  return (
    <div className={styles.mainHeader}>
      <div className="max-w-md mx-auto w-full">
        <h1 className={styles.mainTitle}>PIXEL POINT IMAGES</h1>
        <p className={styles.mainDescription}>
          {" "}
          All the assets you need, in one place. Find and download the best
          high-quality photos, vectors, videos, and mockups
        </p>
        {children}
      </div>
    </div>
  );
};

export default Jumbutron;
