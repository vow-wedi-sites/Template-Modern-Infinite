import React from "react";
import { HeartFill } from "react-bootstrap-icons";
import styles from './loading_screen.module.scss'

const LoadingScreen = () => {
  return (
    <div className={styles.LoadingScreen}>
      <HeartFill />
    </div>
  );
};

export default LoadingScreen;
