import React from "react";
import { useSelector } from "react-redux";
import logo1 from "../../assets/Img/pathteachlogo.png"; // Light mode logo
import logo2 from "../../assets/Img/pathteachlogo-whitecolor.png"; // Dark mode logo
import "./Footer.css"; // Include CSS for gradient text
import { useTranslation } from "react-i18next";

const Footer = () => {
  const isRealyDark = useSelector((state) => state.mode.isDark);
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`container-fluid footer pageRTL py-3 ${
        isRealyDark ? "dark-mode-footer" : "light-mode-footer"
      }`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      data-wow-delay="0.2s"
      style={{
        backdropFilter: "blur(10px)", // Adding blur effect to the background
        backgroundColor: "rgb(130 187 233 / 29%) ", // Transparent background
        // color: isRealyDark ? "#fff" : "#ff5", // Text color based on theme
      }}
    >
      <div
        className={`container py-1 border-start-0 border-end-0 ${
          isRealyDark ? "dark-mode-border" : "light-mode-border"
        }`}
      >
        <div className="row g-5">
          <div className="w-25">
            <div className="footer-item">
              <a href="index.html" className="p-0">
                <img
                  src={isRealyDark ? logo2 : logo1}
                  alt="Logo"
                  style={{ width: "10vw", height: "10vw" }}
                />
              </a>
            </div>
          </div>

          <div className="w-75 d-flex justify-content-around">
            <div className="footer-item d-flex justify-content-center">
              <div className="align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center">
                  <i
                    className={`fa fa-phone-alt ${
                      isRealyDark ? "text-light" : "text-dark"
                    } me-3`}
                  ></i>
                  <p
                    className={`mb-0 ${
                      isRealyDark ? "text-light" : "text-dark"
                    }`}
                  >
                    (+966) 11 242 8436
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <i
                    className={`fa fa-fax ${
                      isRealyDark ? "text-light" : "text-dark"
                    } me-3`}
                  ></i>
                  <p
                    className={`mb-0 ${
                      isRealyDark ? "text-light" : "text-dark"
                    }`}
                  >
                    (+966) 11 265 3066
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              {" "}
              <div className="d-flex align-items-center">
                <i
                  className={`fas fa-map-marker-alt ${
                    isRealyDark ? "text-light" : "text-dark"
                  } me-3`}
                ></i>
                <p
                  className={`mb-0 ms-n3 ${
                    isRealyDark ? "text-light" : "text-dark"
                  }`}
                >
                  Malaz, Riyadh, Saudi Arabia
                </p>
              </div>
              <div className="d-flex align-items-center">
                <i
                  className={`fas fa-envelope ${
                    isRealyDark ? "text-light" : "text-dark"
                  } me-3`}
                ></i>
                <p
                  className={`mb-0 ${isRealyDark ? "text-light" : "text-dark"}`}
                >
                  info@ptech-sa.com
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <a
                className={`btn btn-sm-square rounded-circle me-3 ${
                  isRealyDark ? "btn-dark" : "btn-light"
                }`}
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className={`btn btn-sm-square rounded-circle me-3 ${
                  isRealyDark ? "btn-dark" : "btn-light"
                }`}
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className={`btn btn-sm-square rounded-circle me-3 ${
                  isRealyDark ? "btn-dark" : "btn-light"
                }`}
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className={`btn btn-sm-square rounded-circle me-0 ${
                  isRealyDark ? "btn-dark" : "btn-light"
                }`}
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
