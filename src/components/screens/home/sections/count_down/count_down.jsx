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
          <h1 className={fonts.font1}>We will become a family in</h1>
          <div>
            {x.map((y) => {
              return (
                <div key={y}>
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
