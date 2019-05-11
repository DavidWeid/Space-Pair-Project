import React from "react";
import "./style.css";

const RoverPicSelect = props => {
  return (
    <div className="roverSelectBox">
      <img src={props.img} alt="rover" />
      <div className={props.share ? "roverSelectInfoShared" : "roverSelectInfo"}>
        <div className="topBox" style={props.share ? { order: "1" } : { order: "2" }}>
          <h5><span className="capital">{props.rover}</span></h5>
          <h5>Sol: {props.sol}</h5>
          <h5>Camera: {props.camera}</h5>
          <a href={props.img} target="_blank" rel="noopener noreferrer">Full Pic</a>
        </div>
        {props.share ? (
          <div className="shareBox" style={props.share ? { order: "2" } : { order: "4" }}>
            <textarea onChange={(e) => props.handleCommentChange(e)} className="shareText" placeholder="Comment" />
          </div>
        ) : (
            <div className="spaceTaker2000" style={props.share ? { order: "4" } : { order: "1" }}>

            </div>)}
        <button
          className="roverSelectBtn"
          style={props.share ? { order: "3" } : { order: "3" }}
          onClick={(e) => props.showModal(e)}
        >Back
        </button>
      </div>

    </div>
  )
}

export default RoverPicSelect;