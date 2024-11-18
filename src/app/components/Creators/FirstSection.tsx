"use client";
import React, { useState } from "react";
import classes from "../../styles/Creators/FirstSection.module.scss";
import Image from "next/image";
import { YoutubeIcon, InstagramIcon, TikTok } from "./svgIcons";
import creatorsData from "./data/creators.json"; // Import the JSON data
import Link from "next/link";

// Reordered top categories
const topCategories = [
  "Lifestyle",
  "Fashion",
  "Tech",
  "Outdoors & Adventure",
  "Travel",
  "Commentary",
  "Sports & Fitness",
  "Education",
];

const categories = ["All", ...topCategories, "Others"];

// List of creators to always appear at the top
const pinnedCreators = [
  // "North Valley Group",
  "Garbo Zhu",
  "Yoora Jung",
  "Alivia D'Andrea",
  "The Hockey Guys",
  "AppleTrack",
  "Luke Miani",
  "Uncomfy & Company",
  "Taylor Reed",
  "Summer Mckeen",
  "Erika Diane",
  "Luke Eich",
  "Cooper Neidecker",
  "Nico Leonard",
  "Tayo Aina",
  "JustAli",
  "Big Book Lady",
  "Front Page Tech",
  "Car Questions Answered",
  "Tiny Cabin Life",
  "Allie Brinn",
  "Living Big In A Tiny House",
  "Almost Captain Morgan",
  "Miss Katie",
  "Darin and Josh",
  "ColladoTV",
  "Birdogey",
  "Madison Clysdale",
  "Action Retro",
  "Maya Lee",
  "Emmie Reads",
  "Outdoor Chef Life",
  "CrochetByGenna",
];

const FirstSection: React.FC = () => {
  const [activeCategories, setActiveCategories] = useState<string[]>(["All"]);
  const toggleCategory = (category: string) => {
    if (category === "All") {
      setActiveCategories(["All"]);
    } else {
      setActiveCategories([category]);
    }
  };

  const getImageSrc = (name: string) => {
    const formattedName = name.replace(/ /g, "-").replace(/'/g, "");
    return `/assets/creators/FirstSection/CardsImg/${formattedName}.webp`;
  };

  const filteredCreators = activeCategories.includes("All")
    ? [
        // Show pinned creators first in their specified order
        ...creatorsData
          .filter((creator) =>
            pinnedCreators.includes(creator["Creators Name"])
          )
          .sort(
            (a, b) =>
              pinnedCreators.indexOf(a["Creators Name"]) -
              pinnedCreators.indexOf(b["Creators Name"])
          ),
        // Then show the rest of the creators
        ...creatorsData
          .filter(
            (creator) => !pinnedCreators.includes(creator["Creators Name"])
          )
          .sort((a, b) => a["Creators Name"].localeCompare(b["Creators Name"])),
      ]
    : creatorsData
        .filter((creator) =>
          activeCategories.includes("Others")
            ? !topCategories.includes(creator.Category)
            : activeCategories.includes(creator.Category)
        )
        .sort((a, b) => {
          const isPinnedA = pinnedCreators.includes(a["Creators Name"]);
          const isPinnedB = pinnedCreators.includes(b["Creators Name"]);
          if (isPinnedA && !isPinnedB) return -1;
          if (!isPinnedA && isPinnedB) return 1;
          return a["Creators Name"].localeCompare(b["Creators Name"]);
        });
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <p className={classes.heading}>Meet Our Clients</p>
        <p className={classes.subheading}>
          We have the privilege of helping 300+ creators reach the heights of
          their success in content and business. Our clients range in almost
          every niche, but the one thing they have in common is the desire to be
          at the top of their industry.
        </p>
      </div>
      <div className={classes.cardsContainer}>
        <div className={classes.filters}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${classes.filterButton} ${
                activeCategories.includes(category) ? classes.active : ""
              }`}
              onClick={() => toggleCategory(category)}
            >
              <span>{category}</span>
            </button>
          ))}
        </div>
        <div className={`${classes.cardsContent} container`}>
          {filteredCreators.map((creator) => (
            <div key={creator.id} className={classes.card}>
              <Image
                src={getImageSrc(creator["Creators Name"])}
                alt={creator["Creators Name"]}
                className={classes.cardImage}
                fill
              />
              <div className={classes.topcreator}>
                <p className={classes.left}>{creator["Creators Name"]}</p>
                <p className={classes.category}>{creator.Category}</p>
              </div>
              <div className={classes.middlecreator}>
                <div className={classes.stats}>
                  {creator.youtube_url && (
                    <Link
                      href={creator.youtube_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YoutubeIcon />
                      <span>{creator["Youtube Followers"]}</span>
                    </Link>
                  )}
                  {creator.instagram_url && (
                    <Link
                      href={creator.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                      <span>{creator["Instagram Followers"]}</span>
                    </Link>
                  )}
                  {creator.tiktok_url && (
                    <Link
                      href={creator.tiktok_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TikTok />
                      <span>{creator["Tik Tok Followers"]}</span>
                    </Link>
                  )}
                </div>
              </div>
              <p className={classes.description}>
                {creator["About Paragraph"]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
