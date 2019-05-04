import React from "react";
import "./style.css";

const RoverPicSelect = props => {
  return (
    <div className="roverSelectBox">
      <img src={props.img} alt="rover" />
      <div className="roverSelectInfo">
        <h2>Rover: <span className="capital">{props.rover}</span></h2>
        <h5>Sol: {props.sol}</h5>
        <h5>Camera: {props.camera}</h5>
        <div className="roverModalButtons">
          <button
            className="roverSelectBtn"
            data-type="roverPic"
            data-rover_name={props.rover}
            data-rover_img={props.img}
            data-rover_camera={props.camera}
            data-rover_sol={props.sol}
            data-rover_earth_date={props.earth_date}
            onClick={(e) => props.handleSaveButton(e)}
          >Save</button>
          <button
            className="roverSelectBtn"
            data-type="roverPic"
            data-rover_name={props.rover}
            data-rover_img={props.img}
            data-rover_camera={props.camera}
            data-rover_sol={props.sol}
            data-rover_earth_date={props.earth_date}
          // onClick={(e) => props.handleSaveButton(e)}
          >Share</button>
          <button
            className="roverSelectBtn"
            onClick={(e) => props.showModal(e)}>Back</button>
        </div>
      </div>

    </div>
  )
}

export default RoverPicSelect;