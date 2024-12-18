import React from "react";
import "./Header.css";

import team1 from "../assets/Img/team-1.jpg";
import team2 from "../assets/Img/team-2.jpg";
import team3 from "../assets/Img/team-3.jpg";
import team4 from "../assets/Img/team-4.jpg";
import { useTranslation } from "react-i18next";
const Team = () => {
  const { t, i18n } = useTranslation();
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="container-fluid team pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h4 className="text-primary">Our Team</h4>
            <h1 className="display-5 mb-4">Meet Our Advisers</h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src={team1} className="img-fluid" alt="" />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">CEO</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src={team2} className="img-fluid" alt="" />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">QA Engineer</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src={team3} className="img-fluid" alt="" />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">Developer</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src={team4} className="img-fluid" alt="" />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">Designer</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
