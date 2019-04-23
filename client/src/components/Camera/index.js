import React from "react";
import "./style.css";

const Camera = props => {
  // console.log(props.cameras_manifest)
  return (
    <div className="cameraSection">

      {props.cameras_manifest.length > 0 ? <div>
        <p className="camTitle">Select Camera</p>
        <div className="cameraButtons">
          <button
            data-camera="all"
            onClick={(e) => props.selectCamera(e)}
            className={props.camera === "all" ? "activeCam camBtn" : "camBtn"}>
            All
          </button>
          {props.cameras_manifest.map(cam => (
            <button
              data-camera={cam}
              onClick={(e) => props.selectCamera(e)}
              key={cam}
              className={props.camera === cam ? "activeCam camBtn" : "camBtn"}>
              {cam}
            </button>
          ))}
        </div>

      </div> : <div></div>}

    </div>
  )
}

export default Camera;
