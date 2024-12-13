import React from "react";
import styles from "./events.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import { Col, Image, Row } from "react-bootstrap";
import fonts from "@/styles/fonts";
import {
  Calendar,
  Calendar2,
  Clock,
  GeoAlt,
  GeoAltFill,
} from "react-bootstrap-icons";
import Link from "next/link";
import EVENT_DETAILS from "@/constants/event_details";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomButton from "@/components/ui/custom_button/custom_button";

const EventsSection = () => {
  const events = EVENT_DETAILS.all_events;

  return (
    <section id="events" className={styles.EventsSection}>
      <CustomContainer>
        <SectionHeading heading="Wedding Events" caption="When and where" />
        <div className={styles.wrap}>
          <Row>
            {events.map((event) => {
              return (
                <Col key={event.name} xs={12} md={4}>
                  <div className={styles.event}>
                    <div>
                      <Image src={event.location_img} height={250} />
                    </div>
                    <div className={styles.text}>
                      <h3 className={fonts.font3}>{event.name}</h3>
                      <p>
                        <Calendar2 />
                        {event.date}
                      </p>
                      <p>
                        <Clock />
                        {event.time}
                      </p>
                      <p>
                        <GeoAlt />
                        {event.place}
                      </p>
                      <br/>
                      <CustomButton>
                        Get Location <GeoAlt />
                      </CustomButton>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </CustomContainer>
    </section>
  );
};

export default EventsSection;
