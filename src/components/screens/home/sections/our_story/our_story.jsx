import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./our_stroy.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const OurStorySection = () => {
  return (
    <section className={styles.OurStorySection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <Row>
            <Col xs={12} md={5}>
              <div className={styles.img}>
                <div>
                  <div className={styles.border}>dgknskr</div>
                  <Image src="/assets/images/story-image.jpg" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className={styles.text}>
                <SectionHeading heading="Our Story" caption="Our Stroy" />
                <br />
                <div className={styles.content}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam ut atque, commodi illo sit temporibus cupiditate
                    doloribus fugit rem pariatur reiciendis! Doloremque incidunt
                    quam quia fugiat rerum asperiores velit esse!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam ut atque, commodi illo sit temporibus cupiditate
                    doloribus fugit rem pariatur reiciendis! Doloremque incidunt
                    quam quia fugiat rerum asperiores velit esse!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam ut atque, commodi illo sit temporibus cupiditate
                    doloribus fugit rem pariatur reiciendis! Doloremque incidunt
                    quam quia fugiat rerum asperiores velit esse!
                  </p>
                  <br />
                  <h4>Dec 5th, 2023, We Said Yes!</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Unde, illo corporis eligendi voluptas distinctio quidem?
                    Corporis nulla explicabo repellat temporibus?
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </CustomContainer>
    </section>
  );
};

export default OurStorySection;
