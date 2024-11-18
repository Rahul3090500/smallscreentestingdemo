import React from "react";
import classes from "../../styles/Work/Loader.module.scss";

interface LoaderProps {
  type: "youtube" | "instagram" | "tiktok";
}

const Loader: React.FC<LoaderProps> = ({ type }) => {
  let loaderClass = "";
  let loaderContent: JSX.Element;

  switch (type) {
    case "youtube":
      loaderClass = classes.youtubeLoader;
      loaderContent = (
        <div className={classes.simple_spinner}>
          <span></span>
        </div>
      );
      break;
    case "instagram":
      loaderClass = classes.instagramLoader;
      loaderContent = (
        <div className={classes.simple_spinner}>
          <span></span>
        </div>
      );
      break;
    case "tiktok":
      loaderClass = classes.tiktokLoader;
      loaderContent = (
        <div className={classes.loaderContent}>
          <div></div>
          <div></div>
        </div>
      );
      break;
    default:
      loaderClass = classes.defaultLoader;
      loaderContent = <p>Loading...</p>;
      break;
  }

  return (
    <div className={`${classes.loader} ${loaderClass}`}>{loaderContent}</div>
  );
};

export default Loader;
