import React from "react";
import "./style.css";
import { Button, ButtonGroup } from "reactstrap";

const Camera = props => {
  return (
    <div className="cameraSection">
      {props.rover ? <div>
        {props.rover === "curiosity" ? <div>
          <ButtonGroup>
            <Button></Button>
          </ButtonGroup>
        </div> : <div>

          </div>}
      </div> : <div></div>}
    </div>
  )
}

export default Camera;

// S&O = FHAZ RHAZ NAVCAM PANCAM MINITES

// CUR =  FHAZ RHAZ NAVCAM MAST CHEMCAM MAHLI MARDI