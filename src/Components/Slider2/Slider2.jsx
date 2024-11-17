import React, { useState, useEffect } from "react";
import "./Slider2.css"; // Import the slider CSS
import { useTranslation } from "react-i18next"; // Import the translation hook
import ShinyButton from "../ShinyButton/ShinyButton";

const Slider2 = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  // Slides data
  const slides = [
    {
      title: t("value.value1"),
      text: t("value.valueText1"),
    },
    {
      title: t("value.value2"),
      text: t("value.valueText2"),
    },
    {
      title: t("value.value3"),
      text: t("value.valueText3"),
    },
  ];

  const [active, setActive] = useState(0); // Initialize the active slide at index 0
  const [expanded, setExpanded] = useState(false); // State to track if the text is expanded

  // Auto-play interval duration (in milliseconds)
  const autoPlayInterval = 3000; // 3 seconds

  // Function to calculate and apply styles for each slide
  const loadShow = () => {
    const items = document.querySelectorAll(".slider .item2");
    let stt = 0;

    // Active slide style
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;

    // Style for slides to the right of the active slide
    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    // Style for slides to the left of the active slide
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  // Effect hook to apply styles whenever active slide changes
  useEffect(() => {
    loadShow();
  }, [active]);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [active]);

  // Handle the next slide
  const nextSlide = () => {
    setActive((prevActive) =>
      prevActive + 1 < slides.length ? prevActive + 1 : 0
    );
    setExpanded(false); // Collapse the text when moving to the next slide
  };

  // Handle the previous slide
  const prevSlide = () => {
    setActive((prevActive) =>
      prevActive - 1 >= 0 ? prevActive - 1 : slides.length - 1
    );
    setExpanded(false); // Collapse the text when moving to the previous slide
  };

  // Toggle "Read More" functionality
  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  // Function to truncate text if it's too long
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div key={index} className="item2">
          <h4>{slide.title}</h4>
          <p className="mb-4">
            {expanded ? slide.text : truncateText(slide.text, 100)}{" "}
            {/* Limit text to 100 characters */}
          </p>
          {slide.text.length > 100 && ( // Show "Read More" button only if text is longer than 100 characters
            <ShinyButton />
          )}
        </div>
      ))}

      <button id="next2" onClick={nextSlide}>
        &gt;
      </button>
      <button id="prev2" onClick={prevSlide}>
        &lt;
      </button>
    </div>
  );
};

export default Slider2;
