import React, { useRef } from "react";
import classes from "../../styles/Home/FifthSection.module.scss";

interface AccordionProps {
  item: {
    id: number;
    title: string;
    content: string;
  };
  setIndex: (index: number | null) => void;
  index: number | null;
}

const Accordion: React.FC<AccordionProps> = ({ item, setIndex, index }) => {
  const planeRef = useRef<HTMLDivElement>(null);

  return (
    <div className={classes.accordion}>
      <div
        className={classes.accordion__head}
        onClick={() => setIndex(item.id === index ? null : item.id)}
      >
        <p>
          {item.title}
        </p>
        <div className={classes.downArrow}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: item.id === index ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <path d="M10 0V20" stroke="black" stroke-width="2.5" />
            <path d="M0 10L20 10" stroke="black" stroke-width="2.5" />
          </svg>
        </div>
      </div>
      <div
        ref={planeRef}
        className={classes.accordion__body}
        style={{
          maxHeight:
            item.id === index ? `${planeRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default Accordion;
