import React from "react";
import styles from "./section_heading.module.scss";
import fonts from "@/styles/fonts";

const SectionHeading = ({ heading, variant = 1, caption = "" }) => {
  return (
    <div className={styles.SectionHeading}>
      <h2 className={fonts.font1}>{heading}</h2>
      <p className={fonts.font3}>{caption.toUpperCase()}</p>
    </div>
  );
};

export default SectionHeading;
