import React, { Component } from "react";
import "./style.css";

class RoverPic extends Component {
  componentDidMount() {

  }

  render() {

    const filterSavedImg = this.props.userSavedArray.filter(each => each === this.props.photo.img_src);
    const filterSharedImg = this.props.userSharedArray.filter(each => each === this.props.photo.img_src);
    const showSaved = filterSavedImg.length < 1 ? true : false;
    const showShared = filterSharedImg.length < 1 ? true : false;
    const both = showSaved === true && showShared === true ? true : false;

    console.log(showSaved, showShared, both)

    return (
      <div className="picBody">
        <img src={this.props.photo.img_src} alt="roverPic" />
        <div className="infoBox">
          <div className="centerBox">
            <p>Camera: {this.props.photo.camera.name}</p>
            <p>Earth Day: {this.props.photo.earth_date}</p>
          </div>

          <div className="roverPicButtons">
            {/* {console.log(this.props.userImgArray.filter(each => each === this.props.photo.img_src).length)} */}
            {showSaved ?
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
              :
              <div></div>
            }
            {showShared ?
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
              :
              <div></div>
            }
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

