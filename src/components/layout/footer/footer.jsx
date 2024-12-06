import React from "react";
import styles from "./footer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import PAGES from "@/constants/pages";
import Link from "next/link";
import { Dot, EnvelopeAt, Phone } from "react-bootstrap-icons";
import SocialMedia from "@/components/social_media/social_media";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bg}></div>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Image src="/logo/vws_logo_white.png" alt="logo" fluid />
            <br />
            <br />
          </div>
          <div className={styles.pages}>
            {PAGES.map((p, i) => (
              <p key={p.name} className={styles.links}>
                <Link href={p.href}>
                  {p.name}
                  {i !== PAGES.length - 1 && <span>|</span>}
                </Link>
              </p>
            ))}
          </div>
          <div className={styles.text}>
            <p>
              Transform your love story into a stunning digital experience. We
              create elegant, personalized wedding websites to celebrate your
              journey, keep guests informed, and make every moment
              unforgettable.
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div>
                <EnvelopeAt /> <p>connect@vowwedsites.com</p>
              </div>
              <div>
                <Phone /> <p>+91 79042 36030</p>
              </div>
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.tc}>
          <Link href="/terms-conditions">Terms & Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
