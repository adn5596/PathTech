import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux"; // Import to access Redux state
import { styles } from "../styles"; // Assuming you have custom styles here
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    // Access the isRealyDark state from Redux
    const isRealyDark = useSelector((state) => state.mode.isDark);

    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`container-lg ${styles.padding} mx-auto position-relative ${
          isRealyDark ? "dark-mode-bg" : "light-mode-bg"
        }`}
      >
        {/* <span className="hash-span" id={idName}>
          &nbsp;
        </span> */}

        {/* Conditionally apply styles based on dark or light mode */}
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
