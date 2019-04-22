import React from "react";
import "./style.css";
import { Button, ButtonGroup } from "reactstrap";

const Camera = props => {
  return (
    <div className="cameraSection">
      {props.rover ? <div>
        {props.rover === "curiosity" ? <div>
          <ButtonGroup className="cameraButtons">
            <Button
              color={props.camera === "rhaz" ? "warning" : "dark"}
              onClick={(e) => props.selectCamera(e)}
              data-camera="rhaz">
              RHAZ
            </Button>
            <Button
              color={props.camera === "fhaz" ? "warning" : "dark"}
              onClick={(e) => props.selectCamera(e)}
              data-camera="fhaz">
              FHAZ
            </Button>
            <Button
              color={props.camera === "navcam" ? "warning" : "dark"}
              onClick={(e) => props.selectCamera(e)}
              data-camera="navcam">
              NAVCAM
            </Button>

            <Button
              color={props.camera === "mast" ? "warning" : "dark"}
              onClick={(e) => props.selectCamera(e)}
              data-camera="mast">
              MAST
            </Button>
            <Button
              color={props.camera === "chemcam" ? "warning" : "dark"}
              onClick={(e) => props.selectCamera(e)}
              data-camera="chemcam">
              CHEMCAM
            </Button>

            <Button
              color={props.camera === "mahli" ? "warning" : "dark"}
              onClick={(e) => props.selectCamera(e)}
              data-camera="mahli">
              MAHLI
            </Button>
            <Button
              color={props.camera === "mardi" ? "warning" : "dark"}
              onClick={(e) => props.selectCamera(e)}
              data-camera="mardi">
              MARDI
            </Button>
            <Button
              color={props.camera === "all" ? "warning" : "dark"}
              onClick={(e) => props.selectCamera(e)}
              data-camera="all">
              ALL
            </Button>
          </ButtonGroup>
        </div> : <div>
            <ButtonGroup className="cameraButtons">
              <Button
                color={props.camera === "rhaz" ? "warning" : "dark"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="rhaz">
                RHAZ
              </Button>
              <Button
                color={props.camera === "fhaz" ? "warning" : "dark"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="fhaz">
                FHAZ
              </Button>
              <Button
                color={props.camera === "navcam" ? "warning" : "dark"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="navcam">
                NAVCAM
              </Button>

              <Button
                color={props.camera === "pancam" ? "warning" : "dark"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="pancam">
                PANCAM
              </Button>
              <Button
                color={props.camera === "minites" ? "warning" : "dark"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="minites">
                MINITES
              </Button>
              <Button
                color={props.camera === "all" ? "warning" : "dark"}
                onClick={(e) => props.selectCamera(e)}
                data-camera="all">
                ALL
              </Button>
            </ButtonGroup>
          </div>}
      </div> : <div></div>}
    </div>
  )
}

export default Camera;

// S&O = FHAZ RHAZ NAVCAM PANCAM MINITES

// CUR =  FHAZ RHAZ NAVCAM MAST CHEMCAM MAHLI MARDI