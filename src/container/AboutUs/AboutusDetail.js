import React from "react";
import "./AboutusDetail.css";
import { images } from "../../constants";

const AboutusDetail = () => {
  return (
    <div className="about-main">
      <div className="about-title">
        <h3 className="detailHeadText headtext__cormorant">
          Our ingredients are selected for their freshness and the work ethic of
          our employees
        </h3>
        <div className="paragraph">
          {" "}
          <p className="detailpar">
            For us, cooking in a green and transparent way means making you
            taste the best of nature while awakening your environmental
            awareness. So that we can all one day eat ethically, our mission is
            to be part of the solution.
          </p>
        </div>
      </div>
      <div className="about-head">
        <div className="head_img">
          <img src={images.certificate} alt="certificate" />
        </div>
        <div className="head_info">
          <h2 className="headtext__cormorant">Halal certificate</h2>
          <p className="p__p">
            The most distinguishing feature about our restaurant is the policy
            of using only halal products. Since the main product of our menu is
            meat, the restaurant admistration do their best to buy and use
            'halal-certified-meat' only whether it is lamb, beef or chicken.
            Besides meat, other ingredients, including cooking oil, are
            cautiously checked before usage. In case of suspiciousness by
            consumers we are undoubtedly ready to show other meat certificates
            as well. We work hard to source quality ingredients, produced by
            quality humans. And believe us, it tastes good.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutusDetail;
