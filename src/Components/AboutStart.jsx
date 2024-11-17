import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import web11 from "../assets/Img/11.webp";
import web12 from "../assets/Img/12.webp";
import web13 from "../assets/Img/13.webp";
import web14 from "../assets/Img/14.webp";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const AboutStart = () => {
  const { t, i18n } = useTranslation();
  const isRealyDark = useSelector((state) => state.mode.isDark);

  // Array to track visibility of each row
  const [rowVisibility, setRowVisibility] = useState([
    false,
    false,
    false,
    false,
  ]);

  // References for observing the rows
  const rowRefs = useRef([]);

  // Animation variants
  const textAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageAnimationRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageAnimationLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  // Intersection Observer to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          setRowVisibility((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
          observer.unobserve(entry.target);
        }
      });
    });

    rowRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Determine the correct rounded class based on language direction
  const isRTL = i18n.language === "ar";
  const roundedClass = isRTL ? "rtl-rounded" : "ltr-rounded";
  const roundedClass2 = isRTL ? "rtl-rounded-divl" : "ltr-rounded-divl";

  // Define styles for dark and light mode
  const headingStyle = isRealyDark
    ? {
        // background: "linear-gradient(to right, #8eeffd, #1e3351)",
        WebkitBackgroundClip: "text",
        color: "white",
      }
    : {
        WebkitBackgroundClip: "text",
        color: "#030b3d",
      };

  const paragraphStyle = isRealyDark
    ? { color: "#d8faff" }
    : { color: "#030b3d" };

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <div className="container-fluid about ">
        <div className="container py-5">
          {/* First Row */}
          <div
            className="row g-5 align-items-center"
            ref={(el) => (rowRefs.current[0] = el)}
            data-index={0}
          >
            <div className="col-xl-7">
              <motion.div
                initial="hidden"
                animate={rowVisibility[0] ? "visible" : "hidden"}
                variants={textAnimation}
                transition={{ duration: 1.2 }}
              >
                <h1 className="display-5 mb-4" style={headingStyle}>
                  {t("aboutPage.title1")}
                </h1>
                <p className="mb-4" style={paragraphStyle}>
                  {t("aboutPage.text1")}
                </p>
              </motion.div>
            </div>
            <div className="col-xl-5">
              <motion.div
                initial="hidden"
                animate={rowVisibility[0] ? "visible" : "hidden"}
                variants={imageAnimationRight}
                transition={{ duration: 1.2 }}
              >
                <div className={`bg-primary rounded-divf ${roundedClass}`}>
                  <img src={web11} className="img-fluid rounded w-100" alt="" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Second Row */}
          <div
            className="row g-5 align-items-center my-2"
            ref={(el) => (rowRefs.current[1] = el)}
            data-index={1}
          >
            <div className="col-xl-5">
              <motion.div
                initial="hidden"
                animate={rowVisibility[1] ? "visible" : "hidden"}
                variants={imageAnimationLeft}
                transition={{ duration: 1.2 }}
              >
                <div className={`bg-primary rounded-divl ${roundedClass2}`}>
                  <img src={web12} className="img-fluid rounded w-100" alt="" />
                </div>
              </motion.div>
            </div>
            <div className="col-xl-7">
              <motion.div
                initial="hidden"
                animate={rowVisibility[1] ? "visible" : "hidden"}
                variants={textAnimation}
                transition={{ duration: 1.2 }}
              >
                <h1 className="display-5 mb-4" style={headingStyle}>
                  {t("aboutPage.title2")}
                </h1>
                <p className="mb-4" style={paragraphStyle}>
                  {t("aboutPage.text2")}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Third Row */}
          <div
            className="row g-5 align-items-center my-2"
            ref={(el) => (rowRefs.current[2] = el)}
            data-index={2}
          >
            <div className="col-xl-7">
              <motion.div
                initial="hidden"
                animate={rowVisibility[2] ? "visible" : "hidden"}
                variants={textAnimation}
                transition={{ duration: 1.2 }}
              >
                <h1 className="display-5 mb-4" style={headingStyle}>
                  {t("aboutPage.title3")}
                </h1>
                <p className="mb-4" style={paragraphStyle}>
                  {t("aboutPage.text3")}
                </p>
              </motion.div>
            </div>
            <div className="col-xl-5">
              <motion.div
                initial="hidden"
                animate={rowVisibility[2] ? "visible" : "hidden"}
                variants={imageAnimationRight}
                transition={{ duration: 1.2 }}
              >
                <div className={`bg-primary rounded-divf ${roundedClass}`}>
                  <img src={web13} className="img-fluid rounded w-100" alt="" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Fourth Row */}
          <div
            className="row g-5 align-items-center my-2"
            ref={(el) => (rowRefs.current[3] = el)}
            data-index={3}
          >
            <div className="col-xl-5">
              <motion.div
                initial="hidden"
                animate={rowVisibility[3] ? "visible" : "hidden"}
                variants={imageAnimationLeft}
                transition={{ duration: 1.2 }}
              >
                <div className={`bg-primary rounded-divl ${roundedClass2}`}>
                  <img src={web14} className="img-fluid rounded w-100" alt="" />
                </div>
              </motion.div>
            </div>
            <div className="col-xl-7">
              <motion.div
                initial="hidden"
                animate={rowVisibility[3] ? "visible" : "hidden"}
                variants={textAnimation}
                transition={{ duration: 1.2 }}
              >
                <h1 className="display-5 mb-4" style={headingStyle}>
                  {t("aboutPage.title4")}
                </h1>
                <p className="mb-4" style={paragraphStyle}>
                  {t("aboutPage.text4")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStart;
