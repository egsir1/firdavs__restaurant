import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Low cost. High quality. Dozens of flavors under one roof where every
        flavor tells a story.
      </p>
      <Link to="/menu" className="custom__button">
        Explore Menu
      </Link>
    </div>

    <div className="app__wrapperr_img">
      <img src={images.uzbekfood} alt="welcome" />
    </div>
  </div>
);

export default Header;
