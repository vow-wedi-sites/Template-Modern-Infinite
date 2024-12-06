import React from "react";
import styles from "./friends_and_family.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import fonts from "@/styles/fonts";
import { Col, Image, Row } from "react-bootstrap";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const FriendsAndFamilySection = () => {
  const fam = [
    {
      id: "dmkd",
    },
    // {
    //   id: "dkvnkdm",
    // },
  ];

  return (
    <section className={styles.FriendsAndFamilySection}>
      <CustomContainer>
        <div className={styles.cont}>
          <SectionHeading
            heading={"Our Best Family and Friends Ever"}
            caption="Thanks for being there"
          />

          <br />
          <br />
          <div className={styles.wrap}>
            <Row>
              {fam.map((f) => {
                return (
                  <Col key={f.id} xs={12} md={6}>
                    <div className={styles.box}>
                      <div className={styles.img}>
                        <Image src="/assets/groom.jpg" width={120} />
                      </div>
                      <div>
                        <h3 className={fonts.font3}>Rahul Goutham</h3>
                        <span className={fonts.font1}>Friend</span>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Debitis, ex.
                        </p>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default FriendsAndFamilySection;
