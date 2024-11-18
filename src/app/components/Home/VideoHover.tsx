import React, {
  useImperativeHandle,
  forwardRef,
  useRef,
  useState,
  useEffect,
} from "react";
import classes from "../../styles/Home/FourthSection.module.scss";
import TestimonialsModal from "./TestimonialsModal";

interface VideoHoverProps {
  src: string;
  poster?: string;
  setIsModalOpen:any
}

const VideoHover = forwardRef<HTMLVideoElement, VideoHoverProps>(
  ({ src, poster, setIsModalOpen }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileInRange, setIsMobileInRange] = useState(false);

    useImperativeHandle(ref, () => videoRef.current as HTMLVideoElement);

    // Check for mobile screen range (300px to 600px) after the component mounts
    useEffect(() => {
      if (typeof window !== "undefined") {
        const checkIsMobileInRange = () =>
          window.innerWidth >= 300 && window.innerWidth <= 600;

        setIsMobileInRange(checkIsMobileInRange());

        const handleResize = () => {
          setIsMobileInRange(checkIsMobileInRange());
        };

        // Add resize event listener to dynamically update the screen size condition
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, []);

    useEffect(() => {
      if (isMobileInRange && videoRef.current) {
        videoRef.current.play();
      }
    }, [isMobileInRange]);

    const handleMuteUnmute = () => {
      setIsModalOpen(true);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.play();
        videoRef.current.muted = true; // Mute the video on hover
        setIsMuted(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };

    return (
      <div
        className={classes.videoContainer}
        onMouseEnter={isMobileInRange ? undefined : handleMouseEnter}
        onMouseLeave={isMobileInRange ? undefined : handleMouseLeave}
      >
        <div className={classes.videoContainer__poster}>
          {poster && !isHovered && <img src={poster} alt="Video poster" />}
        </div>
        <video
          ref={videoRef}
          src={src}
          className={classes.videoContainer__video}
          loop
          muted={isMuted}
          playsInline
        />
        <div className={classes.videoContainer__btn} onClick={handleMuteUnmute}>
          {isMuted ? (
            <svg
              width="89"
              height="89"
              viewBox="0 0 89 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mute Icon */}
              <g opacity="0.6" clipPath="url(#clip0_87_5)">
                <path
                  d="M59.3021 42.158L37.661 27.7306C35.7874 26.5127 33.3516 27.8243 33.3516 30.0727V58.9275C33.3516 61.1759 35.881 62.4875 37.661 61.2696L59.3021 46.8422C60.9884 45.718 60.9884 43.2822 59.3021 42.158Z"
                  fill="white"
                />
                <path
                  d="M44.5 0C19.9547 0 0 19.9547 0 44.5C0 69.0453 19.9547 89 44.5 89C69.0453 89 89 69.0453 89 44.5C89 19.9547 69.0453 0 44.5 0ZM44.5 82.0674C23.7958 82.0674 6.93263 65.2042 6.93263 44.5C6.93263 23.7958 23.7958 6.93263 44.5 6.93263C65.2042 6.93263 82.0674 23.7958 82.0674 44.5C82.0674 65.2042 65.2042 82.0674 44.5 82.0674Z"
                  fill="white"
                />
              </g>
            </svg>
          ) : (
            <svg
              width="89"
              height="89"
              viewBox="0 0 89 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Unmute Icon */}
              <g opacity="0.6">
                <path
                  d="M44.5 0C19.9547 0 0 19.9547 0 44.5C0 69.0453 19.9547 89 44.5 89C69.0453 89 89 69.0453 89 44.5C89 19.9547 69.0453 0 44.5 0ZM44.5 82.0674C23.7958 82.0674 6.93263 65.2042 6.93263 44.5C6.93263 23.7958 23.7958 6.93263 44.5 6.93263C65.2042 6.93263 82.0674 23.7958 82.0674 44.5C82.0674 65.2042 65.2042 82.0674 44.5 82.0674Z"
                  fill="white"
                />
                <path
                  d="M36.4728 26C34.0036 26 32 28.0016 32 30.4683V58.5317C32 60.9984 34.0036 63 36.4728 63C38.9419 63 40.9455 60.9984 40.9455 58.5317V30.4683C40.9455 28.0016 38.9419 26 36.4728 26Z"
                  fill="white"
                />
                <path
                  d="M53.5272 26C55.9963 26 58 28.4667 58 30.4683V58.5317C58 60.9984 55.9963 63 53.5272 63C51.0581 63 49.0544 60.5333 49.0544 58.5317V30.4683C49.0544 28.0016 51.0581 26 53.5272 26Z"
                  fill="white"
                />
              </g>
            </svg>
          )}
        </div>
      </div>
    );
  }
);

export default VideoHover;
