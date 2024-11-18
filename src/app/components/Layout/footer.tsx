"use client"
import { usePathname } from "next/navigation";
import classes from "../../styles/Layout/footer.module.scss";
import Link from "next/link";
import { InstaGramIcon } from "../Home/svgIcons";

const Footer = ({toggleModal}:any) => {
  const pathname = usePathname();

  const isCreatorsPage = pathname === "/creators";

  return (
    <>
      <footer className={`${classes.footer} `}>
        <div className={`${classes.footer__content} container `}>
          <div className={classes.top}>
            <p className={classes.heading}>
              {isCreatorsPage
                ? "Wish to join us as a creator?"
                : "Want to know more?"}
            </p>
            <button className={classes.get} onClick={toggleModal}>
              Get in touch
            </button>
          </div>

          <div className={classes.bottom}>
            <div className={classes.content}>
              <div className={classes.column}>
                <p className={classes.heading}>Important Links</p>
                <Link href="/">Home</Link>
                {/* <Link href="/services">Services</Link> */}
                <Link href="/creators">Creators</Link>
                <Link href="/work">Work</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
              <div className={classes.column}>
                <p className={classes.heading}>Contact Us</p>
                <a
                  href="mailto: info@smallscreenmarketing.com"
                >
                  info@smallscreenmarketing.com
                </a>
              </div>
              <div className={classes.column}>
                <div className={classes.socialMedia}>
                  <p className={classes.heading}>Follow Us:</p>
                  <Link
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/smallscreenmarketing/"
                  >
                    <InstaGramIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes.footerBottom}>
              <p>SmallScreen Marketing © 2024</p>
              <Link
                href="https://www.kurage.in/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={classes.designedBy}>Design & Dev: KURAGE</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
