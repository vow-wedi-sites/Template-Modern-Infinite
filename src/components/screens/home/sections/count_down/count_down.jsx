import React, { useEffect, useState } from "react";
import styles from "./count_down.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import fonts from "@/styles/fonts";
import EVENT_DETAILS from "@/constants/event_details";
import moment from "moment";

const CountDownSection = () => {


  const [counts, setCounts] = useState({
    Days: 100,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });

  // console.log(counts);
  

  useEffect(() => {
    setInterval(() => {
      var startDate = moment(); // Current date and time
      var endDate = moment(EVENT_DETAILS.events.wedding.dateTime); // Example end date

      // Calculate the difference between the two dates
      var duration = moment.duration(endDate.diff(startDate));

      // Format the duration as days, hours, minutes, and seconds
      var Days = Math.floor(duration.asDays());
      var Hours = duration.hours();
      var Minutes = duration.minutes();
      var Seconds = duration.seconds();

      setCounts((prev) => {
        return { Days, Hours, Minutes, Seconds };
      });
    }, 1000);
  }, []);

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
                  <h3>{counts[y]}</h3>
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





