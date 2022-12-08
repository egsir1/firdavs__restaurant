import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

import images from "../../constants/images";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <h1 className="mobile-logo">FIRDAVS </h1>
        </Link>
        <img src={images.fir} alt="App logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <NavLink activeClassName="activeLink" to="/">
            Home
          </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink activeClassName="activeLink" to="/about">
            About
          </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink activeClassName="activeLink" to="/menu">
            Menu
          </NavLink>
        </li>

        <li className="p__opensans">
          <NavLink activeClassName="activeLink" to="/faqs">
            FAQs
          </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink activeClassName="activeLink" to="/comments">
            Feedback
          </NavLink>
        </li>
      </ul>
      <div className="app__navbar-login">
        <NavLink
          activeClassName="activeLink"
          to="/login"
          className="p__opensans"
        >
          Log In / Register
        </NavLink>
        <div />
        <NavLink
          activeClassName="activeLink"
          to="/reservation"
          className="p__opensans"
        >
          Reservation
        </NavLink>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <NavLink
                  activeClassName="activeLink"
                  to="/"
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className="p__opensans">
                <NavLink
                  activeClassName="activeLink"
                  to="/about"
                  onClick={() => setToggleMenu(false)}
                >
                  About
                </NavLink>
              </li>
              <li className="p__opensans">
                <NavLink
                  activeClassName="activeLink"
                  to="/menu"
                  onClick={() => setToggleMenu(false)}
                >
                  Menu
                </NavLink>
              </li>
              <li className="p__opensans">
                <NavLink
                  activeClassName="activeLink"
                  to="/reservation"
                  onClick={() => setToggleMenu(false)}
                >
                  Reservation
                </NavLink>
              </li>

              <li className="p__opensans">
                <NavLink
                  activeClassName="activeLink"
                  to="/faqs"
                  onClick={() => setToggleMenu(false)}
                >
                  FAQs
                </NavLink>
              </li>
              <li className="p__opensans">
                <NavLink
                  activeClassName="activeLink"
                  to="/comments"
                  onClick={() => setToggleMenu(false)}
                >
                  Feedback
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
      <img className="halal" src={images.halal6} alt="halal brand" />
    </nav>
  );
};

export default Navbar;
