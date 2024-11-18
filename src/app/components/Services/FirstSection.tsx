import React from "react";
import Image from "next/image";
import classes from "../../styles/Services/FirstSection.module.scss";

const FirstSection: React.FC = () => {
  return (
    <div className={`${classes.container} container`}>
      {/* <div className={classes.topSection}>
        <div className={classes.textBlock}>
          <div className={`${classes.features} container`}>
            <p className={classes.heading}>SMALL SCREEN CREATOR SERVICE</p>
            <p className={classes.title}>Brand Deal Management</p>
            <div className={classes.bottomContent}>
              <div className={classes.feature}>
                <p>>Strategy</p>
                <p>
                  Custom to you, we'll build a plan together that includes your
                  strategy to deal volume, target earnings, and brands you want
                  to work with.
                </p>
                <button className={classes.ctaButton}>Get in touch</button>
              </div>
              <div className={classes.feature}>
                <p>>Creator Control</p>
                <p>
                  You are always in complete control of the deals you choose to
                  accept. It’s our job to work with you to ensure you’re getting
                  the deals you want to do.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.imageBlock}>
          <Image
            src="/assets/services/FirstSection/firstimg.jpeg"
            alt="Brand Deal Management"
            fill
            className={classes.image}
          />
        </div>
      </div> */}
      {/* <div className={classes.whyUsSection}>
        <p> className={classes.sectionTitle}>WHY US?</p>

        <div className={classes.left}>
          {" "}
          <p className={classes.sectionTitleSub}>
            Why Choose Small Screen As Your Social Media Management Agency?
          </p>
        </div>
        <div className={classes.right}>
          <p className={classes.description}>
            We know that most creators didn’t start their journey to deal with
            invoices, contracts, and brand negotiations. At SmallScreen, we
            manage the business side of being a creator so creators don’t have
            to.
          </p>
          <p className={classes.description}>
            SmallScreen helps creators find sponsors, negotiate deals, and
            maximize their earnings, we’re here to ensure they can concentrate
            on creating great content! Our comprehensive services are designed
            to support world-class creators, helping them thrive without the
            hassle of administrative tasks.
          </p>
          <p className={classes.description}>
            SmallScreen understands how much time and effort goes into your
            content, and we put the same level of care and detail into your
            brand partnerships. We know that your job isn’t a 9-5, so we are
            available whenever you need us.
          </p>
        </div>
      </div> */}

      <section className={classes.commitmentSection}>
        <div className={`${classes.commitmentSection__content} container`}>
          <div className={classes.left}>
            <Image
              src="/assets/services/SecondSection/small_screen_services.jpg"
              fill
              alt=""
            />
          </div>
          <div className={classes.right}>
            <div className={classes.colOne}>
              <p className={classes.heading}>
                <span className={classes.highlight}>Our Commitment </span>
                to Creators and Brands
              </p>
              <p className={classes.dec}>
                At SmallScreen, we understand that every brand and creator we
                work with has poured their heart and soul into their work. Our
                commitment is to provide the highest level of service and
                strategic expertise to help you achieve and exceed your goals.
              </p>
              <p className={classes.subheading}>To Creators:</p>
              <p className={classes.subdec}>
                We value your unique voice and vision. Our team is dedicated to
                amplifying your influence and connecting you with the right
                audiences. We will work tirelessly to ensure your content
                reaches its full potential, helping you grow and thrive in the
                digital landscape.
              </p>
              <p className={classes.subheading}>To Brands:</p>
              <p className={classes.subdec}>
                Your brand is a culmination of hard work, passion, and dreams.
                We are dedicated to treating it with the utmost respect and
                commitment. Our goal is to elevate your presence, drive
                meaningful engagement, and deliver measurable results that align
                with your objectives.
              </p>
              <p className={classes.bottomDec}>
                At SmallScreen, we believe in a partnership built on trust,
                collaboration, and mutual success. We are committed to pushing
                the boundaries of what is possible, constantly innovating, and
                delivering excellence in everything we do. Your success is our
                success, and we are here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstSection;
