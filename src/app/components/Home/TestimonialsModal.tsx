import React from "react";
import classes from "../../styles/Home/TestimonialsModal.module.scss";

interface TestimonialsModalProps {
  creator: { videoUrl: string };
  onClose: () => void;
}

const TestimonialsModal: React.FC<TestimonialsModalProps> = ({ creator, onClose }) => {
  return (
    <div className={classes.modalOverlay} onClick={onClose}>
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
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={creator.videoUrl}
          controls
          autoPlay
          loop
          className={classes.instagramContent}
        />
      </div>
    </div>
  );
};

export default TestimonialsModal;
