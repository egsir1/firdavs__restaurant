import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse chef-img">
      <img src={images.chefFinal} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            A recipe has no soul.the cook must bring the soul to the recipe.
          </p>
        </div>
        <p className="p__opensans">
          Good food doesn’t need to be complicated. <br /> <br /> Get the best
          or nothing at all.
        </p>
      </div>

      <div className="app__chef-sign">
        <p className="sign">Makhmud H</p>
        <p className="p__opensans"> Chef & Baker</p>
        <img src={images.signature} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
