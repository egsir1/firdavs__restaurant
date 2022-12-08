import React, { useRef } from "react";

import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const imageGal = [
  images.osh,
  images.kav,
  images.golupsi,
  images.assorti,
  images.bish,
];
const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className=" app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "AAA", marginTop: "2rem" }}>
          Each day new Taste! To stay tuned check our intagram page where "Meal
          of the day" uploaded daily!
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/firdavsrestaurant?igshid=YmMyMTA2M2Y="
          className="custom__button"
        >
          View More
        </a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imageGal.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={index + 1}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/firdavsrestaurant?igshid=YmMyMTA2M2Y="
              >
                <img src={image} alt="gallery" />
              </a>
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
