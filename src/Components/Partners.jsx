import React from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import cisco from "../assets/Img/keyPartner/cisco.png";
import airtable from "../assets/Img/keyPartner/airtable.png";
import aruba from "../assets/Img/keyPartner/aruba.png";
import axis from "../assets/Img/keyPartner/axis.png";
import bosch from "../assets/Img/keyPartner/bosch.png";
import canovate from "../assets/Img/keyPartner/canovate.png";
import commscope from "../assets/Img/keyPartner/commscope.png";
import corning from "../assets/Img/keyPartner/corning.png";
import optimus from "../assets/Img/keyPartner/optimus.jpg";
import dell from "../assets/Img/keyPartner/dell.png";
import eaton from "../assets/Img/keyPartner/eaton.png";
import fortienet from "../assets/Img/keyPartner/fortienet.png";
import hanwha from "../assets/Img/keyPartner/hanwha.png";
import honywell from "../assets/Img/keyPartner/honywell.png";
import hp from "../assets/Img/keyPartner/hp.png";
import huawei from "../assets/Img/keyPartner/huawei.png";
import iso from "../assets/Img/keyPartner/iso.webp";
import johnson from "../assets/Img/keyPartner/johnson.png";
import microsoft from "../assets/Img/keyPartner/microsoft.webp";
import pmi from "../assets/Img/keyPartner/pmi.webp";
import procore from "../assets/Img/keyPartner/procore.webp";
import rm from "../assets/Img/keyPartner/rm.webp";
import samsung from "../assets/Img/keyPartner/samsung.png";
import sangfor from "../assets/Img/keyPartner/sangfor.jpg";
import schneider from "../assets/Img/keyPartner/schneider.png";
import smartsheet from "../assets/Img/keyPartner/smartsheet.png";
import trend from "../assets/Img/keyPartner/trend.png";


import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "./Header.css";
const Partners = () => {
  const { t } = useTranslation();

  const isRealyDark = useSelector((state) => state.mode.isDark);
  const images = [cisco, airtable, aruba, axis, bosch, canovate, commscope, corning, optimus,
  dell, eaton, fortienet, hanwha, honywell, hp, huawei, iso, johnson, microsoft, pmi, procore,
  rm, samsung, sangfor, schneider, smartsheet, trend];
  const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;

  return (
    <div className="container">
      <h1
        className={`text-center mt-5 mb-5 ${
          isRealyDark ? "dark-mode-text" : "light-mode-text"
        }`}
      >
        {t("partner")}
      </h1>
      <div className="d-flex justify-content-center mb-5">
        <div
          // className={`ticker-container ${
          //   isRealyDark ? "dark-mode-bg" : "light-mode-bg"
          // }`}
          style={{ width: "90vw" }}
        >
          {" "}
          <Marquee velocity={24} minScale={0.7} resetAfterTries={200}>
            {images.map((image, index) => (
              <LogoContainer key={index}>
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "2vw",
                    height: "100px",
                    width: "200px",
                    marginRight: "20px", // Add 20px space between images
                    boxShadow: isRealyDark
                      ? "0 4px 10px rgba(0, 0, 0, 0.7)"
                      : "0 4px 10px rgba(0, 0, 0, 0.1)", // Dynamic shadow based on mode
                  }}
                ></div>
              </LogoContainer>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;
