import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faCheck,
  faHourglass,
  faLaughBeam,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // استخدم مكتبة مراقبة التمرير
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Counter = () => {
  const { t, i18n } = useTranslation();
  const isRealyDark = useSelector((state) => state.mode.isDark);

  const { ref, inView } = useInView({
    triggerOnce: true, // لتفعيل الحركة مرة واحدة فقط عند الوصول
    threshold: 0.2, // نسبة القسم التي يجب أن تكون مرئية لتفعيل الحركة
  });

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.3 }, // تأخير الظهور لكل عنصر
    }),
  };

  return (
    <div
      className="container my-3"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* نربط القسم بـ ref للتحقق من الظهور في التمرير */}
      <motion.section className=" " ref={ref}>
        <div className=" d-flex justify-content-around align-items-center flex-wrap my-5 py-3">
          {[
            {
              icon: faHourglass,
              count: 25,
              suffix: "+",
              title: t("count.count1"),
            },
            {
              icon: faCheck,
              count: 1250,
              suffix: "+",
              title: t("count.count2"),
            },
            {
              icon: faLaughBeam,
              count: 550,
              suffix: "+",
              title: t("count.count3"),
            },
          ].map((item, index) => (
            <motion.div
              className="counter-item d-flex justify-content-center flex-column align-items-center"
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              style={{
                color: isRealyDark ? "#030b3d" : "#d8faff", // Text color for title
              }}
            >
              <div
                style={{
                  // background: isRealyDark
                  //   ? "linear-gradient(90deg, #1e3351, #8eeffd)" // Dark mode gradient
                  //   : "linear-gradient(90deg, #105abf, #d8faff)", // Light mode gradient
                  // borderRadius: "50%", // Make it round
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "60px", // Adjust the size of the container
                  height: "60px",
                }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  size="3x" // You can keep this as is for the icon size
                  style={{
                    color: isRealyDark ? "#d8faff" : "#030b3d", // Make icon transparent to show gradient
                    WebkitBackgroundClip: "text", // Clip the background to text
                    WebkitTextFillColor: "transparent", // Fill the text with transparent
                  }}
                />
              </div>

              <CountUp
                end={item.count}
                duration={10}
                suffix={item.suffix}
                style={{
                  color: isRealyDark ? "#d8faff" : "#030b3d", // Counter color
                  fontSize: "2.5rem", // Increase the font size here
                  fontWeight: "bold", // Optional: make the counter bold
                }}
              />
              <h4 style={{ color: isRealyDark ? "#d8faff" : "#030b3d",
                                    fontFamily: 'Cocon',

               }}>
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Counter;
