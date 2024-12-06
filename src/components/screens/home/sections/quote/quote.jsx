import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./quote.module.scss";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";

const QuoteSection = () => {
  return (
    <section className={styles.QuoteSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div>
            <p className={`${styles.q1} ${fonts.font1}`}>
              &quot;We’re thrilled to invite you to our wedding! Your presence
              will mean the world to us as we celebrate love and togetherness.
              Save the date for this special moment!&quot;
            </p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default QuoteSection;
