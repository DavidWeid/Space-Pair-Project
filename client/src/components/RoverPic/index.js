import React from "react";
import "./style.css";

const RoverPic = props => {
  return (
    <div className="picBody">
      <img src={props.photo.img_src} alt="roverPic" />
      <div className="infoBox">
        <div className="centerBox">
          <p>Camera: {props.photo.camera.name}</p>
          <p>Earth Day: {props.photo.earth_date}</p>
        </div>

        <div className="roverPicButtons">
          <button
            className="roverPicBtn"
            data-type="roverPic"
            data-name={props.photo.rover.name}
            data-img={props.photo.img_src}
            data-camera={props.photo.camera.name}
            data-sol={props.photo.sol}
            data-earth_date={props.photo.earth_date}
            onClick={(e) => props.handleSaveButton(e)}
          >Save
          </button>
          <button
            className="roverPicBtn"
            data-type="roverPic"
            data-name={props.photo.rover.name}
            data-img={props.photo.img_src}
            data-camera={props.photo.camera.name}
            data-sol={props.photo.sol}
            data-earth_date={props.photo.earth_date}
            onClick={(e) => props.handleShareButton(e)}
          >Share
          </button>
          <button
            className="roverPicBtn"
            data-type="roverPic"
            data-name={props.photo.rover.name}
            data-img={props.photo.img_src}
            data-camera={props.photo.camera.name}
            data-sol={props.photo.sol}
            data-earth_date={props.photo.earth_date}
            onClick={(e) => props.showModal(e)}
          >More Info
          </button>
        </div>
      </div>
    </div >
  )
}

export default RoverPic;