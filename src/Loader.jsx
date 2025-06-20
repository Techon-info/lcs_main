import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
      <h2 className={styles.loaderText}>Loading...</h2>
    </div>
  );
};

export default Loader;