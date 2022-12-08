import React from "react";

import "./Footer.css";
import { FooterOverlay } from "../../components";
import { FiInstagram } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { images } from "../../constants";
const year = new Date().getFullYear();

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">전주시 덕진구 백제대로 608</p>
        <p className="p__opensans">010-3238-2555</p>
      </div>
      <div className="app__footer-links_logo">
        <h1 className="headtext">FIRDAVS</h1>
        <p className="p__opensans">
          "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
          Others."
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a href="https://t.me/Firdavs_restaurant1" rel="noopener noreferrer">
            <FaTelegram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/firdavsrestaurant?igshid=YmMyMTA2M2Y="
          >
            <FiInstagram />
          </a>
          <a
            href="https://maps.app.goo.gl/KfggUUGjGEhSSrPe9?g_st=it"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiMap />
          </a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Sunday:</p>
        <p className="p__opensans">10:00 am -10:30 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">{year} Firdavs. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
