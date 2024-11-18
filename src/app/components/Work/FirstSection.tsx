"use client";
import React, { useState } from "react";
import classes from "../../styles/Work/FirstSection.module.scss";
import Image from "next/image";
import creatorsData from "./data/creators.json"; // Import the JSON data
import Link from "next/link";
import { InstagramIcon, TikTok, YoutubeIcon } from "../Creators/svgIcons";
import CreatorModal from "./CreatorModal";

const topCategories = [
  "Cooking & Food",
  "Mens Fashion",
  "Technology",
  "Travel & Adventure",
  "DIY & Crafts",
];

const categories = ["All", ...topCategories, "Others"];

const FirstSection: React.FC = () => {
  const [activeCategories, setActiveCategories] = useState<string[]>(["All"]);
  const [selectedCreator, setSelectedCreator] = useState<any>(null);

  const toggleCategory = (category: string) => {
    if (category === "All") {
      setActiveCategories(["All"]);
    } else {
      setActiveCategories([category]);
    }
  };

  const getImageSrc = (creator: any) => {
    const formattedName = creator.creatorsName
      .replace(/ /g, "-")
      .replace(/'/g, "");
    let imagePath = `/assets/work/FirstSection/${formattedName}/${formattedName}.jpg`;
    if (creator.youtubeUrl) {
      imagePath = `/assets/work/FirstSection/Youtube/${formattedName}.jpg`;
    } else if (creator.instaUrl) {
      imagePath = `/assets/work/FirstSection/${formattedName}/${formattedName}.jpg`;
    } else if (creator.tiktokUrl) {
      imagePath = `/assets/work/FirstSection/${formattedName}/${formattedName}.jpg`;
    }
    if (creator.id === 25) {
      imagePath = `/assets/work/FirstSection/Garbo-Zhu-1/${formattedName}.jpg`;
    }
    if (creator.id === 5) {
      imagePath = `/assets/work/FirstSection/Outdoor-Chef-Life-1/${formattedName}.jpg`;
    }
    if (creator.id === 22) {
      imagePath = `/assets/work/FirstSection/Steve-Cole-2/${formattedName}.jpg`;
    }
    if (creator.id === 54) {
      imagePath = `/assets/work/FirstSection/Youtube/${formattedName}.jpg`;
    }
    if (creator.id === 49) {
      imagePath = `/assets/work/FirstSection/Youtube/${formattedName}.jpg`;
    }
    if (creator.id === 52) {
      imagePath = `/assets/work/FirstSection/Youtube/${formattedName}.jpg`;
    }
    if (creator.id === 46) {
      imagePath = `/assets/work/FirstSection/Youtube/${formattedName}.jpg`;
    }
    if (creator.id === 51) {
      imagePath = `/assets/work/FirstSection/Youtube/Taylor-Reed-2.jpg`;
    }
    if (creator.id === 44) {
      imagePath = `/assets/work/FirstSection/Youtube/WpgEats.jpg`;
    }
    if (creator.id === 45) {
      imagePath = `/assets/work/FirstSection/Youtube/The-Hockey-Guyss.jpg`;
    }
    if (creator.id === 39) {
      imagePath = `/assets/work/FirstSection/Youtube/The-Hockey-Guys.jpg`;
    }
    if (creator.id === 53) {
      imagePath = `/assets/work/FirstSection/Youtube/Garbo-Zhu-2-.jpg`;
    }

    return imagePath;
  };

  const filteredCreators = activeCategories.includes("All")
    ? [...creatorsData].sort((a, b) =>
        a.creatorsName.localeCompare(b.creatorsName)
      )
    : creatorsData
        .filter((creator) =>
          activeCategories.includes("Others")
            ? !topCategories.includes(creator.category)
            : activeCategories.includes(creator.category)
        )
        .sort((a, b) => a.creatorsName.localeCompare(b.creatorsName));
  const getPlatformLink = (creator: any) => {
    if (creator.youtubeUrl) {
      return creator.youtubeUrl;
    } else if (creator.instaUrl) {
      return creator.instaUrl;
    } else if (creator.tiktokUrl) {
      return creator.tiktokUrl;
    }
    return "#";
  };

  const openModal = (creator: any) => {
    setSelectedCreator(creator);
  };

  const closeModal = () => {
    setSelectedCreator(null);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.top}>
          <p className={classes.heading}>Our Work</p>
          <p className={classes.subheading}>
            Our greatest reward is witnessing our Creators & partner brands
            Succeed.
          </p>
          <p className={classes.subsubheading}>
            We're more than just a marketing and social media agency. We're your
            partner in success. Let's take your business to the next level.
          </p>
        </div>
        <div className={`${classes.cardsContainer} `}>
          <div className={classes.filters}>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`${classes.filterButton} ${
                  activeCategories.includes(category) ? classes.active : ""
                }`}
                onClick={() => toggleCategory(category)}
              >
                <span> {category}</span>
              </button>
            ))}
          </div>

          <div className={`${classes.cardsContent} container`}>
            {filteredCreators.map((creator) => (
              <div key={creator.id} className={classes.card}>
                <Image
                  src={getImageSrc(creator)}
                  alt={getImageSrc(creator)}
                  // alt={creator.creatorsName}
                  className={classes.cardImage}
                  fill
                  onClick={() => openModal(creator)}
                />

                <div className={classes.overlayStats}>
                  <div className={classes.overlayStats__content}>
                    <div className={classes.stat}>
                      <span className={classes.statValue}>{creator.views}</span>
                      <span className={classes.statLabel}>Views</span>
                    </div>
                    <div className={classes.stat}>
                      <span className={classes.statValue}>{creator.likes}</span>
                      <span className={classes.statLabel}>Likes</span>
                    </div>
                    <div className={classes.stat}>
                      <span className={classes.statValue}>
                        {creator.comments}
                      </span>
                      <span className={classes.statLabel}>Comments</span>
                    </div>
                  </div>
                </div>
                <p className={classes.title}>{creator.title}</p>

                <div className={classes.topcreator}>
                  <Link
                    href={creator.mainChannel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={classes.creatorsName}>
                      <p>
                        {creator.youtubeUrl && <YoutubeIcon />}
                        {creator.tiktokUrl && <TikTok width="30" height="31" />}
                        {creator.instaUrl && (
                          <InstagramIcon width="30" height="31" />
                        )}
                      </p>
                      {creator.creatorsName}
                    </p>
                  </Link>
                  <p className={classes.category}>{creator.partnerBrand}</p>
                </div>

                <p className={classes.description}>{creator.aboutParagraph}</p>
                <Link
                  href={getPlatformLink(creator)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.viewVideoLink}
                >
                  View Video
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedCreator && (
        <CreatorModal creator={selectedCreator} onClose={closeModal} />
      )}
    </>
  );
};

export default FirstSection;
