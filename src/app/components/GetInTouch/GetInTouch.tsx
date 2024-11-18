"use client";
import React, { useState, useEffect } from "react";
import classes from "../../styles/GetInTouch/GetInTouch.module.scss";
import CustomSelect from "./customSelect";
import emailjs from "emailjs-com";

const GetInTouch: React.FC<{ isOpen: boolean; onClose: any }> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false); // State for success message
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  if (!isOpen) return null;

  const eventTypeOptions = [
    { value: "Creator", label: "Creator" },
    { value: "Business", label: "Business" },
    { value: "Others", label: "Others" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  // Update this function to accept both `name` and `value`
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, eventType: "" }));
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", eventType: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }

    if (!formData.eventType.trim()) {
      newErrors.eventType = "Event type is required.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true); // Start loading

    // Sending email with EmailJS
    console.log("formData", formData);

    emailjs
      .send(
        "service_gnfvoeq", // Replace with your EmailJS service ID
        "template_iff5gaw", // Replace with your EmailJS template ID
        formData,
        "_hT2EKth4ZuCdFPPO" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setIsSuccess(true); // Show success message
          setIsLoading(false); // Stop loading
          setFormData({ name: "", email: "", eventType: "", message: "" }); // Reset form
          setTimeout(() => {
            setIsSuccess(false);
            onClose();
          }, 5000);
        },
        (error) => {
          console.error("Failed to send email. Error: ", error.text);
          setIsLoading(false); // Stop loading
          // Optionally, handle error notification
        }
      );
  };

  // Dynamically change the label text based on selected eventType
  const getMessageLabel = () => {
    if (formData.eventType === "Creator") {
      return "PLEASE SHARE YOUR SOCIAL PROFILE LINKS ALONG WITH A MESSAGE*";
    }
    return "YOUR MESSAGE FOR US";
  };

  return (
    <div className={classes.modalBackdrop} onClick={onClose}>
      <div
        className={`${classes.modal} ${
          isSuccess ? "modal-small-screen" : "modal-default"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={classes.closeButton} onClick={onClose}>
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 28.5007L28.5 9.50073"
              stroke="black"
              stroke-width="2"
              stroke-linecap="square"
            />
            <path
              d="M28.5 28.5007L9.5 9.50073"
              stroke="black"
              stroke-width="2"
              stroke-linecap="square"
            />
          </svg>
        </button>
        {isSuccess ? (
          <div className={classes.success_message}>
            <p className={classes.heading}> Thank you! </p>{" "}
            <p className={classes.dec}>
              Your message has been sent successfully.
            </p>
          </div>
        ) : (
          <div className={classes.modal__content}>
            <p className={classes.heading}>Let's get in touch</p>
            <p className={classes.dec}>
              Our team at Small Screen is here to listen, engage, and transform
              your business into storytelling havens. Let’s embark on a success
              voyage together.
            </p>

            <form className={classes.form} onSubmit={handleSubmit}>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && (
                <p className={classes.error_message}>{errors.name}</p>
              )}

              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && (
                <p className={classes.error_message}>{errors.email}</p>
              )}

              <label htmlFor="touch">
                You’re getting in touch on behalf of a...
              </label>
              <div style={{ position: "relative" }}>
                <CustomSelect
                  name="eventType"
                  placeholder=""
                  options={eventTypeOptions}
                  value={formData.eventType}
                  onChange={handleSelectChange} // Updated handler
                  isTyping={false}
                  errors={errors.eventType}
                />
                {errors.eventType && (
                  <p className={classes.error_message}>{errors.eventType}</p>
                )}
              </div>

              <label className={classes.textarea_label} htmlFor="message">
                {getMessageLabel()}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {errors.message && (
                <p className={classes.error_message}>{errors.message}</p>
              )}

              <button
                type="submit"
                className={classes.submitButton}
                disabled={isLoading}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetInTouch;
