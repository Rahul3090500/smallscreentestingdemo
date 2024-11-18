"use client";
import React from "react";
import classes from "../../styles/Home/SecondSection.module.scss";
import Link from "next/link";

const VideoSection: React.FC = () => {
  return (
    <div className={classes.videoWrapper}>
      <iframe
        className={classes.video}
        src="https://www.youtube.com/embed/MWhP56GUnDc?autoplay=1&loop=1&mute=1&playlist=MWhP56GUnDc&controls=0&modestbranding=1&showinfo=0"
        allow="autoplay"
        allowFullScreen
        width={400}
        height={1600}
        frameBorder="0"
      ></iframe>
      <p className={`${classes.artistName} `}>
        {" "}
        Featured Creator:{" "}
        <Link
          href="https://www.youtube.com/@ChrisRogers/featured"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Chris Rogers
        </Link>
      </p>
    </div>
  );
};

export default VideoSection;
