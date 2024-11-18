import React, { useState, useEffect, useRef } from "react";
import classes from "../../styles/GetInTouch/customSelect.module.scss";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  name: string;
  placeholder: string;
  value: string;
  onChange: (name: string, value: string) => void;
  isTyping: any;
  errors: any;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  name,
  placeholder,
  value,
  onChange,
  isTyping,
  errors,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  const handleOptionClick = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onChange(name, optionValue);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.customSelect} ref={ref}>
      <div
        className={` ${isTyping ? classes.typing : ""}  ${classes.selectBox} ${
          errors ? classes.error : ""
        } ${
          selectedValue ? classes.selected : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedValue || placeholder}</span>
        <div className={classes.arrow}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              style={{ transform: " rotate(-180deg)" }}
            >
              <path
                d="M1 1L9.00009 9.00009L17.0002 1"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
            >
              <path
                d="M1 1L9.00009 9.00009L17.0002 1"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={classes.options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={classes.option}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
