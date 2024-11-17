import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../../assets/Img/path/Project Management Consulting.png";
import img2 from "../../assets/Img/path/PMO Setup.png";
import img3 from "../../assets/Img/path/Tenders & Bids.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./Services.css"; // Include CSS for gradient text

const ServicesSection = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { t, i18n } = useTranslation();
  const isRealyDark = useSelector((state) => state.mode.isDark);

  const serv = [
    {
      id: 1,
      subtitle: "detailsol1",
      title: "serv1",
      img: img1,
    },
    {
      id: 2,
      subtitle: "detailsol2",
      title: "serv2",
      img: img2,
    },
    {
      id: 3,
      subtitle: "detailsol3",
      title: "serv3",
      img: img3,
    },
  ];

  const selectedService = serv.find((item) => item.id === selectedId);

  return (
    <>
      <motion.h1
        className={`text-center mt-4 mb-5 ${
          isRealyDark ? "dark-mode-text" : "light-mode-text"
        }`}
      >
        {t("service.OurService")}
      </motion.h1>
      <motion.p
        className={`pb-4 text-center ${
          isRealyDark ? "dark-mode-text" : "light-mode-text"
        }`}
      >
        {t("service.title")}
      </motion.p>
      <div
        className="d-flex justify-content-center"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            padding: "10px",
            backgroundColor: "transparent", // No background for parent div
          }}
        >
          {serv.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              style={{
                cursor: "pointer",
                padding: "10px",
                borderRadius: "20px",
                width: "25vw",
                marginBottom: "10px",
                boxShadow: isRealyDark
                  ? "0 1rem 3rem rgba(0, 0, 0, .5)"
                  : "0 1rem 3rem rgba(0, 0, 0, .175)", // Dynamic shadow
                background: isRealyDark
                  ? "linear-gradient(135deg, #8eeffd, #1e3351, #1e3390)" // Gradient in dark mode
                  : "#fff", // White background in light mode
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={item.img}
                alt={t(`service.${item.title}`)}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <motion.h3
                className={`${
                  isRealyDark ? "dark-mode-text" : "light-mode-text"
                }`}
                style={{ paddingTop: "1vw" }}
              >
                {t(`service.${item.title}`)}
              </motion.h3>
              <motion.p
                className={`${
                  isRealyDark ? "dark-mode-text" : "light-mode-text"
                }`}
              >
                {selectedId === item.id
                  ? t(`service.${item.subtitle}`) // Show full text if selected
                  : t(`service.${item.subtitle}`).substring(0, 50) + "..."}{" "}
                {/* Show 50 characters if not selected */}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedService && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backdropFilter: "blur(5px)",
                  backgroundColor: isRealyDark
                    ? "rgba(0, 0, 0, 0.8)"
                    : "rgba(0, 0, 0, 0.1)", // Dynamic background
                  zIndex: 10,
                }}
                onClick={() => setSelectedId(null)} // Close when clicking on background
              />

              <motion.div
                layoutId={selectedId}
                style={{
                  position: "fixed",
                  top: "25%",
                  left: "30%",
                  transform: "translate(-50%, -50%)",
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  backgroundColor: isRealyDark ? "#222" : "#fff", // Dynamic background
                  zIndex: 11,
                  width: "40vw",
                  boxShadow: isRealyDark
                    ? "0 1rem 3rem rgba(0, 0, 0, .5)"
                    : "0 1rem 3rem rgba(0, 0, 0, .175)", // Dynamic shadow
                }}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
              >
                <motion.img
                  src={selectedService.img}
                  alt={t(`service.${selectedService.title}`)}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <motion.h2
                  className={`${
                    isRealyDark ? "dark-mode-text" : "light-mode-text"
                  }`}
                  style={{ paddingTop: "1vw" }}
                >
                  {t(`service.${selectedService.title}`)}
                </motion.h2>
                <motion.p
                  className={`${
                    isRealyDark ? "dark-mode-text" : "light-mode-text"
                  }`}
                >
                  {t(`service.${selectedService.subtitle}`)}
                </motion.p>
                <motion.button
                  onClick={() => setSelectedId(null)}
                  style={{
                    marginTop: "10px",
                    padding: "5px 10px",
                    cursor: "pointer",
                    border: "none",
                    backgroundColor: isRealyDark ? "#0056b3" : "#007bff", // Dynamic button color
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ServicesSection;
