"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import classes from "../../styles/Home/FirstSection.module.scss";
import creatorsData from "./data/social_media.json";
import { changeText } from "../utils/textHelper";

// Shuffle function to randomize the array
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getImageSrc = (name: string) => {
  const formattedName = name
    .replace(/ /g, "-")
    .replace(/'/g, "")
    .replace(/[^a-zA-Z0-9-]/g, "");

  return `/assets/home/FirstSection/creators_pics/${formattedName}.webp`;
};

const FirstSection = (data: any) => {
  const [shuffledCreators, setShuffledCreators] = useState(creatorsData);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Shuffle the creatorsData array on component mount
  useEffect(() => {
    const shuffledData = shuffleArray([...creatorsData]); // Create a shuffled copy of the array
    setShuffledCreators(shuffledData);
  }, []);

  useEffect(() => {
    const cardsContainer = cardsRef.current;
    if (!cardsContainer) return;

    const totalWidth = cardsContainer.scrollWidth;

    gsap.to(cardsContainer, {
      x: -totalWidth / 2, // Scroll halfway, then repeat
      duration: 100,
      repeat: -1, // Infinite loop
      ease: "linear", // Smooth linear scroll
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)), // Smooth transition back to start
      },
    });
  }, [shuffledCreators]);

  const handleRedirect = (link: string) => {
    window.open(link, "_blank");
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

  const rawText = changeText("home_1", data); // Fetch the text for home_1
  const highlightedText = highlightText(
    rawText,
    ["Creators", "Future"],
    classes.highlight
  );
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p>{highlightedText}</p>
      </div>
      <p className={classes.subheading}>{changeText("home_2", data)}</p>
      <div className={classes.scroller}>
        <div className={classes.cards} ref={cardsRef}>
          {/* Render shuffled creators */}
          {shuffledCreators.map((creator, index) => {
            const imageSrc = getImageSrc(creator.name);
            return (
              <div
                key={index}
                className={classes.cardContainer}
                onClick={() => handleRedirect(creator.link)}
              >
                <img
                  src={imageSrc}
                  alt={creator.name}
                  className={classes.card}
                />
                <p className={classes.creatorName}>{creator.name}</p>
              </div>
            );
          })}
          {/* Duplicate the shuffled creators to create a seamless loop */}
          {shuffledCreators.map((creator, index) => {
            const imageSrc = getImageSrc(creator.name);
            return (
              <div
                key={`duplicate-${index}`}
                className={classes.cardContainer}
                onClick={() => handleRedirect(creator.link)}
              >
                <img
                  src={imageSrc}
                  alt={creator.name}
                  className={classes.card}
                />
                <p className={classes.creatorName}>{creator.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
