import React, { Component } from "react";
import "./style.css";

class RoverPic extends Component {
  componentDidMount() {

  }

  render() {

    const filterImg = this.props.userImgArray.filter(each => each === this.props.photo.img_src);
    const show = filterImg.length < 1 ? true : false
    console.log(show)

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
            {show ?
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
              :
              <div>
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
            }
          </div>
        </div>
      </div >
    )
  }
}

export default RoverPic;

