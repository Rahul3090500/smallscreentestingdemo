"use client";
import React, { useState } from "react";
import classes from "../../styles/Home/FifthSection.module.scss";
import Accordion from "./Accordion";
import Image from "next/image";
const accordionContent = [
  {
    id: 1,
    title: "Who does SmallScreen work with?",
    content:
      "We have the privilege of managing over 300 creators worldwide in content niches ranging from Lifestyle to Adventure, Travel, Tech, Commentary, and beyond. SmallScreen looks for creators with a unique passion or interest who want to share it with the world! We don't just partner with the content; we partner with the creator behind the content. ",
  },
  {
    id: 2,
    title: "Am I a good fit for SmallScreen?",
    content:
      "We manage creators in almost every content niche you can think of, on every continent in the world. Creators we work with are generally established creators, with a sizable audience, looking to take the next step in launching their passion to the next level in both content and business.",
  },
  {
    id: 3,
    title: "What brands do we work with?",
    content:
      "Every month we build partnerships with over 400+ brands for our clients including some of the largest fortune 100 companies in the world. However, at SmallScreen, it's not about the brands we currently work with, it's about the brands YOU want to work with! We tailor our management approach to build meaningful partnerships with brands that get YOU excited, whether we've worked with them before or not.",
  },
  {
    id: 4,
    title: "What sets us apart?",
    content:
      "Our commitment to excellence starts with our definition of success. We judge our success on results, not efforts. Our job is not done until our clients are successful in their goals, regardless of what that takes. We understand that what you've built online is incredibly meaningful, and we treat it with the respect that is due. Our clients achieve a 72% growth in average earnings after one year of working with us.",
  },
];

const FifthSection: React.FC = () => {
  const [accIndex, setAccIndex] = useState<number | null>(null);

  return (
    <section className={classes.FifthSection}>
      <div className={`${classes.FifthSection__content} container`}>
        <div className={classes.left}>
          <div className={classes.colOne}>
            <p className={classes.h2}>FAQ</p>
            <p>
              Get the answers your are looking for about{" "}
              <span className={classes.highlight}>small screen</span>
            </p>
          </div>
          <div className={classes.mob_top}>
            <Image
              src="/assets/home/FifthSection/FAQ-Small-screen.jpg"
              fill
              alt=""
            />
          </div>
          {accordionContent.map((item) => (
            <Accordion
              key={item.id}
              item={item}
              setIndex={setAccIndex}
              index={accIndex}
            />
          ))}
        </div>
        <div className={classes.right}>
          <Image
            src="/assets/home/FifthSection/FAQ-Small-screen.jpg"
            fill
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
