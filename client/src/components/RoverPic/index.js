import React from "react";
import "./style.css";

const RoverPic = props => {
  return (
    <div className="picBody">
      <img src={props.photo.img_src} alt="roverPic" />
      <div className="infoBox">
        <p>Camera: {props.photo.camera.name}</p>
        <p>Earth Day: {props.photo.earth_date}</p>
        <div className="roverPicButtons">
          <button
            className="roverPicBtn"
            data-type="roverPic"
            data-rover_name={props.photo.rover.name}
            data-rover_img={props.photo.img_src}
            data-rover_camera={props.photo.camera.name}
            data-rover_sol={props.photo.sol}
            data-rover_earth_date={props.photo.earth_date}
            onClick={(e) => props.handleSaveButton(e)}
          >Save
        </button>
          <button
            className="roverPicBtn"
            data-img={props.photo.img_src}
            data-camera={props.photo.camera.name}
            onClick={(e) => props.showModal(e)}
          >More Info
        </button>
        </div>
      </div>
    </div >
  )
}

export default RoverPic;