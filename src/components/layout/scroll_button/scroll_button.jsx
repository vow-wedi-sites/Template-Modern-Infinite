import React, { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import styles from "./scroll_button.module.scss";
import Link from "next/link";

const ScrollButton = () => {
  const sections = [
    "#bride_and_groom",
    "#gallery",
    "#events",
    "#destinations",
    "#rsvp",
  ];

  const [nextSection, setNextSection] = useState(0);

  return (
    <Link
      href={sections[nextSection] || '/'}
      className={styles.ScrollButton}
      onClick={() => {
        setNextSection((prev) => prev + 1);
      }}
    >
      <ChevronDown />
    </Link>
  );
};

export default ScrollButton;
