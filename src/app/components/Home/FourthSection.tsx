"use client";
import React, { useEffect, useRef, useState } from "react";
import classes from "../../styles/Home/FourthSection.module.scss";
import VideoHover from "./VideoHover";
import Slider from "react-slick";
import TestimonialsModal from "./TestimonialsModal";
import { changeText } from "../utils/textHelper";

const FourthSection = (data:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isWithinRange, setIsWithinRange] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null); 

  const videos = [
    {
      src: "/assets/home/FourthSection/1.mp4",
      poster: "/assets/home/FourthSection/poster1.png",
    },
    {
      src: "/assets/home/FourthSection/2.mp4",
      poster: "/assets/home/FourthSection/poster2.png",
    },
    {
      src: "/assets/home/FourthSection/3.mp4",
      poster: "/assets/home/FourthSection/poster3.png",
    },
    {
      src: "/assets/home/FourthSection/4.mp4",
      poster: "/assets/home/FourthSection/poster4.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : videos.length - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < videos.length - 3 ? prevIndex + 1 : 0
    );
  };
  useEffect(() => {
    const handleResize = () => {
      setIsWithinRange(window.innerWidth >= 300 && window.innerWidth <= 600);
    };

    // Set the initial state based on screen size
    handleResize();

    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);

    // Autoplay all videos if within the range of 300px to 600px
    if (isWithinRange) {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.play();
        }
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isWithinRange]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable arrows for mobile, we can use dots
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveVideoSrc(null); // Clear the active video when the modal is closed
  };

  const handleVideoClick = (src: string) => {
    setActiveVideoSrc(src); // Set the active video src
    setIsModalOpen(true); // Open the modal
  };
  return (
    <>
      <section className={classes.snapDiscover}>
        <div className={`${classes.snapDiscover__content} container`}>
          <p className={classes.sectionTitle}>{changeText("home_6", data)}</p>
          <p className={classes.sectionDescription}>
          {changeText("home_7", data)}
          </p>
          <div className={classes.carousel}>
            <button className={classes.carouselButton} onClick={handlePrev}>
              <svg
                width="26"
                height="54"
                viewBox="0 0 26 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_87_20)">
                  <path
                    d="M0.00629997 26.881C0.0310249 26.461 0.191748 26.0598 0.469923 25.7463L22.7238 0.670868C23.3853 -0.125278 24.5536 -0.231853 25.3387 0.438915C26.1237 1.10968 26.2288 2.2945 25.5674 3.09065C25.5427 3.12199 25.5179 3.15334 25.487 3.17841L4.352 27.0001L25.487 50.8218C26.1917 51.574 26.167 52.7651 25.4252 53.4798C24.6834 54.1944 23.5089 54.1694 22.8042 53.4171C22.7795 53.3857 22.7486 53.3607 22.7238 53.3293L0.469923 28.2539C0.142296 27.8777 -0.0246086 27.3825 0.00629997 26.881Z"
                    fill="#E35710"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_87_20">
                    <rect
                      width="54"
                      height="26"
                      fill="white"
                      transform="matrix(0 -1 -1 0 26 54)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div className={classes.videoGallery}>
              {videos
                .slice(currentIndex, currentIndex + 3)
                .map((video, index) => (
                  <div
                    key={index}
                    className={classes.videoGallery__item}
                    onClick={() => handleVideoClick(video.src)}
                  >
                    <VideoHover
                      src={video.src}
                      setIsModalOpen={setIsModalOpen}
                      poster={video.poster}
                    />
                  </div>
                ))}
            </div>
            <div className={classes.MobVideoGallery}>
              <Slider {...sliderSettings}>
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className={classes.MobVideoGallery__item}
                    onClick={() => handleVideoClick(video.src)}
                  >
                    <VideoHover
                      ref={(el: any) => (videoRefs.current[index] = el)} // Store video refs
                      src={video.src}
                      poster={video.poster}
                      setIsModalOpen={setIsModalOpen}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <button className={classes.carouselButton} onClick={handleNext}>
              <svg
                width="26"
                height="54"
                viewBox="0 0 26 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_87_18)">
                  <path
                    d="M25.9939 26.881C25.9692 26.461 25.8085 26.0598 25.5303 25.7463L3.2764 0.670868C2.61496 -0.125278 1.44663 -0.231853 0.661564 0.438915C-0.123505 1.10968 -0.228593 2.2945 0.432843 3.09065C0.457569 3.12199 0.482296 3.15334 0.513204 3.17841L21.6482 27.0001L0.513204 50.8218C-0.191503 51.574 -0.166777 52.7651 0.575021 53.4798C1.31682 54.1944 2.49133 54.1694 3.19604 53.4171C3.22077 53.3857 3.25167 53.3607 3.2764 53.3293L25.5303 28.2539C25.8579 27.8777 26.0249 27.3825 25.9939 26.881Z"
                    fill="#E0503C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_87_18">
                    <rect
                      width="54"
                      height="26"
                      fill="white"
                      transform="matrix(0 -1 1 0 0 54)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </section>
      {isModalOpen && activeVideoSrc && (
        <TestimonialsModal
          creator={{ videoUrl: activeVideoSrc }} // Pass the active video URL to the modal
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default FourthSection;
