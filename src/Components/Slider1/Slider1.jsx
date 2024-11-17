import React, { useState, useEffect, useRef } from "react";
import "./Slider1.css";
import img1 from "../../assets/Img/IMG-20240906-WA0029.jpg";
import img2 from "../../assets/Img/13.webp";
import img3 from "../../assets/Img/path/Tenders & Bids.png";
import img4 from "../../assets/Img/ai.jpg";

const Slider1 = () => {
  const items = [
    {
      img: img1,
      title: "Welcome To PathTech",
      description: "Empowering Your Business with Technology",
    },
    {
      img: img2,
      title: "Welcome To PathTech",
      description: "Empowering Your Business with Technology",
    },
    {
      img: img3,
      title: "Welcome To PathTech",
      description: "Empowering Your Business with Technology",
    },
    {
      img: img4,
      title: "Welcome To PathTech",
      description: "Empowering Your Business with Technology",
    },
  ];

  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 5000; // Auto-play every 5 seconds

  // Function to handle slider movement
  const showSlider = (type) => {
    const sliderItems = sliderRef.current?.querySelectorAll(".item");
    const thumbnailItems = thumbnailRef.current?.querySelectorAll(".item");

    if (!sliderItems || !thumbnailItems) return;

    if (type === "next") {
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailRef.current.appendChild(thumbnailItems[0]);
      if (carouselRef.current) {
        carouselRef.current.classList.add("next");
      }
    } else {
      sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
      if (carouselRef.current) {
        carouselRef.current.classList.add("prev");
      }
    }

    // Remove transition class after timeRunning
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove("next");
        carouselRef.current.classList.remove("prev");
      }
    }, timeRunning);
  };

  // Set up event listeners for the next and prev buttons
  useEffect(() => {
    const handleNextClick = () => {
      showSlider("next");
    };

    const handlePrevClick = () => {
      showSlider("prev");
    };

    if (nextRef.current && prevRef.current) {
      nextRef.current.addEventListener("click", handleNextClick);
      prevRef.current.addEventListener("click", handlePrevClick);
    }

    // Auto-play logic using setInterval
    const autoNextInterval = setInterval(() => {
      handleNextClick(); // Automatically trigger the "next" click every 5 seconds
    }, timeAutoNext);

    // Cleanup on unmount (clear the interval and event listeners)
    return () => {
      clearInterval(autoNextInterval);
      if (nextRef.current) {
        nextRef.current.removeEventListener("click", handleNextClick);
      }
      if (prevRef.current) {
        prevRef.current.removeEventListener("click", handlePrevClick);
      }
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      {/* List Item */}
      <div className="list" ref={sliderRef}>
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="des">{item.description}</div>
              {/* <div className="buttons">
                <button>SEE MORE</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="thumbnail" ref={thumbnailRef}>
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt={item.title} />
            {/* <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div> */}
          </div>
        ))}
      </div>

      {/* Next/Prev Arrows */}
      <div className="arrows">
        <button id="prev" ref={prevRef}>
          {"<"}
        </button>
        <button id="next" ref={nextRef}>
          {">"}
        </button>
      </div>

      {/* Time Running (optional, not displayed in the HTML example) */}
      <div className="time"></div>
    </div>
  );
};

export default Slider1;
