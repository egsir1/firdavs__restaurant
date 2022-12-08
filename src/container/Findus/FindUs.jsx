import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          608 Baekje-daero, Deokjin-gu, Jeonju-si, Jeollabuk-do, South Korea
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Sun: 10:00 Am - 10:30 Pm</p>
        <p className="p__opensans">
          No Days Off, The only closing time is Fri: 13:00 Pm - 14:00 Pm for
          Salatul-Jumu'ah (Friday Prayer)
        </p>
      </div>
      <a
        href="http://kko.to/S9MwzldZEK"
        target="_blank"
        rel="noopener noreferrer"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.lemon} style={{ borderRadius: "10px" }} alt="lemon" />
    </div>
  </div>
);

export default FindUs;
