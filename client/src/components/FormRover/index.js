import React from "react";
import { Button, ButtonGroup, Form, FormGroup, Label, Input } from "reactstrap";
import "./style.css";
import Camera from "../Camera";

const FormRover = props => {


  return (
    <div className="formRover">
      <Form>
        <ButtonGroup>
          <Button
            onClick={(e) => {
              props.selectRover(e)
            }}
            data-rover="spirit"
            color={props.rover === "spirit" ? "warning" : "dark"}>
            Spirit
          </Button>
          <Button
            onClick={(e) => {
              props.selectRover(e)
            }}
            data-rover="opportunity"
            color={props.rover === "opportunity" ? "warning" : "dark"}>
            Opportunity
          </Button>
          <Button
            onClick={(e) => {
              props.selectRover(e)
            }}
            data-rover="curiosity"
            color={props.rover === "curiosity" ? "warning" : "dark"}>
            Curiosity
          </Button>
        </ButtonGroup>
        <Camera camera={props.camera} rover={props.rover}/>
      </Form>
    </div>
  )
}

export default FormRover;