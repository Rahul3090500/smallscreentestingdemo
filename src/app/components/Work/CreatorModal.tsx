import React, { useState, useEffect } from "react";
import classes from "../../styles/Work/CreatorModal.module.scss";
import {
  InstagramEmbed,
  TikTokEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";
import CustomLoader from "./CustomLoader";

interface CreatorModalProps {
  creator: any;
  onClose: () => void;
}

const CreatorModal: React.FC<CreatorModalProps> = ({
  creator,
  onClose,
}) => {


  const getPlatformEmbed = (creator: any) => {
    if (creator.youtubeUrl) {
      return (
        <YouTubeEmbed
          url={creator.youtubeUrl}
          width="100%"
          height="100%"
          className={classes.youtubeEmbed}
          placeholderImageUrl={creator.placeholderImageUrl}
          placeholderSpinnerDisabled
          placeholderDisabled
        />
      );
    } else if (creator.instaUrl) {
      return (
        <InstagramEmbed
          url={creator.instaUrl}
          width="100%"
          height="100%"
          className={classes.instagramEmbed}
          placeholderSpinnerDisabled
          placeholderDisabled
        />
      );
    } else if (creator.tiktokUrl) {
      return (
        <TikTokEmbed
          url={creator.tiktokUrl}
          width="100%"
          height="100%"
          className={classes.tiktokEmbed}
          placeholderSpinnerDisabled
          placeholderDisabled
        />
      );
    }
    return null;
  };

  const platformClass = creator.youtubeUrl
    ? classes.youtubeContent
    : creator.instaUrl
    ? classes.instagramContent
    : creator.tiktokUrl
    ? classes.tiktokContent
        : "";
  
    const loaderType:any = creator.youtubeUrl
      ? "youtube"
      : creator.instaUrl
      ? "instagram"
      : creator.tiktokUrl
      ? "tiktok"
      : "";
  return (
    <div className={classes.modalOverlay}>
      <svg
        onClick={onClose}
        className={classes.closeIcon}
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 28.5002L28.5 9.50024"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M28.5 28.5002L9.5 9.50024"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
      <div
        className={`${classes.modalContent} ${platformClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.loader}>
          <CustomLoader type={loaderType} />
        </div>
        <div className={classes.embedContainer}>
          {getPlatformEmbed(creator)}
        </div>
      </div>
    </div>
  );
};

export default CreatorModal;
