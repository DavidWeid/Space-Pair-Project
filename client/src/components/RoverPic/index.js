import React, { Component } from "react";
import "./style.css";

class RoverPic extends Component {


  render() {
    return (
      <div className="picBody">
        <img src={this.props.photo.img_src} alt="roverPic" />
        <div className="infoBox">
          <div className="centerBox">
            <p>Camera: {this.props.photo.camera.name}</p>
            <p>Earth Day: {this.props.photo.earth_date}</p>
          </div>

          <div className="roverPicButtons">
            {console.log(this.props.userImgArray.filter(each => each === this.props.photo.img_src).length)}
            {this.props.userImgArray.filter(each => each === this.props.photo.imr_src).length < 1 ? (
              <div>
                <button
                  className="roverPicBtn"
                  data-type="roverPic"
                  data-name={this.props.photo.rover.name}
                  data-img={this.props.photo.img_src}
                  data-camera={this.props.photo.camera.name}
                  data-sol={this.props.photo.sol}
                  data-earth_date={this.props.photo.earth_date}
                  onClick={(e) => this.props.handleSaveButton(e)}
                >Save
                </button>
                <button
                  className="roverPicBtn"
                  data-type="roverPic"
                  data-name={this.props.photo.rover.name}
                  data-img={this.props.photo.img_src}
                  data-camera={this.props.photo.camera.name}
                  data-sol={this.props.photo.sol}
                  data-earth_date={this.props.photo.earth_date}
                  onClick={(e) => this.props.handleShareButton(e)}
                >Share
                </button>
              </div>
            ) : (
                <div>This should not be anything</div>
              )}

            <button
              className="roverPicBtn"
              data-type="roverPic"
              data-name={this.props.photo.rover.name}
              data-img={this.props.photo.img_src}
              data-camera={this.props.photo.camera.name}
              data-sol={this.props.photo.sol}
              data-earth_date={this.props.photo.earth_date}
              onClick={(e) => this.props.showModal(e)}
            >More Info
            </button>
          </div>
        </div>
      </div >
    )
  }
}

export default RoverPic;

