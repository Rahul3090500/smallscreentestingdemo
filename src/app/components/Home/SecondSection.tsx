import React from "react";
import classes from "../../styles/Home/SecondSection.module.scss";
import { Image1Icon, Image2Icon, Image3Icon, Image4Icon } from "./svgIcons";
const cardData = [
  {
    Icon: Image1Icon,
    title: "300+ Represented Creators",
    description:
      "We work with over 300 creators and influencers across multiple social media platforms. We know how much time and effort goes into your content, and we put the same level of care and detail into your brand partnerships.",
  },
  {
    Icon: Image2Icon,
    title: "Creators See An Average of 70% Revenue Growth Over One Year",
    description:
      "With SmallScreen’s support, reach your growth goals! Obtain more followers, visibility, and exposure while achieving exponential financial growth through brand sponsorship.",
  },
  {
    Icon: Image3Icon,
    title: "96% Creator Retention Rate",
    description:
      "Creators love working with SmallScreen! Our dedication to maximizing their earnings and exceeding expectations is why we boast a remarkable 96% creator retention rate. Partner with us and experience the difference - success you can count on.",
  },
  {
    Icon: Image4Icon,
    title: "1 Billion+ Monthly Views",
    description:
      "Our stories captivate millions. With over a billion monthly views, our collaborations with audiences worldwide drive engagement and brand awareness to new heights.",
  },
];

const SecondSection: React.FC = () => {
  return (
    <>
      {/* <div className={classes.transparentLayer}></div> */}
      {/* 
      <div className="bgColor">
        <div className={`${classes.container}  container`}>
          <p> className={classes.subheading}>
            Behind Every Consumer Is A Creator They Trust
          </p>
          <p className={classes.description}>
            We connect brands with the perfect influencers to reach their
            audience. Our team manages the entire campaign, from finding the
            right creators to measuring results.
          </p>
          <div className={classes.cardsContainer}>
            {cardData.map((card, index) => (
              <div key={index} className={classes.card}>
                <card.Icon />
                <p>{card.title}</p>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SecondSection;
