import React from "react";
import styles from "./invite.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import fonts from "@/styles/fonts";
import { Heart } from "react-bootstrap-icons";
import EVENT_DETAILS from "@/constants/event_details";

const InviteSection = () => {
  const x = ["Days", "Hours", "Minutes", , "Seconds"];
  return (
    <section className={styles.CountDownSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <Heart />
          <h1 className={fonts.font1}>Lookin forward to see you!</h1>
          <p>{EVENT_DETAILS.events.wedding.date}</p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default InviteSection;
