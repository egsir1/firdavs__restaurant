import React from "react";

import "./SpecialMenu.css";
import { images } from "../../constants";
import { Link } from "react-router-dom";

const SpecialMenu = () => (
  <div className="app__specialMenu app__bg flex__center">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Menu that fits your palate</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="menu-pages">
        <img src={images.p1} alt="page-1" />
      </div>
      <div className="menu-pages">
        <img src={images.p2} alt="page-1" />
      </div>
      <div className="menu-pages">
        <img src={images.p3} alt="page-1" />
      </div>
      <div className="menu-pages">
        <img src={images.p4} alt="page-1" />
      </div>
      <div className="menu-pages">
        <img src={images.p5} alt="page-1" />
      </div>
      <div className="menu-pages">
        <img src={images.p6} alt="page-1" />
      </div>
    </div>
    <div className="actions">
      <Link to="/" className="custom__button">
        Home Page
      </Link>
      <Link to="/reservation" className="custom__button">
        Book A Table
      </Link>
    </div>
  </div>
);

export default SpecialMenu;
