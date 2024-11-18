"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "../../styles/Layout/nav.module.scss";
import { InstaGramIcon, InstaGramIconNav } from "../Home/svgIcons";

const Nav: any = ({ toggleModal }:any) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    if (navOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navOpen]);

  const handleLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <div className={classes.nav} ref={navRef}>
      <div className={classes.navcontainer}>
        <div className={classes.navbar}>
          <div
            className={classes.menu_toggle}
            onClick={() => setNavOpen(!navOpen)}
          >
            {!navOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="15"
                viewBox="0 0 28 15"
                fill="none"
              >
                <path d="M0 1H28" stroke="black" stroke-width="1.5" />
                <path d="M0 7.5H28" stroke="black" stroke-width="1.5" />
                <path d="M0 14H14.8235" stroke="black" stroke-width="1.5" />
              </svg>
            ) : (
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ scale: 2 }}
              >
                <path
                  d="M9.5 28.5007L28.5 9.50073"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  d="M28.5 28.5007L9.5 9.50073"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
            )}
          </div>
        </div>

        <div
          className={`${classes.nav_overlay} container`}
          style={{ display: !navOpen ? "none" : "flex" }}
        >
          <ul className={` ${classes.nav_links}`}>
            <li className={classes.nav_item}>
              <div className={classes.title}>
                <div className={classes.content}>
                  <Link
                    className={classes.text}
                    href="/"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  {/* <Link
                    className={classes.text}
                    href="/services"
                    onClick={handleLinkClick}
                  >
                    Services
                  </Link> */}
                  <Link
                    className={classes.text}
                    href="/creators"
                    onClick={handleLinkClick}
                  >
                    Creators
                  </Link>
                  <Link
                    className={classes.text}
                    href="/work"
                    onClick={handleLinkClick}
                  >
                    Work
                  </Link>
                  <Link
                    className={classes.text}
                    href="/about"
                    onClick={handleLinkClick}
                  >
                    About{" "}
                  </Link>
                  <p
                    className={classes.text}
                    onClick={() => {
                      handleLinkClick();
                      toggleModal();
                    }}
                  >
                    Contact
                  </p>
                  <Link href="/privacy-policy" onClick={handleLinkClick}>
                    {" "}
                    <button className={classes.book}> Privacy Policy</button>
                  </Link>
                </div>
              </div>
            </li>
            <li className={classes.nav_item}>
              <div className={classes.title}>
                <div className={classes.heading}>Contact Us</div>
                <div className={classes.content}>
                  <a
                    className={classes.text}
                    style={{ textTransform: "lowercase" }}
                    href="mailto: info@smallscreenmarketing.com"
                  >
                    info@smallscreenmarketing.com
                  </a>
                </div>
              </div>
            </li>
            <li className={classes.nav_item}>
              <div className={classes.title}>
                <div className={classes.heading}> Follow Us:</div>
                <div className={classes.content}>
                  <Link
                    className={classes.text}
                    href="https://www.instagram.com/smallscreenmarketing/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    style={{ paddingTop: "10px" }}
                  >
                    <InstaGramIconNav />
                  </Link>
                </div>
              </div>
            </li>
          </ul>

          <div className={classes.right}>
            <Image
              src={`/assets/Images/foundation/liza_third.jpeg`}
              alt={"liza_third"}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
