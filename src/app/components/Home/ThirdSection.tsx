"use client";
import React, { useState } from "react";
import classes from "../../styles/Home/ThirdSection.module.scss";
import GetInTouch from "../GetInTouch/GetInTouch";
import Link from "next/link";
import { changeText } from "../utils/textHelper";

const cardData = [
  {
    imgSrc: "/assets/home/ThirdSection/card1.jpeg",
    title: "Influencer Management",
    description:
      "SmallScreen provides world-class representation for dozens of creators across YouTube, Instagram, and Tik Tok. We provide our professional negotiation and solicitation services to handle all brand and business opportunities to ensure that creators are getting every penny they are worth.",
  },
  {
    imgSrc: "/assets/home/ThirdSection/card2.jpeg",
    title: "Professional Creative Services",
    description:
      "SmallScreen provides professional creative guidance from our team of experienced creators, as well as video editing and thumbnail editing services for creators who want to take their content to the next level.",
  },
  {
    imgSrc: "/assets/home/ThirdSection/card3.jpeg",
    title: "Professional Merchandising & Product Lines",
    description:
      "Creating a line of merchandise and branded products is often the largest income stream of popular creators. We create purposeful and creative product lines and merchandise for our influencers that creates a strong connection to their audience. We handle all the hard stuff; shipping, customer service, inventory, everything. We’ll do the work, so you can spend your time connecting with your audience.",
  },
];

const ThirdSection = (data: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const highlightText = (
    text: string,
    wordsToHighlight: any[],
    highlightClass: string | undefined
  ) => {
    if (!text || !Array.isArray(wordsToHighlight)) return text;

    const regex = new RegExp(`\\b(${wordsToHighlight.join("|")})\\b`, "gi"); // Match words
    return text.split(regex).map((part, index) =>
      wordsToHighlight.includes(part) ? (
        <span key={index} className={highlightClass}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  const secondText = changeText("home_4", data); // Fetch the text for home_4
  const highlightedSecondText = highlightText(
    secondText,
    ["Creative"],
    classes.highlight
  );

  return (
    <>
      <div className={classes.container}>
        <p className={classes.serviceHeading}>{changeText("home_3", data)}</p>
        <p className={classes.heading}>{highlightedSecondText}</p>
        <p className={classes.subheading}>{changeText("home_5", data)}</p>
        <div className={classes.buttonContainer}>
          {/* <button
            className={`${classes.knowMoreButton} ${classes.commonBtn}  `}
          >
            <Link href="/services">Know More</Link>
          </button> */}
          <button
            onClick={toggleModal}
            className={`${classes.getInTouchButton} ${classes.commonBtn} `}
          >
            Get In Touch
          </button>
        </div>
        {/* <div className={`${classes.cardsContainer}  `}>
        {cardData.map((card, index) => (
          <div key={index} className={classes.card}>
            <img
              src={card.imgSrc}
              alt={card.title}
              className={classes.cardImage}
            />
            <p>{card.title}</p>
            <p>{card.description}</p>
          </div>
        ))}
      </div> */}
      </div>
      <GetInTouch isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default ThirdSection;
