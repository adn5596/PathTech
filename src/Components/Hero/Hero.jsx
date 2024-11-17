import React from "react";
import CarouselImg from "../../assets/Img/pathtechb.g-12.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./Hero.css"; // Make sure to include a CSS file for the gradient styles

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRealyDark = useSelector((state) => state.mode.isDark);

  return (
    <>
      <div
        className="w-100 position-relative d-flex align-items-center rounded "
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 0), rgba(85, 85, 85, 0)), url(${CarouselImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vw",
          borderRadius: "2vw",
          marginTop: "3.5rem",
        }}
      >
        <div className="col-12 animated fadeInUp">
          <div className="text-center">
            <h4
              className={`text-primary text-uppercase fw-bold mb-4 ${
                isRealyDark
                  ? "dark-mode-text-gradient"
                  : "light-mode-text-gradient"
              }`}
            >
              {t("about.h1")}
            </h4>
            <h1
              className={`display-4 text-uppercase text-white mb-4 ${
                isRealyDark
                  ? "dark-mode-text-gradient"
                  : "light-mode-text-gradient"
              }`}
            >
              {t("about.title")}
            </h1>
            <p
              className={`mb-5 fs-5 ${
                isRealyDark
                  ? "dark-mode-text-gradient"
                  : "light-mode-text-gradient"
              }`}
            >
              {t("about.title2")}
            </p>

            <div className="d-flex align-items-center justify-content-center">
              <h2
                className={`me-2 ${
                  isRealyDark
                    ? "dark-mode-text-gradient"
                    : "light-mode-text-gradient"
                }`}
              >
                {t("about.follow")}:
              </h2>
              <div className="d-flex justify-content-end ms-2">
                <a
                  className="btn btn-md-square btn-light rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-md-square btn-light rounded-circle mx-2"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-md-square btn-light rounded-circle mx-2"
                  href=""
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-md-square btn-light rounded-circle ms-2"
                  href=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
