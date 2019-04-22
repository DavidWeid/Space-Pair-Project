import React from "react";
import "./banner.css";

const Banner = props => (
  <div
    className="banner-image"
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props.backgroundImage})` }}
  >
    <div className="banner-text">{props.children}</div>
  </div>
);

export default Banner;
