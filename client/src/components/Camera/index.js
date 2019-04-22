import React from "react";
import "./style.css";

const Camera = props => {
  return (
    <div className="cameraSection">

      {props.rover ? <div>
        <p className="camTitle">Select Camera</p>
        {props.rover === "curiosity" ? <div>
          <div>
            <div className="cameraButtons">
              <button
                className={props.camera === "fhaz" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="fhaz">
                FHAZ
            </button>
              <button
                className={props.camera === "rhaz" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="rhaz">
                RHAZ
            </button>
              <button
                className={props.camera === "navcam" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="navcam">
                NAVCAM
            </button>

              <button
                className={props.camera === "mast" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="mast">
                MAST
            </button>
              <button
                className={props.camera === "chemcam" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="chemcam">
                CHEMCAM
            </button>

              <button
                className={props.camera === "mahli" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="mahli">
                MAHLI
            </button>
              <button
                className={props.camera === "mardi" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="mardi">
                MARDI
            </button>
              <button
                className={props.camera === "all" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="all">
                ALL
            </button>
            
            </div>
          </div>
        </div> : <div>
            <div className="cameraButtons">
              <button
                className={props.camera === "fhaz" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="fhaz">
                FHAZ
              </button>
              <button
                className={props.camera === "rhaz" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="rhaz">
                RHAZ
              </button>
              <button
                className={props.camera === "navcam" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="navcam">
                NAVCAM
              </button>

              <button
                className={props.camera === "pancam" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="pancam">
                PANCAM
              </button>
              <button
                className={props.camera === "minites" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="minites">
                MINITES
              </button>
              <button
                className={props.camera === "all" ? "activeCam camBtn" : "camBtn"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="all">
                ALL
              </button>
            </div>
          </div>}
      </div> : <div></div>}
    </div>
  )
}

export default Camera;

// S&O = FHAZ RHAZ NAVCAM PANCAM MINITES

// CUR =  FHAZ RHAZ NAVCAM MAST CHEMCAM MAHLI MARDI