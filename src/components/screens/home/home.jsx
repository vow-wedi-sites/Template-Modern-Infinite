import React from "react";
import styles from "./home.module.scss";
import HeroSection from "./sections/hero/hero";
import QuoteSection from "./sections/quote/quote";
import CoupleSection from "./sections/couple/couple";
import GallerySection from "./sections/gallery/gallery";
import EventsSection from "./sections/events/events";
import RSVP_Section from "./sections/rsvp/rsvp";
import DestinationsSection from "./sections/destinations/destinations";
import CountDownSection from "./sections/count_down/count_down";
import FriendsAndFamilySection from "./sections/friends_and_family/friends_and_family";
import OurStorySection from "./sections/our_story/our_story";
import InviteSection from "./sections/invite/invite";

const HomeScreen = () => {
  return (
    <main className={styles.home}>
      <HeroSection />
      <QuoteSection />
      <CoupleSection />
      <CountDownSection />
      <OurStorySection />
      <FriendsAndFamilySection />
      <InviteSection/>
      <EventsSection/>
      <GallerySection/>
    
      {/* <EventsSection />
      <DestinationsSection/>
      <GallerySection />
      <RSVP_Section /> */}
    </main>
  );
};

export default HomeScreen;
