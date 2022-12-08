import React from "react";
import "./Faqs.css";
import { images } from "../../constants";

const Faqs = () => {
  return (
    <div className="faqs_main">
      <div className="faqs_title">
        <h1 className=" faqs-h1 headtext__cormorant">FAQs</h1>
      </div>
      <div className="faqs-img">
        <img src={images.faq2} alt="faqs" />
      </div>
      <div className="faqs_questions">
        <h3>1. How many years has the restaurant been open?</h3>
        <p>
          {" "}
          The restaurant was originally established in 2018 in inner city <br />
          neighborhood and then relocated to the current location in 2020.
        </p>
        <h3>2. What is the most famous food in here?</h3>
        <p>
          Regarding soup meals, 'Marrowbone soup' takes the lead and as for meat
          <br />
          staff roasted chicken and steaked lamb are astonishingly popular
        </p>
        <h3>3. What food is highly prefered by korean customers?</h3>
        <p>
          Noodles (lagmon), dumplings (manti), and somsa are mostly consumed by
          <br />
          indegenious koreans
        </p>
        <h3>4. Last order time to eat inside? </h3>
        <p>
          Usually, the very last order can be received by 21:30 for dining in
          <br />
          but only take-aways are available after 22:00 and we do our best to
          <br />
          serve until 22:30 ~23:00
        </p>
        <h3>
          5. Can we make a reservation for big gatherings like birthday parties?
        </h3>
        <p>
          Generally, birthday parties are not allowed to celebrate in our <br />
          restaurant but other special ceremonies like graduation party <br />
          reservation can be possible, however, singing or dancing is forbidden
          <br />
          for religius reasons
        </p>
        <h3>6. Do we have a delivery service?</h3>
        <p>
          Although we currently do not offer this service, we are working on it
          <br />
          and negotiating to make a contract with food delivery platforms. We
          <br />
          will announce it on our news section as soon as it is launched. Stay
          tuned!
        </p>
      </div>
    </div>
  );
};

export default Faqs;
