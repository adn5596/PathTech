import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { solutionn } from "../constants"; // Ensure you're importing the solution data correctly
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";


const SolutionCard = ({ solutionn }) => {
  const { t } = useTranslation();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: " linear-gradient(to right, #105abf, #030b3d)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: "#e1e1e1" }} // Icon background color
      icon={
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <img
            src={solutionn.icon}
            alt={t(`solutionn.${solutionn.title}`)} // Correctly translate the title
            className="w-75 h-75 object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white fw-bold fs-4">
          {t(`solutionn.${solutionn.title}`)}
        </h3>
      </div>

      <ul className="mt-3 list-unstyled ps-3">
        <li className="text-white-100 fs-6 ps-1">
          {t(`solutionn.${solutionn.details}`)}
        </li>
      </ul>
    </VerticalTimelineElement>
  );
};

const SolSection = () => {
  const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };

  const { t } = useTranslation();
  const isRealyDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <h1
          className={`text-center mt-5 mb-5 ${
            isRealyDark ? "dark-mode-text" : "light-mode-text"
          }`}
        >
          {t("solution.OurSolutions")}
        </h1>
        <p className={`${styles.sectionSubText} text-center`}>
          {" "}
          {t("solution.title")}
        </p>{" "} */}
        <motion.h1
          className={`text-center mt-4 mb-5 ${
            isRealyDark ? "dark-mode-text" : "light-mode-text"
          }`}
        >
          {t("solutionn.OurSolutions")}
        </motion.h1>
        <motion.p
          className={`pb-4 text-center ${
            isRealyDark ? "dark-mode-text" : "light-mode-text"
          }`}
        >
          {t("solutionn.title")}
        </motion.p>
      </motion.div>

      <div className="mt-5 d-flex flex-column">
        <VerticalTimeline>
          {solutionn.map((sol, index) => (
            <SolutionCard key={`solutionn-${index}`} solutionn={sol} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SolSection;
