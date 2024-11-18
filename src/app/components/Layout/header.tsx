"use client";
import classes from "../../styles/Layout/header.module.scss";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Nav from "./nav";

const Header = ({toggleModal}:any) => {
  const pathname = usePathname();
  const memoizedLogo = useMemo(
    () => (
      <svg
        width="64"
        height="85"
        viewBox="0 0 64 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_476)">
          <path
            d="M26.6969 8.3396C19.7787 14.553 23.1091 25.2718 26.6899 27.4247L26.7898 27.3347C25.5792 26.547 25.0694 25.6674 25.157 24.6519C25.2919 23.0959 26.7057 21.6423 29.8451 21.6935C38.5169 21.8331 50.8309 26.8543 50.8309 26.8543L61.1215 7.34525C61.1215 7.34525 37.2591 -1.14821 26.6952 8.33784L26.6969 8.3396Z"
            fill="url(#paint0_linear_1_476)"
          />
          <path
            d="M11.6645 15.9608C16.1633 23.8785 26.6904 27.4267 26.6904 27.4267C23.1078 25.2738 19.7792 14.5549 26.6974 8.34159C37.2596 -1.14446 61.1238 7.34901 61.1238 7.34901C41.3064 -2.12291 26.3243 -0.641103 18.1465 1.94632C16.2036 2.56095 14.1346 3.54293 12.127 4.86402C9.78646 7.67045 9.1225 11.4836 11.6662 15.959L11.6645 15.9608Z"
            fill="url(#paint1_linear_1_476)"
          />
          <path
            d="M50.7417 66.9586C47.9054 62.3277 43.8638 59.5337 39.9255 57.8682C43.1841 60.5368 44.7047 73.0536 33.7361 77.8717C21.7129 83.1525 7.0058 78.866 0 76.5471C15.1854 84.0727 32.1734 87.4461 46.0712 83.0342C47.3921 82.6156 48.6587 82.0911 49.8675 81.4729C52.3692 78.836 55.0216 73.9455 50.7417 66.9586Z"
            fill="url(#paint2_linear_1_476)"
          />
          <path
            d="M30.9141 29.0178C28.663 28.2389 26.6921 27.4247 26.6921 27.4247C26.6921 27.4247 16.165 23.8783 11.6661 15.9588C9.12415 11.4833 9.78636 7.66843 12.1269 4.86377C5.05101 9.52113 -1.26455 18.4049 1.3808 30.3583C3.6968 40.8281 14.5392 46.7129 26.403 51.4339C31.9478 53.6416 35.378 55.1428 36.9354 55.7857C38.4245 56.4021 39.3547 57.1368 39.9276 57.8645C43.8641 59.53 47.9075 62.3258 50.7438 66.9549C55.0219 73.9418 52.3713 78.8323 49.8696 81.4692C61.383 75.5861 67.4953 61.2502 61.9033 48.9083C56.2324 36.3968 34.6772 30.3159 30.9159 29.0142L30.9141 29.0178Z"
            fill="url(#paint3_linear_1_476)"
          />
          <path
            d="M33.7361 77.8718C44.7047 73.0537 43.1841 60.5369 39.9255 57.8683C40.1848 58.1968 40.3688 58.5253 40.5002 58.8397C41.1501 60.4062 40.4091 62.1742 38.8954 62.9177C31.8581 66.3706 10.2958 56.0474 10.2958 56.0474L0 76.5472C7.0058 78.8679 21.7129 83.1544 33.7361 77.8718Z"
            fill="url(#paint4_linear_1_476)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_476"
            x1="28.6538"
            y1="16.2414"
            x2="60.1138"
            y2="14.6235"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FEDE00" />
            <stop offset="1" stop-color="#EF5C11" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_476"
            x1="6.28268"
            y1="21.9357"
            x2="42.0344"
            y2="5.94331"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FEDE00" />
            <stop offset="1" stop-color="#E35710" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_476"
            x1="22.4452"
            y1="88.0254"
            x2="35.922"
            y2="49.1541"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FEDE00" />
            <stop offset="1" stop-color="#E35710" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_476"
            x1="62.4149"
            y1="69.9839"
            x2="8.54737"
            y2="22.1403"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FEDE00" />
            <stop offset="1" stop-color="#E35710" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_476"
            x1="3.28479"
            y1="58.0873"
            x2="30.8834"
            y2="72.9349"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FEDE00" />
            <stop offset="1" stop-color="#EF5C11" />
          </linearGradient>
          <clipPath id="clip0_1_476">
            <rect width="64" height="85" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    []
  );
  const isActive = (route: string) => pathname === route;

  return (
    <>
      <div className={`${classes.header} `}>
        <div className={`${classes.header__content} container `}>
          <div className={classes.left}>
            <span className={classes.Mobmenu}>
              <Nav toggleModal={toggleModal} />
            </span>
            <div className={classes.navs}>
              <Link
                className={`${classes.link} 
                ${isActive("/") ? classes.active : ""}
                  `}
                href={"/"}
              >
                Home
              </Link>
              {/* <Link
                className={`${classes.link} 
                ${isActive("/services") ? classes.active : ""}
                  `}
                href={"/services"}
              >
                Services
              </Link> */}
              <Link
                className={`${classes.link} ${
                  isActive("/creators") ? classes.active : ""
                }`}
                href={"/creators"}
              >
                Creators
              </Link>
              <Link
                className={`${classes.link} ${
                  isActive("/work") ? classes.active : ""
                }`}
                href={"/work"}
              >
                Work
              </Link>
              <Link
                className={`${classes.link} ${
                  isActive("/about") ? classes.active : ""
                }`}
                href={"/about"}
              >
                About
              </Link>
            </div>
          </div>
          <div className={classes.center}>
            {" "}
            <Link className={`${classes.link}`} href={"/"}>
              {memoizedLogo}
            </Link>{" "}
          </div>
          <div className={classes.right}>
            <Link
              className={`${classes.link} ${
                isActive("") ? classes.active : ""
              }`}
              href={""}
              onClick={toggleModal}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
