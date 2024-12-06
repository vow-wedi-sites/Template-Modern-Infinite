import React from "react";
import { Image, Offcanvas } from "react-bootstrap";
import styles from "./header_drawer.module.scss";
import Link from "next/link";
import fonts from "@/styles/fonts";

const HeaderDrawer = ({ show, setShow, router, PAGES }) => {
  // const PAGES = []

  return (
    <Offcanvas
      show={show}
      placement="end"
      className={styles.c}
      onHide={() => {
        setShow(false);
      }}
    >
      <Offcanvas.Header
        className={styles.head}
        closeButton
        onHide={() => {
          setShow(false);
        }}
      >
        <div></div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={styles.body}>
          <nav>
            {PAGES.map((page) => {
              return (
                <Link
                  href={page.href}
                  key={page.name}
                  className={fonts.MainFont}
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  {page.name}
                </Link>
              );
            })}
          </nav>

          <div>
            {/* <DownloadButtons isHeader/> */}
            {/* <Link
              href="/"
              onClick={() => {
                setShow(false);
              }}
            >
              <Image src="/assets/playbtn.png" alt="logo" fluid width={200} />
            </Link>
            <br />
            <br />
            <Link
              href="/"
              onClick={() => {
                setShow(false);
              }}
            >
              <Image src="/assets/apple.svg" alt="logo" fluid width={200} />
            </Link> */}
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
