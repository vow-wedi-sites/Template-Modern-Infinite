import React from "react";
import styles from "./friends_and_family.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import fonts from "@/styles/fonts";
import { Col, Image, Row } from "react-bootstrap";
import SectionHeading from "@/components/ui/section_heading/section_heading";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const FriendsAndFamilySection = () => {
  const fam = [
    {
      name: "Rahul Gowtham",
      id: "dmkd",
      type: "Friend",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, ex.",
    },
    {
      name: "Rahul Gowtham",
      id: "dmkd",
      type: "Friend",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, ex.",
    },
    {
      name: "Rahul Gowtham",
      id: "dmkd",
      type: "Friend",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, ex.",
    },
    {
      name: "Rahul Gowtham",
      id: "dmkd",
      type: "Friend",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, ex.",
    },
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
            <Swiper
              centeredSlides={true}
              spaceBetween={20}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              loop
              navigation={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper"
            >
              {fam.map((f) => {
                return (
                  <SwiperSlide key={f.id}>
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default FriendsAndFamilySection;
