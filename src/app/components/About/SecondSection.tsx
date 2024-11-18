import Image from "next/image";
import classes from "../../styles/About/SecondSection.module.scss";

const SecondSection: React.FC = () => {
  return (
    <div className={classes.SecondSection}>
      <div className={classes.Imagecontainer}>
        <Image
          src={"/assets/about/about-page-small-screen-FINAL.jpg"}
          fill
          alt=""
        />
      </div>
      <div className={`${classes.ourValues} container`}>
        <div className={classes.first}>
          <div className={classes.left}>
            <p className={classes.subHeading}>History</p>
            <p className={classes.dec}>
              SmallScreen was founded in 2020 out of NYC with the goal of being
              creators' first choice for strategic management and representation
              services. Founded by a former creator, we take a unique approach
              to ensuring that the business side of your platform is treated
              with the same obsession, care, and attention as you treat your
              content.
            </p>
          </div>
          <div className={classes.right}>
            <Image
              src={"/assets/about/SMALL-screen-history.jpeg"}
              fill
              alt=""
            />
          </div>
        </div>
        <div className={classes.second}>
          <div className={classes.right}>
            <Image
              src={"/assets/about/what-we-do-Small-screen.jpg"}
              fill
              alt=""
            />
          </div>
          <div className={classes.left}>
            <p className={classes.subHeading}>What we do</p>
            <p className={classes.dec}>
              SmallScreen is an agency for creators who want to set their goals
              high, and once they hit their goals, set them higher. We are
              committed to ensuring that every single client's goals are met in
              their social media career, whether it be through brand
              sponsorships, book deals, merchandise, TV appearances, or public
              speaking opportunities. Maximizing your potential is our job.
            </p>
          </div>
        </div>
        {/* <div className={classes.first}>
          <div className={classes.left}>
            <p className={classes.subHeading}>
              Building Trust Through Action
            </p>
            <p className={classes.dec}>
              Integrity, quality, and accountability are non-negotiable for us.
              We take ownership of our work, always aim high, and continuously
              seek new ways to be more effective and impactful. At SmallScreen,
              we are passionate about pushing boundaries and achieving
              outstanding results for our clients.
            </p>
          </div>
          <div className={classes.right}>
            <Image src={"/assets/about/card3.png"} fill alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SecondSection;
