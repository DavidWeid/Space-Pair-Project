import React from "react";
import "./style.css";

const BruceBanner = props => (
    <div
      className="banner-image-bruce"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${
          props.backgroundImage
        })`
      }}
    />
);

export default BruceBanner;
