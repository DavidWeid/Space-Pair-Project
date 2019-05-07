import React from "react";
import "./style.css";

const RoverPicSelect = props => {
  return (
    <div className="roverSelectBox">
      <img src={props.img} alt="rover" />
      <div className="roverSelectInfo">
        <div className="topBox">
          <h3><span className="capital">{props.rover}</span></h3>
          <div>
            <h5>Sol: {props.sol}</h5>
            <h5>Camera: {props.camera}</h5>
          </div>
        </div>
        {props.share ? (<div className="shareBox">
          <textarea onChange={(e) => props.handleCommentChange(e)} className="shareText" />
        </div>) : (<div>

        </div>)}
        <div className="roverModalButtons">



          {props.share ? (
            <button
              className="roverSelectBtn"
              data-type="roverPic"
              data-name={props.rover}
              data-img={props.img}
              data-camera={props.camera}
              data-sol={props.sol}
              data-earth_date={props.earth_date}
              onClick={(e) => props.handleShareSave(e)}
            >Share
          </button>
          ) : (
              <button
                className="roverSelectBtn"
                data-type="roverPic"
                data-name={props.rover}
                data-img={props.img}
                data-camera={props.camera}
                data-sol={props.sol}
                data-earth_date={props.earth_date}
                onClick={(e) => props.handleSaveButton(e)}
              >Save
          </button>)}


          <button
            className="roverSelectBtn"
            onClick={(e) => props.showModal(e)}
          >Back
          </button>
        </div>
      </div>

    </div>
  )
}

export default RoverPicSelect;