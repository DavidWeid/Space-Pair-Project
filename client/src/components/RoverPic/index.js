import React from "react";
import "./style.css";

const RoverPic = props => {
  return (
    <div className="picBody">
      <img src={props.photo.img_src} alt="roverPic"/>
      <div className="infoBox">
        <p>Rover: {props.photo.rover.name}</p>
        <p>Camera: {props.photo.camera.name}</p>
        <p className="camFullName">{props.photo.camera.full_name}</p>
        <p>Sol: {props.photo.sol}</p>
        <p>Earth Day: {props.photo.earth_date}</p>
        <a href={props.photo.img_src} target="_blank">Full Pic</a>
      </div>
      <div className="imgButtonArea">
      
      </div>
    </div>
  )
}

export default RoverPic;

// (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0:
// camera:
// full_name: "Front Hazard Avoidance Camera"
// id: 14
// name: "FHAZ"
// rover_id: 6
// __proto__: Object
// earth_date: "2004-02-06"
// id: 119046
// img_src: "http://mars.nasa.gov/mer/gallery/all/1/f/012/1F129255647EFF0242P1140L0M1-BR.JPG"
// rover:
// cameras: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// id: 6
// landing_date: "2004-01-25"
// launch_date: "2003-07-07"
// max_date: "2018-06-11"
// max_sol: 5111
// name: "Opportunity"
// status: "active"
// total_photos: 198439
// __proto__: Object
// sol: 12