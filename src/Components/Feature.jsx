import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
const Feature = () => {
  const { t, i18n } = useTranslation();
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="container-fluid feature pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <br />
            <h1 className="display-5 mb-4 text-primary">{t("value.value")}</h1>
            <p className="mb-0">{t("value.valueText")}</p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="feature-itemf p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-chart-line fa-4x text-primary"></i>
                </div>
                <h4>{t("value.value1")}</h4>
                <p className="mb-4">{t("value.valueText1")}</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="feature-item p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-university fa-4x text-primary"></i>
                </div>
                <h4>{t("value.value2")}</h4>
                <p className="mb-4">{t("value.valueText2")}</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="feature-iteml p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-file-alt fa-4x text-primary"></i>
                </div>
                <h4>{t("value.value3")}</h4>
                <p className="mb-4">{t("value.valueText3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
