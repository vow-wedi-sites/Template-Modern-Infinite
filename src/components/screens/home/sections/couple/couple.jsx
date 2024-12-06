import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./couple.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import fonts from "@/styles/fonts";
import EVENT_DETAILS from "@/constants/event_details";
import { Heart } from "react-bootstrap-icons";

const BrideGroomSection = () => {
  return (
    <section id="couple" className={styles.BrideGroomSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <Row>
            <Col md={6}>
              <div className={`${styles.box} ${styles.box1}`}>
                <div className={styles.text}>
                  <h2 className={fonts.font3}>
                    {EVENT_DETAILS.bride.name}
                    <span>
                      <Heart />
                    </span>
                  </h2>
                  <span className={fonts.font1}>The Bride</span>
                  <p>{EVENT_DETAILS.bride.about}</p>
                </div>
                <div className={styles.img}>
                  <Image src={EVENT_DETAILS.bride.imgUrl} width={250} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.box}>
                <div className={styles.img}>
                  <Image src={EVENT_DETAILS.groom.imgUrl} width={250} />
                </div>
                <div className={styles.text}>
                  <h2 className={fonts.font3}>
                    <span>
                      <Heart />
                    </span>
                    {EVENT_DETAILS.groom.name}
                  </h2>
                  <span className={fonts.font1}>The Groom</span>
                  <p>{EVENT_DETAILS.groom.about}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.info}>
          <h1 className={fonts.font1}>Are Getting Married!</h1>
          <p className={fonts.font3}>{EVENT_DETAILS.events.wedding.date}</p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default BrideGroomSection;
