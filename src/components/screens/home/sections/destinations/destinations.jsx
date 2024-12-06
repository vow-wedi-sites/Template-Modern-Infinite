import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import React from "react";
import styles from "./destinations.module.scss";
import EVENT_DETAILS from "@/constants/event_details";
import { Col, Row } from "react-bootstrap";

const DestinationsSection = () => {
  return (
    <section id="destinations" className={styles.DestinationsSection}>
      <CustomContainer>
        <CustomSection head="Event Destinations">
          <Row>
            <Col xs={12} lg={6}>
              <div className={styles.map} data-aos='fade-right'>
                <div className={styles.text}>
                  <h2>Reception</h2>
                  {EVENT_DETAILS.events.wedding.place.map((p, i) => (
                    <p key={p}>
                      {p}
                      {i !== 2 && ","}
                    </p>
                  ))}
                  <p></p>
                </div>
                <br />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.5016112780586!2d76.93911517457839!3d11.075943653598593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f63e2a7e2b93%3A0x951c2ec53b0a4a7c!2s3WGR%2BGGR%2C%20Thudiyalur%2C%20Kurudampalayam%2C%20Tamil%20Nadu%20641029!5e0!3m2!1sen!2sin!4v1732704186798!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>

            <Col xs={12} lg={6}>
              <div className={styles.map} data-aos='fade-left'>
                <div className={styles.text}>
                  <h2>Wedding</h2>
                  {EVENT_DETAILS.events.wedding.place.map((p, i) => (
                    <p key={p}>
                      {p}
                      {i !== 2 && ","}
                    </p>
                  ))}
                  <p></p>
                </div>
                <br />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.5016112780586!2d76.93911517457839!3d11.075943653598593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f63e2a7e2b93%3A0x951c2ec53b0a4a7c!2s3WGR%2BGGR%2C%20Thudiyalur%2C%20Kurudampalayam%2C%20Tamil%20Nadu%20641029!5e0!3m2!1sen!2sin!4v1732704186798!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default DestinationsSection;
