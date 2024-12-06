import CustomContainer from "@/components/ui/custom_container/custom_container";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import styles from "./header.module.scss";
// import PAGES from "@/constants/pages";
import Link from "next/link";
import { useRouter } from "next/router";
import HeaderDrawer from "./header_drawer/header_drawer";
import { List } from "react-bootstrap-icons";

const Header = () => {
  const router = useRouter();

  const isHome = router.pathname === "/";

  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  const PAGES1 = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "The Couple",
      href: "#couple",
    },

    {
      name: "Events",
      href: "#events",
    },
  ];

  const PAGES2 = [
    {
      name: "Destinations",
      href: "#destinations",
    },

    {
      name: "Gallery",
      href: "#gallery",
    },
    {
      name: "RSVP",
      href: "#rsvp",
    },
  ];

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        isHome ? styles.isHome : ""
      }`}
    >
      <HeaderDrawer
        setShow={setShow}
        show={show}
        router={router}
        PAGES={[...PAGES1, ...PAGES2]}
      />
      <CustomContainer>
        <div className={styles.wrap}>
          <nav>
            <ul>
              {PAGES1.map((page) => (
                <li
                  key={page.name}
                  className={router.pathname === page.href ? styles.active : ""}
                >
                  <Link href={page.href}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Link href="/">
              <Image
                src="/logo/couple_logo.png"
                alt="logo"
                fluid
                className={styles.logo}
              />
            </Link>
          </div>

          <nav>
            <ul>
              {PAGES2.map((page) => (
                <li
                  key={page.name}
                  className={router.pathname === page.href ? styles.active : ""}
                >
                  <Link href={page.href}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <List
            className={styles.btn}
            onClick={() => {
              setShow(true);
            }}
          />
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
