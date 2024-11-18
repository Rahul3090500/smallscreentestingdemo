import classes from "../../styles/About/FirstSection.module.scss";

const FirstSection: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={`${classes.topContent} container`}>
          <p className={classes.heading}>ABOUT US</p>
          <p className={classes.subheading}>
            SmallScreen: Our Culture and Commitment
          </p>
        </div>
        <div className={`${classes.bottomContent} container`}>
          <p className={classes.left}>
            At SmallScreen, we're not here to be mediocre. Our mission is to be
            the best influencer and social media marketing agency, providing the
            highest quality of service for our clients. We believe in treating
            every brand and channel we work with as someone's dream, dedicating
            the same level of effort and attention that went into creating it.
          </p>
          <p className={classes.right}>
            We set high goals and continually raise them, judging success by
            results, not effort. We believe in teamwork and mutual support,
            ensuring we all succeed together. We take ownership of our tasks,
            innovate constantly, and push the boundaries of what can be
            achieved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
