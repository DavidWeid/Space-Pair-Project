import React from "react";
import "./style.css";

const RoverPic = props => {
  return (
    <div className="picBody">
      <img src={props.photo.img_src} alt="roverPic"/>
      <div className="infoBox">
        <p>Rover: {props.photo.rover.name}</p>
        <p>Camera: {props.photo.camera.name}</p>
        <p>Sol: {props.photo.sol}</p>
        <p>Earth Day: {props.photo.earth_date}</p>
        <a href={props.photo.img_src} rel="noopener noreferrer" target="_blank">Full Pic</a>
      </div>
    </div>
  )
}

export default RoverPic;