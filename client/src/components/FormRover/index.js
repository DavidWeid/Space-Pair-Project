import React from "react";
import { Button, ButtonGroup, Form, FormGroup, Label, Input, Col } from "reactstrap";
import "./style.css";
import Camera from "../Camera";

const FormRover = props => {


  return (
    <div className="formRover">
      <Form>
        <div className="roverSelectButtons">
          <button
            onClick={(e) => {
              props.selectRover(e)
            }}
            data-rover="spirit"
            className={props.rover === "spirit" ? "activeRover roverBtn" : "roverBtn"}>
            Spirit
          </button>
          <button
            onClick={(e) => {
              props.selectRover(e)
            }}
            data-rover="opportunity"
            className={props.rover === "opportunity" ? "activeRover roverBtn" : "roverBtn"}>
            Opportunity
          </button>
          <button
            onClick={(e) => {
              props.selectRover(e)
            }}
            data-rover="curiosity"
            className={props.rover === "curiosity" ? "activeRover roverBtn" : "roverBtn"}>
            Curiosity
          </button>
        </div>
        <Camera camera={props.camera} rover={props.rover} selectCamera={props.selectCamera} />
        {props.camera ? (
          <div className="solGroup">
            <label>Sol</label>
            <input type="number" className="solInput" onChange={(e) => props.selectSolDay(e)} value={props.sol}/>
          </div>
        ) : (
            <div></div>
          )}
        {props.sol ? (<div>
          <button 
            className="searchBtn" 
            onClick={(e) => props.getPhotos(e)}
            data-rover={props.rover}
            data-sol={props.sol}
            data-camera={props.camera}
            >Search</button>
        </div>) : (<div></div>)}
      </Form>
    </div>
  )
}

export default FormRover;