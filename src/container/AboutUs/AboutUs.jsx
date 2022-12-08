import React from "react";
import { Link } from "react-router-dom";

import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center"></div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Our restaurant specializes in serving halal uzbek traditional cuisines
          that make your mouth water!
        </p>
        <Link to="/aboutusdetail" className="custom__button">
          Learn More
        </Link>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Firdavs was founded in 2018 in Jeonju, South Korea to meet customers'
          demand for halal products
        </p>
        <Link to="/faqs" className="custom__button">
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

export default AboutUs;
