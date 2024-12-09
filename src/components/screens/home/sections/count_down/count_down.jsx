import React from "react";
import styles from "./count_down.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import fonts from "@/styles/fonts";

const CountDownSection = () => {
  const x = ["Days", "Hours", "Minutes", , "Seconds"];
  return (
    <section className={styles.CountDownSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <h1 className={fonts.font1} data-aos='fade-down'>We will become a family in</h1>
          <div>
            {x.map((y,i) => {
              return (
                <div key={y} data-aos='zoom-in'  data-aos-delay={i*100} data-aos-duration={250}>
                  <h3>10</h3>
                  <p>{y.toUpperCase()}</p>
                </div>
              );
            })}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default CountDownSection;
