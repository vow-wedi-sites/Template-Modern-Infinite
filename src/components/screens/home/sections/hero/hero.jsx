import React from "react";
import styles from "./hero.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";
import EVENT_DETAILS from "@/constants/event_details";

const HeroSection = () => {
  return (
    <section className={styles.HeroSection}>
      <div className={styles.bg} />
      <CustomContainer>
        <div className={styles.wrap}>
          <div>
            <h1 className={fonts.font1}>
              {EVENT_DETAILS.groom.name} <br />& <br />
              {EVENT_DETAILS.bride.name}
            </h1>
            <p>{EVENT_DETAILS.events.wedding.date}</p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default HeroSection;
