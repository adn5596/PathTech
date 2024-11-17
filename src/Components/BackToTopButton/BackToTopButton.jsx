import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Optional if using FontAwesome icons
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // Optional if using FontAwesome icons
import "./BackToTopButton.css"; // Import CSS for styling

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Scroll event listener to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      // Show the button if scrolled down 300 pixels
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <>
      {showButton && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" /> {/* Optional */}
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
