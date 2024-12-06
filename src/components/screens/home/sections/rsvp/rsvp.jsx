import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import React from "react";
import styles from "./rsvp.module.scss";
import fonts from "@/styles/fonts";

const RSVP_Section = () => {
  return (
    <section id="rsvp" className={styles.RSVP_Section}>
      <CustomContainer>
        <CustomSection head="Your Presence Matters">
          <div className={styles.wrap}>
            <form>
              <div className={styles.bg}></div>
              <h1 className={fonts.rouge_Script}>RSVP</h1>
              <input type="text" name="" id="" placeholder="Full Name" />
              <input type="text" name="" id="" placeholder="Phone Number" />
              <input type="number" name="" id="" placeholder="No. Of Members" />
              <textarea name="message" id="" placeholder="Message"></textarea>
              <button>SEND</button>
            </form>
          </div>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default RSVP_Section;
