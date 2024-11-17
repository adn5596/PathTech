import React, { useRef } from "react";
import CarouselImg from "../../assets/Img/path/Low Current Systems.png"; // Adjust the image path as needed
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { motion, useInView } from "framer-motion";
import "./Aabout.css"; // Ensure you include this CSS file
import ShinyButton from "../ShinyButton/ShinyButton";
            

const Aabout = () => {
  const { t, i18n } = useTranslation();
  const isRealyDark = useSelector((state) => state.mode.isDark);

  // Reference for the section to track visibility
  const sectionRef = useRef(null);

  // Check if the section is in view
  const inView = useInView(sectionRef, { once: true, amount: 0.2 }); // Trigger when 20% of the section is visible

  // Slide in from the left for text
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  // Slide in from the right for the image
  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className="container my-5"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      ref={sectionRef} // Attach the ref to the section
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Trigger animation based on inView
    >
      <div className="row align-items-center">
        {/* Text Column */}
        <motion.div className="col-md-6" variants={slideInLeft}>
          <h2
            className={`mb-4 ${
              isRealyDark
                ? "dark-mode-text-gradient"
                : "light-mode-text-gradient"
            }`}
          >
            {t("about2.AboutPathTECH")}
          </h2>
          <p
            className={`${
              isRealyDark
                ? "dark-mode-text-gradient"
                : "light-mode-text-gradient"
            }`}
          >
            {t("about2.snip1")}
          </p>
          <p
            className={`${
              isRealyDark
                ? "dark-mode-text-gradient"
                : "light-mode-text-gradient"
            }`}
          >
            {t("about2.snip2")}
          </p>

          {/* <ul>
            <li
              className={`${
                isRealyDark
                  ? "dark-mode-text-gradient"
                  : "light-mode-text-gradient"
              }`}
            >
              {t("about2.li1")}
            </li>
            <li
              className={`${
                isRealyDark
                  ? "dark-mode-text-gradient"
                  : "light-mode-text-gradient"
              }`}
            >
              {t("about2.li2")}
            </li>
            <li
              className={`${
                isRealyDark
                  ? "dark-mode-text-gradient"
                  : "light-mode-text-gradient"
              }`}
            >
              {t("about2.li3")}
            </li>
            <li
              className={`${
                isRealyDark
                  ? "dark-mode-text-gradient"
                  : "light-mode-text-gradient"
              }`}
            >
              {t("about2.li4")}
            </li>
          </ul> */}
          <ShinyButton />
        </motion.div>

        {/* Background Image Column */}
        <motion.div
          className="col-md-6"
          variants={slideInRight}
          animate={{
            y: [0, -10, 0], // Simulates a slow vibration: moves up by 10px and then back down
          }}
          transition={{
            duration: 4, // Slow movement (8 seconds for one full cycle)
            repeat: Infinity, // Loop the animation infinitely
            ease: "easeInOut", // Smooth transition between up and down
          }}
        >
          <div
            className="w-100 rounded"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 0), rgba(25, 25, 25, 0.5)), url(${CarouselImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px", // Adjust height based on your need
              borderRadius: "10px",
            }}
          ></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Aabout;
